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
    "revision": "18994d727dfa97a81d3ec989907b359d"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "a36a39ea77f023c9ae1a952459904c36"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "cd40ff09faa1a69c325334e55b151955"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "e83b59e7ecf82454415b4416b163f070"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "0258dd5459203b46a33b749ee3ce348c"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "cc091ba81545b525217e14a49bcf1f54"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "3f01eef7013c12acd6eda7c999a3f237"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "dc5a72d26be9e3dd77c0ecd0a3c618d1"
  },
  {
    "url": "assets/css/1.styles.df219779.css",
    "revision": "aa2bc38330851c67dcd2b54d43e3067b"
  },
  {
    "url": "assets/css/2.styles.22a3d6eb.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/3.styles.3559e107.css",
    "revision": "1c10db747c2f1b63f0f67cecfb5ff9d8"
  },
  {
    "url": "assets/css/37.styles.8c345538.css",
    "revision": "fb658dad590f05ba2221ddf8517f47c0"
  },
  {
    "url": "assets/css/4.styles.bcaae018.css",
    "revision": "8b9c8024f1a6cd206f13dc9cda26c1d2"
  },
  {
    "url": "assets/css/5.styles.2a8f05b0.css",
    "revision": "d93d99d85d0bb1e91622fe1e6f69f926"
  },
  {
    "url": "assets/css/7.styles.aadfea94.css",
    "revision": "c4517eab43661a5fbb7c08e089060f59"
  },
  {
    "url": "assets/css/8.styles.41001b5e.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/9.styles.605c5580.css",
    "revision": "3994acfaa5723745cd76d900ab30f3d9"
  },
  {
    "url": "assets/css/styles.f15a20a1.css",
    "revision": "b1038d2a4dda0e4389da12d5beb0d4de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.df219779.js",
    "revision": "59f08b9d73b86f764aeea9259e8a24c4"
  },
  {
    "url": "assets/js/10.5cc3544f.js",
    "revision": "a6a41fe6869d5f59da062b23f2271ab9"
  },
  {
    "url": "assets/js/11.4c42a64b.js",
    "revision": "416dae9f65562ff94a60c660bc035d97"
  },
  {
    "url": "assets/js/12.e686142e.js",
    "revision": "b18584a0d6266eb66829c60cd4c3abfb"
  },
  {
    "url": "assets/js/13.9b84dc8a.js",
    "revision": "91f1591b4a76fe92a1d8f17a49deb1bd"
  },
  {
    "url": "assets/js/14.81ce5eb0.js",
    "revision": "b0ed7147fbcb8e33b5ec25291ff32022"
  },
  {
    "url": "assets/js/15.29aafa03.js",
    "revision": "6e074be4807ba6f8db1d89de5c8dd694"
  },
  {
    "url": "assets/js/16.57592ec7.js",
    "revision": "6674309d67e2eb865708051d3b957425"
  },
  {
    "url": "assets/js/17.00f48613.js",
    "revision": "5a0500df90f14463849e4d1effadf271"
  },
  {
    "url": "assets/js/18.f0138505.js",
    "revision": "494b973a638cd5255cd4d37d6178b979"
  },
  {
    "url": "assets/js/19.05fb86bc.js",
    "revision": "fe02601dbf9777d3b8fef850eb010fb7"
  },
  {
    "url": "assets/js/2.22a3d6eb.js",
    "revision": "6a085171263d296a1f859577c2acf37f"
  },
  {
    "url": "assets/js/20.89597cd1.js",
    "revision": "a9c86cc0a4fccede649ff75fcf747178"
  },
  {
    "url": "assets/js/21.d96fe6d0.js",
    "revision": "979a198831c32ab95a9470e5f005879f"
  },
  {
    "url": "assets/js/22.f6a4077f.js",
    "revision": "915bb32ceeffb8a975fedacdbd35beae"
  },
  {
    "url": "assets/js/23.c4c05308.js",
    "revision": "ef8abae61facb919bf1fd8719753851a"
  },
  {
    "url": "assets/js/24.170e0ee3.js",
    "revision": "c94e57e36412959ae0be5b7a30db80e1"
  },
  {
    "url": "assets/js/25.af4e232b.js",
    "revision": "ec03dd97d35ef922d39135754e1d7f0c"
  },
  {
    "url": "assets/js/26.ede35fe8.js",
    "revision": "1f2987b85259873983b73d2119909a91"
  },
  {
    "url": "assets/js/27.8467600a.js",
    "revision": "e5d62d7585714c70403fdd575f888dfb"
  },
  {
    "url": "assets/js/28.2dc21d9d.js",
    "revision": "3311e470c902d132e2328b0afc8d0005"
  },
  {
    "url": "assets/js/29.1834c86d.js",
    "revision": "1583d8a676f72d049fee1208d04967b4"
  },
  {
    "url": "assets/js/3.3559e107.js",
    "revision": "923dcd9c967235c3cff1b8af571d49e9"
  },
  {
    "url": "assets/js/30.6943fb66.js",
    "revision": "2e779571edda2e65675cd2bf5abd1be5"
  },
  {
    "url": "assets/js/31.a5320281.js",
    "revision": "c196dad148f07b81f17bf2018764633c"
  },
  {
    "url": "assets/js/32.79f90cb6.js",
    "revision": "21d998e20d43147ddad2155eb4c43419"
  },
  {
    "url": "assets/js/33.727c4ec8.js",
    "revision": "7bb4b47751f2cf0f9226638d3d22c5ef"
  },
  {
    "url": "assets/js/34.3ffdb0cb.js",
    "revision": "42ee1f7f62321791087726616db87740"
  },
  {
    "url": "assets/js/35.83279bd9.js",
    "revision": "82f2fdb66fcd4b0eb7afdeccc49b3c16"
  },
  {
    "url": "assets/js/36.bd94bc6c.js",
    "revision": "bb82b6d558e7451f7ae6adf8eaad4da1"
  },
  {
    "url": "assets/js/37.8c345538.js",
    "revision": "0b7c2878aa59bf5391306325cf30c234"
  },
  {
    "url": "assets/js/4.bcaae018.js",
    "revision": "6ad499a494a1c59de346c8ae2bea21d7"
  },
  {
    "url": "assets/js/5.2a8f05b0.js",
    "revision": "98700fd251a6ba9d1a328f801bdc9929"
  },
  {
    "url": "assets/js/6.2d289d9d.js",
    "revision": "969bf7875b5c4279fb9b2f7987d14941"
  },
  {
    "url": "assets/js/7.aadfea94.js",
    "revision": "b227a90e0894728d3b02d5f278caa464"
  },
  {
    "url": "assets/js/8.41001b5e.js",
    "revision": "a19eeaa85ce9424ce3a69c925b625035"
  },
  {
    "url": "assets/js/9.605c5580.js",
    "revision": "9043a37d35bbb885f8a2d2ba436cb1e8"
  },
  {
    "url": "assets/js/app.f15a20a1.js",
    "revision": "0c5b6e4f1426b4ef9a33553bb077a623"
  },
  {
    "url": "blog/index.html",
    "revision": "c963fb52d18266a879524f54ace7a105"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "8e5b8be8306535799e06a5cb6db5592f"
  },
  {
    "url": "blog/python/index.html",
    "revision": "2c0f2fc17fffe985e5ac9e35e85e9b97"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "be7c7c1d9061bff3fcbbc492b9eeab06"
  },
  {
    "url": "blog/python/re.html",
    "revision": "82c9ded68dfef5a8ff222a10da0140ed"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "0ff9a9355562b9296fc513b4722192d1"
  },
  {
    "url": "blog/research/index.html",
    "revision": "3464ca196f1d7c244b9814462185eb9e"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "05cc33b5ab9e7095a33875a4e2bfb8be"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "d227f186a4824ea8d2ba1ea3d4f248ca"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "6d3283f1a6a4b4a4bebca91f6ca8a6ea"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "06ad33239a192beb496beae05ed53d94"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "40b0bf959ea817103d402f10f37bcff8"
  },
  {
    "url": "blog/web/database.html",
    "revision": "6ae3c889673e4e10e6fe7d1f575b30a5"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "61fa728930e800c23ec4941652870bae"
  },
  {
    "url": "blog/web/index.html",
    "revision": "a3b4deba95bf01604b262b25383b70f6"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "4f84390c7e1782d66d8197458ed3a233"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "72449e37341664e390147e4b08e24972"
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
    "revision": "cc548c0eb634867db8255f4d5a185e56"
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
    "revision": "fa2ea6385a98472da26a2c8181743532"
  },
  {
    "url": "logs/note.html",
    "revision": "9373f0efbb1c3108d761a20553fdf2e2"
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
