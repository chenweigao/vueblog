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
    "revision": "7edbb2d8ec9c0c85ae83eff5a99caeec"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "08b35f6ce85490bd09748f36d93bab3a"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "d67eb31132a512204fb3e115f56f05fd"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "c024c1853088af634e0427f0b169e339"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "ee36bca8a5b68d808e30825e0131f165"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "b30d3c7af9008241312168a1c284bddc"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "801b4b20d99d475fcb43839e5462bb32"
  },
  {
    "url": "assets/css/1.styles.efabf530.css",
    "revision": "016efa09daa5ac12578bcf0d153806ff"
  },
  {
    "url": "assets/css/2.styles.a33c3bc7.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/35.styles.bfe7f299.css",
    "revision": "289e344a475e85b0610ee3bec239f8df"
  },
  {
    "url": "assets/css/4.styles.2429cf46.css",
    "revision": "8b9c8024f1a6cd206f13dc9cda26c1d2"
  },
  {
    "url": "assets/css/6.styles.5b587c2c.css",
    "revision": "3994acfaa5723745cd76d900ab30f3d9"
  },
  {
    "url": "assets/css/styles.097b87ab.css",
    "revision": "b1038d2a4dda0e4389da12d5beb0d4de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.efabf530.js",
    "revision": "e43a10e13169989853aad0a4ba476c3a"
  },
  {
    "url": "assets/js/10.71eb1f96.js",
    "revision": "d8f32cd75d8760c8d706edcddfa0f071"
  },
  {
    "url": "assets/js/11.dbe91eb0.js",
    "revision": "9a19ebb1a4a3fbb2cfe7668bd4021556"
  },
  {
    "url": "assets/js/12.3defb897.js",
    "revision": "ff400d8b2dae140ce163259ce96d6207"
  },
  {
    "url": "assets/js/13.4c7d943b.js",
    "revision": "44143b180c51743afe98b4218066285e"
  },
  {
    "url": "assets/js/14.282261b2.js",
    "revision": "f53912fc6b69156150f338e9622b538c"
  },
  {
    "url": "assets/js/15.bb5bb8d9.js",
    "revision": "3e12bf5207a2e5b22641c950999d2b4f"
  },
  {
    "url": "assets/js/16.7bdc7f87.js",
    "revision": "45b209642b516237e1c7e747fa6040ca"
  },
  {
    "url": "assets/js/17.4280484a.js",
    "revision": "0c5f935c44d649b10b4be3f14f53fd38"
  },
  {
    "url": "assets/js/18.79a76362.js",
    "revision": "290b2cf3ce42593794232de6268730e6"
  },
  {
    "url": "assets/js/19.d56e520f.js",
    "revision": "d6b00bd743742a94f79e86d3b37a5196"
  },
  {
    "url": "assets/js/2.a33c3bc7.js",
    "revision": "f61f05682250068726ff21d258812a33"
  },
  {
    "url": "assets/js/20.0be511b4.js",
    "revision": "e7408421b4e900442ef410ad2bd93f67"
  },
  {
    "url": "assets/js/21.208b2719.js",
    "revision": "2228282c4611b49a4415b3f64ede9dd0"
  },
  {
    "url": "assets/js/22.de57e92e.js",
    "revision": "d95045e0a7aff30a039d2d30bb7f9513"
  },
  {
    "url": "assets/js/23.0bd5ac04.js",
    "revision": "21f79ec86cc0a574c2636c97529131da"
  },
  {
    "url": "assets/js/24.e9f5a615.js",
    "revision": "2e02f496926af8de5f18e37e0bc192f8"
  },
  {
    "url": "assets/js/25.64d0d40d.js",
    "revision": "757902f14bf21b13e075e87bce43acda"
  },
  {
    "url": "assets/js/26.a3b8fd1a.js",
    "revision": "20c4e6ddb94f5f15feefff4db71319ac"
  },
  {
    "url": "assets/js/27.e52cc99b.js",
    "revision": "1da5e0122c1fa834136fda63c790976a"
  },
  {
    "url": "assets/js/28.3bc6fede.js",
    "revision": "9e398fc7ed93a12a25458b9acd0d03b9"
  },
  {
    "url": "assets/js/29.19073d7f.js",
    "revision": "9a60dc7ae0b442b02d01b30903b83407"
  },
  {
    "url": "assets/js/3.e22de5a2.js",
    "revision": "da718a50a5c7b3e71457658635d01117"
  },
  {
    "url": "assets/js/30.8154d834.js",
    "revision": "4c504ed9576bfccdf73a2b38e5ccd66d"
  },
  {
    "url": "assets/js/31.f8f57cad.js",
    "revision": "8a92c1bf0f1ff0e85e06efae265117ff"
  },
  {
    "url": "assets/js/32.f5b1cc2b.js",
    "revision": "8d5914cb5433897a98aadca108fce4c1"
  },
  {
    "url": "assets/js/33.d6a2d39d.js",
    "revision": "414801abf0564910343a46f7af2bdb8f"
  },
  {
    "url": "assets/js/34.d7160b8a.js",
    "revision": "00b9442b3c8254c536443910577af11e"
  },
  {
    "url": "assets/js/35.bfe7f299.js",
    "revision": "b9da10788bd444bb5309fbe42d6b822a"
  },
  {
    "url": "assets/js/4.2429cf46.js",
    "revision": "b00bba59411430f443ee8d165d6c5c48"
  },
  {
    "url": "assets/js/5.c31d4036.js",
    "revision": "54fd459cc98c332ad83d9b50a461eb1c"
  },
  {
    "url": "assets/js/6.5b587c2c.js",
    "revision": "1c5b2f71870c1d4dcbd88c7524e3fce6"
  },
  {
    "url": "assets/js/7.331d5f26.js",
    "revision": "f462e3bace7c03444d17942a96ea7b16"
  },
  {
    "url": "assets/js/8.57eb5526.js",
    "revision": "599d3f28982f1b74fc25621859f620ea"
  },
  {
    "url": "assets/js/9.1423faa6.js",
    "revision": "8e207167510bafe348543bd041d7d88c"
  },
  {
    "url": "assets/js/app.097b87ab.js",
    "revision": "dcafa6e1a74dbefb0d1d4de4d320812d"
  },
  {
    "url": "blog/b.html",
    "revision": "ec72dc0d8c158d4e911dc02bcdd83e08"
  },
  {
    "url": "blog/index.html",
    "revision": "f1c14d2ac93a6f82e5f306352f85122b"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "bbf6350f3630abd89fffc714324dacb1"
  },
  {
    "url": "blog/python/index.html",
    "revision": "7aca3b7b4c8d47205b9a55192e73b273"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "e6556a3bcba9df2a16b5e20c119054dd"
  },
  {
    "url": "blog/python/re.html",
    "revision": "69a74cdea82c3ff9cc02aa50e06d1469"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "8b91d437a2738aa4e696da32eebf95ba"
  },
  {
    "url": "blog/research/index.html",
    "revision": "5ebfb2dec346d0e64e49e23903163a6b"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "8c682bffd529879de396df320a2d0bfd"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "340d100a9b349a265b755255a62b7ad0"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "06e314f13388753036b2bf1dda489beb"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "d3d884cc34ac42068350c614cc35b359"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "1c85675cd38810f9270ea0fdadd39e7e"
  },
  {
    "url": "blog/web/database.html",
    "revision": "1d7fe9d59f6787a872fd9d402c69204f"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "61c8e5eb08e73da21be5e1e895ecd3cf"
  },
  {
    "url": "blog/web/index.html",
    "revision": "e6916771b63cc824b8c271aff8cbf6ed"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "c81f5319df75da4d3a9961e661ba22b8"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "0d5521d6f047a5d5a869bfc0fa006a52"
  },
  {
    "url": "blog/zen/pyzen.html",
    "revision": "b27f9848c2bbdf7a42678723d1f514f7"
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
    "revision": "d7b879814be4ae3e34f0ac89e1804500"
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
    "url": "logs/index.html",
    "revision": "c87afcff5382c2b9aa803f7d0d1505ac"
  },
  {
    "url": "logs/note.html",
    "revision": "515c6af8412a0ca3c242ac761fb71761"
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
