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
    // ['git-log']

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