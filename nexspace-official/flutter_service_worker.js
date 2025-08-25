'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "559f6187a6fc39a50be8df26856c9afd",
".git/config": "ba4a59660d3ff7710733a5da96eb8b89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0bcd895728d497100b5096b750c80419",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "418c62be221519aa487a5ba3aa1cb0a1",
".git/logs/refs/heads/gh-pages": "d23e9658bc089dd9b72e45c539b3f21e",
".git/logs/refs/remotes/origin/gh-pages": "31590a02c04f715e7eb00cfd76858b91",
".git/objects/04/a6e12f115c446492a8bf5157a5806eb61ca4cb": "fc8dd62173cb12acf40f01034c81c8b4",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/0e/e79af88d1b9899ac5251aa2e2157e0e693c654": "bd0dd4d0db9ad1e6b90b1a40ddde9ee4",
".git/objects/13/2506ed0cf4664b3148e273508ba6040e2e77ec": "7a9152e77c02ed9d4db558c2b8224984",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/2b/06dc0aaf694dd847d007f0d0d92352d05e28ad": "63f9f531af93ce8a40ef0640077a8577",
".git/objects/2b/c14c613f02995949a1cfbb6c2f5c106e535c70": "ff0cafc585ba3bdf9a8a846eb0e5ca89",
".git/objects/40/28076cbb5c40d6c64be04a17c6ba0e528ae7d9": "870487b841c3c64a7496dd09f99f4aba",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/0d81e6f6ad44cc5bd177eac32b58ba773f8271": "e1ada12ef956b2e24cda7aea8f70ba11",
".git/objects/57/b3cd035e81083b14a1acef9245b1d242188d1d": "75aa485cb1dcb6955d20b09c860627c6",
".git/objects/6f/2ee702bd9f075761b8a7c82cf5647fd0ed08e3": "6179cbd61c52d53f47f7645bb502a95f",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/5df13191ba9836c0062c63470bc7406d6dc696": "e6ced35a907b4ee5d8e15efd2d9e1f2d",
".git/objects/79/d460f2df32e01667a06d591f6be291013bc024": "986c4a298360642fa5c67ea1c17b886d",
".git/objects/7a/b841e8a072749fbf38e0895abcf9c188b7c348": "263e773aa1083d814bf0f4940dadda35",
".git/objects/7f/02782266fe66ae5553937f0ee0b92ceef1c579": "49179df2b1671a4b6d3beeb0b3104977",
".git/objects/82/be67cd9fa71cd435fe68845a448a81f239663d": "069ca16a5f85593dde467f8ecf1d3e07",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/8d/011cab194c8bae68e653a4de0f67f6def30e40": "80110dab97c358591ea407f3ff43123d",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/90/b940b64a36549101b04fa8906de544c01bc611": "625918fed5e141f3043c5a62ee552a6c",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/b0/93be3d3fd47fd29663b0ff2e9d95a77d9ce314": "ccf198be8aab6852f498e4c74fcd01f2",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/d9bed589ed37a2b5cadd538bf87f926157cd77": "6144309d68b0a952676a100bc8e31cfb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/f4533060fe4c9706127c8b9cd15d6a15306f58": "da0e72358a5024872f362538526e99b5",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/3a0271c1c8b47c3fb6fadf64e0e2de11f9e04f": "fe6a9fc439264d78050f9ec76b9af476",
".git/objects/ec/5d9ab2b4b6869c93d52fc865daee9f78899cc6": "102db4bcece306479b4eeb0e3c7e4ebd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/3045d87e160b592a893e9820734f99c44bb8e5": "367232a5bd897248c3d84237b0fbc587",
".git/refs/heads/gh-pages": "47cedd32fc25861a2acdc376f51cabc0",
".git/refs/remotes/origin/gh-pages": "47cedd32fc25861a2acdc376f51cabc0",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/NOTICES": "1bb0defb311b9bdcd2a0ed077769b736",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/.git/COMMIT_EDITMSG": "5d6fb1e21e1fb0cfcd1b2e289dbda235",
"build/web/.git/config": "ae8d913d508fb64a343e965d6e5c234a",
"build/web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"build/web/.git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
"build/web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"build/web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"build/web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"build/web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"build/web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"build/web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"build/web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"build/web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"build/web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"build/web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"build/web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"build/web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"build/web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"build/web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"build/web/.git/index": "f5fdd71769d1ce3a69583be432a29d01",
"build/web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"build/web/.git/logs/HEAD": "3eadd57d25d1635807c8ca94c0b21a26",
"build/web/.git/logs/refs/heads/gh-pages": "3bdeebd7edeca7ade28801cfe1a235af",
"build/web/.git/logs/refs/remotes/origin/gh-pages": "50550eab968ea8376242f365b2a804dc",
"build/web/.git/objects/98/9ae446bad9f79f6569febedf4d2a9c93d4c6cf": "0498218f33d4507377050709b5ee5d84",
"build/web/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
"build/web/.git/objects/f0/e4b2c680526eade6ad531d15d9e5898b2fdcb8": "e9d704dba09adc57fc909a8b335e4554",
"build/web/.git/refs/heads/gh-pages": "8bf13d5e8016c7ae73930d74d011f7e3",
"build/web/.git/refs/remotes/origin/gh-pages": "8bf13d5e8016c7ae73930d74d011f7e3",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "81256b07094696c8d68bd53d7ce44aab",
"index.html": "e84d265cb83c484ea6fdf5506d4e320b",
"/": "e84d265cb83c484ea6fdf5506d4e320b",
"main.dart.js": "11a795ecc0d3749498d87e1daf4837cb",
"version.json": "471e8ec05bba3467b9503ac26cff7a78"};
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
