/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "58000f2e2e1a52450a50ef4b0404eb31"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "980c2fc93f22ddc05f6e3a4d7ff5e3d5"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "5b1b797d5e856bf69dff1a57073b3b32"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "c4c16a13cc8d8023bd0c6b40cef61073"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "cba4b8c62eeeeb8ae3a50e2ce0b644ad"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "95fa49e3c834937a67928febb08f0797"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "b20de0dd9da788728209116eee8ff399"
  },
  {
    "url": "assets/css/1.styles.e58e4129.css",
    "revision": "d6bcbc1822b04d06331ff2124070bccb"
  },
  {
    "url": "assets/css/2.styles.14a26c4a.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/35.styles.b41856d1.css",
    "revision": "203d31673bb191ad6d970c65d55a1405"
  },
  {
    "url": "assets/css/4.styles.b174d72d.css",
    "revision": "8b9c8024f1a6cd206f13dc9cda26c1d2"
  },
  {
    "url": "assets/css/6.styles.70531b8d.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/7.styles.d0a90d91.css",
    "revision": "3994acfaa5723745cd76d900ab30f3d9"
  },
  {
    "url": "assets/css/styles.f844463a.css",
    "revision": "b1038d2a4dda0e4389da12d5beb0d4de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e58e4129.js",
    "revision": "70c0919e501295d3ed40e94858712462"
  },
  {
    "url": "assets/js/10.e3e3ead6.js",
    "revision": "5ecc69c4dc4fbfa3a5fe526937a29d0b"
  },
  {
    "url": "assets/js/11.1f52cb59.js",
    "revision": "8bb5158a90dc7a711f520a7bbe9a02ed"
  },
  {
    "url": "assets/js/12.63361aed.js",
    "revision": "a0923bfce0e14facb2512ec32be12ef3"
  },
  {
    "url": "assets/js/13.9926b233.js",
    "revision": "9697f847d9bb1a8a03d28d49a428cb21"
  },
  {
    "url": "assets/js/14.a7963330.js",
    "revision": "b0d1cdd19e05f0967889c300d4c986d4"
  },
  {
    "url": "assets/js/15.1cb7ed28.js",
    "revision": "e7e8c4dcb14c8532d861d4de8f77a220"
  },
  {
    "url": "assets/js/16.012d3fa4.js",
    "revision": "09292cb67c1ea1b1e1d242c169dcda64"
  },
  {
    "url": "assets/js/17.32e7cbf0.js",
    "revision": "521d099367afb22ae39461da5a859028"
  },
  {
    "url": "assets/js/18.87c97dbe.js",
    "revision": "0aef8814ad07e8eb358ee4129fffb045"
  },
  {
    "url": "assets/js/19.b9498f9d.js",
    "revision": "08c811083f574153ceb284a1ecbaee67"
  },
  {
    "url": "assets/js/2.14a26c4a.js",
    "revision": "5ac129637c4ff7e12376b5626ac7baea"
  },
  {
    "url": "assets/js/20.98d71dbb.js",
    "revision": "f2f8d1f7714af8b4ac5ec78ae6d1a442"
  },
  {
    "url": "assets/js/21.65997f78.js",
    "revision": "5b84cdcc5db1275814b29ee2a70a6f23"
  },
  {
    "url": "assets/js/22.32377e05.js",
    "revision": "5513ba1b652080198240726de5913ef2"
  },
  {
    "url": "assets/js/23.216e3231.js",
    "revision": "cda00a5737de3dee513f7a90ceb43616"
  },
  {
    "url": "assets/js/24.692791c1.js",
    "revision": "6a13e4a83b9aa54662fb96522ed8a8a1"
  },
  {
    "url": "assets/js/25.2f5fc8a6.js",
    "revision": "6df1f4403749701bbadbdf1da9e8af5e"
  },
  {
    "url": "assets/js/26.bf9f1972.js",
    "revision": "5319bb5d9cd00e8718b5d27396bad44d"
  },
  {
    "url": "assets/js/27.fa1a7f9e.js",
    "revision": "6688de95ad36bc6d943de34ed4db8de3"
  },
  {
    "url": "assets/js/28.d36da0d5.js",
    "revision": "3953376c2e8760bbf776f75e5634fdf4"
  },
  {
    "url": "assets/js/29.370fdc88.js",
    "revision": "2d3710f3e78c347081c547f69ef2e1ec"
  },
  {
    "url": "assets/js/3.a77bfb0b.js",
    "revision": "bbae212da89f6976dae569d392c26471"
  },
  {
    "url": "assets/js/30.7ea258eb.js",
    "revision": "029098d5c6e7aa979bf46339b314ec39"
  },
  {
    "url": "assets/js/31.30beef88.js",
    "revision": "93e16faf0adf5e3a410e56e5c54b50b9"
  },
  {
    "url": "assets/js/32.f675073d.js",
    "revision": "f77232e5d4119807db26c12db8175eb2"
  },
  {
    "url": "assets/js/33.7bfe8c89.js",
    "revision": "376e3f3ec9f0f80301564203c17ba252"
  },
  {
    "url": "assets/js/34.05f1b7c7.js",
    "revision": "91f8193bfae17cfd5c840b740289d732"
  },
  {
    "url": "assets/js/35.b41856d1.js",
    "revision": "ffe34b4643accb7330d8c92199e3038b"
  },
  {
    "url": "assets/js/4.b174d72d.js",
    "revision": "06890674bf85440de7c2eebdb5c613c2"
  },
  {
    "url": "assets/js/5.80e4fe81.js",
    "revision": "7ae381ef2e72f0e7cba03c436d35dc48"
  },
  {
    "url": "assets/js/6.70531b8d.js",
    "revision": "251ce4a7e27786a7303d517e3084709e"
  },
  {
    "url": "assets/js/7.d0a90d91.js",
    "revision": "c420bff561c9d1d69ea9d39b93564213"
  },
  {
    "url": "assets/js/8.1ed3e7b9.js",
    "revision": "db15700e6f7b5d6c6129a57ca5a5e1af"
  },
  {
    "url": "assets/js/9.bf7a1b5f.js",
    "revision": "f965b959d2018b72e0080f92d78b2edd"
  },
  {
    "url": "assets/js/app.f844463a.js",
    "revision": "ce78c6b4d9b364a81812ccc03b1e93be"
  },
  {
    "url": "blog/b.html",
    "revision": "458688254b721feaafdbf43d0d3ef373"
  },
  {
    "url": "blog/index.html",
    "revision": "083bc55839b422da49c10ab27f9f5701"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "ff6fa2586209f208ca39ef9964c971ff"
  },
  {
    "url": "blog/python/index.html",
    "revision": "96e059fc122a18a87201b3f60fc5d4ed"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "84451c7a438a30772b84c9406820d695"
  },
  {
    "url": "blog/python/re.html",
    "revision": "ebc81b9c401c6bc233a0f233f15416bb"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "2914ec5588a05a72ae3c30787d4970c5"
  },
  {
    "url": "blog/research/index.html",
    "revision": "15381835052213dfaac4d2667a705161"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "b8bc29af92bdd180fa0322217895b93e"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "ffd3e76df234aa025fc2f88314d5710d"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "91c496dbe7a480640fd85fcf57976cb4"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "b8feee371917da165c6a7c7a090c217c"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "614d70af2ce21289974b3d405d224a18"
  },
  {
    "url": "blog/web/database.html",
    "revision": "1cf94adb279dfcce300765ed8b543fdd"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "6815ddcbb8dd88e3d675a74a575ebccb"
  },
  {
    "url": "blog/web/index.html",
    "revision": "9948ff1277438e77435954384daad019"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "7a8266066401562a3c8f9eb46d040a2a"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "6ac36eb643bf3511c3e1ac5f9c34ffb9"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "271cb529a0754d09d7e34303dc3aa4b3"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "logo2.png",
    "revision": "5aa6cfe49f1a4878fc6ae39f4804d5dd"
  },
  {
    "url": "logo3.png",
    "revision": "9f1e1fe52812e8955fa7f4cbc6697159"
  },
  {
    "url": "logs/index.html",
    "revision": "363824405fa6badabd04565ef67e9315"
  },
  {
    "url": "logs/note.html",
    "revision": "80391c82cab34cbf6939b16d8795c626"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
