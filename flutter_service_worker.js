'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fdd51ed34dac5b9588188e5717571cb7",
"assets/assets/earth.gif": "f80ce927bec216080660de02ca450266",
"assets/assets/eu.png": "fb8b461ea9a5d7f82fea8b5356d34660",
"assets/assets/eu1.png": "2460721a258bd21e45025047315465a3",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/logos/android.png": "1ae43a725fb48c263cdc1e6b084760d2",
"assets/assets/logos/bootstrap.png": "fadaaecbaa355b362e8ed7231904837b",
"assets/assets/logos/css.png": "2094e3581c3f4029362e7da548a2f478",
"assets/assets/logos/dart.png": "1aef77e06bc23c58240a192da2fb596f",
"assets/assets/logos/firebase.png": "58e6d473926b5879eaa0c2da7e7b0622",
"assets/assets/logos/flutter.png": "f665f82210a707dbba076f5c6dc589ae",
"assets/assets/logos/github.png": "ddf64ec07a8c7b695d704124b8465c99",
"assets/assets/logos/html.png": "3cf553c9da8eb3d21d56ce7e386f9eda",
"assets/assets/logos/ios.png": "bec3f366b2e9f15d445d28580bbe6ee7",
"assets/assets/logos/javascript.png": "dba85593d652fc65a0ba72f448d31206",
"assets/assets/logos/mssql.png": "39a552cb3490aaf5db556889cd764be5",
"assets/assets/logos/mysql.png": "2ed28ffa98f913792942fe86e617553f",
"assets/assets/logos/php.png": "8366f5ce423896878694252af7cc30f2",
"assets/assets/logos/wordpress.png": "db23584942e4fba3d1bc40527a175e18",
"assets/assets/projects/alcoolGasolina.jpg": "18f94ce17f9c3c0cc15623b83185de7f",
"assets/assets/projects/comandas.jpg": "c6c24923b71d1b14a3d6ad39e371252a",
"assets/assets/projects/deckmarker.jpg": "6fb8d011d1e7bb6c29f41d2aa0d3969c",
"assets/assets/projects/devquiz.jpg": "b68254e979db6e4b17044f8c5b299095",
"assets/assets/projects/icone_devquiz.png": "9f364a8b77356236a64a6ee7fbe32d59",
"assets/assets/projects/icon_alcool.png": "8187fc0d7c065b6173ad615b475b0516",
"assets/assets/projects/icon_comandas.png": "c5dffce7d1e217c01ad980d6f92940b5",
"assets/assets/projects/icon_deck.png": "78c790606792e00206c5bdd7262098bb",
"assets/assets/projects/icon_ilocationma.png": "269fb2696448d8999c8652fb55673d22",
"assets/assets/projects/icon_mqtt.png": "6e9be777448c5476cb69f2e909f81d0c",
"assets/assets/projects/icon_payflow.png": "14676ccf829ef84fecc6b9e2df3f4ece",
"assets/assets/projects/icon_qzgpt.png": "54d5bea927f498e5e77d84e5b53fe8a9",
"assets/assets/projects/icon_todowin.jpg": "a81ef5dd7a3b9b8e4f96755d5d626bce",
"assets/assets/projects/icon_tube.png": "5b5e2b99cf307018822d01975776336e",
"assets/assets/projects/ilocationMa.jpg": "8e3fbac6b0e488fd871a4494ab215653",
"assets/assets/projects/mqtt_connect.jpg": "3d0c298436918f5ffe28643885e72ca6",
"assets/assets/projects/payflow.jpg": "5077cefed8ceb9e23560a5e9f53b6762",
"assets/assets/projects/qz_gpt.jpg": "b28b4a9f8bb57508169ad70dc7abf28d",
"assets/assets/projects/todowin.jpg": "991f637e704add9c32f7ae01a1fe2e1b",
"assets/assets/projects/tubeFlutter.jpg": "b9dd62e8bf439b86e7cc7ffd80c57b0a",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a46b03a3c4e061f7bb4e144ceceb8988",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "796a4468ef92db2996b726ef6d343162",
"/": "796a4468ef92db2996b726ef6d343162",
"main.dart.js": "94f112dd2150ac76412c68cd0821ec46",
"manifest.json": "fc7ab5d9dcbef44cc28d01c52d6132b1",
"version.json": "e5360c0840b2676ef1f6987022c564c0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
