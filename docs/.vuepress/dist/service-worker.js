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
    "revision": "c42f5e94ad647102567cb3366357e321"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "18f5b1e00b1a46eb31d34cd6c22bbe45"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "de5da14b8926eb437f987be0cd46ebe1"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "d3f0b6d7dfaf50c41732e015cc46ba9f"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "737fa1bdd5cbdd58ee90ae6f9efefefb"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "81c43c242bc979b3dbfe1275f2542be2"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "b308d40e7f5342d2c01aff6ae9b9d8d5"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "a504a2c6c85f380aba3ef0686fca6323"
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
    "url": "assets/css/6.styles.eebc98d9.css",
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
    "url": "assets/css/styles.819a0846.css",
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
    "url": "assets/js/10.513ca0e9.js",
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
    "url": "assets/js/14.cdc563dc.js",
    "revision": "d5ed44618f66141537b2d63b80a98d4c"
  },
  {
    "url": "assets/js/15.17021041.js",
    "revision": "6afd76be45c4b8d5d1c7b83bb6c2d344"
  },
  {
    "url": "assets/js/16.57592ec7.js",
    "revision": "6674309d67e2eb865708051d3b957425"
  },
  {
    "url": "assets/js/17.16c0f3fa.js",
    "revision": "f6081d5479070146c14670f4ac42c756"
  },
  {
    "url": "assets/js/18.4402d93a.js",
    "revision": "c974216696e982e0411e736a367909e3"
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
    "url": "assets/js/5.338f543d.js",
    "revision": "1e819a4d6e62e75189ea16b51f3ef582"
  },
  {
    "url": "assets/js/6.eebc98d9.js",
    "revision": "574154d1a2b63efd7a364849b2440a26"
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
    "url": "assets/js/app.819a0846.js",
    "revision": "f3c69e5e84073824dc332eeedaa8fa6d"
  },
  {
    "url": "blog/index.html",
    "revision": "606bf6b9f8a4b16297be881b34f8a0c2"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "a13707fc39b9de5326e3cb8694c7a8d7"
  },
  {
    "url": "blog/python/index.html",
    "revision": "641f8adfab4fd7b14c26f3020190a0e5"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "cf6389f4478db3316fe6219ae392e0ff"
  },
  {
    "url": "blog/python/re.html",
    "revision": "b659ee52226d30778443e9eee6d279f9"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "03f52ae25b348901725647a59378f899"
  },
  {
    "url": "blog/research/index.html",
    "revision": "dede20d6b356b20c387ec32cd3559aa8"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "a2ed1b57a084bf06816491e8d4990d3e"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "e76a4b4e4cf1d823234ae58960191949"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "0512ef0160a46b862b91bd7f1b8977d3"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "8322ac0baacf34e798643ce5c9ea93bb"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "b84feb116219c0d8a5f14dee089324cd"
  },
  {
    "url": "blog/web/database.html",
    "revision": "717cbe316851a0831ff1ea480852ccfa"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "5bba6c975e48bb619ac6c3f337eb73db"
  },
  {
    "url": "blog/web/index.html",
    "revision": "52d974e983a7ea4a4b30f990ee1ad56c"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "3c4f409ea00de37b12d5a592bbdd9477"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "600567b0299be32cfe71d0e17216ecbf"
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
    "revision": "5676053e28f0debf13d1576bdfd52803"
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
    "revision": "d3ffd63c18ebdac138ae5f819f86facc"
  },
  {
    "url": "logs/note.html",
    "revision": "291ec32f10c898a2bbbdf90bd94426a5"
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
