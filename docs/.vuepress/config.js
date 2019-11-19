module.exports = {
  title: 'weigao',
  description: '...',
  head: [
    ['link', {
      rel: 'icon',
      href: `/android-chrome-512x512.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      // content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    // ['link', {
    //   rel: 'apple-touch-icon',
    //   href: `/icons/apple-touch-icon-152x152.png`
    // }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      // color: '#3eaf7c'
    }],
    // ['meta', {
    //   name: 'msapplication-TileImage',
    //   content: '/icons/msapplication-icon-144x144.png'
    // }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  plugins: [
    // ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/last-updated'],
    ['@vuepress/medium-zoom'],
    ['@vuepress/nprogress'],
    ['vuepress-plugin-reading-time'],
    ['mathjax', {
      target: 'svg',
      macros: {
        '*': '\\times',
      },
      showError: true
    }],
    // [
    //   "ribbon",
    //   {
    //     size: 90, // 彩带的宽度，默认为 90
    //     opacity: 0.8, // 彩带的不透明度，默认为 0.3
    //     zIndex: -1// 彩带的 z-index 属性，默认值为 -1
    //   }
    // ],
    ["cursor-effects"],
    ['go-top'],
    ['nest'],
    // [
    //   'social-share'
    // ],
    // [
    //   'vuepress-plugin-baidu-autopush' 
    // ],
    [
      'reading-progress'
    ],
    [
      "vuepress-plugin-live2d",
      {
        "modelName": "tororo",
        // "modelName": ['hijiki', 'tororo', "z16", "Epsilon2.1", "izumi", "koharu", "shizuku", "miku"],
        "mobileShow": false,
        "position": "left"
      }
    ],
    // [
    //   'vuepress-plugin-element-tabs'
    // ]
    // ['git-log'],
    // [
    //   '@vssue/vuepress-plugin-vssue',
    //   {
    //     platform: 'gitlab',

    //     // 其他的 Vssue 配置
    //     owner: 'chenweigao',
    //     repo: 'vueblog',
    //     clientId: 'fbd6a6171cae801196a4cc4b7438f32a569e2c7ebb943667642163becd72ed3b',
    //     clientSecret: '5894de5187e1d37b2266b52da80a678ff0bcbe621a8e38a6fb6ab53b43c058ba',
    //   }
    // ],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine', 
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'wJrq8Ck2MqeaFzOYUf0TcP6G-gzGzoHsz',
    //       appKey: 'taRHm1fEce4nGp2lmNgkiW9U'
    //     }
    //   }
    // ]

  ],
  themeConfig: {
    sidebar: 'auto',
    // logo: 'weigao.jpg',
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Tags',
      link: '/tags/'
    },
    {
      text: 'Minds',
      link: '/mind.html'
    },
    {
      text: 'Recent&All',
      link: '/all/'
    },

    {
      text: 'More',
      items: [
        {
          text: 'Jottings',
          link: '/Jottings.html'
        },
        {
          text: 'About',
          link: '/blog/others/resume.html'
        },
        {
          text: 'Git',
          items:
            [
              {
                text: 'Commits',
                link: '/commits/'
              },
              {
                text: 'GitHub',
                link: 'https://github.com/chenweigao'
              },
            ]
        }
      ]
    }
      // {
      //   text: 'About',
      //   link: '/blog/2019/resume'
      // }
    ]
  },
  serviceWorker: {
    updatePopup: true,
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
}