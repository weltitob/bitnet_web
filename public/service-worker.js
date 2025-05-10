// Service worker for BitNet website
const CACHE_NAME = 'bitnet-cache-v1';

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

// Fetch event - Cache first with network fallback strategy
self.addEventListener('fetch', event => {
  // Skip non-GET requests and non-HTTP/HTTPS URLs
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  // Skip API calls and analytics requests
  if (event.request.url.includes('/api/') || 
      event.request.url.includes('google-analytics.com') ||
      event.request.url.includes('analytics') ||
      event.request.url.includes('firebase')) {
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
            // Optionally return a custom offline page for HTML requests
            if (event.request.headers.get('accept').includes('text/html')) {
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