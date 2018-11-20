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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "db4653c28311f29fadeee5bf9d4f27bc"
  },
  {
    "url": "about/index.html",
    "revision": "f6c3134e924ae24ca2b341305fd0a430"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "9b6a598446ecbb901fbe288cc7202f4c"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "8c749533e9dbc36e807ec6a739ad60aa"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "3394de74ff0e0e69e46dd8b3a1dcd5b7"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "4026c7c80415feb61c9e3a6031dea755"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "fb5c700fd7482edca62533e1a8bdc705"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "ec57281c986aeec2d37c157e543b29f2"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "7e1c8a5dd2c7590fc99a2fb79e66c2ff"
  },
  {
    "url": "assets/css/0.styles.b16b820d.css",
    "revision": "ea0d2f6f7f16b9f9c122e026cdb6b2ab"
  },
  {
    "url": "assets/fonts/element-icons.27c72091.ttf",
    "revision": "27c72091ab590fb5d1c3ef90f988ddce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c2d277ee.js",
    "revision": "e1a7e8bf9df1fd72ad18bada858e133d"
  },
  {
    "url": "assets/js/11.4568ad97.js",
    "revision": "a4780166259f5adc3583d4219264372c"
  },
  {
    "url": "assets/js/12.80504c4f.js",
    "revision": "f4a293b8a831a09bc3f59a06cf0592a2"
  },
  {
    "url": "assets/js/13.8dd493cb.js",
    "revision": "75a66b5fe5f079b5762521eec8521487"
  },
  {
    "url": "assets/js/14.266e5512.js",
    "revision": "491be8ae4e86b41e02d300a922fa3a79"
  },
  {
    "url": "assets/js/15.e2c761da.js",
    "revision": "a66bdb5cd939a6afb29873712dff301c"
  },
  {
    "url": "assets/js/16.cc6c10cc.js",
    "revision": "ffb84f36c6876b4ef904ab69fd01301e"
  },
  {
    "url": "assets/js/17.bfad8f8b.js",
    "revision": "52514358106cbaeadc70d0fed334e4b4"
  },
  {
    "url": "assets/js/18.4c92d169.js",
    "revision": "5d81fed053020d270f08211c6e8e422a"
  },
  {
    "url": "assets/js/19.ee587bc8.js",
    "revision": "d8dd99e66f6f970a9653db395d8034ea"
  },
  {
    "url": "assets/js/2.06022588.js",
    "revision": "c67b582c56ef306640dc0ec56004530d"
  },
  {
    "url": "assets/js/20.c3ab6aa5.js",
    "revision": "bf7d7da319448c42d9cf321fef6d4268"
  },
  {
    "url": "assets/js/21.49577e91.js",
    "revision": "cc9b271bbb4ee13b48883ab4f069dcc2"
  },
  {
    "url": "assets/js/22.7d72d562.js",
    "revision": "b743547fcff4f3360d37b191348e9625"
  },
  {
    "url": "assets/js/23.32d7e4af.js",
    "revision": "198ba7c43c3d07409d4088e916f71826"
  },
  {
    "url": "assets/js/24.6553a4a4.js",
    "revision": "f0cbeaf23fe9e8a009f83885fe9bf19a"
  },
  {
    "url": "assets/js/25.f133d442.js",
    "revision": "5c62944badd36b098541982ca44ce2ab"
  },
  {
    "url": "assets/js/26.08ff6f42.js",
    "revision": "82c43f0815da9531c8627e73208ef34e"
  },
  {
    "url": "assets/js/27.78d0f258.js",
    "revision": "913f975f415cdf6cb23a2c32115d7f2a"
  },
  {
    "url": "assets/js/28.db6d6882.js",
    "revision": "84a1a27c6e3c9f88749f04c6dcfff52b"
  },
  {
    "url": "assets/js/29.a20b27a5.js",
    "revision": "6017f92a234425e89d30a1f4817b48c0"
  },
  {
    "url": "assets/js/3.c7790cd3.js",
    "revision": "25a4e40717aa71525c9c78016413ea74"
  },
  {
    "url": "assets/js/30.473b55bc.js",
    "revision": "5dcaa68e36c718b195d436ebe5d7a901"
  },
  {
    "url": "assets/js/31.dc3c3873.js",
    "revision": "2d0bd74c05f93d7898feb588a74ed387"
  },
  {
    "url": "assets/js/32.a7502e79.js",
    "revision": "ffb8239c3ffc61845ad3e8f63fff8059"
  },
  {
    "url": "assets/js/33.fd798e8b.js",
    "revision": "817fe3cd1718e3603c9ac1804854057a"
  },
  {
    "url": "assets/js/34.225319e5.js",
    "revision": "3890c244f6e591077d084efb35070150"
  },
  {
    "url": "assets/js/35.09abb90e.js",
    "revision": "64264f24c9e147ef525ef1f4cbe34ddd"
  },
  {
    "url": "assets/js/36.2dcaa32a.js",
    "revision": "cea62c1df41c1ec4df7f60c395dead0c"
  },
  {
    "url": "assets/js/37.7d21424a.js",
    "revision": "d1032b785d75ce7bdcc5f02aacf7f8d0"
  },
  {
    "url": "assets/js/38.d756ba3a.js",
    "revision": "71827fce19e28e4fe3883963e0510e43"
  },
  {
    "url": "assets/js/39.4d7ec5ec.js",
    "revision": "aec77162f17bbb601e7ae32f601054a3"
  },
  {
    "url": "assets/js/4.c4e4ca14.js",
    "revision": "f4273bfc9203395b9402ef935b2951c6"
  },
  {
    "url": "assets/js/40.40014d40.js",
    "revision": "aa940410f143580c97b4aff0bb075aa3"
  },
  {
    "url": "assets/js/41.dc2c3596.js",
    "revision": "8e82572021b08d5401b056c8a4d52816"
  },
  {
    "url": "assets/js/42.d1576472.js",
    "revision": "de92145cd0a8c7b5221a77a04d2118d1"
  },
  {
    "url": "assets/js/43.b5d45c54.js",
    "revision": "d35b25a0775c6d415b35a36f6f281c3f"
  },
  {
    "url": "assets/js/44.3fc9fde7.js",
    "revision": "368c252ef2f957d5a6286dbcc86d25c3"
  },
  {
    "url": "assets/js/45.7e717010.js",
    "revision": "c09ee2b23090d1cfcf9e78bbf2a3feda"
  },
  {
    "url": "assets/js/46.bef3dfa5.js",
    "revision": "7f66b7a82f5720cd61c68f4fd0d428f6"
  },
  {
    "url": "assets/js/47.d7ae7c5e.js",
    "revision": "47efeeb4f7e3ebc46d2e6b62f1c20083"
  },
  {
    "url": "assets/js/48.21f9bd80.js",
    "revision": "a51cc7bd91203430ca1414080dff4c88"
  },
  {
    "url": "assets/js/49.bc695b94.js",
    "revision": "b29451fd6f0960214ce4940678c15a4e"
  },
  {
    "url": "assets/js/5.7842d9d1.js",
    "revision": "b6e30be653a1914eae1378da18708fc1"
  },
  {
    "url": "assets/js/50.a13885d4.js",
    "revision": "2a89b373916fda0403f6de9bdd246c7f"
  },
  {
    "url": "assets/js/51.e6b62e0a.js",
    "revision": "3379bb15bf8f9208575439a42cf5e094"
  },
  {
    "url": "assets/js/52.98e5271f.js",
    "revision": "cbbd591fe6fac2380376a48efd751d75"
  },
  {
    "url": "assets/js/53.829ddb7c.js",
    "revision": "84bb4149bb570836829b20910218f9a0"
  },
  {
    "url": "assets/js/6.2ad7da35.js",
    "revision": "a2b5cb7c495690541a8c4304768fdb9f"
  },
  {
    "url": "assets/js/7.639f00cf.js",
    "revision": "1d7c4e7564e767fefe4aa02c703d6823"
  },
  {
    "url": "assets/js/8.932c2111.js",
    "revision": "86fb06c9cffa4679077b4160d3844acc"
  },
  {
    "url": "assets/js/9.c55e80e5.js",
    "revision": "ab733e104c7d7f1dbacec5f956ab451f"
  },
  {
    "url": "assets/js/app.39038eb6.js",
    "revision": "a18c3bc8b4dbefac73a79a3b407f025b"
  },
  {
    "url": "blog/index.html",
    "revision": "4ce492283e182eb37c2d147fc6cc7e3a"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "413a414bd1b8906d023e67e1a61e9b6a"
  },
  {
    "url": "blog/python/index.html",
    "revision": "0f27bf0f8dc5e4389f69376f2eb11041"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "54175294b41b0ddc11e56f7e4344f079"
  },
  {
    "url": "blog/python/re.html",
    "revision": "570f56ff72fe9a6543982adfc2e5b67f"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "4e5de0b7fc3f796a69903ec2a79a703a"
  },
  {
    "url": "blog/research/index.html",
    "revision": "b4bcde8173a89932990fc0782a0093f3"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "6533bb3ab1206c40fcca3460c227040d"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "7595d3bb7c25406b11b68a528dc1058f"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "ea278ca6123cb6b3a8a41ef71ff38596"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "b6f25391f4f0f2c01eae65a877ed7136"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "83513992990e0075d0ec9796253e75b5"
  },
  {
    "url": "blog/web/css.html",
    "revision": "39110f8bffda54fece481bbad31c89f3"
  },
  {
    "url": "blog/web/database.html",
    "revision": "77f2a1a3bb3ff0d7c1bebfba7a9a48a8"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "e914bbd9c398a1b03722a9958ab222b7"
  },
  {
    "url": "blog/web/index.html",
    "revision": "5ed718949a428877edbba88bd194ff41"
  },
  {
    "url": "blog/web/javascript.html",
    "revision": "d63eee67a9ff487336d2436332e76ba4"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "8854161265c5cd4fc15999b104da9fd9"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "b6ee6805f695bed16644aee87effea64"
  },
  {
    "url": "blog/zen/thoughts.html",
    "revision": "0f2f6bbe9e8a4bb4493e551afd21cae5"
  },
  {
    "url": "books/coder.html",
    "revision": "a5745bb3e0fde28cbce4810e464008ad"
  },
  {
    "url": "books/cpp.html",
    "revision": "831db463671cdf2d5ec86f4bb96e84ae"
  },
  {
    "url": "books/index.html",
    "revision": "ce0f6b296f88a9abfc0af464aba7efed"
  },
  {
    "url": "books/mongo.html",
    "revision": "646981feacf30f0a2f318946309a2922"
  },
  {
    "url": "discuss/index.html",
    "revision": "22abeb5bacf71f2451bb3f8c8ea909fc"
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
    "revision": "7727ecf0d6133a9cc7a2ad674484d5fb"
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
    "revision": "4684e1e19b43c3079f4d6043d98fdd3c"
  },
  {
    "url": "logs/note.html",
    "revision": "8d1e5baf83d360cf11e9e746db79882d"
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
