'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "63e1fb6d7404c2d03c0ef0037be80dbb",
"assets/AssetManifest.bin.json": "3214d0511ad06e33a3291cc96eb51173",
"assets/AssetManifest.json": "ed877845b5249a80fe72a23d9cdb494a",
"assets/assets/auth-image.jpg": "595c7433c940d5be8bf3090c163a0bfe",
"assets/assets/auth-image2.jpg": "50a54c4e5e2dc7fee5fe3de804da8b3d",
"assets/assets/dark/4544854_business_comerce_delivery_shop_truck_icon.png": "2775034bfe7426a28ccb9784dbf0e790",
"assets/assets/dark/category-image-1.png": "fdbb74a133582850208ec1bebfbb68e4",
"assets/assets/dark/category-image-2.png": "b57b1b893d93ddce312e2097b2e9d385",
"assets/assets/dark/category-image-3.png": "67a8d37dd89baf854a3f457f566cf141",
"assets/assets/dark/category-image-4.png": "458e0d29676d34e5eceecad3e127c326",
"assets/assets/dark/category-image-5.png": "7a1efedef832274fc545869b1c6a83e7",
"assets/assets/dark/category-image-6.png": "9745e37675eb6cc7e79efb2203fa43b9",
"assets/assets/dark/category-image-7.png": "705b6bc72ebe6349726a520d6238f0c9",
"assets/assets/dark/category-image-8.png": "6ba36dc819dd85746bf7f22af690e3b2",
"assets/assets/dark/category-image-9.png": "00e033165788da8e36a321af31a40341",
"assets/assets/dark/discord.png": "8952f6b4bb721f50f6e16999effb00ff",
"assets/assets/dark/facebook.png": "0f6cb07e5497ebad102c5223adda177e",
"assets/assets/dark/instagram.png": "6abb846e9c8a6d5807ef832ade33d722",
"assets/assets/dark/mail.png": "d8d1371f2be21695411ab7a335dbcff9",
"assets/assets/dark/telegram.png": "28666205d680c57a979f275ca24f6ee4",
"assets/assets/dark/ticket.png": "8e7aec3410c0ec13ec4da19ce078f3d2",
"assets/assets/dark/twitter.png": "dd5f5387d2d1cb0f6a124dc90517f06f",
"assets/assets/dark/whatsapp.png": "01548fc9acd6dcaaa190aeaa5629d51e",
"assets/assets/dark/youtube.png": "890c433b56eb0382a59d608f818c3343",
"assets/assets/light/category-image-1.png": "a56fead73ca281497be68f6bd5456af0",
"assets/assets/light/category-image-2.png": "8f46895354d19f07461bb880d014b3a1",
"assets/assets/light/category-image-3.png": "cedf1fe6757877501c1211b7ce515435",
"assets/assets/light/category-image-4.png": "22e0d2164669eba176c251dd142263dd",
"assets/assets/light/category-image-5.png": "8d6b7b052ab3ffb2550eb3ffed52e4ea",
"assets/assets/light/category-image-6.png": "40b2f5e0a8130271f56dba074a67b9f5",
"assets/assets/light/category-image-7.png": "ea1f9f6b6e94180047de38aee9279afa",
"assets/assets/light/category-image-8.png": "e067528c5dcd0b498b35382a357a80a4",
"assets/assets/light/category-image-9.png": "6aa98f09229397e64894be457d67108c",
"assets/assets/light/discord.png": "3720684e66db48ac0dcc7c64d8835d28",
"assets/assets/light/facebook.png": "b06cb840dec653c43f6c9dda9befc58e",
"assets/assets/light/instagram.png": "4b90b4e7e777ae74a2fcbbd3606c4bbb",
"assets/assets/light/mail.png": "6ba32a29c0dde7b5aa8d1ade7e784f24",
"assets/assets/light/output-onlinepngtools%2520(5).png": "29bef649a4d7097296ccdb9f64f75a37",
"assets/assets/light/telegram.png": "7850ff062ea216bbd4df4f2afa074180",
"assets/assets/light/ticket.png": "7fdbc3451b85cfeb91e3f274b14387ba",
"assets/assets/light/twitter.png": "5251a4dbad35f37b4d272767b2ec80d3",
"assets/assets/light/whatsapp.png": "04c97c54543311c2cb0053f919ab9fec",
"assets/assets/light/youtube.png": "9c27f6e8a19df1f6508341d0d0545417",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/fonts/MaterialIcons-Regular.otf": "82f2b96fbd28470263c8776f30c49fdb",
"assets/NOTICES": "d37b6abb972bc69ef574a544467b9d55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "41bf78923cdfa62620c19165133c78f4",
"favicons.png": "874a31a6d09735b86370301c020e3760",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1e636ec4d0cebab989201168395b3f97",
"icons/Icon-192.png": "87e127691c79e81ca576a27fdc3b5b18",
"icons/Icon-512.png": "df8703f7c13de8874b0797eca9485750",
"icons/Icon-maskable-192.png": "87e127691c79e81ca576a27fdc3b5b18",
"icons/Icon-maskable-512.png": "df8703f7c13de8874b0797eca9485750",
"index.html": "969330c5e33fc10eda9df59f603466f8",
"/": "969330c5e33fc10eda9df59f603466f8",
"main.dart.js": "59e13d18649ab243474057f5fab31e2f",
"manifest.json": "28a9ef8a36d8c5fc87d16f38750137a5",
"version.json": "98cc924b54bde0547ca687cd63aef862"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
