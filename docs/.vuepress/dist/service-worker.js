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
    "revision": "71f988cf367445c5eb2878c94fb4e531"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "47e5e9115a45d3b5803c7d29ada30685"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "ce85ce7fcba90ada19becf807dd49dde"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "f5919c3128eb512e9afca3a3a0e88bd1"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "e93f5a705cf2f644c8f425267298239c"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "bd8cc5ec4fa324462cda95a23bffb173"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "153ed80f51637b4d44c4f5761057be06"
  },
  {
    "url": "assets/css/1.styles.950d9d44.css",
    "revision": "016efa09daa5ac12578bcf0d153806ff"
  },
  {
    "url": "assets/css/2.styles.a33c3bc7.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/35.styles.5e49d925.css",
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
    "url": "assets/css/styles.fbde7a07.css",
    "revision": "b1038d2a4dda0e4389da12d5beb0d4de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.950d9d44.js",
    "revision": "7ec6e2bcd03b24e021274c039336377e"
  },
  {
    "url": "assets/js/10.c9c919af.js",
    "revision": "f6afc71ece5c63caea153addf0d8b8fb"
  },
  {
    "url": "assets/js/11.dbe91eb0.js",
    "revision": "9a19ebb1a4a3fbb2cfe7668bd4021556"
  },
  {
    "url": "assets/js/12.551d527f.js",
    "revision": "5e1bfd964709b43051a8d26c260fbbcd"
  },
  {
    "url": "assets/js/13.f27e57a4.js",
    "revision": "03c87dfc94153115b1ee63be0e0a6a0b"
  },
  {
    "url": "assets/js/14.0972c794.js",
    "revision": "f516a4c2f511172e3c0607f5603dc0b7"
  },
  {
    "url": "assets/js/15.835bd218.js",
    "revision": "6dc58ffe1e605ee2effd300ec4caae6e"
  },
  {
    "url": "assets/js/16.4c8d8eba.js",
    "revision": "94da098252f71934588675c9e9541695"
  },
  {
    "url": "assets/js/17.b687cf9d.js",
    "revision": "1cd01361d94d0a2359e3531f3572d561"
  },
  {
    "url": "assets/js/18.fd9c252b.js",
    "revision": "4b04e67326c1ae5040f8f384110f8e74"
  },
  {
    "url": "assets/js/19.ca1049bf.js",
    "revision": "6ac83abc0bfea88e0009eab984838486"
  },
  {
    "url": "assets/js/2.a33c3bc7.js",
    "revision": "f61f05682250068726ff21d258812a33"
  },
  {
    "url": "assets/js/20.942722c9.js",
    "revision": "06b48315f5ee0664ce011faa6fe76413"
  },
  {
    "url": "assets/js/21.743183e6.js",
    "revision": "6cc23e357a2a3b7ee7236ddf012686db"
  },
  {
    "url": "assets/js/22.5b352fad.js",
    "revision": "f27bf593849d6b11ae0f33a4a7599d93"
  },
  {
    "url": "assets/js/23.c0dc87e2.js",
    "revision": "371fe2b7ec441cfc02ef79e479d867e7"
  },
  {
    "url": "assets/js/24.887e184f.js",
    "revision": "2a88002eba448d434947f1da9171c0ac"
  },
  {
    "url": "assets/js/25.7fd5a649.js",
    "revision": "d947586dd40a0ac59718c400d6d5e872"
  },
  {
    "url": "assets/js/26.a3b8fd1a.js",
    "revision": "20c4e6ddb94f5f15feefff4db71319ac"
  },
  {
    "url": "assets/js/27.82c6fe37.js",
    "revision": "c3937ac6d2dbaa1ebf32f1caa8b7b75f"
  },
  {
    "url": "assets/js/28.3bc6fede.js",
    "revision": "9e398fc7ed93a12a25458b9acd0d03b9"
  },
  {
    "url": "assets/js/29.0d92884a.js",
    "revision": "5e27a3e91dd4683e84183d0abdb9a1f0"
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
    "url": "assets/js/31.0de1634e.js",
    "revision": "4c7ab55331eb765777d0ce10a2d8dcba"
  },
  {
    "url": "assets/js/32.248b7f9d.js",
    "revision": "3c3f6ff896eeb20d1e5c6b6bb1c4bfc1"
  },
  {
    "url": "assets/js/33.b3a3f3dc.js",
    "revision": "b667a97f0c0c986f0441af4dce7f212c"
  },
  {
    "url": "assets/js/34.df26bcaf.js",
    "revision": "3fcc381dec5e134eefac3d8e5008c455"
  },
  {
    "url": "assets/js/35.5e49d925.js",
    "revision": "8952fe5bcc4eb333a3d9613b1b8b52f0"
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
    "url": "assets/js/9.1406dd37.js",
    "revision": "980641a7feaa4c29022053772430dfd1"
  },
  {
    "url": "assets/js/app.fbde7a07.js",
    "revision": "5f0f485684553dd6f0d27ecb7bc2abb1"
  },
  {
    "url": "blog/b.html",
    "revision": "2a9d1ea899465374c7e0f3376f3065ac"
  },
  {
    "url": "blog/index.html",
    "revision": "0064556651fe0f62288fd2037e68fcde"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "97bb12521c9c4a07a5389d3de492f813"
  },
  {
    "url": "blog/python/index.html",
    "revision": "fef53d62eff82ff279234b88912342a7"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "9c54e5a68f7b54658d0862004933c8f4"
  },
  {
    "url": "blog/python/re.html",
    "revision": "61d9ce75fbdc65367d3316858cace9e3"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "92aeb343d1434be8fdb2ee9b0b807220"
  },
  {
    "url": "blog/research/index.html",
    "revision": "7d04db24ff9837d6794a8118ecb8ddd6"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "68b372ba27497d9489e2a85aa9033f3b"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "09c4142cf0d8627559187034f4d8878d"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "fe19964d404a06a0367c672b219556ef"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "ed459e74cb008be5c1229962a3e27506"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "a902e0361502f65ee36c33b150efa567"
  },
  {
    "url": "blog/web/database.html",
    "revision": "f80bfd0aedc1c903b5a547c651ed0ff3"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "2fcea41419d2c068ad04ec0d4a0e18b9"
  },
  {
    "url": "blog/web/index.html",
    "revision": "990914979feba7a9bc9a5804666bb758"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "111046990886bbfc9cb8dc3c5d8f8006"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "03be074465fb85fde476e93c0210df7c"
  },
  {
    "url": "blog/zen/pyzen.html",
    "revision": "51ac27e3163b7f00edc511ab2579a807"
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
    "revision": "e328c2870c88249f3e7ab20a58879f49"
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
    "revision": "91b80c645f826532d6c7bac54341e98c"
  },
  {
    "url": "logs/note.html",
    "revision": "3b34d3952e5cbe4952b83750f23574e3"
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
