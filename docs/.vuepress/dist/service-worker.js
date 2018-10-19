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
    "revision": "8829edd5bf8776f7cf011c359407a671"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "0da3e6a51155b58a4c3d633b2f721a26"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "a1aaad5bba3d2cd0bf3346d268de181a"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "67211fd57b154ae1fd7392be7685e8a0"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "75e5231cf012a5ea4d08e8e12941458d"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "cc1dfec73a122bb6732bc31fab2425a6"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "4cad8b9448fa692cd8f49bea507a1553"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "a65e4517af33fa4ce2f29bd8715a9147"
  },
  {
    "url": "assets/css/1.styles.3249b9bd.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.e8aaf658.css",
    "revision": "1c10db747c2f1b63f0f67cecfb5ff9d8"
  },
  {
    "url": "assets/css/3.styles.ea89bd89.css",
    "revision": "8b9c8024f1a6cd206f13dc9cda26c1d2"
  },
  {
    "url": "assets/css/34.styles.bc45280a.css",
    "revision": "fb658dad590f05ba2221ddf8517f47c0"
  },
  {
    "url": "assets/css/35.styles.a16b6ab8.css",
    "revision": "aa2bc38330851c67dcd2b54d43e3067b"
  },
  {
    "url": "assets/css/4.styles.3cf6e6fd.css",
    "revision": "c4517eab43661a5fbb7c08e089060f59"
  },
  {
    "url": "assets/css/5.styles.6fab8eb6.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/6.styles.d19dcbbe.css",
    "revision": "3994acfaa5723745cd76d900ab30f3d9"
  },
  {
    "url": "assets/css/styles.5d1db4a6.css",
    "revision": "b1038d2a4dda0e4389da12d5beb0d4de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3249b9bd.js",
    "revision": "cc6f31a169c58a1b147386d18c33cffb"
  },
  {
    "url": "assets/js/10.8b58b080.js",
    "revision": "08a782014abf3ffbe6b409c07f60da27"
  },
  {
    "url": "assets/js/11.4f6e183f.js",
    "revision": "3f811a6e8fbcd6654465ea11dd5e32d7"
  },
  {
    "url": "assets/js/12.db9b34ad.js",
    "revision": "3a7e8f2e95246652e71621f48843036f"
  },
  {
    "url": "assets/js/13.f4a8e1dc.js",
    "revision": "24343a46aa7065af8a9928fbfa431ddc"
  },
  {
    "url": "assets/js/14.17db424d.js",
    "revision": "ddfe1139468dcc9339491a4182ef395b"
  },
  {
    "url": "assets/js/15.132ea78e.js",
    "revision": "4153c3e259bbff081ec7b7c36cd94995"
  },
  {
    "url": "assets/js/16.6f90e8b2.js",
    "revision": "9a2467a83e17602485222aec35c1e5b6"
  },
  {
    "url": "assets/js/17.281b6b6c.js",
    "revision": "c259a5c516e997190ae74e032f695970"
  },
  {
    "url": "assets/js/18.64fda46f.js",
    "revision": "10bf438203fb288ae3a47bf6f4bedbb1"
  },
  {
    "url": "assets/js/19.d5571d3d.js",
    "revision": "5992c399c5771a5422a960f78d50773e"
  },
  {
    "url": "assets/js/2.e8aaf658.js",
    "revision": "cc7d2290f461518e16078981d236655b"
  },
  {
    "url": "assets/js/20.d0d22b68.js",
    "revision": "7e6ba928a9c678e2026bc36c79b004ac"
  },
  {
    "url": "assets/js/21.1c1a9d57.js",
    "revision": "1fa8f28a5dfbbf37868bd2fa5e2ccfed"
  },
  {
    "url": "assets/js/22.9ab3e50e.js",
    "revision": "b9a386a0b597ed5936be4c6c7257c0da"
  },
  {
    "url": "assets/js/23.9fe83fa4.js",
    "revision": "66888d9ff7399d3fce773c11cf681a96"
  },
  {
    "url": "assets/js/24.b359ebe1.js",
    "revision": "611397aec9ef7d775145549c863d2915"
  },
  {
    "url": "assets/js/25.dd7b993a.js",
    "revision": "f5be34566fdde89221e779f84710b329"
  },
  {
    "url": "assets/js/26.c3fef919.js",
    "revision": "a04985d6dc13c09c85548badc806b1f3"
  },
  {
    "url": "assets/js/27.a612fe20.js",
    "revision": "c6a12c786c9865bae21716f76b7a71b9"
  },
  {
    "url": "assets/js/28.665dc6c7.js",
    "revision": "aca38bda373aaa3b5c85f1ee8cefa5af"
  },
  {
    "url": "assets/js/29.0614ae0e.js",
    "revision": "b4b80b02ff7d81545add1465723aa8ce"
  },
  {
    "url": "assets/js/3.ea89bd89.js",
    "revision": "6fb52e59178d7ebaac240ad50fd1aa72"
  },
  {
    "url": "assets/js/30.5d6abb8a.js",
    "revision": "b5aea7494d6b36c78a03e103f6193270"
  },
  {
    "url": "assets/js/31.068aa54a.js",
    "revision": "bb3dffd95d583fb0fc36e1d5f489b78b"
  },
  {
    "url": "assets/js/32.29a54f8d.js",
    "revision": "dee84906adf141a1d96313e7f5313d47"
  },
  {
    "url": "assets/js/33.4bb898a4.js",
    "revision": "842a74416a15674670343095086f49ca"
  },
  {
    "url": "assets/js/34.bc45280a.js",
    "revision": "a0aecbb0a57be211f72d9b0a06f4d0e4"
  },
  {
    "url": "assets/js/35.a16b6ab8.js",
    "revision": "2e9664af4e2b5446f9f5e29042242494"
  },
  {
    "url": "assets/js/4.3cf6e6fd.js",
    "revision": "fc70e2decb8ccced89dc2dbd42dc421c"
  },
  {
    "url": "assets/js/5.6fab8eb6.js",
    "revision": "c542906a48a46827a7e3cf941b3c104e"
  },
  {
    "url": "assets/js/6.d19dcbbe.js",
    "revision": "a8328f59fa38c8f9b5e283dbded36201"
  },
  {
    "url": "assets/js/7.f179a480.js",
    "revision": "94cae45bccabd2d0bb7d88578cdfdd1c"
  },
  {
    "url": "assets/js/8.99dfb9cd.js",
    "revision": "c9c6ca86819254e1c7ad2a0d8264a100"
  },
  {
    "url": "assets/js/9.d5ecbea9.js",
    "revision": "5ece6a429c0f2d89853f2c57ccfd6219"
  },
  {
    "url": "assets/js/app.5d1db4a6.js",
    "revision": "8ad815b7e196c0cd24cff74611306c0a"
  },
  {
    "url": "blog/index.html",
    "revision": "773010f94ce9822ca050fd2796d1e1a0"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "356e880cf0cd5861f3ad6abc648bde27"
  },
  {
    "url": "blog/python/index.html",
    "revision": "3da2e1289721ffc30fa5396864355cb4"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "281ee0df6b65842e02003cedaac7b685"
  },
  {
    "url": "blog/python/re.html",
    "revision": "609c394c9a6040f0d47eb0e3db276068"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "2a0429dcc946a28c96efd1e4c271ab50"
  },
  {
    "url": "blog/research/index.html",
    "revision": "6418d95e2f8162045dade35d53ebb38a"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "21e0e34cc90dfa7db45277dd1fa5b447"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "8f2f6d62253a714810d32e5339e55e1f"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "56e796b88c7d30cc88e549a751f88993"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "fd2775b2e743bb2b951a58345b01623d"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "1a24a92853337a89836f9ad41205bd5c"
  },
  {
    "url": "blog/web/database.html",
    "revision": "573be24d17d8bad6a5e5c9438bf79d26"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "d1e26172751bc6d3fddd43ccf3334178"
  },
  {
    "url": "blog/web/index.html",
    "revision": "2bea06d78137330d92725da86ab3deea"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "a560693fd095a033cdbd3c5ee503c004"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "9cf93be86709d37e438e5555c24369b6"
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
    "revision": "028df7907562de161d0df1c9efff8c1f"
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
    "revision": "0555d554e7ed0b0e909a66338dd7ffac"
  },
  {
    "url": "logs/note.html",
    "revision": "784097b11a7d5d28da75f483f7ce1fba"
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
