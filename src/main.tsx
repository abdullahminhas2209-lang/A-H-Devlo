import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

let isHydrated = false;
function hydrateApp() {
  if (isHydrated) return;
  isHydrated = true;

  if (container.hasChildNodes()) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}

if (typeof window !== 'undefined') {
  // Priority 1: Hydrate immediately on any user intent (pointerdown, touchstart, keydown, wheel)
  const userIntentEvents = ['pointerdown', 'touchstart', 'keydown', 'wheel'];
  const onUserIntent = () => {
    userIntentEvents.forEach((ev) => window.removeEventListener(ev, onUserIntent));
    hydrateApp();
  };
  userIntentEvents.forEach((ev) => window.addEventListener(ev, onUserIntent, { passive: true, once: true }));

  // Priority 2: Hydrate during CPU idle period so main thread is never blocked during initial page load
  if ('requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback(
      hydrateApp,
      { timeout: 2500 }
    );
  } else {
    setTimeout(hydrateApp, 300);
  }
} else {
  hydrateApp();
}
