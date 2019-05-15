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
    "revision": "65042861ce18531c3349b6601e6db91e"
  },
  {
    "url": "algorithm/cpp/makefile.html",
    "revision": "c816269efa779dd4eb1526ea926049cd"
  },
  {
    "url": "algorithm/cpp/map_set.html",
    "revision": "17a27430094869c09a9f44ef8bf29162"
  },
  {
    "url": "algorithm/cpp/newcpp.html",
    "revision": "379392e8f147588b45fc67e96b6d8ada"
  },
  {
    "url": "algorithm/cpp/pointer.html",
    "revision": "3cd0397b0574f04dc3985a01082c7b5a"
  },
  {
    "url": "algorithm/cpp/string.html",
    "revision": "d04a7ae615abcd377ce89a616a612b66"
  },
  {
    "url": "algorithm/cpp/vector_and_iterator.html",
    "revision": "6a257d9471210d6664b8bd0ef813c0c3"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2b15e9d31e820f46da0f3765624947b0"
  },
  {
    "url": "algorithm/leetcode/algorithm.html",
    "revision": "a02c207b8e7f54de7a21411bdd430f4b"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "0383d056a5b7ab35a9f0163a4b3554d0"
  },
  {
    "url": "algorithm/leetcode/math.html",
    "revision": "571249262c7b403dfec93bef071a8f73"
  },
  {
    "url": "algorithm/leetcode/sort.html",
    "revision": "b861482ba120f029e784588fcc8cadb2"
  },
  {
    "url": "algorithm/leetcode/stack.html",
    "revision": "6369b626778dde12959fa460c40826b4"
  },
  {
    "url": "algorithm/python/fluentpython.html",
    "revision": "d10f907f6072f648895ad4a9f9f4e181"
  },
  {
    "url": "algorithm/python/functions.html",
    "revision": "1c74c7a1919cdf52c0a71dba89935241"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "45febe631cb311d562aaf4beb00618c7"
  },
  {
    "url": "algorithm/python/py_interview.html",
    "revision": "5910a301449fb2a892d91d9ab97cf21e"
  },
  {
    "url": "algorithm/python/tools.html",
    "revision": "192c33c3fff1c990c1d150678b1f3909"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "8a1f4663bbb1de1e4f74ec910914a7a3"
  },
  {
    "url": "algorithm/web/javascript.html",
    "revision": "fa62dde60816b3345a961bf8cc870677"
  },
  {
    "url": "algorithm/zen/code_life.html",
    "revision": "dc6007ec0a9883655cba5b1efce85a56"
  },
  {
    "url": "algorithm/zen/index.html",
    "revision": "bbc0793bbd0a8d536c75991b7faa03e4"
  },
  {
    "url": "algorithm/zen/thoughts.html",
    "revision": "585a5b4de66913caebfcdf699145370d"
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
    "url": "assets/css/0.styles.e8d92be3.css",
    "revision": "f49f766485f5b56bbfbd65bc121f842f"
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
    "url": "assets/js/10.d0a7f483.js",
    "revision": "604b118e9b8e191b6de29d84f6c69f29"
  },
  {
    "url": "assets/js/100.c3c38b3f.js",
    "revision": "4a2fc982c951b9d9d80308a0abd3cd89"
  },
  {
    "url": "assets/js/101.ba47a8ea.js",
    "revision": "c5e06119050dca60a72d7f26619ed22f"
  },
  {
    "url": "assets/js/11.40e90e2e.js",
    "revision": "bad586ccdfdce7cbf189976fc2466258"
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
    "url": "assets/js/15.27ecaa65.js",
    "revision": "61d9e85f347b3d1584b364df1007d34a"
  },
  {
    "url": "assets/js/16.7269e8f3.js",
    "revision": "5b6d7703d53b48aedf898ea1e640ca4d"
  },
  {
    "url": "assets/js/17.1baed97f.js",
    "revision": "46e20d92c8a6fcf6523e1655410e0fe0"
  },
  {
    "url": "assets/js/18.337eab3d.js",
    "revision": "594eab85578a3f5c270f14d7b190e834"
  },
  {
    "url": "assets/js/19.7441a7d8.js",
    "revision": "228e5b5b1714303e7226ac77eec51a7a"
  },
  {
    "url": "assets/js/2.abd16662.js",
    "revision": "e4921808538ca10a63818f398e6725df"
  },
  {
    "url": "assets/js/20.3a5f087d.js",
    "revision": "49733e70868d1270ddd390590c8f7560"
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
    "url": "assets/js/27.dc9cdb49.js",
    "revision": "5452f53ff051c5d715edee884966a028"
  },
  {
    "url": "assets/js/28.101b6314.js",
    "revision": "a397474ccbd94aa33c11e8b60774e4fb"
  },
  {
    "url": "assets/js/29.abf7f7b1.js",
    "revision": "8e8de40b1e641f86f41ee951c896d03b"
  },
  {
    "url": "assets/js/30.0629d4d9.js",
    "revision": "20de6aa2a9680a92ae647f7f8336e139"
  },
  {
    "url": "assets/js/31.92736f25.js",
    "revision": "a25cedffc8570535568af689f3f3c23d"
  },
  {
    "url": "assets/js/32.503a383b.js",
    "revision": "6fe4ab63f3b791465b2d7b2ef22bb04a"
  },
  {
    "url": "assets/js/33.d700f59d.js",
    "revision": "ffc4d8bf8e28543f0283856e7992cdb3"
  },
  {
    "url": "assets/js/34.5304a9af.js",
    "revision": "8f976a52812e203d37ee83b36af4e429"
  },
  {
    "url": "assets/js/35.ab6a77a1.js",
    "revision": "23d25c1b5696c7ba119d2de3950356e1"
  },
  {
    "url": "assets/js/36.603e9dd9.js",
    "revision": "e4d0b53ec2eb6ed34d4b2440ba52e90c"
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
    "url": "assets/js/39.322980cc.js",
    "revision": "e793ce75adf299425ff05ca159d4a7a5"
  },
  {
    "url": "assets/js/4.20b55e5f.js",
    "revision": "2ad84e40ae08e14426ca847715656186"
  },
  {
    "url": "assets/js/40.4ca46d73.js",
    "revision": "7de47b658eb681ade220fa712d1573d1"
  },
  {
    "url": "assets/js/41.ff17cbd8.js",
    "revision": "68ca72aa078f66a81c8fb2e855cf25a0"
  },
  {
    "url": "assets/js/42.b93980ad.js",
    "revision": "c98a1d900a0fa7f89cc794ebdfdf1251"
  },
  {
    "url": "assets/js/43.625374e9.js",
    "revision": "c4375421d912a5a831cd87c89ca6a054"
  },
  {
    "url": "assets/js/44.1f8b8410.js",
    "revision": "5fb41cffdb99a85503cf5e6b68f1bc0e"
  },
  {
    "url": "assets/js/45.6b685468.js",
    "revision": "2ea1de8c0850787220ccbf44c1e00086"
  },
  {
    "url": "assets/js/46.b1e427dc.js",
    "revision": "f86e32d14453f41839e476b5fe921bea"
  },
  {
    "url": "assets/js/47.1105348d.js",
    "revision": "ef5432a8f02583f4186981a76e3f83d5"
  },
  {
    "url": "assets/js/48.f20ef025.js",
    "revision": "fbe4d098adadcd972bf9d296c51c1821"
  },
  {
    "url": "assets/js/49.5b0ccec3.js",
    "revision": "9205a9018bcb9c7a4b05f598d4531fcb"
  },
  {
    "url": "assets/js/5.cd1db3e5.js",
    "revision": "272385b63081da3cdde012a50d37f118"
  },
  {
    "url": "assets/js/50.0d742578.js",
    "revision": "c0ce8792f5681ccfa37e7760b512dec5"
  },
  {
    "url": "assets/js/51.759bde75.js",
    "revision": "59ba9954a1f9d2b2287437abcbe3dea0"
  },
  {
    "url": "assets/js/52.e961fe01.js",
    "revision": "1c45408f3328fc1e31207b1374cc071a"
  },
  {
    "url": "assets/js/53.cfc3464d.js",
    "revision": "597a976bdc8cae9d9a90032cb3e9d040"
  },
  {
    "url": "assets/js/54.3add5986.js",
    "revision": "b941e0704c79fce98573667aedaa9388"
  },
  {
    "url": "assets/js/55.113f6510.js",
    "revision": "e8e41b1e7a04a8943fe582152a2a4bb5"
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
    "url": "assets/js/63.1d014a02.js",
    "revision": "010841a01c57ed94aecedd6834509ceb"
  },
  {
    "url": "assets/js/64.26d8c9ff.js",
    "revision": "7588e98ad6efcdfc8cd3d338e94a929b"
  },
  {
    "url": "assets/js/65.79722d0a.js",
    "revision": "0d96327b9be7b71e88415f5207cf3a4f"
  },
  {
    "url": "assets/js/66.60e32eb8.js",
    "revision": "98af4f4e26a1c240f8067058a0ba6be6"
  },
  {
    "url": "assets/js/67.e94e5af8.js",
    "revision": "5b753d45ec5c1fe5343d991feb2a8de7"
  },
  {
    "url": "assets/js/68.0c62bc2d.js",
    "revision": "81b86d3db193762f4f9e3ba33c2400ab"
  },
  {
    "url": "assets/js/69.35a9527f.js",
    "revision": "22a6eb1a4bff995197c12f726f6d76bb"
  },
  {
    "url": "assets/js/7.64614a42.js",
    "revision": "2084e80c570f81be6f7068ee08809de6"
  },
  {
    "url": "assets/js/70.48adc3c5.js",
    "revision": "db50c978e55ad73575b20b0a6de902c6"
  },
  {
    "url": "assets/js/71.bc9001ba.js",
    "revision": "639052f2dddfd0d08d9171a5623edfa9"
  },
  {
    "url": "assets/js/72.677442bb.js",
    "revision": "b902e3e52a5b984be8093343e64b11ae"
  },
  {
    "url": "assets/js/73.5e19868d.js",
    "revision": "c9ad9f6bfc941155711321f4184d62c3"
  },
  {
    "url": "assets/js/74.9b41ca8d.js",
    "revision": "67ceaba6ab42a5291b78d755cd842ba3"
  },
  {
    "url": "assets/js/75.66697b03.js",
    "revision": "52ce705927949174aa11078dc16442bc"
  },
  {
    "url": "assets/js/76.b8a63a09.js",
    "revision": "c20e2f6803961b1dfa3ca0622409eecc"
  },
  {
    "url": "assets/js/77.5bd5aa5a.js",
    "revision": "ecc8191ea73bff449ca1ffa99cf5562a"
  },
  {
    "url": "assets/js/78.26da0d5f.js",
    "revision": "2690dce868e3f9ad82c245cc81e44162"
  },
  {
    "url": "assets/js/79.5012579e.js",
    "revision": "de3bfd92abb2e0ddf935f371fd03b4e4"
  },
  {
    "url": "assets/js/8.11937928.js",
    "revision": "aa92ae60472a1f8fc2102d895c4aa859"
  },
  {
    "url": "assets/js/80.9042b852.js",
    "revision": "cc10a79042b3c07cae0acfd3851e0f34"
  },
  {
    "url": "assets/js/81.f18600b7.js",
    "revision": "1dfef9666f0767aac6555c20387987b1"
  },
  {
    "url": "assets/js/82.81cf8d7b.js",
    "revision": "3969ca377eac26000504c624d9f6d5f0"
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
    "url": "assets/js/87.9001eb19.js",
    "revision": "438b4e8f903b18b7cd364bea083b8504"
  },
  {
    "url": "assets/js/88.9133eeba.js",
    "revision": "09875153992d75c5e364ce3a00c17fa5"
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
    "url": "assets/js/90.865b8b70.js",
    "revision": "21479c1ec3bc3713fe3020b45d9079a2"
  },
  {
    "url": "assets/js/91.18aafcc1.js",
    "revision": "f98218550e785ba73aae41fef55dbd43"
  },
  {
    "url": "assets/js/92.cf3382cb.js",
    "revision": "6ed76df21d3fcbc91e9c4c1f699de06c"
  },
  {
    "url": "assets/js/93.b6003c1b.js",
    "revision": "fe9d19637b957a054342f67bae440f5e"
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
    "url": "assets/js/96.568ffb46.js",
    "revision": "b20d23b30da4651271d81e8eb303cbc7"
  },
  {
    "url": "assets/js/97.8b1d193f.js",
    "revision": "b7e5b29056ab821c473cba46de52c976"
  },
  {
    "url": "assets/js/98.c7ac97e9.js",
    "revision": "1536529b121c147c1590c0258916a44e"
  },
  {
    "url": "assets/js/99.5dc9efbf.js",
    "revision": "682fc61c118684bfed00c70ffd03fd98"
  },
  {
    "url": "assets/js/app.5b882d21.js",
    "revision": "c35a9b67d7fc938ca92680e7917c8793"
  },
  {
    "url": "blog/Backend/bfs_dfs.html",
    "revision": "b1d312486d6032ce2b788c7d2f711b5e"
  },
  {
    "url": "blog/Backend/code_content.html",
    "revision": "6731070d4849a5def904ecbc4a9b3d4d"
  },
  {
    "url": "blog/Backend/database.html",
    "revision": "13af8683f39adf93487007a3c49cff7e"
  },
  {
    "url": "blog/Backend/Docker.html",
    "revision": "40d6be6e33de483ce517c828f04116d8"
  },
  {
    "url": "blog/Backend/flask.html",
    "revision": "df0e038734a20c8baaaf6375f7278005"
  },
  {
    "url": "blog/Backend/interview_problem.html",
    "revision": "997da8d2abed090af8133a41b3758f26"
  },
  {
    "url": "blog/Backend/kernel.html",
    "revision": "19a8fa63e5b373f7167502f5686adfa7"
  },
  {
    "url": "blog/Backend/leetcode_problem.html",
    "revision": "f27eca976681ef1678324598e11068fd"
  },
  {
    "url": "blog/Backend/linux.html",
    "revision": "7d04a8fde9a2738dc09b3f829380a977"
  },
  {
    "url": "blog/Backend/networks.html",
    "revision": "d5abc00affe4ea0b780e8ffbd1661bf3"
  },
  {
    "url": "blog/Backend/snap.html",
    "revision": "76a440ccffc9dfb8fff5588d6a8a19c6"
  },
  {
    "url": "blog/Backend/thread_process.html",
    "revision": "670504d2e9e8953c08f7ccaf761f03a4"
  },
  {
    "url": "blog/Deeplearning/cnn.html",
    "revision": "ad09fde363e3c7c82a4881262e2ac710"
  },
  {
    "url": "blog/Deeplearning/face_recognition.html",
    "revision": "6c38cc575f67129a0386efc3151761c8"
  },
  {
    "url": "blog/Deeplearning/mnist.html",
    "revision": "1026c14abb91fa0d53ee5d14eafcf840"
  },
  {
    "url": "blog/Deeplearning/opencv.html",
    "revision": "2d2d857000f0e22250fd361cc6b50d1c"
  },
  {
    "url": "blog/Deeplearning/tensorflow.html",
    "revision": "f0a75c19ad3fd29630864b16da00e0de"
  },
  {
    "url": "blog/Deeplearning/tensorflowio.html",
    "revision": "2315e2a4ee710af1f7578378359dda15"
  },
  {
    "url": "blog/Frontend/charts.html",
    "revision": "c2f2c7710d0786d13812275fc679ffa2"
  },
  {
    "url": "blog/Frontend/css.html",
    "revision": "464558bc5248a6187c43c62afc7c4fe4"
  },
  {
    "url": "blog/Frontend/vue-cli.html",
    "revision": "0e883da3043d7d076bbc979a413a0815"
  },
  {
    "url": "blog/Frontend/vue.html",
    "revision": "ceec05d7dee57abc47263e8351169101"
  },
  {
    "url": "blog/Others/new.html",
    "revision": "e6d020a2920e1fbef3d8dff55ab7e7b7"
  },
  {
    "url": "blog/Others/resume.html",
    "revision": "1e0e9df4dd22ab0204d18aba6a37faa3"
  },
  {
    "url": "blog/Others/worklog.html",
    "revision": "a1a1d24d0cb672386478d49180dde9c4"
  },
  {
    "url": "blog/Projects/jekyll.html",
    "revision": "b7ed2e807cc700a9feeda2b8d74abe34"
  },
  {
    "url": "blog/Projects/kilo.html",
    "revision": "94ed4faf139ef75f1d222a4fb2c49407"
  },
  {
    "url": "blog/Projects/qqbot.html",
    "revision": "568927aeabdd0543fc0d25b585004d47"
  },
  {
    "url": "blog/Projects/vueblog.html",
    "revision": "4e82f03e58483de725c42ce7a88cceca"
  },
  {
    "url": "blog/Research/ArrayTrack.html",
    "revision": "8e8e591856cbab84b87fa2805b405ec3"
  },
  {
    "url": "blog/Research/csitool.html",
    "revision": "ad42df403102cc2d43889adc55049efb"
  },
  {
    "url": "blog/Research/information_theory.html",
    "revision": "3e30f2abfaa5a00e5bd1ff75233bde42"
  },
  {
    "url": "blog/Research/object_tracking.html",
    "revision": "2e0445fc965e33b08f272f8cc8398f79"
  },
  {
    "url": "blog/Research/RF-Pose.html",
    "revision": "3d38c4875e0cef5c9308a6c75a90a1ab"
  },
  {
    "url": "blog/Research/splicer.html",
    "revision": "9e7ebbb5bd0aa8f51b06a422a9cf5cb8"
  },
  {
    "url": "blog/Tools/apt.html",
    "revision": "cfa6d3ca400c5ba64984542c2066f587"
  },
  {
    "url": "blog/Tools/git.html",
    "revision": "97417a43a8aac530be5caa912e1d4a36"
  },
  {
    "url": "blog/Tools/vim.html",
    "revision": "ef0ff2af058208e2ce7c6e319fd00374"
  },
  {
    "url": "blog/Tools/vps.html",
    "revision": "d136435faea468b4b30a5551f6f33624"
  },
  {
    "url": "books/coder.html",
    "revision": "8fb57d483b6f996e63a5aedc3be7f77f"
  },
  {
    "url": "books/cpp.html",
    "revision": "b092c174d7602f9e8f1d983e7fb32096"
  },
  {
    "url": "books/index.html",
    "revision": "69ba817549a66bc24b2b44cdeb39fd9b"
  },
  {
    "url": "books/mongo.html",
    "revision": "ce05c60d481dae6f52bf571e98a5e6ab"
  },
  {
    "url": "commits/index.html",
    "revision": "e0c7ca36901931582b71979e156fcac8"
  },
  {
    "url": "cwnd.jpg",
    "revision": "7cc34e0970901f093d60099907180682"
  },
  {
    "url": "discuss/index.html",
    "revision": "417a27bbdf1606f02a765898ab800f3c"
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
    "revision": "54ae53a730137ce6a7816102f9907d6a"
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
    "revision": "ac6b48772f5449629bcdf381c30c1151"
  },
  {
    "url": "logs/log_nov_18.html",
    "revision": "6213649cfe85aaddf3683dbb97887e3b"
  },
  {
    "url": "logs/note.html",
    "revision": "fee891ca520027d0e9d7fd4f2e368a27"
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
