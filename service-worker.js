const CACHE_NAME = 'CR2-Stock-Take-cache-v1.4';
const urlsToCache = [
    '/CR2-Stock-Take/',
    '/CR2-Stock-Take/index.html',
    '/CR2-Stock-Take/app.js',
    '/CR2-Stock-Take/manifest.json',
    '/CR2-Stock-Take/icons/CR2icon-192x192.png',
    '/CR2-Stock-Take/icons/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
