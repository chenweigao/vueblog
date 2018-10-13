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
    "revision": "25c82bdb6cd15d66f1214964dbe8ee72"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "724c03079b1917c9fcd6eb946cba0ec9"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "7b86a586773dd5ff4f25b8c71a884775"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "c69623f44ae77fcacf1a466505d857f1"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "f618f91f188539df53cc77ffd6c5176c"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "51b0b592d43d1391b50d62353d77a200"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "24e39e61bf7a9927ca4e46bd7a1bf381"
  },
  {
    "url": "assets/css/1.styles.32e5747f.css",
    "revision": "d6bcbc1822b04d06331ff2124070bccb"
  },
  {
    "url": "assets/css/2.styles.cd4d8213.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/36.styles.4020e3f8.css",
    "revision": "203d31673bb191ad6d970c65d55a1405"
  },
  {
    "url": "assets/css/4.styles.35c2bea0.css",
    "revision": "8b9c8024f1a6cd206f13dc9cda26c1d2"
  },
  {
    "url": "assets/css/6.styles.bc0e99ba.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/7.styles.d47eaab9.css",
    "revision": "3994acfaa5723745cd76d900ab30f3d9"
  },
  {
    "url": "assets/css/styles.897e926f.css",
    "revision": "b1038d2a4dda0e4389da12d5beb0d4de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.32e5747f.js",
    "revision": "bcb35b39a326eef953c41f1e1f760640"
  },
  {
    "url": "assets/js/10.5d83e448.js",
    "revision": "51fff8126ede2978e7442bef396c344c"
  },
  {
    "url": "assets/js/11.2d3b536e.js",
    "revision": "413fb8ee11be04842502469ae52fc48c"
  },
  {
    "url": "assets/js/12.386a8254.js",
    "revision": "939fd7484e35d07faa1e11ebbb684855"
  },
  {
    "url": "assets/js/13.b2d0a130.js",
    "revision": "b8fbfed4c4598e0cbb8ffd2bc37f35d2"
  },
  {
    "url": "assets/js/14.4f9c01e0.js",
    "revision": "fff0cce3f302d600067c2672aa2cc24b"
  },
  {
    "url": "assets/js/15.9e0aeb5e.js",
    "revision": "3b3bd40799cd487c9e00609ba7b346a4"
  },
  {
    "url": "assets/js/16.087312d6.js",
    "revision": "b7fc86a40d041209287598fb2ef54c33"
  },
  {
    "url": "assets/js/17.37a8118c.js",
    "revision": "43d29f45dcf4891ea48dc992b82c4af2"
  },
  {
    "url": "assets/js/18.c1a76556.js",
    "revision": "63659ccf9688ae8cd147e75deb4a009d"
  },
  {
    "url": "assets/js/19.aae584e0.js",
    "revision": "5f794abab899add455102cbc243d5e5b"
  },
  {
    "url": "assets/js/2.cd4d8213.js",
    "revision": "c9e7c37ec5a8f65e792ba9e3f16cd6ac"
  },
  {
    "url": "assets/js/20.ad2772ec.js",
    "revision": "0452d0c8d31a26e23983ade8cd61552f"
  },
  {
    "url": "assets/js/21.7136801c.js",
    "revision": "837586a5fe47c90a4d56e3d1c7dec161"
  },
  {
    "url": "assets/js/22.cdbee686.js",
    "revision": "4280ec281d7cbc3629ba4aeb9291d621"
  },
  {
    "url": "assets/js/23.4a1b34b4.js",
    "revision": "35cb709c229c4144c98d08eba54006a6"
  },
  {
    "url": "assets/js/24.d5625912.js",
    "revision": "48bfc751d5cf9872ad514275c05b93cd"
  },
  {
    "url": "assets/js/25.9863ab92.js",
    "revision": "efdb62c42ee6dd7e787875eebf00f3b9"
  },
  {
    "url": "assets/js/26.5863faae.js",
    "revision": "0bfbcc1cfb7ec650c68237a16cc943b9"
  },
  {
    "url": "assets/js/27.aeb7d31b.js",
    "revision": "3fbe14b4e7dbd6dfbe5cef305e5470ed"
  },
  {
    "url": "assets/js/28.79686aaa.js",
    "revision": "0ef4d0f84dc7b00b672cd2c0ab0139a6"
  },
  {
    "url": "assets/js/29.15b8074f.js",
    "revision": "486cb486d9f5d84398dc1ce54fd3740c"
  },
  {
    "url": "assets/js/3.0c77f8c6.js",
    "revision": "95ac77cd35da18053220892f6b358653"
  },
  {
    "url": "assets/js/30.e50a656d.js",
    "revision": "74cb5bf3d777298c703d8f2598de1481"
  },
  {
    "url": "assets/js/31.e2347e4f.js",
    "revision": "0ce05840b7a0b5358b681ba56f9f1576"
  },
  {
    "url": "assets/js/32.35e31fd6.js",
    "revision": "7ad6dc8fe951743feb50034d413f2cf2"
  },
  {
    "url": "assets/js/33.a18972fc.js",
    "revision": "270cd3ff19ca6f28eed02eb703eb6de4"
  },
  {
    "url": "assets/js/34.22303dbb.js",
    "revision": "4a61d8d80ae35f59da7af1a780ae4ac2"
  },
  {
    "url": "assets/js/35.3838c24a.js",
    "revision": "0f96c8227199d2e2c45bcbe9a60dcb21"
  },
  {
    "url": "assets/js/36.4020e3f8.js",
    "revision": "9b392d6b65d85751c3667daa2aadce20"
  },
  {
    "url": "assets/js/4.35c2bea0.js",
    "revision": "6a7f39eaf035021a01542862adb747e8"
  },
  {
    "url": "assets/js/5.554f8567.js",
    "revision": "4b8c0d370e7d57fd09bd75b5e4a58744"
  },
  {
    "url": "assets/js/6.bc0e99ba.js",
    "revision": "992d24952579ec8a39cd3fc760a014ba"
  },
  {
    "url": "assets/js/7.d47eaab9.js",
    "revision": "b9f8edab4a41bac952052308373e1eaf"
  },
  {
    "url": "assets/js/8.c5a81d27.js",
    "revision": "5442227254a1360368378e94de0fd736"
  },
  {
    "url": "assets/js/9.2f7e466f.js",
    "revision": "d45ce25f0ade06db16c08ae556e4c544"
  },
  {
    "url": "assets/js/app.897e926f.js",
    "revision": "ca766d54b88caa3082878ee70cd7864c"
  },
  {
    "url": "blog/b.html",
    "revision": "520e50735acb36a30c0eedb379a3225f"
  },
  {
    "url": "blog/index.html",
    "revision": "9cfae4bdfdbf591dc80005b9d8c32ccb"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "4cd5f40578fd6f0184fc0df43a5da8d4"
  },
  {
    "url": "blog/python/index.html",
    "revision": "334ed0449bfb261161037e14df809091"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "1d859f29f730525cb3d8c543037a531c"
  },
  {
    "url": "blog/python/re.html",
    "revision": "de351997190cdb88633d5585215a22db"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "a62dbc27ea22ed4b53e5d99bf9007c2a"
  },
  {
    "url": "blog/research/index.html",
    "revision": "6361d77879a4b985c449c8618fc5b7ab"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "55fd226afb1fa82e73509ad69fbb2228"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "82ca3dd6334f47bb71b261b868ad77cf"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "4c28bcc4eb426a7abfb5af0d3540d75b"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "5121783663fa56b43ceb74d6f3c39bf9"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "aaf892c9d9c1abab95c261d085ddc3a7"
  },
  {
    "url": "blog/web/database.html",
    "revision": "a81904a7c8aec0bbf5985c33cc05d129"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "a345fa90883de32d045d5f4ed7f9bc60"
  },
  {
    "url": "blog/web/index.html",
    "revision": "73d2264ec7ca092817aba30b42d34627"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "6bb741db2fad08f76189b9d6d68f4ee4"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "4e964cf665bc9cbb0eaed0086a1f413b"
  },
  {
    "url": "blog/zen/pyzen.html",
    "revision": "1250f2fe63ad46955823aa559b900793"
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
    "revision": "272243f1677d72c7858e348d582e6929"
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
    "revision": "c3c2709984efbf1b5322896d417edf55"
  },
  {
    "url": "logs/note.html",
    "revision": "96c730ab6c1ed1556e2dd395a0675052"
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
