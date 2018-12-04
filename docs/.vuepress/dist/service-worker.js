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
    "revision": "1c5fb01804afbf16a4f7adb1a95fe3ba"
  },
  {
    "url": "about/index.html",
    "revision": "849050b23423fc8c5d671139452b26f7"
  },
  {
    "url": "algorithm/cpp/c.html",
    "revision": "f0bc2fcf7ec1b4df3d01adb73590e48f"
  },
  {
    "url": "algorithm/cpp/index.html",
    "revision": "a99eff17c960485f25933965d38fdbe5"
  },
  {
    "url": "algorithm/cpp/makefile.html",
    "revision": "a6fd5568e752535a7005329b4ab4aad2"
  },
  {
    "url": "algorithm/cpp/string.html",
    "revision": "286b1a952f1418d042b0ceed0fb53bc6"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "9e5a646000d33c0faea0fd419c90ed12"
  },
  {
    "url": "algorithm/python/functions.html",
    "revision": "fef23f224c69afb3bb9ed15e89800f89"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "f9c53b8d1cabf1de3fc9b53207952688"
  },
  {
    "url": "algorithm/python/tools.html",
    "revision": "5b2501b3f504cbfecec479a7ab572495"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "3011ac8330dcbcc49dc4b04aca3858c1"
  },
  {
    "url": "assets/css/0.styles.b3a4b39c.css",
    "revision": "ec33fa9f4d3db3bbb1bf7c314b64b2dc"
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
    "url": "assets/js/1.02527821.js",
    "revision": "3552208b89a60a65f27a5d23db0725a3"
  },
  {
    "url": "assets/js/10.25816a96.js",
    "revision": "3a62528c5f706e4c40549de7c4e4c5b0"
  },
  {
    "url": "assets/js/11.4b7fc5e8.js",
    "revision": "328b2e57ee31c3eebf0660b3c6edc63a"
  },
  {
    "url": "assets/js/12.927d304e.js",
    "revision": "18a41765bb891fbaccafc50707377895"
  },
  {
    "url": "assets/js/13.15b1ee57.js",
    "revision": "a8988c496b9b84a00cabe9173ed640e6"
  },
  {
    "url": "assets/js/14.d7820ebc.js",
    "revision": "53eea418faa2d28733ffe0015692d545"
  },
  {
    "url": "assets/js/15.0f580157.js",
    "revision": "7ff29a602c78b63abc808b8a09ff8e7f"
  },
  {
    "url": "assets/js/16.eddce9c1.js",
    "revision": "3833fcb99675794c6d45cf2fe0408882"
  },
  {
    "url": "assets/js/17.d6d943e2.js",
    "revision": "f59c7b43eb30a7998ea982798bda2fed"
  },
  {
    "url": "assets/js/18.4cbabfe8.js",
    "revision": "2b532e1d29d43c00869d8e6b7f7e2443"
  },
  {
    "url": "assets/js/19.203a4b54.js",
    "revision": "261619a6299bfca05258a4b7aabfeb2e"
  },
  {
    "url": "assets/js/20.84f64606.js",
    "revision": "5c6e6521b52da93cb09c41b66035ffec"
  },
  {
    "url": "assets/js/21.d946f205.js",
    "revision": "537648525971d445fbbf733cd90fb91e"
  },
  {
    "url": "assets/js/22.29decdeb.js",
    "revision": "d9143d4bb5b65f0ecaa5f2e29b8def55"
  },
  {
    "url": "assets/js/23.0c68e0cf.js",
    "revision": "d7c9171d98e921fe7c76cb9808f5cd26"
  },
  {
    "url": "assets/js/24.5a910ee8.js",
    "revision": "263142f81f9cdfa0db25c1b7bdab1963"
  },
  {
    "url": "assets/js/25.6d9e71c8.js",
    "revision": "eace0cd845bc8a730d5b2757c4321466"
  },
  {
    "url": "assets/js/26.4366358f.js",
    "revision": "04e4e149c04a9bd045296e225932fba9"
  },
  {
    "url": "assets/js/27.c82c2eb2.js",
    "revision": "fdb55ad70a8aebb83faea71cea92fc7b"
  },
  {
    "url": "assets/js/28.f77d46a8.js",
    "revision": "98c580a56565a2d57a451beb2c7fa7d2"
  },
  {
    "url": "assets/js/29.4156ae66.js",
    "revision": "c73a09439c407408750ba38c2bc90fad"
  },
  {
    "url": "assets/js/3.d6c3402d.js",
    "revision": "57e77ab48a1b4ab861dc5977511b6721"
  },
  {
    "url": "assets/js/30.bebcd280.js",
    "revision": "31badd0ddabc6e82b9369f0a388be146"
  },
  {
    "url": "assets/js/31.71fd3d52.js",
    "revision": "b79820e861b56830b82e7176786792ee"
  },
  {
    "url": "assets/js/32.e5aaaea2.js",
    "revision": "9b02a055659737f813ca4a2bd73a3a12"
  },
  {
    "url": "assets/js/33.5ecd979f.js",
    "revision": "1ef7c9043bfe9c3907f2c5e9f1772d2e"
  },
  {
    "url": "assets/js/34.a1b066d8.js",
    "revision": "4811007863340d0ccf5214c3ccf9fea4"
  },
  {
    "url": "assets/js/35.c69bb055.js",
    "revision": "ff40ede4ebb5a6a6d7edbe0f594e6a68"
  },
  {
    "url": "assets/js/36.cd4fb177.js",
    "revision": "dcb637d6fbee478ace53702b10fe32fb"
  },
  {
    "url": "assets/js/37.4d579b7a.js",
    "revision": "76e90e925504d0f6b89ad1497fe6f14c"
  },
  {
    "url": "assets/js/38.9a6df1de.js",
    "revision": "8a9c04a50a3ce386caf55f951d749b84"
  },
  {
    "url": "assets/js/39.68e55e0f.js",
    "revision": "998b0c1acce2158dad370b83250a9d2b"
  },
  {
    "url": "assets/js/4.6a24f696.js",
    "revision": "4588dc186af76a87e328cee3eaf27d4f"
  },
  {
    "url": "assets/js/40.421d26ad.js",
    "revision": "e28d3c310a7a25fca264f06aef8984e8"
  },
  {
    "url": "assets/js/41.7644abc0.js",
    "revision": "2bcfbd298a0652b933e17abc44e4b9eb"
  },
  {
    "url": "assets/js/42.549b4239.js",
    "revision": "20b08e6c8adbf59c3520d41ecb35c638"
  },
  {
    "url": "assets/js/43.d84d3390.js",
    "revision": "fadab9bb411edeee84b3f1833e8f6ae7"
  },
  {
    "url": "assets/js/44.c3704873.js",
    "revision": "5d7924e6165bd03db8e11b8477bce4c2"
  },
  {
    "url": "assets/js/45.9ea63982.js",
    "revision": "76018ed57dc6f6a7e003d89fddb3411d"
  },
  {
    "url": "assets/js/46.dc514f33.js",
    "revision": "8b7a6d7f578099cd3d3d9b2173c987a1"
  },
  {
    "url": "assets/js/47.e4ca73c3.js",
    "revision": "de7c450a454cb3141023b452fa23ba2e"
  },
  {
    "url": "assets/js/48.826bc94e.js",
    "revision": "c02a05f1ce7eb6138c3aebf789a47a5f"
  },
  {
    "url": "assets/js/49.c444e62e.js",
    "revision": "fc525f0d1a674cc9e5b110f03a4f6a02"
  },
  {
    "url": "assets/js/5.e9cb2b9c.js",
    "revision": "8ff0e40f0b15591f34347927a95deb47"
  },
  {
    "url": "assets/js/50.63614e72.js",
    "revision": "7f895a03a3e7eca8ca7020ef36441501"
  },
  {
    "url": "assets/js/51.fad6ac64.js",
    "revision": "5afacb1d167bcf59177a8f9bad6e1039"
  },
  {
    "url": "assets/js/52.cd95a61d.js",
    "revision": "3f11aef4e64e9e19ad6ec9e3470fc8e5"
  },
  {
    "url": "assets/js/53.42aa62dd.js",
    "revision": "c4817a76a1269e89142c3a7793af87e6"
  },
  {
    "url": "assets/js/54.0940b610.js",
    "revision": "9022436c2be328874123c491209c74a0"
  },
  {
    "url": "assets/js/55.75e5b67f.js",
    "revision": "5e8bd32c6e66ebe3bee64e55d0e48731"
  },
  {
    "url": "assets/js/56.e0b59e11.js",
    "revision": "ef89ac177d00f08880e5554f5680b19b"
  },
  {
    "url": "assets/js/57.a525b28e.js",
    "revision": "d388d49977defea1a7ba05bb6795e2e6"
  },
  {
    "url": "assets/js/58.4b5eb4b2.js",
    "revision": "4ed04dcfcd6acd2c9ee6c7a01a77cecc"
  },
  {
    "url": "assets/js/59.3f43a59d.js",
    "revision": "1b8dd33d7b3dd9a2ac6c0ebbe83a6b48"
  },
  {
    "url": "assets/js/6.e203c557.js",
    "revision": "b5e12fe0b7a33c98cff12ff5a70c2e5c"
  },
  {
    "url": "assets/js/60.88977b9f.js",
    "revision": "6679a5b3530ca3f05bfad585a9eacbe9"
  },
  {
    "url": "assets/js/61.282d3191.js",
    "revision": "85d3c9159e01ba781e9d0accddc1b308"
  },
  {
    "url": "assets/js/62.52a7a744.js",
    "revision": "c94b2b0e38929150d6306f9a43c5429c"
  },
  {
    "url": "assets/js/63.b7ec231c.js",
    "revision": "bf1579342b31f422eb51358672a401b1"
  },
  {
    "url": "assets/js/7.564fbfe1.js",
    "revision": "9987236fd1fcd6590aa06b24407a9478"
  },
  {
    "url": "assets/js/8.4866d057.js",
    "revision": "5e443927c5a8c06d56fd8774dbb5fe5e"
  },
  {
    "url": "assets/js/9.ae718e4b.js",
    "revision": "e2348953d0ecbe2073c7a4f1c615bd7a"
  },
  {
    "url": "assets/js/app.a77dfa45.js",
    "revision": "0e1f104de771d09633d0cf472db19644"
  },
  {
    "url": "blog/index.html",
    "revision": "316c87337d67daf03fcc62a215da3b0a"
  },
  {
    "url": "blog/project/index.html",
    "revision": "a65e356ac1893d5ab80c9d202ee02387"
  },
  {
    "url": "blog/project/kilo.html",
    "revision": "526d59cb781c2ba049ee801bf8fbb23a"
  },
  {
    "url": "blog/project/qqbot.html",
    "revision": "19920ff494a06eb5c44189b5ded79567"
  },
  {
    "url": "blog/project/re.html",
    "revision": "031e22f2c3641954b1e5cfeec2b06058"
  },
  {
    "url": "blog/research/index.html",
    "revision": "69442c9395c3177b64a45cf435d51229"
  },
  {
    "url": "blog/tool/apt.html",
    "revision": "3535ccd66ac2e6135ff43567b60c14b1"
  },
  {
    "url": "blog/tool/git.html",
    "revision": "eea3215ae99aa4cf1bc56706b0acb0dd"
  },
  {
    "url": "blog/tool/index.html",
    "revision": "27c03ff52ed0e410124ccebc5c5c98cb"
  },
  {
    "url": "blog/tool/jekyll.html",
    "revision": "cb0e0017fb2121041eda27934ab4adc8"
  },
  {
    "url": "blog/tool/vim.html",
    "revision": "45e4cf128cac61932bed5c28148c8df0"
  },
  {
    "url": "blog/web/css.html",
    "revision": "e32439f6a1caa5b7dad9217cbf82f5cd"
  },
  {
    "url": "blog/web/database.html",
    "revision": "9eda7a412a3907916dff0df5a2aa8862"
  },
  {
    "url": "blog/web/flask.html",
    "revision": "32439c0003b5d03ba9d8380197af5fdf"
  },
  {
    "url": "blog/web/index.html",
    "revision": "93a918cb1e71f18b0c6273482a0f4192"
  },
  {
    "url": "blog/web/javascript.html",
    "revision": "50274657224d0158cfc76666ac3755b6"
  },
  {
    "url": "blog/web/vue-cli.html",
    "revision": "b0593196c1e8a93fd1ded0015bda054e"
  },
  {
    "url": "blog/web/vue.html",
    "revision": "d54b682a51f44ae1b0afa54efb1efcb7"
  },
  {
    "url": "blog/zen/index.html",
    "revision": "c6bec03fbc8906c2a8bd655eb477f62b"
  },
  {
    "url": "blog/zen/thoughts.html",
    "revision": "a91a8155d60bedaa560891923c4a7f9b"
  },
  {
    "url": "books/coder.html",
    "revision": "10a93001c2e238970977f131ce9ce907"
  },
  {
    "url": "books/cpp.html",
    "revision": "b8be3383cba7c6916f4c1bcf7bfcdfec"
  },
  {
    "url": "books/index.html",
    "revision": "20afa65be7e3e835a805c79de1f55b6d"
  },
  {
    "url": "books/mongo.html",
    "revision": "526c201d9924b5350dcc9ae95bc1f0e2"
  },
  {
    "url": "discuss/index.html",
    "revision": "43435c31014df5094e072bcde7c955b0"
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
    "revision": "7c387799f1d2a3c99edecce0d09f42aa"
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
    "revision": "212f8d3bb5dd286126f343fcc4ccf383"
  },
  {
    "url": "logs/log_nov_18.html",
    "revision": "cf8572220106a130b014023acbc40ea2"
  },
  {
    "url": "logs/note.html",
    "revision": "e9b7a44ac35492925111caee08e8da17"
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
