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
    "revision": "4b6ff737f1b3102f419c173880d9cb42"
  },
  {
    "url": "algorithm/cpp/makefile.html",
    "revision": "3324b54673e7de0631af28727ba6f982"
  },
  {
    "url": "algorithm/cpp/map_set.html",
    "revision": "adce6b85f88df63409ad22aed5adb496"
  },
  {
    "url": "algorithm/cpp/newcpp.html",
    "revision": "587f5c47d3a5bbfc6ce09dd350e4f5c5"
  },
  {
    "url": "algorithm/cpp/pointer.html",
    "revision": "1b0ebc010c54415e7efe4a7aec63e567"
  },
  {
    "url": "algorithm/cpp/string.html",
    "revision": "5e8a4b28b93a8b02223f4408d76b8cad"
  },
  {
    "url": "algorithm/cpp/vector_and_iterator.html",
    "revision": "2bcdbf36cd4b0ba8b118b573a5df12e5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ac5c21f5791d7ba94f8f795107d1ca08"
  },
  {
    "url": "algorithm/leetcode/algorithm.html",
    "revision": "d10055495f995f8415cd2d8dd8ae64eb"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "e35e8aa362be6dabea4682d5090deb94"
  },
  {
    "url": "algorithm/leetcode/math.html",
    "revision": "5f23824a9ab127347881371d939ec362"
  },
  {
    "url": "algorithm/leetcode/sort.html",
    "revision": "caea0bf62ff815c6fb6c2f0b6c2672b3"
  },
  {
    "url": "algorithm/leetcode/stack.html",
    "revision": "2e029297c6754b988ac335b89f756618"
  },
  {
    "url": "algorithm/python/fluentpython.html",
    "revision": "d66b4d52c9a019afc90709a3cbb09cf7"
  },
  {
    "url": "algorithm/python/functions.html",
    "revision": "9dcb8713e2195d983f911f57ea6f0bb5"
  },
  {
    "url": "algorithm/python/index.html",
    "revision": "c286c4e3cac9d22c256f5c7bf3184465"
  },
  {
    "url": "algorithm/python/py_interview.html",
    "revision": "ffea6c835042b109c9bd165d84da3316"
  },
  {
    "url": "algorithm/python/tools.html",
    "revision": "1997c886daba19d4916eb345dbece7b7"
  },
  {
    "url": "algorithm/web/index.html",
    "revision": "c7c74c757a9556e5c2418242a0e1eb10"
  },
  {
    "url": "algorithm/web/javascript.html",
    "revision": "743e5f323a74eb4f3ce8ad5fce9517af"
  },
  {
    "url": "algorithm/zen/code_life.html",
    "revision": "b261a73abe657692e1bd34b636789f44"
  },
  {
    "url": "algorithm/zen/index.html",
    "revision": "46971694351d07f49611ebc1b719a374"
  },
  {
    "url": "algorithm/zen/thoughts.html",
    "revision": "f83c2fc81b98cef0bc678f2090febb63"
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
    "url": "assets/css/0.styles.7f8e8e17.css",
    "revision": "d9295e66092447b6a13396e882cacc28"
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
    "url": "assets/js/1.4d845e0f.js",
    "revision": "964ef3a7cf726526009cd039219b2a5e"
  },
  {
    "url": "assets/js/10.cb991f27.js",
    "revision": "110c8fceb3a5e4029b3a8ce3b211ded5"
  },
  {
    "url": "assets/js/100.166bc196.js",
    "revision": "dce414b5ebdba32739b60a17af5c905c"
  },
  {
    "url": "assets/js/101.e7cffef0.js",
    "revision": "e6cc7f81047bd7c203aac15543d452d7"
  },
  {
    "url": "assets/js/11.bdee8adf.js",
    "revision": "d89e097e944322451975553a9b8291b4"
  },
  {
    "url": "assets/js/12.0de60934.js",
    "revision": "1fd0f0077c0a663d28ffbdc6d4bbfc36"
  },
  {
    "url": "assets/js/13.22e5ae3c.js",
    "revision": "22852142fe6da17d6b5c9f35c263c485"
  },
  {
    "url": "assets/js/14.60349479.js",
    "revision": "3dd704a734836a8dbbbea455d63d4d5c"
  },
  {
    "url": "assets/js/15.e90da1aa.js",
    "revision": "e14afc952ccf2de1c55bb9c30cc5f4c7"
  },
  {
    "url": "assets/js/16.d46a3f03.js",
    "revision": "5da9f9b457d713bfe7b319b3d225488a"
  },
  {
    "url": "assets/js/17.08b43f37.js",
    "revision": "f9c53ad76feb2041e557fab0d5101305"
  },
  {
    "url": "assets/js/18.540ea5c0.js",
    "revision": "e018ee8d39b61b89621bc4452dcea2b0"
  },
  {
    "url": "assets/js/19.2a3cffb5.js",
    "revision": "675f9f9bdb09f86bcff1a6e6bfbaa808"
  },
  {
    "url": "assets/js/20.dd893499.js",
    "revision": "95332d4e8455c187cac3ae08a1ab072f"
  },
  {
    "url": "assets/js/21.99dcbff2.js",
    "revision": "1ca93df9c7b7c7e3e5a06d141ec54c60"
  },
  {
    "url": "assets/js/22.8a1e30c6.js",
    "revision": "09bb7194c09c85bb259791294c4d81a8"
  },
  {
    "url": "assets/js/23.ea67e33d.js",
    "revision": "95b244e2a5b8c07a451cdf8e646c6b1e"
  },
  {
    "url": "assets/js/24.849c6af0.js",
    "revision": "70d2732b491a187ced57c850c4dfba9d"
  },
  {
    "url": "assets/js/25.6f9017b1.js",
    "revision": "5e1718bf37fe3055cee11a6c29e6c1c8"
  },
  {
    "url": "assets/js/26.bdeb4817.js",
    "revision": "ad81dfd8957729e1c7ced0f81f242185"
  },
  {
    "url": "assets/js/27.c92505b7.js",
    "revision": "107e461526850523215bfbd8ca293db7"
  },
  {
    "url": "assets/js/28.89df187a.js",
    "revision": "c677144a108e41e3496c1aa25750fc8b"
  },
  {
    "url": "assets/js/29.616cb493.js",
    "revision": "5abab82ac072094dce5793d8f95a8ae6"
  },
  {
    "url": "assets/js/3.95660ab1.js",
    "revision": "0886b813a5bb1e5c9fb5951d0a40920c"
  },
  {
    "url": "assets/js/30.f5dad746.js",
    "revision": "c8348cbafe507d468338093a00cb5a1b"
  },
  {
    "url": "assets/js/31.8f09a1ee.js",
    "revision": "5a9654552c1ac5c466fe1f1e424012bf"
  },
  {
    "url": "assets/js/32.096a4997.js",
    "revision": "e9e798564c4aaaa5f8c2857dd0ac3872"
  },
  {
    "url": "assets/js/33.80e31410.js",
    "revision": "e35eae621451606b5d3be2fbc47f8b5f"
  },
  {
    "url": "assets/js/34.55accda6.js",
    "revision": "44e169e0c4d9535ecbf06a2ace139a62"
  },
  {
    "url": "assets/js/35.7bcfea9f.js",
    "revision": "b101ba87ec4e97e17bfcafc909362246"
  },
  {
    "url": "assets/js/36.70334ad2.js",
    "revision": "508115fa1b219a7e87c43b98c7dd41c5"
  },
  {
    "url": "assets/js/37.adfd7377.js",
    "revision": "8549a8893a8cc4d313988d9835be24dd"
  },
  {
    "url": "assets/js/38.c6c2caf5.js",
    "revision": "6ee0e940d1e8a976ebc5a36f9eed2d48"
  },
  {
    "url": "assets/js/39.57f3f29f.js",
    "revision": "db09d31c5601c39c3177f0e46c696802"
  },
  {
    "url": "assets/js/4.786e9641.js",
    "revision": "9c10c7f94400f0771fcab10c2c87b81f"
  },
  {
    "url": "assets/js/40.ba046e6e.js",
    "revision": "764b6b08f51113dc5127e67f4c39a006"
  },
  {
    "url": "assets/js/41.362b144b.js",
    "revision": "57098b0da25c65d1537b5862ba07690e"
  },
  {
    "url": "assets/js/42.e617596d.js",
    "revision": "daf2aee4282a8d35724dbf05ff6d6919"
  },
  {
    "url": "assets/js/43.e42dc836.js",
    "revision": "a43794997816d04a8e7a0594d955b559"
  },
  {
    "url": "assets/js/44.64b146d7.js",
    "revision": "43e010c57f7f820fa1fb80ae378689e4"
  },
  {
    "url": "assets/js/45.c8012cad.js",
    "revision": "be844b4a4a9b5f0ae8c4d24571e90a8a"
  },
  {
    "url": "assets/js/46.1a47e167.js",
    "revision": "00c8289265ae279b5381439ca7de549c"
  },
  {
    "url": "assets/js/47.043d2168.js",
    "revision": "733bee6c16aacf835ed0c96dff4e4d48"
  },
  {
    "url": "assets/js/48.684c54ed.js",
    "revision": "e6aa2c7eb3b75dd2f3b1d4f8fc06d236"
  },
  {
    "url": "assets/js/49.94d9e282.js",
    "revision": "9deca0e220762053f00fdd344d7773c1"
  },
  {
    "url": "assets/js/5.a58c921c.js",
    "revision": "243c70d80932199a8b8969b7a466f3ea"
  },
  {
    "url": "assets/js/50.4bbd57ab.js",
    "revision": "5f054d9d7c63ea1dfb23639995ae1880"
  },
  {
    "url": "assets/js/51.4532174d.js",
    "revision": "3147ed4bdaaa53e4211f244112e0018f"
  },
  {
    "url": "assets/js/52.95d01fd3.js",
    "revision": "e8c806f390cfa52761ced7df591b2902"
  },
  {
    "url": "assets/js/53.ec487bcb.js",
    "revision": "6d3eefe5956b54e89e9374278c216c50"
  },
  {
    "url": "assets/js/54.85310694.js",
    "revision": "7ede90b3096df6a71f14a1fe54dd9655"
  },
  {
    "url": "assets/js/55.970a70bb.js",
    "revision": "a49991705933078d6cc40d5fd629bdb0"
  },
  {
    "url": "assets/js/56.282912ee.js",
    "revision": "e15fa7f54fcbcb3839f4dd14597c9730"
  },
  {
    "url": "assets/js/57.71bba221.js",
    "revision": "096d0f14f834a41be50ab8947d1a7955"
  },
  {
    "url": "assets/js/58.cee58c7b.js",
    "revision": "dcb4ca2794b33f5461b707827499538f"
  },
  {
    "url": "assets/js/59.9dc76997.js",
    "revision": "3ba79702c03504bb3faa11fb5d1f9edf"
  },
  {
    "url": "assets/js/6.7c76b460.js",
    "revision": "14936587a2b31f16021e4c4fc2c956d1"
  },
  {
    "url": "assets/js/60.51e84112.js",
    "revision": "1d407814ffe791af52605c9c6d92bf8e"
  },
  {
    "url": "assets/js/61.2f70800b.js",
    "revision": "57a025bac42b7ead7489c80087bf6e12"
  },
  {
    "url": "assets/js/62.fb65d368.js",
    "revision": "63247ddf3b8904690a65074b34f4034d"
  },
  {
    "url": "assets/js/63.84802651.js",
    "revision": "c1905ee31529b7804ed1d1a28dd7123e"
  },
  {
    "url": "assets/js/64.6d9fb704.js",
    "revision": "5f11da874817c807aa2db17e125361ab"
  },
  {
    "url": "assets/js/65.811b4d0d.js",
    "revision": "0ef4bbdf2139691f36a138bd78c35469"
  },
  {
    "url": "assets/js/66.8204802d.js",
    "revision": "489d52cbe22873daf4dbce502eb68c1c"
  },
  {
    "url": "assets/js/67.95562b82.js",
    "revision": "9a4c152b143525d9beb2d128f634b5d7"
  },
  {
    "url": "assets/js/68.62f5bbcc.js",
    "revision": "2413eda31993d89c32499ae792b29283"
  },
  {
    "url": "assets/js/69.3076ac6c.js",
    "revision": "37b23473c3bbcbe7dde8858eebe5b886"
  },
  {
    "url": "assets/js/7.ef39b2d1.js",
    "revision": "fe2874a873ca99d550374e5daf7192b9"
  },
  {
    "url": "assets/js/70.493c24d3.js",
    "revision": "8e2b0d3f19fa3a199f91d5f3456dd77f"
  },
  {
    "url": "assets/js/71.dd6e6c35.js",
    "revision": "01b6a829c30176a05ee2547be0f3ff31"
  },
  {
    "url": "assets/js/72.115466c2.js",
    "revision": "3e247bb52fd53763939a3f9db00da7f5"
  },
  {
    "url": "assets/js/73.bba26d6d.js",
    "revision": "35abfe848dff1effdf295f245bef7c38"
  },
  {
    "url": "assets/js/74.f426ace3.js",
    "revision": "3b678b4c03763adf7b5df1229f45b0fc"
  },
  {
    "url": "assets/js/75.24fe4798.js",
    "revision": "d946e9efbf23b35e371690af61832a6c"
  },
  {
    "url": "assets/js/76.1c27311a.js",
    "revision": "c73bd84336b717a122958617593fa32c"
  },
  {
    "url": "assets/js/77.9fef2546.js",
    "revision": "34497e9e41a4c0e187590f011a0da1cd"
  },
  {
    "url": "assets/js/78.db7a1282.js",
    "revision": "f6dec25464614ce5bcf6d54dc8fffe1b"
  },
  {
    "url": "assets/js/79.34b008b9.js",
    "revision": "62745abbccbd76c7d4ada898dbaff643"
  },
  {
    "url": "assets/js/8.e13b994b.js",
    "revision": "2ec10ad7d0ae14dfaefd99a644f068b0"
  },
  {
    "url": "assets/js/80.2ca90b1f.js",
    "revision": "0918b8b7b419254f541812e6de1f7c83"
  },
  {
    "url": "assets/js/81.9c330f4e.js",
    "revision": "4e7c76f671d4c39e2392136fb25d5388"
  },
  {
    "url": "assets/js/82.750d6063.js",
    "revision": "08ff3422c10682a2bdc45377e61589c0"
  },
  {
    "url": "assets/js/83.65e24da2.js",
    "revision": "283a763182e9f33440e013a1321c03da"
  },
  {
    "url": "assets/js/84.a5dae379.js",
    "revision": "bc93604d89f942fb4113df286f0c5e23"
  },
  {
    "url": "assets/js/85.a268f7f2.js",
    "revision": "ba461a699ecf3e0a913a271d75462dd3"
  },
  {
    "url": "assets/js/86.27035b07.js",
    "revision": "af25bf009110ad1c65d9d7164ce7ed48"
  },
  {
    "url": "assets/js/87.1f662c65.js",
    "revision": "31ce9bdd492c2f883044e6b96d9a12bd"
  },
  {
    "url": "assets/js/88.08d13430.js",
    "revision": "af8165a505ed4616170e30405eb570ab"
  },
  {
    "url": "assets/js/89.d281d063.js",
    "revision": "aee5323ca4f4052786a3ebc4f3e06d79"
  },
  {
    "url": "assets/js/9.dad742b6.js",
    "revision": "5e37fbd1d300382303839fc35ab1f772"
  },
  {
    "url": "assets/js/90.d07b37a5.js",
    "revision": "54402664751ea0764a1f702656923f84"
  },
  {
    "url": "assets/js/91.b48e5d14.js",
    "revision": "2b8ea6f57e42730d5c73096f6ed44040"
  },
  {
    "url": "assets/js/92.16b95250.js",
    "revision": "62895100a3969b13ee6cba0143f6b9a0"
  },
  {
    "url": "assets/js/93.4fe2816e.js",
    "revision": "567a72234ea700cedc797cbffdcc88c8"
  },
  {
    "url": "assets/js/94.c5362b99.js",
    "revision": "121950f8b18475d47fd0607187256910"
  },
  {
    "url": "assets/js/95.42757d01.js",
    "revision": "260f4e22ff43b0cbb396ab6bae979bc2"
  },
  {
    "url": "assets/js/96.a0d98f7e.js",
    "revision": "c88c090b3a18ee0ac5a98e2837c9d3d1"
  },
  {
    "url": "assets/js/97.03492270.js",
    "revision": "9f4e5b6e42534f32167097031e4e731d"
  },
  {
    "url": "assets/js/98.015b484d.js",
    "revision": "84ee52f55b16b81bfee8a808ce49eadc"
  },
  {
    "url": "assets/js/99.14771760.js",
    "revision": "b4f9f365ee2b117b6d17b2a44e6aa6ff"
  },
  {
    "url": "assets/js/app.04f618ac.js",
    "revision": "e32f6dc9cbec04f89e797b1e1cd6701e"
  },
  {
    "url": "blog/Backend/bfs_dfs.html",
    "revision": "e8f1bc7574ed085e02f5388ddb5acbff"
  },
  {
    "url": "blog/Backend/code_content.html",
    "revision": "0abe64df69b75e115e7787b860ea99ea"
  },
  {
    "url": "blog/Backend/database.html",
    "revision": "a8c0284287d0723042657cebf5c3fd95"
  },
  {
    "url": "blog/Backend/Docker.html",
    "revision": "1b9a3c0e174bde5d6d80c6b1eab6623b"
  },
  {
    "url": "blog/Backend/flask.html",
    "revision": "42ba2fc82bc13035f1efe95992e13383"
  },
  {
    "url": "blog/Backend/interview_problem.html",
    "revision": "9ab51ac2aa75d9ab1d983c656aa6ae97"
  },
  {
    "url": "blog/Backend/kernel.html",
    "revision": "6b20ba5bfa0201f2c0c4f7e707689835"
  },
  {
    "url": "blog/Backend/leetcode_problem.html",
    "revision": "8d2d0556db4e347d39af8ff2688d40fb"
  },
  {
    "url": "blog/Backend/linux.html",
    "revision": "79bff443c88cadf2f9ce49b78bd7caae"
  },
  {
    "url": "blog/Backend/networks.html",
    "revision": "6eb1d679a6118fd4dbecaaef2581af00"
  },
  {
    "url": "blog/Backend/snap.html",
    "revision": "9544c20ee30094499a325ca5d1189e85"
  },
  {
    "url": "blog/Backend/thread_process.html",
    "revision": "bfbfbc887f2f06b73df6d5540a866801"
  },
  {
    "url": "blog/Deeplearning/cnn.html",
    "revision": "6b7537ff772a2c5f11f4c79f131b8ff8"
  },
  {
    "url": "blog/Deeplearning/face_recognition.html",
    "revision": "c2dcc7b6cb3c4966cfaa51fe5fe8bdb7"
  },
  {
    "url": "blog/Deeplearning/mnist.html",
    "revision": "bcd72f1454e46fc224844feff98af177"
  },
  {
    "url": "blog/Deeplearning/opencv.html",
    "revision": "d85b728bd23be2899fc72aeaa57bff40"
  },
  {
    "url": "blog/Deeplearning/tensorflow.html",
    "revision": "5eae0ce2148b187a935b5b13effae921"
  },
  {
    "url": "blog/Deeplearning/tensorflowio.html",
    "revision": "0212339036806d2b84bf50abcdf1cccd"
  },
  {
    "url": "blog/Frontend/charts.html",
    "revision": "33cc0a1b357dae5d43938d5aa52fbab7"
  },
  {
    "url": "blog/Frontend/css.html",
    "revision": "96a4d00af9597c8ef5add1eb11d90297"
  },
  {
    "url": "blog/Frontend/vue-cli.html",
    "revision": "94337df5edb10836c61326dbe8d355e2"
  },
  {
    "url": "blog/Frontend/vue.html",
    "revision": "3c47a5f74032f176d4f1de8976f1e6fc"
  },
  {
    "url": "blog/Others/new.html",
    "revision": "e456894bedaf358aa8a232bfce86289a"
  },
  {
    "url": "blog/Others/resume.html",
    "revision": "38bf2e0bb7d01754e963d7a3c8d605a9"
  },
  {
    "url": "blog/Others/worklog.html",
    "revision": "0bfa18d5c7d92f8c6a6b0d01099f9b9b"
  },
  {
    "url": "blog/Projects/jekyll.html",
    "revision": "93e91a878d4d40d06f72cba94d3fb141"
  },
  {
    "url": "blog/Projects/kilo.html",
    "revision": "f7598ebc439e020f01b3045b1d156f07"
  },
  {
    "url": "blog/Projects/qqbot.html",
    "revision": "5bc31855a887dec20a375d3c2c70ff6e"
  },
  {
    "url": "blog/Projects/vueblog.html",
    "revision": "329b689107b981ba6d51b1eaf03b89ad"
  },
  {
    "url": "blog/Research/ArrayTrack.html",
    "revision": "4d3ae6bc63fb2b5d7059abbb034ca5a9"
  },
  {
    "url": "blog/Research/csitool.html",
    "revision": "3da35d02b283ef0847fd3763507518c0"
  },
  {
    "url": "blog/Research/information_theory.html",
    "revision": "cbd093c4de825f4e7587bb7ac05133c0"
  },
  {
    "url": "blog/Research/object_tracking.html",
    "revision": "f0c5a887622601a97cc8b6187fd67d6b"
  },
  {
    "url": "blog/Research/RF-Pose.html",
    "revision": "912afcd0bf8e7ac140e306ec52933f3c"
  },
  {
    "url": "blog/Research/splicer.html",
    "revision": "b3decb47fc4101a562bbee9b8e6540c4"
  },
  {
    "url": "blog/Tools/apt.html",
    "revision": "5d197eb8f853a44c519a296054882c89"
  },
  {
    "url": "blog/Tools/git.html",
    "revision": "c467516b6d4023b740d6d00ce46b6ccb"
  },
  {
    "url": "blog/Tools/vim.html",
    "revision": "fedf9a5cf151419fed0df18911d59fea"
  },
  {
    "url": "blog/Tools/vps.html",
    "revision": "c43aa89464a7de00952bae68d644999c"
  },
  {
    "url": "books/coder.html",
    "revision": "195dd54d4f360732fe35c0af0c70de80"
  },
  {
    "url": "books/cpp.html",
    "revision": "3348cb49c477923e8938b1f54f090529"
  },
  {
    "url": "books/index.html",
    "revision": "42e7e544246312c175c5228bc38b763f"
  },
  {
    "url": "books/mongo.html",
    "revision": "d8db04153f5d04c4b315b2372c607db3"
  },
  {
    "url": "commits/index.html",
    "revision": "b0e9130409a489ed85f978bf61a62f55"
  },
  {
    "url": "cwnd.jpg",
    "revision": "7cc34e0970901f093d60099907180682"
  },
  {
    "url": "discuss/index.html",
    "revision": "6afc32a786cc53c2d1dc545d401665a6"
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
    "revision": "773daa5766477cdc578aadb397487004"
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
    "revision": "2f02c98d9c3c3e41f8df806bd83f8116"
  },
  {
    "url": "logs/log_nov_18.html",
    "revision": "3b2a02837d1cdd927a140a39c87dc56d"
  },
  {
    "url": "logs/note.html",
    "revision": "0fe0afbbec15aa6fa075f37749d77c45"
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
