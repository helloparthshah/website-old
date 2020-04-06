'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "68c4092502a38c682a867c651bed654e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/lib/assets/img1.png": "6a4988791b77956f8c3ad7ece6210844",
"assets/lib/assets/img2.png": "f1687a82abd0b46cb91271e40affcafa",
"assets/LICENSE": "570c5610600b4be41d90a7225a98a886",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "076cabec5b93e24cf5d8ac4a4dd46aed",
"/": "076cabec5b93e24cf5d8ac4a4dd46aed",
"main.dart.js": "63f672fe1f27d5e9105776a42f41a9a7",
"manifest.json": "98d00924fd17787c43338f0aaebdc478",
"page.html": "9771065773a92c03af27b06843d1cf83"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
