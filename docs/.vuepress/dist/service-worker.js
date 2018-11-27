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
    "revision": "07ecf3199a37be4741b9fe0f196fa9df"
  },
  {
    "url": "about/index.html",
    "revision": "9ff9df315d85fd451bc054032e43f6a1"
  },
  {
    "url": "algorithm/cpp/b.html",
    "revision": "46b78d61debc5609cda416f22c612308"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "496cb68d5d25fac29d724f848bb7d6fa"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "0555d567ced8abbaede091a238f0a8c8"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "8ade62b21f1ad81640ed5c6f46970ee4"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "11eaf27f394b2268a9f61d9e167f8a51"
  },
  {
    "url": "algorithm/python/urllib.html",
    "revision": "886e17d30daed3530cebc7bd68332c85"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "f7d15eeb89496dfda167720d97f166e8"
  },
  {
    "url": "assets/css/0.styles.ee132f6f.css",
    "revision": "f33b7d1c07032a7f6a05c852ac2016dd"
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
    "url": "assets/js/10.61896694.js",
    "revision": "9f174f517946edaa400278df05343fac"
  },
  {
    "url": "assets/js/11.b4673bd6.js",
    "revision": "94631c624d0e0d0f320cf62d84918205"
  },
  {
    "url": "assets/js/12.0c87f08d.js",
    "revision": "ff4c15cc6aacde06f84338b0653d6fc3"
  },
  {
    "url": "assets/js/13.9cd8420d.js",
    "revision": "7b7a3591a776082e67a2188096391115"
  },
  {
    "url": "assets/js/14.81252a8f.js",
    "revision": "6670b78ebc2d1ed92543286e5e66ed99"
  },
  {
    "url": "assets/js/15.20e7a332.js",
    "revision": "d0629b5aef6b18ef771906189ddf8da4"
  },
  {
    "url": "assets/js/16.0ca6de9f.js",
    "revision": "67bda9c620daf52ec00acf603bf533c9"
  },
  {
    "url": "assets/js/17.412a80b6.js",
    "revision": "1a5fec5314f90b2f7d1821f155b12de8"
  },
  {
    "url": "assets/js/18.3f81b1e0.js",
    "revision": "838bf96346f09dd2a1d96f8ec4d95338"
  },
  {
    "url": "assets/js/19.79a05b12.js",
    "revision": "481d94ca37d8b94bf49f86287689ebc7"
  },
  {
    "url": "assets/js/2.b78440d3.js",
    "revision": "aab776ca369e425c3ce7f677a437dde5"
  },
  {
    "url": "assets/js/20.9cc00f30.js",
    "revision": "e34dd1af40d35d8dc9b964172dba1983"
  },
  {
    "url": "assets/js/21.e9d69e2a.js",
    "revision": "fad9927e6e6e9e2966a0b0cf017783c0"
  },
  {
    "url": "assets/js/22.72d73320.js",
    "revision": "b3b20f05e19223f716d9007f63b13462"
  },
  {
    "url": "assets/js/23.f81dee7b.js",
    "revision": "20346b4e9a35f1754a2749c149471f72"
  },
  {
    "url": "assets/js/24.eff7a861.js",
    "revision": "de66dc838e55f0da5e5a74b4004f269d"
  },
  {
    "url": "assets/js/25.d537566a.js",
    "revision": "a331c6fce6bd18de02abbc515320244a"
  },
  {
    "url": "assets/js/26.55173bfc.js",
    "revision": "387f9699b74ceb9f7b24097a70e29c0f"
  },
  {
    "url": "assets/js/27.80011268.js",
    "revision": "03e6942cc54b9745fa8e1a5c652096a2"
  },
  {
    "url": "assets/js/28.a79d807b.js",
    "revision": "76743999403a4ec37e0ce4d8117e37f5"
  },
  {
    "url": "assets/js/29.e18cc0e8.js",
    "revision": "f2da1e583c7afe8ed6cf2cc47f6c535a"
  },
  {
    "url": "assets/js/3.4f33097c.js",
    "revision": "4f0a19af6a7626dbd13962647f4efece"
  },
  {
    "url": "assets/js/30.77b9bf4c.js",
    "revision": "db133123a016443f1eae6a6e05e78b9c"
  },
  {
    "url": "assets/js/31.95a84d29.js",
    "revision": "6f8eb41aa7616584ba0f932eb2cb03b9"
  },
  {
    "url": "assets/js/32.28f9569b.js",
    "revision": "b1ff9a6e58ddf6486b3964dede803f9b"
  },
  {
    "url": "assets/js/33.d1a07b93.js",
    "revision": "ef6d343cfd8b12d299ad47e356d68982"
  },
  {
    "url": "assets/js/34.9fa41c42.js",
    "revision": "274e862acbc1adad016ccaa9ed99ac21"
  },
  {
    "url": "assets/js/35.be0aea02.js",
    "revision": "54ed7407b1a69e9887b4d7ec06afa7b7"
  },
  {
    "url": "assets/js/36.2d134060.js",
    "revision": "2b50d3bc4dad394b3b19be5b74c5303f"
  },
  {
    "url": "assets/js/37.497396e9.js",
    "revision": "08f785e870f315173bd6b87ba1e3d1ec"
  },
  {
    "url": "assets/js/38.d96bfd43.js",
    "revision": "d60008d05882093b006c270285e324a4"
  },
  {
    "url": "assets/js/39.3d7fbe9e.js",
    "revision": "164a38a61e9ef4654638ba501fe6b7d8"
  },
  {
    "url": "assets/js/4.5616e15f.js",
    "revision": "d3e3232cab428cbd5d277a9419e0188c"
  },
  {
    "url": "assets/js/40.e09f424e.js",
    "revision": "407428859f96f193eab860e02c14da37"
  },
  {
    "url": "assets/js/41.8117cff2.js",
    "revision": "0c16bf06bafd5447aeaa2d6ca7603307"
  },
  {
    "url": "assets/js/42.7003028c.js",
    "revision": "416e1b10310903c602648bfd0993800d"
  },
  {
    "url": "assets/js/43.090a91b3.js",
    "revision": "4f129d6cd83a8ce8fd68c3bf9034eba9"
  },
  {
    "url": "assets/js/44.cb78058c.js",
    "revision": "4cb86af816429d709b621bbef6b03c9e"
  },
  {
    "url": "assets/js/45.da2b9775.js",
    "revision": "dc2b53fdb5b0327a7c20cf29004c231d"
  },
  {
    "url": "assets/js/46.a33a9b01.js",
    "revision": "be01662c4623ff6aab7931d761f4afc5"
  },
  {
    "url": "assets/js/47.3526b32f.js",
    "revision": "aa98058f436e3182b24e194e84ee9da7"
  },
  {
    "url": "assets/js/48.31ccbcc5.js",
    "revision": "b8188ce5243cd380e1b8a06bd196f1f7"
  },
  {
    "url": "assets/js/49.972cbc9e.js",
    "revision": "102cdb19a7f34efbeedfb79fd566276c"
  },
  {
    "url": "assets/js/5.9b37a198.js",
    "revision": "59bca19f777718a2e9ebab5465a49d5c"
  },
  {
    "url": "assets/js/50.0c4aa427.js",
    "revision": "5876be81f76217a77932e5cee5b39dbe"
  },
  {
    "url": "assets/js/51.1478d4b3.js",
    "revision": "706867b1077232676075fde45bfd6c70"
  },
  {
    "url": "assets/js/52.8979ae32.js",
    "revision": "16b5b664b7a0548e24ad3bcdcfcc6c9f"
  },
  {
    "url": "assets/js/53.7118461a.js",
    "revision": "f85e22f3d61026587c7ded49b45f3e50"
  },
  {
    "url": "assets/js/54.8703ecfa.js",
    "revision": "5cfcc1fc108f02f2acca3541b340f989"
  },
  {
    "url": "assets/js/6.9236a08a.js",
    "revision": "6d94d53cd10096133c75217570467b17"
  },
  {
    "url": "assets/js/7.617d09e4.js",
    "revision": "0eaf67094b0c81de17c73b6256447d19"
  },
  {
    "url": "assets/js/8.e4b5eb2c.js",
    "revision": "eda5b13f1149c1cbad872db66d858ced"
  },
  {
    "url": "assets/js/9.98f50c0a.js",
    "revision": "4740fb057ff8ecfaffe545b8438b0e1e"
  },
  {
    "url": "assets/js/app.79faae89.js",
    "revision": "fadcfb08a8ec20a9b61f46af9eb22e07"
  },
  {
    "url": "blog/index.html",
    "revision": "56f4eeaaca4b7b468956e48f54bbc83b"
  },
  {
    "url": "blog/python/fileserver.html",
    "revision": "a34b5ab3510686ce82dfa8b1cedd7608"
  },
  {
    "url": "blog/python/index.html",
    "revision": "4b1ec81cd55b17f6cbc20c956df4432a"
  },
  {
    "url": "blog/python/qqbot.html",
    "revision": "98c1996bd617a7704ae3f4e9f35bebc1"
  },
  {
    "url": "blog/python/re.html",
    "revision": "612244afa01e304cc4ca876cbe179877"
  },
  {
    "url": "blog/python/urllib.html",
    "revision": "985e15c850b621e137ba9b8f97fa9d66"
  },
  {
    "url": "blog/research/index.html",
    "revision": "2bf0b4dccf7e51eee2a381ab0613efce"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "ddc2cf2ab7a16b0998edc5b17a861c4a"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "eb0a4c5078c8f3ded0bf89dc04535ec6"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "0dcea2d5ccf4f58c0a8f7e5cb4b683f5"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "54c7f76c937559ec7cbf47535317e4e8"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "1eb4f0475206a9547d234ca67a96a59c"
  },
  {
    "url": "blog/web/css.html",
    "revision": "5961285eaf8484518e738ea67a4ec00e"
  },
  {
    "url": "blog/web/database.html",
    "revision": "8182adaa3b5e8afef20c7015233f1dcb"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "d21e5a33971403582f1a5566c898b7ba"
  },
  {
    "url": "blog/web/index.html",
    "revision": "b068a251444819a15bc01a8bdcdde543"
  },
  {
    "url": "blog/web/javascript.html",
    "revision": "8517db3e999ab6149eb2b1b0f1ade30b"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "95520dd7110c344e7593a5d44ba5fbbf"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "670c8790332a1385b5a68ecb967390a9"
  },
  {
    "url": "blog/zen/thoughts.html",
    "revision": "27150c67f981dbbda0a29746b7016376"
  },
  {
    "url": "books/coder.html",
    "revision": "abc1be95ded330804f663426fba02f93"
  },
  {
    "url": "books/cpp.html",
    "revision": "8365d9b509d23dc2a62550300c68065e"
  },
  {
    "url": "books/index.html",
    "revision": "c414789d0df6fa8d7d08c0da65b8b29c"
  },
  {
    "url": "books/mongo.html",
    "revision": "307dff22890540328cb61e5095cef775"
  },
  {
    "url": "discuss/index.html",
    "revision": "74618befad6b84857e9333da90193615"
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
    "revision": "fa3ad341a77411e241af2651361a229c"
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
    "revision": "be5131f9b37549f6fda71fb54cdbddd0"
  },
  {
    "url": "logs/note.html",
    "revision": "68f1e603c7d659ec70bc704c83745a98"
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
