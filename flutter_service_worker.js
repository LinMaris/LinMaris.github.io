'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5ccab7010c2d5359a56be839c64e7c01",
"index.html": "c0a2c037cfd52ae019c3d77649b7cf34",
"/": "c0a2c037cfd52ae019c3d77649b7cf34",
"main.dart.js": "cca70387ee50f06740398f6009e83f10",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e92320007e4754fdcc79d14cadc159e2",
"assets/AssetManifest.json": "f1327ca41f34920da3cde15f7891b6fa",
"assets/NOTICES": "f4cd5ab9298f4004cf718d6336a5c703",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "d703d58aefcad1e4acde19e358a3a272",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/home/tab_tuidan_selected@2x.png": "a8fec392ed12d174c3da93feb17a8cbc",
"assets/assets/images/home/product_delete@2x.png": "251e667ead7c78b7a4447b6529b0c969",
"assets/assets/images/home/saoma_wechat@2x.png": "a6320cfeb5ffc94807256b0d1e78f010",
"assets/assets/images/home/product_chengxin@3x.png": "63ed1560004ac5161312a080cbf78cf0",
"assets/assets/images/home/tab_saoma_selected@2x.png": "577c2330149cbcfde1ec8208f495ea2c",
"assets/assets/images/home/tool_warn@2x.png": "be7acb4d764db3e1add0b12b8a0ee37d",
"assets/assets/images/home/home_position@2x.png": "dd33b1071892c9e810347d838c3fe168",
"assets/assets/images/home/product_duihua@2x.png": "c4cbfbc75c72dff358f25f5b321495ae",
"assets/assets/images/home/tab_mine_selected@2x.png": "e15db7e3628fab6ad4ce0936e0bd6f05",
"assets/assets/images/home/home_close@2x.png": "ffeb90a63acbdd90853a659e727396fa",
"assets/assets/images/home/saoma_wechat_pyq@2x.png": "78f624e9e9d2751fbf9c41a269a0ae8f",
"assets/assets/images/home/home_daikuan@2x.png": "613bee8317e009df4a1825414cd2b7b3",
"assets/assets/images/home/product_show@2x.png": "386efa997a278d915956646b57874743",
"assets/assets/images/home/tab_tuiguang_selected@2x.png": "38975338bd216d52653b45021b376230",
"assets/assets/images/home/tool_info@2x.png": "0a5670e9456d5b372c6c6962729f4b84",
"assets/assets/images/home/home_chanpin@2x.png": "891fce9f6c1aa145bd5d93cb39626585",
"assets/assets/images/home/tab_home_unselected@2x.png": "ca33948e7768d2a361265f249478e388",
"assets/assets/images/home/tab_mine_unselected@2x.png": "8c0e82aa4f05f0d8fe84c19afc1ce576",
"assets/assets/images/home/product_ding@2x.png": "57eba4ecedcfcf86de6925e31aa31686",
"assets/assets/images/home/home_banner@2x.png": "2d9750bd89c284409a4c88774e88970d",
"assets/assets/images/home/product_txt@2x.png": "ce32935effff124808b7e70191b20a5d",
"assets/assets/images/home/home_car@2x.png": "84d320c46dce5e445bc553b2fb38788c",
"assets/assets/images/home/product_collect@2x.png": "d96f0cd279059dc2764ec503daf75fe1",
"assets/assets/images/home/tab_tuiguang_unselected@2x.png": "c820cb8b85bd80ebbe9a1d9bd9b36c25",
"assets/assets/images/home/product_tel@2x.png": "e3102dddf195a2ea23858745b5f02346",
"assets/assets/images/home/home_renshou@2x.png": "a827234dff5f5088a7cc4bd4aab786e9",
"assets/assets/images/home/saoma_play@2x.png": "7b6715bfc085c2c5f9abda09f2b00c16",
"assets/assets/images/home/tab_saoma_unselected@2x.png": "4bb089c3520ef4f1ed67d2c7e9df77ef",
"assets/assets/images/home/home_credit@2x.png": "f84a1e9172d7e5cc8a1a4bcdf2229e46",
"assets/assets/images/home/product_like@2x.png": "25827b4d640ff7e9b7106bf05d1cdae6",
"assets/assets/images/home/tab_tuidan_unselected@2x.png": "3ae89df94987a0afda5afa5973a77abb",
"assets/assets/images/home/tool_kefu@2x.png": "ee728cf8e2d6c3b6fd370bc054c3bc43",
"assets/assets/images/home/tool_share@2x.png": "6854cabf88fc852559952796414be33d",
"assets/assets/images/home/home_jinrong@2x.png": "cd429fff7dd02199a663bfc33ddff65c",
"assets/assets/images/home/tab_home_selected@2x.png": "a030aba101b9db4cc30db61a4e9815be",
"assets/assets/images/home/study_comment@2x.png": "6b0b5dde388e52e95964cb6f5fec4eae",
"assets/assets/images/home/study_good@2x.png": "2f1804aa20b27fd3a313b7ddb1b4b613",
"assets/assets/images/home/product_edit@2x.png": "ce32935effff124808b7e70191b20a5d",
"assets/assets/images/wushuju@2x.png": "c5cc4c60387d43c3201792f6c253f73f",
"assets/assets/images/tuiguang/new_share_bg@2x.png": "792a3d02a95aa46a5d1c81c741c5f1e4",
"assets/assets/images/mine/mine_vip@2x.png": "f255473d3fc7235aa1bf0359f40104d6",
"assets/assets/images/mine/mine_setting@2x.png": "8298e124777769448048de32f8c84a7e",
"assets/assets/images/mine/success_tip@2x.png": "c5651d6368532a7cd35dcca253327e1e",
"assets/assets/images/mine/mine_calendar@2x.png": "db3169f06eab6e4cec8848bcc0488ee7",
"assets/assets/images/mine/mine_product@2x.png": "0d0e6382818f573ffa4732334280104d",
"assets/assets/images/mine/mine_level_02@2x.png": "8bd37094140774d95424c1399f50d1cf",
"assets/assets/images/mine/mine_changyong@2x.png": "7222396f8fe077e065ea421ed6796074",
"assets/assets/images/mine/mine_tijiao@2x.png": "e4313b637031dc9ad7d3622c764c3631",
"assets/assets/images/mine/mine_fenhong@2x.png": "36ac6a76193a2382e93797572edda344",
"assets/assets/images/mine/mine_friend@2x.png": "f9e59001bff0b372e8eb53e50ad82219",
"assets/assets/images/mine/mine_chaxun@2x.png": "f51e718b77e251850dab374c5760830c",
"assets/assets/images/mine/mine_circle_top@2x.png": "0bac670f4431da9562a075d401f1dc52",
"assets/assets/images/mine/mine_pingtai@2x.png": "a297bdee86e600e6512e5a54a21e60fe",
"assets/assets/images/mine/mine_ticheng@2x.png": "b460846b928ff37014b03220cc3a6176",
"assets/assets/images/mine/mine_level_01@2x.png": "56f5bbd2cf078a399734da5db91e31dd",
"assets/assets/images/mine/mine_shuju@2x.png": "2c4a03d4b319e802a4634cb48bdfed11",
"assets/assets/images/mine/mine_level_03@2x.png": "1de9b771111ae94196fb9e1ea52005b5",
"assets/assets/images/mine/mine_tuandui@2x.png": "26a05bb7cc11f384bea0b77bb636695c",
"assets/assets/images/mine/mine_shenhe@2x.png": "a3e5541a98210b4efbd45c7f6eedde6b",
"assets/assets/images/mine/mine_qianyue@2x.png": "d22c26026a7589f0d6cfe3f334998c44",
"assets/assets/images/mine/mine_bujian@2x.png": "004ac04d0305f0b9383fa75e48c93c20",
"assets/assets/images/mine/mine_guanzhu@2x.png": "b6e166906b3e3b359eabc0704ccb0bd4",
"assets/assets/images/mine/mine_wancheng@2x.png": "e0cf26714e145c7bf97a253afe286093",
"assets/assets/images/test_avater@2x.png": "e3555b055ecdb28abcc1ddf2081857ad",
"assets/assets/images/home_w06@2x.png": "1d08de3289ff5e71f81eef34ae27feef",
"assets/assets/images/touming@2x.png": "3a8754f61e68de8e58447d71132b6c49",
"assets/assets/images/nav_back@2x.png": "c95a3d69ba8dd3efc862cceb1dab97fa",
"assets/assets/images/zhanweitu@2x.png": "21a1a3d31b1c1f464e9676fcb605dfa4",
"assets/assets/images/login/login_register_name@2x.png": "81e7bf6d58ea82b6eed1e5be4b32680d",
"assets/assets/images/login/login_register_juese@2x.png": "bc4c995f130096d3d8b909fcf6b5fc30",
"assets/assets/images/login/login_register_tel@2x.png": "99ccddbd27e9667e6152a58fa39b9cb5",
"assets/assets/images/login/login_register_pwd@2x.png": "4b8cdaf00820bd07dd3c5c252fc966af",
"assets/assets/images/login/login_pwd@2x.png": "e08a68d7d1ee6ca59f3dd985b0a93ec8",
"assets/assets/images/login/login_pwd_open@2x.png": "8ff3046f829e5a0fe25f06e5de8790bc",
"assets/assets/images/login/login_right@2x.png": "7b25789b05f5f611436870e3de5c5c4a",
"assets/assets/images/login/login_pwd_close@2x.png": "b3bc05a2c50dbe112bd95f44c006f165",
"assets/assets/images/login/login_delete@2x.png": "34493f3d6a61c4fa7efb19bf91e5040b",
"assets/assets/images/login/login_register_sms@2x.png": "b8677d70a0491729f9137b0cfd8055ce",
"assets/assets/images/login/login_logo@2x.png": "d2dc05dc455a75bad7c7e11cea0699f8",
"assets/assets/images/login/login_arrow_down@2x.png": "3a220ed61084a64b33e63ec5adc44efe",
"assets/assets/images/zhaopian_add@2x.png": "e419e639ecba148ed25f7ab243af7da3",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
