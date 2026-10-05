import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';

async function prerender() {
  console.log('[prerender] Starting static HTML pre-rendering...');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const mod = await vite.ssrLoadModule('/src/App.tsx');
    const Component = mod.App || mod.default;
    const appHtml = renderToString(React.createElement(Component));

    const distHtmlPath = path.resolve('dist/index.html');
    if (!fs.existsSync(distHtmlPath)) {
      throw new Error('dist/index.html not found. Run vite build first.');
    }

    let html = fs.readFileSync(distHtmlPath, 'utf-8');

    // Replace the content inside <div id="root">...</div> with pre-rendered appHtml
    const rootRegex = /<div id="root">[\s\S]*?<\/div>/;
    if (!rootRegex.test(html)) {
      throw new Error('<div id="root"> not found in dist/index.html');
    }
    html = html.replace(rootRegex, `<div id="root">${appHtml}</div>`);

    // Find the built CSS file in dist/assets and inline it into <head> to eliminate render-blocking CSS
    const assetsDir = path.resolve('dist/assets');
    const cssFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.css'));
    if (cssFiles.length > 0) {
      const primaryCssFile = cssFiles[0];
      const cssContent = fs.readFileSync(path.join(assetsDir, primaryCssFile), 'utf-8');
      
      // Replace the external stylesheet link with an inlined <style> tag
      const linkCssRegex = new RegExp(`<link rel="stylesheet"[^>]*${primaryCssFile}[^>]*>`);
      if (linkCssRegex.test(html)) {
        html = html.replace(linkCssRegex, `<style>${cssContent}</style>`);
        console.log(`[prerender] Inlined ${cssContent.length} bytes of CSS into <head>!`);
      }
    }

    fs.writeFileSync(distHtmlPath, html, 'utf-8');
    console.log(`[prerender] Injected ${appHtml.length} bytes of static HTML into dist/index.html!`);
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('[prerender] Failed to pre-render:', err);
  process.exit(1);
});
