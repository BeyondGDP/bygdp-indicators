importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const {registerRoute, setDefaultHandler} = workbox.routing;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
const {precacheAndRoute} = workbox.precaching;
const {offlineFallback} = workbox.recipes;

const {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst,
    NetworkOnly,
} = workbox.strategies;
const cacheName = 'install-cache';
setDefaultHandler(new NetworkOnly());
offlineFallback();


// Precache the indicator/goal pages.
self.addEventListener('install', (event) => {
  const populateCache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(["/bygdp-indicators/1/","/bygdp-indicators/2/","/bygdp-indicators/3/","/bygdp-indicators/4/","/bygdp-indicators/en/1/","/bygdp-indicators/en/2/","/bygdp-indicators/en/3/","/bygdp-indicators/en/4/"]);
    await cache.addAll(["/bygdp-indicators/1-2/","/bygdp-indicators/2-4-2/","/bygdp-indicators/2-7-1/","/bygdp-indicators/1-3/","/bygdp-indicators/4-4-1/","/bygdp-indicators/4-1-1/","/bygdp-indicators/1-2-1/","/bygdp-indicators/2-2-2/","/bygdp-indicators/1-1-1/","/bygdp-indicators/2-3-2/","/bygdp-indicators/3-5-1/","/bygdp-indicators/3-6-1/","/bygdp-indicators/2-1-3/","/bygdp-indicators/1-3-2/","/bygdp-indicators/2-4-1/","/bygdp-indicators/1-3-1/","/bygdp-indicators/4-5-1/","/bygdp-indicators/4-2-1/","/bygdp-indicators/4-3-1/","/bygdp-indicators/2-6-1/","/bygdp-indicators/1-2-2/","/bygdp-indicators/2-1/","/bygdp-indicators/2-8-2/","/bygdp-indicators/3-4-1/","/bygdp-indicators/1-1/","/bygdp-indicators/2-3-1/","/bygdp-indicators/2-1-1/","/bygdp-indicators/3-1-1/","/bygdp-indicators/2-1-2/","/bygdp-indicators/2-8-1/","/bygdp-indicators/4-2-2/","/bygdp-indicators/2-5-1/","/bygdp-indicators/3-3-1/","/bygdp-indicators/3-2-1/","/bygdp-indicators/2-2-1/","/bygdp-indicators/en/1-2/","/bygdp-indicators/en/2-4-2/","/bygdp-indicators/en/2-7-1/","/bygdp-indicators/en/1-3/","/bygdp-indicators/en/4-4-1/","/bygdp-indicators/en/4-1-1/","/bygdp-indicators/en/1-2-1/","/bygdp-indicators/en/2-2-2/","/bygdp-indicators/en/1-1-1/","/bygdp-indicators/en/2-3-2/","/bygdp-indicators/en/3-5-1/","/bygdp-indicators/en/3-6-1/","/bygdp-indicators/en/2-1-3/","/bygdp-indicators/en/1-3-2/","/bygdp-indicators/en/2-4-1/","/bygdp-indicators/en/1-3-1/","/bygdp-indicators/en/4-5-1/","/bygdp-indicators/en/4-2-1/","/bygdp-indicators/en/4-3-1/","/bygdp-indicators/en/2-6-1/","/bygdp-indicators/en/1-2-2/","/bygdp-indicators/en/2-1/","/bygdp-indicators/en/2-8-2/","/bygdp-indicators/en/3-4-1/","/bygdp-indicators/en/1-1/","/bygdp-indicators/en/2-3-1/","/bygdp-indicators/en/2-1-1/","/bygdp-indicators/en/3-1-1/","/bygdp-indicators/en/2-1-2/","/bygdp-indicators/en/2-8-1/","/bygdp-indicators/en/4-2-2/","/bygdp-indicators/en/2-5-1/","/bygdp-indicators/en/3-3-1/","/bygdp-indicators/en/3-2-1/","/bygdp-indicators/en/2-2-1/"]);
    await cache.addAll(["https://beyondgdp.github.io/bygdp-data/de/comb/1-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-4-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-7-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-3.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-4-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-2-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-3-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-5-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-6-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-1-3.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-3-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-4-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-3-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-5-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-3-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-6-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-2-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-8-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-4-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-3-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-1-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-8-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-2-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-5-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-3-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-4-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-7-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-3.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-4-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-2-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-3-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-5-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-6-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-1-3.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-3-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-4-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-3-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-5-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-3-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-6-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-2-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-8-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-4-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-3-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-1-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-1-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-8-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/4-2-2.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-5-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-3-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/3-2-1.json","https://beyondgdp.github.io/bygdp-data/de/comb/2-2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-4-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-7-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-3.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-4-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-2-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-3-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-5-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-6-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-1-3.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-3-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-4-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-3-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-5-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-3-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-6-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-2-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-8-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-4-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-3-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-1-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-8-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-2-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-5-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-3-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-4-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-7-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-3.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-4-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-2-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-3-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-5-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-6-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-1-3.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-3-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-4-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-3-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-5-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-3-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-6-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-2-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-8-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-4-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-3-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-1-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-1-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-8-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/4-2-2.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-5-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-3-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/3-2-1.json","https://beyondgdp.github.io/bygdp-data/en/comb/2-2-1.json"]);
  };

  event.waitUntil(populateCache());
});


// Cache page navigations (html) with a Network First strategy
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images/fonts with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => ['image', 'font'].includes(request.destination),
  // Use a Cache First caching strategy
  new CacheFirst({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

// Cache json with a Network First strategy.
registerRoute(
  /.*\.(json|geojson|zip|csv)$/,
  new NetworkFirst({
    cacheName: cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ]
  }),
);
