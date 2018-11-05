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
    "revision": "7b4faa26fa9b54783a5828bce7eb5584"
  },
  {
    "url": "about/index.html",
    "revision": "6b79f96d7efc41b02d0e417a10c994e4"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "f7d16da40edd4d2dab899ba584416b45"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "9d11da9db2a51f37999d04f719f3397a"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "8842ef6322a72c83424e214ad88158de"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "b50ca49610475657fde8588677faa387"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "979aaa34d95bf222cd7aad9a2227844b"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "ec780c896d51013c0774b7f9db0587cd"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "da9712a4ebd41d303168a971df063112"
  },
  {
    "url": "assets/css/1.styles.866f5180.css",
    "revision": "aa2bc38330851c67dcd2b54d43e3067b"
  },
  {
    "url": "assets/css/10.styles.eb382d07.css",
    "revision": "c4517eab43661a5fbb7c08e089060f59"
  },
  {
    "url": "assets/css/11.styles.77bce751.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/12.styles.4333721c.css",
    "revision": "3994acfaa5723745cd76d900ab30f3d9"
  },
  {
    "url": "assets/css/2.styles.9490345a.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/3.styles.2c50b888.css",
    "revision": "4eefa6035a67992f0f408389becb525f"
  },
  {
    "url": "assets/css/4.styles.dd614ea4.css",
    "revision": "8b9c8024f1a6cd206f13dc9cda26c1d2"
  },
  {
    "url": "assets/css/45.styles.91128e5e.css",
    "revision": "fb658dad590f05ba2221ddf8517f47c0"
  },
  {
    "url": "assets/css/5.styles.be9c1bae.css",
    "revision": "1c10db747c2f1b63f0f67cecfb5ff9d8"
  },
  {
    "url": "assets/css/6.styles.eeda987c.css",
    "revision": "c4517eab43661a5fbb7c08e089060f59"
  },
  {
    "url": "assets/css/7.styles.5c2d4567.css",
    "revision": "b10cccc1ae82b860b7a23910361c5d75"
  },
  {
    "url": "assets/css/9.styles.842ffe5c.css",
    "revision": "9041b97aa8336ab05054201dbc1d8c48"
  },
  {
    "url": "assets/css/styles.8b529e6a.css",
    "revision": "ba4b2147e51dd871271a3f0fd6b26d6d"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.866f5180.js",
    "revision": "aafe8960ffbfbe7374bea727be90beff"
  },
  {
    "url": "assets/js/10.eb382d07.js",
    "revision": "04a286e5df0075ff949d0a0ddbf740bd"
  },
  {
    "url": "assets/js/11.77bce751.js",
    "revision": "a4b17d246d16987911e9811d7d964ef8"
  },
  {
    "url": "assets/js/12.4333721c.js",
    "revision": "34283f6f5e439a8d0b6a4dbdfab284be"
  },
  {
    "url": "assets/js/13.381497ce.js",
    "revision": "9be14fba2bfd4ae651f84f0fe57d64d1"
  },
  {
    "url": "assets/js/14.a88114aa.js",
    "revision": "e65235855a0875a0d458e6aff0d4d7aa"
  },
  {
    "url": "assets/js/15.4940b42c.js",
    "revision": "c08dc19fa4b95e1f7efcb7fc845b25e9"
  },
  {
    "url": "assets/js/16.d9353400.js",
    "revision": "c77ca5c0544b1689246d4755520e7d6f"
  },
  {
    "url": "assets/js/17.6cf6da1b.js",
    "revision": "47ce1664c855ca4ab4b391def8af473e"
  },
  {
    "url": "assets/js/18.93172839.js",
    "revision": "095932564e5f36028dade7940bffd9ff"
  },
  {
    "url": "assets/js/19.38c6dea5.js",
    "revision": "ffc414209b53e3567ee1a85c667564fc"
  },
  {
    "url": "assets/js/2.9490345a.js",
    "revision": "572557e2bfb6d097e5492d420efa9843"
  },
  {
    "url": "assets/js/20.1d051841.js",
    "revision": "ea50c003cb81aac738f5361c150b8761"
  },
  {
    "url": "assets/js/21.e4c99449.js",
    "revision": "99fce8b2315836e8a4d1b0880318d287"
  },
  {
    "url": "assets/js/22.646fa06f.js",
    "revision": "d68893241c8e9f00fd31c18eba25b184"
  },
  {
    "url": "assets/js/23.1f51775a.js",
    "revision": "f05435703827048ee21a1434b930046c"
  },
  {
    "url": "assets/js/24.eab912ef.js",
    "revision": "5faac7b2e38009428e71d00200dba521"
  },
  {
    "url": "assets/js/25.732e3812.js",
    "revision": "c345ff56d6847890f7f42e61476c915f"
  },
  {
    "url": "assets/js/26.42bbf290.js",
    "revision": "dbe82f27d621381b5a95087d9fb86137"
  },
  {
    "url": "assets/js/27.9684b78a.js",
    "revision": "bfc570fc24b66b6bb54e6fa9d7777aff"
  },
  {
    "url": "assets/js/28.676e6959.js",
    "revision": "36c8a5c9e9656f3c37fa122beb70500d"
  },
  {
    "url": "assets/js/29.0e461023.js",
    "revision": "a3e980c329e3fa5f48ea446362ec9529"
  },
  {
    "url": "assets/js/3.2c50b888.js",
    "revision": "035b0721017690e6ca82d014f77a085c"
  },
  {
    "url": "assets/js/30.78e776e1.js",
    "revision": "8848f87d749d1ae02ba03e0a784a74b7"
  },
  {
    "url": "assets/js/31.703b9fcf.js",
    "revision": "a870f0b00c6d1fe0fe678195231bba70"
  },
  {
    "url": "assets/js/32.10430889.js",
    "revision": "22fb1918ec25a4fb77c345a150d17d23"
  },
  {
    "url": "assets/js/33.aea32fe7.js",
    "revision": "e55f0307fae1de364ae73b55dcc5d52a"
  },
  {
    "url": "assets/js/34.15e95467.js",
    "revision": "ae1b9b87315a9f49c6d4de27d1e777a6"
  },
  {
    "url": "assets/js/35.e5016f79.js",
    "revision": "6a6b4b4b7f145ff186ac0267d9af0281"
  },
  {
    "url": "assets/js/36.24cdd350.js",
    "revision": "63cf90c61d7ff350e382973926463da7"
  },
  {
    "url": "assets/js/37.a13b486a.js",
    "revision": "2920efc5befc0033cc98c4eb5d02f977"
  },
  {
    "url": "assets/js/38.2f95b7a2.js",
    "revision": "6829254676f72ca4cc925faeb0b31fb1"
  },
  {
    "url": "assets/js/39.addd0874.js",
    "revision": "37b174eb0cd7967ab7ebdbf28d92e38f"
  },
  {
    "url": "assets/js/4.dd614ea4.js",
    "revision": "348a6465da859537300a7875e17c6df7"
  },
  {
    "url": "assets/js/40.74dfaaeb.js",
    "revision": "67d47904b8f51500e1b71514ad7ba650"
  },
  {
    "url": "assets/js/41.2754f1dd.js",
    "revision": "fbe6bf28bd138e3c2424179956a61f5d"
  },
  {
    "url": "assets/js/42.a632cc7c.js",
    "revision": "c09c1b4cdf6e7a5f363f87688bc597ad"
  },
  {
    "url": "assets/js/43.0df5eed8.js",
    "revision": "1f06033eda1a901e90fdf3f0bdefb951"
  },
  {
    "url": "assets/js/44.b8ab30a0.js",
    "revision": "4a0f14de9613a6c2a55dcf805368b5ad"
  },
  {
    "url": "assets/js/45.91128e5e.js",
    "revision": "ff065badd39065d7f9b1d1de68c31f67"
  },
  {
    "url": "assets/js/46.09922442.js",
    "revision": "4524f5516241bbe0c9081ac89ac3f5b3"
  },
  {
    "url": "assets/js/47.ab13716c.js",
    "revision": "e57a1b4b719cfaae15ab668a7972f664"
  },
  {
    "url": "assets/js/5.be9c1bae.js",
    "revision": "2ea57da34f5d2b75a0a81cb06ea87d03"
  },
  {
    "url": "assets/js/6.eeda987c.js",
    "revision": "1fc5865fe973169b982c5a03822e60db"
  },
  {
    "url": "assets/js/7.5c2d4567.js",
    "revision": "4c774692b1eb1de8364e064942bbb708"
  },
  {
    "url": "assets/js/8.809141b2.js",
    "revision": "1364f14fd695e6c80d8d17ae49347646"
  },
  {
    "url": "assets/js/9.842ffe5c.js",
    "revision": "762e09d0cd5a3e35058acaf0a718f06e"
  },
  {
    "url": "assets/js/app.8b529e6a.js",
    "revision": "1335311dc69c0cb4e3977fe3c69b80b1"
  },
  {
    "url": "blog/index.html",
    "revision": "4c25e65911c88f3821b44a9f194d8edc"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "90ee4a1a75c5cc3ee0b7e38399bf092f"
  },
  {
    "url": "blog/python/index.html",
    "revision": "7adf6406bc8b81deb9337b346d03337a"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "f3739538667ce1442d7c50b272453912"
  },
  {
    "url": "blog/python/re.html",
    "revision": "92a88f0a89100c65fbde8a5a97b914d4"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "9b922542a12a1cb48746fe92433edc01"
  },
  {
    "url": "blog/research/index.html",
    "revision": "3f1bec8bd26eb1a2ac6f66dce818f78c"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "4af1c9e77d7c8c9a2250e549750046b4"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "62d308033e83a60a135466bb45942986"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "a8efdae1bd3d081063a0e214b0ef463c"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "ee45bda9c2a87f9b781b3bca9162f5c4"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "459887f51ed6d5f35c1a7a99c0f6fd52"
  },
  {
    "url": "blog/web/css.html",
    "revision": "ad1f1d319412a722381384bb6c25b3eb"
  },
  {
    "url": "blog/web/database.html",
    "revision": "c7208a52b577de95cdcabd4290bcdbab"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "7b83a4411a930a012e1efe1f9d1cbe19"
  },
  {
    "url": "blog/web/index.html",
    "revision": "ff4368dcd32f77c495f781de693e6296"
  },
  {
    "url": "blog/web/javascript.html",
    "revision": "94211e09663d991692a042d0763a8f33"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "b9722cb9377e737ac2584364bbeb5565"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "17a30c03a62b223ff6ebc7434d8ac29e"
  },
  {
    "url": "books/index.html",
    "revision": "063d6de2fc3519f06e01ac87f9f4729d"
  },
  {
    "url": "discuss/index.html",
    "revision": "332907419e5d5e62a1b7487863fd89b5"
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
    "revision": "a32539330c40f4235584ad1eac920e83"
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
    "revision": "dfbaa77a5107e493cf6219c7df5023cf"
  },
  {
    "url": "logs/note.html",
    "revision": "58bc5c8704c86ed72b03687065b89b4c"
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
