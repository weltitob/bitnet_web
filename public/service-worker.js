// Service worker for BitNet website
const CACHE_NAME = 'bitnet-cache-v2'; // Updated cache version

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/earlybird',
  '/fixbitcoin',
  '/aistrategy',
  '/developer-portal',
  '/api',
  '/about',
  '/src/assets/logoclean.webp',
  '/assets/nfts/21_0524221030.glb',
  '/assets/nfts/carot_0524221015.glb',
  '/assets/nfts/lightning.glb',
  '/assets/nfts/logo_bitnet_wb_0524221043.glb',
  '/assets/fallbacks/model-fallback.svg',
  '/assets/mobilephone/chart_up.jpeg',
  '/assets/mobilephone/down.jpeg',
  '/assets/mobilephone/safearea.png'
];

// Install event - cache initial static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting()) // Force service worker to become active
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim()) // Take control of all clients
  );
});

// Fetch event - modified to handle module scripts properly
self.addEventListener('fetch', event => {
  // Skip non-GET requests and non-HTTP/HTTPS URLs
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  // Skip API calls, analytics requests and module scripts
  if (event.request.url.includes('/api/') ||
      event.request.url.includes('google-analytics.com') ||
      event.request.url.includes('analytics') ||
      event.request.url.includes('firebase')) {
    return;
  }

  // Check if this is a request for a JavaScript module
  const isModuleRequest = event.request.destination === 'script' &&
                         (event.request.url.includes('/src/') ||
                          event.request.url.includes('/@vite/') ||
                          event.request.url.includes('/@react-refresh'));

  // Don't intercept module requests in development
  if (isModuleRequest) {
    return;
  }

  // Special handling for routes that should serve the index.html file (SPA routing)
  const url = new URL(event.request.url);
  
  // If it's a navigation request with no file extension, always go to the network first
  if (event.request.mode === 'navigate' && !url.pathname.includes('.')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response or fetch and cache
        if (response) {
          return response;
        }

        // Clone the request - original request can only be used once
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response to cache
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response - it can only be used once
            const responseToCache = response.clone();

            // Cache all successful responses except those containing "no-cache"
            if (!event.request.url.includes('no-cache')) {
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            // Return index.html for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return new Response('Network error', { status: 408, statusText: 'Network error' });
          });
      })
  );
});

// Handle messages from main thread
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});