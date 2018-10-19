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
    "revision": "8523b15f26c9c8ff89268ffe531a85b1"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "019c8e5069d97f929b03f506765b9da4"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "375cda7d409c1745f108cf349a262604"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "6c8b128b74af66867f12517d3541142d"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "ac815ed843fd86c0e6634c4cf5c38c25"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "fcd4ffe9c55ed17f2982df5f26c9c867"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "93404db3fdb52f85c00d6f486bd45a15"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "f27e069f516691c3be2b309725f85d6c"
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
    "url": "assets/css/3.styles.bb35bad8.css",
    "revision": "8b9c8024f1a6cd206f13dc9cda26c1d2"
  },
  {
    "url": "assets/css/37.styles.699d5b5d.css",
    "revision": "fb658dad590f05ba2221ddf8517f47c0"
  },
  {
    "url": "assets/css/4.styles.4c9e40be.css",
    "revision": "1c10db747c2f1b63f0f67cecfb5ff9d8"
  },
  {
    "url": "assets/css/6.styles.b6e4727e.css",
    "revision": "d93d99d85d0bb1e91622fe1e6f69f926"
  },
  {
    "url": "assets/css/7.styles.1ff49df6.css",
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
    "url": "assets/css/styles.8c35830a.css",
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
    "url": "assets/js/10.742f6076.js",
    "revision": "0c1668d305f933e53d713067c6830c5e"
  },
  {
    "url": "assets/js/11.563e0ec2.js",
    "revision": "9c746d58385cf3bd202070c01abcc9de"
  },
  {
    "url": "assets/js/12.c9020e3e.js",
    "revision": "25813993e3947b433700a366480608e8"
  },
  {
    "url": "assets/js/13.b49d1473.js",
    "revision": "655aaff8a020599bc3a462b3a3df518a"
  },
  {
    "url": "assets/js/14.cdc563dc.js",
    "revision": "d5ed44618f66141537b2d63b80a98d4c"
  },
  {
    "url": "assets/js/15.9a23e686.js",
    "revision": "aa228b4f448a03b8ba7b24a08fbfcf4c"
  },
  {
    "url": "assets/js/16.56e2f999.js",
    "revision": "26558d3d9add06ec6a07ec97ecdba8c6"
  },
  {
    "url": "assets/js/17.4d1b0a56.js",
    "revision": "13a881b291235a4c36eff9a8c8baa864"
  },
  {
    "url": "assets/js/18.7caa331d.js",
    "revision": "b12563f97470369f04bb70fecfb977a0"
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
    "url": "assets/js/20.d28d54db.js",
    "revision": "0b1c4e563cbc67ecd1370b572bd31ec9"
  },
  {
    "url": "assets/js/21.000e2ea4.js",
    "revision": "54ff3d66b758bb11f21011f3fc7f1004"
  },
  {
    "url": "assets/js/22.d55476f5.js",
    "revision": "8db9e3216745e74f85ac158315ecaeec"
  },
  {
    "url": "assets/js/23.41794abb.js",
    "revision": "e1c1fbe9da77aa84cce6fe22f3c5aa1e"
  },
  {
    "url": "assets/js/24.170e0ee3.js",
    "revision": "c94e57e36412959ae0be5b7a30db80e1"
  },
  {
    "url": "assets/js/25.c422bdcc.js",
    "revision": "e5c780b606b378906305a9c7b7ad0185"
  },
  {
    "url": "assets/js/26.ede35fe8.js",
    "revision": "1f2987b85259873983b73d2119909a91"
  },
  {
    "url": "assets/js/27.638d082e.js",
    "revision": "a295f9e26bd4e06e2982c2a7d7d4ba57"
  },
  {
    "url": "assets/js/28.79275108.js",
    "revision": "88ac1a55c20ee19f4b0a8bbf7c8bdb50"
  },
  {
    "url": "assets/js/29.0b32304c.js",
    "revision": "c8ea700d456baef693afd661d6e497db"
  },
  {
    "url": "assets/js/3.bb35bad8.js",
    "revision": "4e91a2580d8aeb58c968551029e71a9b"
  },
  {
    "url": "assets/js/30.8cf4f9e8.js",
    "revision": "2120f521cb6c9c3ab7db9c5ecde52a8c"
  },
  {
    "url": "assets/js/31.9056e169.js",
    "revision": "a44978b516487c03516be3c0a0a87b16"
  },
  {
    "url": "assets/js/32.736cfca7.js",
    "revision": "2ce729cb964c6209d4f72b6837d8ec4e"
  },
  {
    "url": "assets/js/33.b5516254.js",
    "revision": "e3daceee5efa4b39ef17e052ddd94a9a"
  },
  {
    "url": "assets/js/34.6da36fd0.js",
    "revision": "bd7f9444567d2c7cfbcbd183247929a6"
  },
  {
    "url": "assets/js/35.d4663ffb.js",
    "revision": "8fa9cb8bba66675420b87d34ab2ffec8"
  },
  {
    "url": "assets/js/36.1ac3281c.js",
    "revision": "fc6f3e9d2bbae1d5d194272aacafffd8"
  },
  {
    "url": "assets/js/37.699d5b5d.js",
    "revision": "4ca8e04524886c8085fbad520774dcee"
  },
  {
    "url": "assets/js/4.4c9e40be.js",
    "revision": "ddb60edd5b416f7e40925e6210871472"
  },
  {
    "url": "assets/js/5.338f543d.js",
    "revision": "1e819a4d6e62e75189ea16b51f3ef582"
  },
  {
    "url": "assets/js/6.b6e4727e.js",
    "revision": "b96d059707ac6ac5d52a25084cde400f"
  },
  {
    "url": "assets/js/7.1ff49df6.js",
    "revision": "33602a025fc959c2410a506b136cf86f"
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
    "url": "assets/js/app.8c35830a.js",
    "revision": "49b19f0853737f09654311866b452f4c"
  },
  {
    "url": "blog/index.html",
    "revision": "356a13ab98083edf58f0b27384822f39"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "0abec14fb57ae3eea4e58b661aba6b33"
  },
  {
    "url": "blog/python/index.html",
    "revision": "143167cb725db708001e3e0eb17025d5"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "0981c727bc34869d85cde7fcc554262c"
  },
  {
    "url": "blog/python/re.html",
    "revision": "350f621d096914ed5e56b8b99afef94b"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "32045cde678659fa2278aa08bf0035d8"
  },
  {
    "url": "blog/research/index.html",
    "revision": "40414a222c14d9d4ac5c51c24da4efb7"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "117923cd2483c6947013a4d44a47d677"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "0ac4c0f7153957d7af9c5a671db91e5d"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "15941ba09d2e96853516de30453b87a9"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "08d1598f8fd1a5e642c66482e5781790"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "45f682e1e787a2d46724f92e914be51d"
  },
  {
    "url": "blog/web/database.html",
    "revision": "533d9a700dad70d0f10909dd89843cc1"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "9c5986dcf19bb2203b8532f2db2b2500"
  },
  {
    "url": "blog/web/index.html",
    "revision": "ee59027158a53c1ba9b99161bc785143"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "170d4b7405edca703334294c96097a70"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "fd63016a4b27cda982799a1c8fda44a9"
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
    "revision": "b4373bab7232754c017a5d6425aed87e"
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
    "revision": "dc1fe764ee84175d3164f4e6a3b5eb30"
  },
  {
    "url": "logs/note.html",
    "revision": "4804d1c8fccad3dea9dfdf9e5bb6af04"
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
