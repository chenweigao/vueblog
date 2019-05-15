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
    "revision": "c52867b62e19eba5a6a5aece9636af33"
  },
  {
    "url": "algorithm/cpp/makefile.html",
    "revision": "3a29342c7f1ec39a8b653f7893803769"
  },
  {
    "url": "algorithm/cpp/map_set.html",
    "revision": "450e0aad1b05a93f10c8e91f3d5a8eb2"
  },
  {
    "url": "algorithm/cpp/newcpp.html",
    "revision": "f3f77b2aee698ccd46a2530ccb92f60d"
  },
  {
    "url": "algorithm/cpp/pointer.html",
    "revision": "8aca930a92e94cd6ff194b1b14a483a3"
  },
  {
    "url": "algorithm/cpp/string.html",
    "revision": "c0a37bc68b8c76362882975cde80febe"
  },
  {
    "url": "algorithm/cpp/vector_and_iterator.html",
    "revision": "3a17e5cd281c61570103535f753a341c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2b59c935b8ad1a9eaeaa95166820bec6"
  },
  {
    "url": "algorithm/leetcode/algorithm.html",
    "revision": "592007d834f84b7eabce5c3ea463fa62"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "7ce7b46dd41a8781ce725db677428935"
  },
  {
    "url": "algorithm/leetcode/math.html",
    "revision": "efa6af71faa585048517f0cc851c9d81"
  },
  {
    "url": "algorithm/leetcode/sort.html",
    "revision": "fafa6ec02506fc2cbcd85b16de1e1d18"
  },
  {
    "url": "algorithm/leetcode/stack.html",
    "revision": "654ab17d089da2101b2de15aa0af3ebe"
  },
  {
    "url": "algorithm/python/fluentpython.html",
    "revision": "5c91b6706d979ce882b69f5c3539c8ab"
  },
  {
    "url": "algorithm/python/functions.html",
    "revision": "6347f8a6057bed703a51ad3c179cffa6"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "0657f52e1025dec24d953abe5e4f4964"
  },
  {
    "url": "algorithm/python/py_interview.html",
    "revision": "6bc6b30e4c34cfbe88d9644973d3680a"
  },
  {
    "url": "algorithm/python/tools.html",
    "revision": "380df2c88b6dd3897769e271c0ef13bf"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "b22e77f6bcffeb05732e0a3e9e0b1e30"
  },
  {
    "url": "algorithm/web/javascript.html",
    "revision": "4cfdc40cff8a1e1d2af9f6c878ea86e9"
  },
  {
    "url": "algorithm/zen/code_life.html",
    "revision": "6d5ee68b6e8df4f00dec777d108cc2e5"
  },
  {
    "url": "algorithm/zen/index.html",
    "revision": "f68cdb4ef015ed7567425a08d7e9142b"
  },
  {
    "url": "algorithm/zen/thoughts.html",
    "revision": "0884c090cd53bd7680c524f0efa1f250"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "075f347773af0db553df5ed77bd94896"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "570c6a21ca40c032f1f5d6f2b87f1179"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "594483bfe15fea74bac6c8d99edc24ea"
  },
  {
    "url": "assets/css/0.styles.9553969a.css",
    "revision": "e4d3fdc81df8f2fedc36a2b05c81c8d9"
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
    "url": "assets/js/1.61fa752c.js",
    "revision": "b851b36632697ec6a67e532c1e9f63c2"
  },
  {
    "url": "assets/js/10.2ea75c27.js",
    "revision": "e5b7313d1a69ac764260d90ee50a0f54"
  },
  {
    "url": "assets/js/100.12e18a8d.js",
    "revision": "88824d549593a0a869720c1b6fafb433"
  },
  {
    "url": "assets/js/101.ba47a8ea.js",
    "revision": "c5e06119050dca60a72d7f26619ed22f"
  },
  {
    "url": "assets/js/11.bb91b584.js",
    "revision": "b2d3104fb190540891f7684d557c30ee"
  },
  {
    "url": "assets/js/12.59472db4.js",
    "revision": "e0675f587217f4081b05e77f06b94269"
  },
  {
    "url": "assets/js/13.82dc035e.js",
    "revision": "35db9fbc47e1c1e1ab4fd374dcbbc0ec"
  },
  {
    "url": "assets/js/14.3f854a99.js",
    "revision": "78c3d69074cb1e1894c505b92e8b088a"
  },
  {
    "url": "assets/js/15.2df0cfd8.js",
    "revision": "0cd45bc19c8960ed2c261846c2b11979"
  },
  {
    "url": "assets/js/16.7269e8f3.js",
    "revision": "5b6d7703d53b48aedf898ea1e640ca4d"
  },
  {
    "url": "assets/js/17.b3d4362d.js",
    "revision": "447910a2a41cb67cf95ea54f2467002b"
  },
  {
    "url": "assets/js/18.337eab3d.js",
    "revision": "594eab85578a3f5c270f14d7b190e834"
  },
  {
    "url": "assets/js/19.dbb75492.js",
    "revision": "49ec2ed2cae8f5a3ed127f239809b9e1"
  },
  {
    "url": "assets/js/2.abd16662.js",
    "revision": "e4921808538ca10a63818f398e6725df"
  },
  {
    "url": "assets/js/20.3c6e1006.js",
    "revision": "a0f7f777512b7e73dffc669bcfbfccba"
  },
  {
    "url": "assets/js/21.48fc9301.js",
    "revision": "f2fe8a08c9e5a2b966f2f8fc3a9d197f"
  },
  {
    "url": "assets/js/22.82d214b6.js",
    "revision": "b43b2e6f9668f2685107ed5c12f6b8da"
  },
  {
    "url": "assets/js/23.2c687b63.js",
    "revision": "8e7bcfd4e148ef50497f07d8893485c7"
  },
  {
    "url": "assets/js/24.fa6e8fb7.js",
    "revision": "75a94ae0f4f7fcd74a5a3afb0d86d7c0"
  },
  {
    "url": "assets/js/25.738cedaa.js",
    "revision": "ec0de8e8a7bbb64b4836f9ef3ff2862d"
  },
  {
    "url": "assets/js/26.c5def0f6.js",
    "revision": "9e3948d240ce59d428a28dc71fba0211"
  },
  {
    "url": "assets/js/27.2e60968b.js",
    "revision": "2cf9b60d3c20f874351bd5c9980341ab"
  },
  {
    "url": "assets/js/28.a5d0a7c3.js",
    "revision": "88adcebff12b493e49555a5536aa5e41"
  },
  {
    "url": "assets/js/29.abf7f7b1.js",
    "revision": "8e8de40b1e641f86f41ee951c896d03b"
  },
  {
    "url": "assets/js/30.f056bef0.js",
    "revision": "7426c4baca82403e764cd9aad7cf3ab9"
  },
  {
    "url": "assets/js/31.b78ba091.js",
    "revision": "266e77b8f146a34bd5617358d56a7a88"
  },
  {
    "url": "assets/js/32.18d30b51.js",
    "revision": "a2699cd926b910524ee8696d4b1899c2"
  },
  {
    "url": "assets/js/33.d700f59d.js",
    "revision": "ffc4d8bf8e28543f0283856e7992cdb3"
  },
  {
    "url": "assets/js/34.c05ed437.js",
    "revision": "1662c60fdd4dae111fbc7513db012b39"
  },
  {
    "url": "assets/js/35.afb321bd.js",
    "revision": "4984e5899fe2b0734fbf22413dfb9ab4"
  },
  {
    "url": "assets/js/36.68bbb287.js",
    "revision": "e9a567b22cbf69656674ed293f3bbc43"
  },
  {
    "url": "assets/js/37.e89bdebe.js",
    "revision": "181d3446898304eac1cbfdf5ecfa38b1"
  },
  {
    "url": "assets/js/38.1f73a8c6.js",
    "revision": "6cf6f9272f16112f8323217961d5ce65"
  },
  {
    "url": "assets/js/39.9ed66f9d.js",
    "revision": "65255aa9a9fc9d538d0eae23385d4b72"
  },
  {
    "url": "assets/js/4.20b55e5f.js",
    "revision": "2ad84e40ae08e14426ca847715656186"
  },
  {
    "url": "assets/js/40.9077eb22.js",
    "revision": "482ff8e3516db368775328e572bad1ea"
  },
  {
    "url": "assets/js/41.98693926.js",
    "revision": "d03346d6124c01da66fb7743fd68c1e1"
  },
  {
    "url": "assets/js/42.79243cc1.js",
    "revision": "374bb5432200a7e486862fa44b2c07b8"
  },
  {
    "url": "assets/js/43.a7bbba1f.js",
    "revision": "6543f2d606caf7362af582c449d02079"
  },
  {
    "url": "assets/js/44.1f8b8410.js",
    "revision": "5fb41cffdb99a85503cf5e6b68f1bc0e"
  },
  {
    "url": "assets/js/45.51c6b033.js",
    "revision": "b913cecece6d9bd3be50f25fb708c84b"
  },
  {
    "url": "assets/js/46.6cb9eac9.js",
    "revision": "ee18b0824337ba29b28f610346607db2"
  },
  {
    "url": "assets/js/47.1105348d.js",
    "revision": "ef5432a8f02583f4186981a76e3f83d5"
  },
  {
    "url": "assets/js/48.f85d7876.js",
    "revision": "f2033595bf73b70822330351608feebd"
  },
  {
    "url": "assets/js/49.009aab65.js",
    "revision": "c1a0e2c3dda7a9819d0d8aeef4f8b4d6"
  },
  {
    "url": "assets/js/5.cd1db3e5.js",
    "revision": "272385b63081da3cdde012a50d37f118"
  },
  {
    "url": "assets/js/50.0f427177.js",
    "revision": "2f3caa055ed7de1d58cddedd8c6991e2"
  },
  {
    "url": "assets/js/51.13b2a5c0.js",
    "revision": "1a4a92aacc4bd563557e33cce57644c7"
  },
  {
    "url": "assets/js/52.cbc4eeea.js",
    "revision": "95021a45e13d545690dfa472093b2943"
  },
  {
    "url": "assets/js/53.2374bd93.js",
    "revision": "7f76bcd8e8d9cb04a3b4f65538d613bc"
  },
  {
    "url": "assets/js/54.34cf31bb.js",
    "revision": "7277ad549ffc8269af87f58f6fe89a5d"
  },
  {
    "url": "assets/js/55.1d7e3563.js",
    "revision": "2774c19fed9992d915974d723d779abb"
  },
  {
    "url": "assets/js/56.647d3fbf.js",
    "revision": "2b97d29025aeab006bc3ad57b051a604"
  },
  {
    "url": "assets/js/57.81a8354f.js",
    "revision": "c8262126875fa0e9f1b8fbecc261903d"
  },
  {
    "url": "assets/js/58.ac99e744.js",
    "revision": "38fc11252d6da802c93cbc24bb1e58ea"
  },
  {
    "url": "assets/js/59.e3bb8a78.js",
    "revision": "4a1cc9b2adbeb76a8a07061e2c2e45fb"
  },
  {
    "url": "assets/js/6.46455cb0.js",
    "revision": "927c92e1ea4d45defbf3011f8b8e2c03"
  },
  {
    "url": "assets/js/60.76f1be0c.js",
    "revision": "96d9e2e59262c2f37ca14cf9bdb8374c"
  },
  {
    "url": "assets/js/61.547bf157.js",
    "revision": "eb932e5d8b433130f5c903b3a3f19250"
  },
  {
    "url": "assets/js/62.bb2d5f35.js",
    "revision": "39d658f5bbb929a9cbe37c35e5d51952"
  },
  {
    "url": "assets/js/63.e4c325f4.js",
    "revision": "7db1c11a446bbebb5162515af8a693b6"
  },
  {
    "url": "assets/js/64.39937791.js",
    "revision": "a78bdeaa3ce7bfd326092a1ac737bef6"
  },
  {
    "url": "assets/js/65.79722d0a.js",
    "revision": "0d96327b9be7b71e88415f5207cf3a4f"
  },
  {
    "url": "assets/js/66.16a77a10.js",
    "revision": "bfa3f575290ca292ca711943a55c212f"
  },
  {
    "url": "assets/js/67.d9fb39f5.js",
    "revision": "a69a4c977b43277c0fbdfe167ace4baf"
  },
  {
    "url": "assets/js/68.c266e649.js",
    "revision": "cb2f7b38b94fb9d2f8181e50e042b87d"
  },
  {
    "url": "assets/js/69.6a56611b.js",
    "revision": "de6047821b8826941056b409d4e2f1bc"
  },
  {
    "url": "assets/js/7.d6c547e2.js",
    "revision": "615e618c085fc76a1e36fcd4f9f09fa0"
  },
  {
    "url": "assets/js/70.b9c6794f.js",
    "revision": "8ee30e950c27cd24c364edffbeb64c67"
  },
  {
    "url": "assets/js/71.319f7350.js",
    "revision": "23d609ccfd1d484eefab401e8cd8ae81"
  },
  {
    "url": "assets/js/72.e07abb24.js",
    "revision": "04a807aa3286d3897f4d885700971a75"
  },
  {
    "url": "assets/js/73.0406a3c6.js",
    "revision": "99853ab66a2938d797e3312035853176"
  },
  {
    "url": "assets/js/74.9b41ca8d.js",
    "revision": "67ceaba6ab42a5291b78d755cd842ba3"
  },
  {
    "url": "assets/js/75.ce841083.js",
    "revision": "566d34ad1b455bcb3cf45be3976e5787"
  },
  {
    "url": "assets/js/76.b8a63a09.js",
    "revision": "c20e2f6803961b1dfa3ca0622409eecc"
  },
  {
    "url": "assets/js/77.44094ede.js",
    "revision": "7b497b9e32ada84c05680dbf85f5ffa7"
  },
  {
    "url": "assets/js/78.5d2d7624.js",
    "revision": "ff9821308ce2f7125b0e45c00250beaa"
  },
  {
    "url": "assets/js/79.89aa3f8f.js",
    "revision": "03c1ac2e31b41a1538718eff512e0768"
  },
  {
    "url": "assets/js/8.2135ddb7.js",
    "revision": "699fce5416158bf18c5fd8342f411863"
  },
  {
    "url": "assets/js/80.9b79b455.js",
    "revision": "06a8e2df99b335a2416272a4031ce579"
  },
  {
    "url": "assets/js/81.b9c4e6cc.js",
    "revision": "a3052b976bbcf5f4b7c9a0f932cc1729"
  },
  {
    "url": "assets/js/82.c089b765.js",
    "revision": "61a841150bbed5af154ebe63244b32d5"
  },
  {
    "url": "assets/js/83.368be746.js",
    "revision": "d5b75650e25f571b53ac7b265164603c"
  },
  {
    "url": "assets/js/84.0ad20007.js",
    "revision": "56b9837103591f65a0f10f980da97637"
  },
  {
    "url": "assets/js/85.bed6c2b0.js",
    "revision": "e6cc9971af4c4f6c02fda9b686c52c16"
  },
  {
    "url": "assets/js/86.a567014d.js",
    "revision": "62c874859c1f8999ea9d92c0e9cb8d17"
  },
  {
    "url": "assets/js/87.e4edfddc.js",
    "revision": "a7bcfb01db4dfb3448115e08b8046cb0"
  },
  {
    "url": "assets/js/88.73d31df8.js",
    "revision": "889c3705404e4ccad487d05fe5d1f12d"
  },
  {
    "url": "assets/js/89.6d4e53cb.js",
    "revision": "aa6869174b2197ad8c198b6d7d08007d"
  },
  {
    "url": "assets/js/9.d01dceaa.js",
    "revision": "829cef130bb787b32bf0c8c5a796dee9"
  },
  {
    "url": "assets/js/90.0129f07f.js",
    "revision": "c2cb89fd405029670f27d502668009b1"
  },
  {
    "url": "assets/js/91.d16664ce.js",
    "revision": "86c5c24428c70c8a0b2a76da92bf1280"
  },
  {
    "url": "assets/js/92.06e8dcff.js",
    "revision": "a582f99b789d338f68edea1c7fe5c1ff"
  },
  {
    "url": "assets/js/93.b5b18dd9.js",
    "revision": "0ddad0ee2cf7dfd3ea6e0a73491bb8fb"
  },
  {
    "url": "assets/js/94.84d5e718.js",
    "revision": "31e62c5cee444b67de98523684e94458"
  },
  {
    "url": "assets/js/95.eb85deaa.js",
    "revision": "1983c470af5f0bb852e002ec77285d54"
  },
  {
    "url": "assets/js/96.a9514789.js",
    "revision": "7b370dda9b75267970cd448fcd09fe4d"
  },
  {
    "url": "assets/js/97.8b1d193f.js",
    "revision": "b7e5b29056ab821c473cba46de52c976"
  },
  {
    "url": "assets/js/98.82feff02.js",
    "revision": "46ca3f4c374b688107e92b9f21893476"
  },
  {
    "url": "assets/js/99.7f6f4c17.js",
    "revision": "bdaeb44c3f9de94f344c97aff5d1d586"
  },
  {
    "url": "assets/js/app.8c2dddc1.js",
    "revision": "876dd7d668d4710bb899acb4dc6aa886"
  },
  {
    "url": "blog/Backend/bfs_dfs.html",
    "revision": "b0b8639c56701a75ee6448c363c488b1"
  },
  {
    "url": "blog/Backend/code_content.html",
    "revision": "4eab2092ea5865d36cf8e4363b24d746"
  },
  {
    "url": "blog/Backend/database.html",
    "revision": "8e5b36482e36d63601480393ca796c15"
  },
  {
    "url": "blog/Backend/Docker.html",
    "revision": "ada527643fd20df0f62f0dfa0cd447ee"
  },
  {
    "url": "blog/Backend/flask.html",
    "revision": "bdc4e0af79fac74909831f20b884b949"
  },
  {
    "url": "blog/Backend/interview_problem.html",
    "revision": "8228c5741de4e6df5a68674a876e703a"
  },
  {
    "url": "blog/Backend/kernel.html",
    "revision": "50a5e777e8919b30a966eb48b909fa2f"
  },
  {
    "url": "blog/Backend/leetcode_problem.html",
    "revision": "497b22702756fe9b85f0bf1953da59da"
  },
  {
    "url": "blog/Backend/linux.html",
    "revision": "fe26d7579d421203037ae2d34280bb0b"
  },
  {
    "url": "blog/Backend/networks.html",
    "revision": "f517e4d7636306d610d940fe726fbb4b"
  },
  {
    "url": "blog/Backend/snap.html",
    "revision": "642e9476e7e3592d5dc5ff6ef0d00a4e"
  },
  {
    "url": "blog/Backend/thread_process.html",
    "revision": "62d3e9c0889a56d254184dc45993b2e6"
  },
  {
    "url": "blog/Deeplearning/cnn.html",
    "revision": "572b2483c115084b1f66e1bb4adf297d"
  },
  {
    "url": "blog/Deeplearning/face_recognition.html",
    "revision": "e5295f0b6f8e62bcc13caffa19f52602"
  },
  {
    "url": "blog/Deeplearning/mnist.html",
    "revision": "37b61b1494e37e49ba4ee920328f3d62"
  },
  {
    "url": "blog/Deeplearning/opencv.html",
    "revision": "968672733a746840019029b08ea8bccf"
  },
  {
    "url": "blog/Deeplearning/tensorflow.html",
    "revision": "4e1b64f57f1511ee936e8b5dd0983410"
  },
  {
    "url": "blog/Deeplearning/tensorflowio.html",
    "revision": "91f3f0cdca7b6b553934434289e5f21b"
  },
  {
    "url": "blog/Frontend/charts.html",
    "revision": "89dde67dd3d52b2a4b0e43fdb2fa1e8b"
  },
  {
    "url": "blog/Frontend/css.html",
    "revision": "d1165036e123affdd51855d11506a68f"
  },
  {
    "url": "blog/Frontend/vue-cli.html",
    "revision": "6fd345733476245d0344aeaf672f42e1"
  },
  {
    "url": "blog/Frontend/vue.html",
    "revision": "46a6c2c54ba27ba9b0770ce374766586"
  },
  {
    "url": "blog/Others/new.html",
    "revision": "0d43ec410a55ab6c6d0933488561e238"
  },
  {
    "url": "blog/Others/resume.html",
    "revision": "fa3e364451da1d1eb0e823010530f619"
  },
  {
    "url": "blog/Others/worklog.html",
    "revision": "0e2b611fd53e42aad43416b3c8e7586b"
  },
  {
    "url": "blog/Projects/jekyll.html",
    "revision": "829e8913208c042074931a0141311042"
  },
  {
    "url": "blog/Projects/kilo.html",
    "revision": "5582f10f52dfb98cb68ef7b1cf87770b"
  },
  {
    "url": "blog/Projects/qqbot.html",
    "revision": "e2d700295c0bb6a3782e0bbd4c35b0c9"
  },
  {
    "url": "blog/Projects/vueblog.html",
    "revision": "e6e4b122c5d5ece69cc1119c57abcea8"
  },
  {
    "url": "blog/Research/ArrayTrack.html",
    "revision": "f37b02de29a9c5fd98b59d1c887390a2"
  },
  {
    "url": "blog/Research/csitool.html",
    "revision": "a36e4fc49b994d62b5ff3b8f8d09f66c"
  },
  {
    "url": "blog/Research/information_theory.html",
    "revision": "8cfc725f2f875155be58b9ece36a27a5"
  },
  {
    "url": "blog/Research/object_tracking.html",
    "revision": "58d486501125ac7acb3141db7d923647"
  },
  {
    "url": "blog/Research/RF-Pose.html",
    "revision": "7a3baf7fe0c9674509805d62622c6138"
  },
  {
    "url": "blog/Research/splicer.html",
    "revision": "2c9c5c58b4a1a83e8c1409a4c8458329"
  },
  {
    "url": "blog/Tools/apt.html",
    "revision": "48aa8c2b941635840a729a0b83dcc379"
  },
  {
    "url": "blog/Tools/git.html",
    "revision": "270310de065e96a45c80f90b1939073b"
  },
  {
    "url": "blog/Tools/vim.html",
    "revision": "9d2dcb4b4406f6b2f7dc8ed351797e6a"
  },
  {
    "url": "blog/Tools/vps.html",
    "revision": "fe74b700d0b3301ae7057a577ddf007a"
  },
  {
    "url": "books/coder.html",
    "revision": "36a473881f7a577f26bf0ddcfb665c71"
  },
  {
    "url": "books/cpp.html",
    "revision": "b6622c42262ebe881513ba6e1a771375"
  },
  {
    "url": "books/index.html",
    "revision": "eeb4e898b2ad624520d87ad548d12c4e"
  },
  {
    "url": "books/mongo.html",
    "revision": "031535488b01738c0a2f397281af0657"
  },
  {
    "url": "commits/index.html",
    "revision": "b0d8610e654eba676c50e166671d0dd2"
  },
  {
    "url": "cwnd.jpg",
    "revision": "7cc34e0970901f093d60099907180682"
  },
  {
    "url": "discuss/index.html",
    "revision": "ad58ac2ef31bb01e35d429226cc899d5"
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
    "revision": "395421b8756e2fd3aaf1772dd2eea694"
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
    "revision": "5deb6676d50f29f9b6f3d507d6bcbf3a"
  },
  {
    "url": "logs/log_nov_18.html",
    "revision": "8a9342c31a95184314e605107b58325f"
  },
  {
    "url": "logs/note.html",
    "revision": "514bd45f8909cf32d4de49642d84fad2"
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
