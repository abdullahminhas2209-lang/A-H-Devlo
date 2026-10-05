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

    // 1. Replace the content inside <div id="root">...</div> with pre-rendered appHtml
    const rootRegex = /<div id="root">[\s\S]*?<\/div>/;
    if (!rootRegex.test(html)) {
      throw new Error('<div id="root"> not found in dist/index.html');
    }
    html = html.replace(rootRegex, `<div id="root">${appHtml}</div>`);

    // 2. Find the built CSS file in dist/assets and inline it into <head> to eliminate render-blocking CSS
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

    // 3. Extract primary entry script and strip eager execution from <head>
    const scriptRegex = /<script\s+type="module"[^>]*src="([^"]+\.js)"[^>]*><\/script>/i;
    const scriptMatch = html.match(scriptRegex);
    let mainScriptSrc = '';
    if (scriptMatch) {
      mainScriptSrc = scriptMatch[1];
      html = html.replace(scriptRegex, '');
      console.log(`[prerender] Deferred main module script: ${mainScriptSrc}`);
    } else {
      console.warn('[prerender] Warning: Could not locate main module script in dist/index.html');
    }

    // 4. Strip render-blocking modulepreload tags from <head> to eliminate main-thread JS parse during initial paint
    const modulepreloadRegex = /<link\s+rel="modulepreload"[^>]*>\s*/gi;
    html = html.replace(modulepreloadRegex, '');
    console.log('[prerender] Stripped eager modulepreload tags from <head>');

    // 5. Add native lightweight IntersectionObserver script so scroll reveals animate before React hydrates
    const revealScript = `<script>
if ('IntersectionObserver' in window) {
  var ro = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.scroll-reveal').forEach(function(el) { ro.observe(el); });
}
</script>`;

    // 6. Add deferred progressive loader with pre-hydration event delegation before </body>
    const loaderScript = `<script>
(function() {
  var scriptSrc = ${JSON.stringify(mainScriptSrc)};
  if (!scriptSrc) return;
  var loaded = false;

  function loadApp() {
    if (loaded) return;
    loaded = true;
    var s = document.createElement('script');
    s.type = 'module';
    s.crossOrigin = 'anonymous';
    s.src = scriptSrc;
    document.body.appendChild(s);
  }

  // Pre-hydration event delegation: intercept user clicks on interactive triggers
  document.addEventListener('click', function(e) {
    if (window.__REACT_HYDRATED__) return;
    var target = e.target;
    if (!target || !target.closest) return;

    var inquiryBtn = target.closest('[data-inquiry]');
    if (inquiryBtn) {
      e.preventDefault();
      var svc = inquiryBtn.getAttribute('data-inquiry') || undefined;
      window.__PENDING_ACTION__ = { type: 'inquiry', service: svc };
      loadApp();
      return;
    }

    var projectCard = target.closest('[data-project-id]');
    if (projectCard) {
      e.preventDefault();
      var pid = projectCard.getAttribute('data-project-id');
      window.__PENDING_ACTION__ = { type: 'project', id: pid };
      loadApp();
      return;
    }

    var legalBtn = target.closest('[data-legal]');
    if (legalBtn) {
      e.preventDefault();
      var ltype = legalBtn.getAttribute('data-legal');
      window.__PENDING_ACTION__ = { type: 'legal', legalType: ltype };
      loadApp();
      return;
    }

    var menuBtn = target.closest('[data-mobile-menu-toggle]');
    if (menuBtn) {
      e.preventDefault();
      window.__PENDING_MENU__ = true;
      loadApp();
      return;
    }
  }, true);

  // Load immediately on any direct user interaction
  var intentEvents = ['pointerdown', 'touchstart', 'keydown', 'wheel'];
  var onIntent = function() {
    intentEvents.forEach(function(evt) {
      window.removeEventListener(evt, onIntent);
    });
    loadApp();
  };
  intentEvents.forEach(function(evt) {
    window.addEventListener(evt, onIntent, { passive: true, once: true });
  });

  // Idle fallback: trigger load when the browser is idle and after initial paint window
  function scheduleIdleLoad() {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(function() {
        setTimeout(loadApp, 2500);
      }, { timeout: 4500 });
    } else {
      setTimeout(loadApp, 3500);
    }
  }

  if (document.readyState === 'complete') {
    scheduleIdleLoad();
  } else {
    window.addEventListener('load', scheduleIdleLoad, { once: true });
  }
})();
</script>`;

    if (!html.includes('var ro = new IntersectionObserver')) {
      html = html.replace('</body>', `${revealScript}\n${loaderScript}\n</body>`);
    }

    fs.writeFileSync(distHtmlPath, html, 'utf-8');
    console.log(`[prerender] Injected ${appHtml.length} bytes of static HTML and deferred loader into dist/index.html!`);
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('[prerender] Failed to pre-render:', err);
  process.exit(1);
});
