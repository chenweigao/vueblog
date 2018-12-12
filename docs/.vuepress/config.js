module.exports = {
  title: 'WeiGao',
  description: 'Welcome, friend! ',
  // plugins: ['@vuepress/back-to-top'],
  // plugins: {
  //   '@vuepress/back-to-top': true,
  //   '@vuepress/pwa': {
  //     serviceWorker: true,
  //     updatePopup: true
  //   },
  //   '@vuepress/last-updated': true
  // },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    [
      '@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale("zh-cn")
          lang = "zh-cn"
          return moment(timestamp).format('YYYY/M/DD HH:mm')
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo3.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: `/icons/apple-touch-icon-152x152.png`
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Books',
        link: '/books/'
      },
      {
        text: 'Discuss',
        link: '/discuss/'
      },
      {
        text: 'Docs',
        link: '/logs/'
      },
      {
        text: 'Code',
        items: [{
            text: 'C/C++',
            link: '/algorithm/cpp/'
          },
          {
            text: 'Python',
            link: '/algorithm/python/'
          },
          {
            text: 'Leetcode',
            link: '/algorithm/leetcode/'
          },
          {
            text: 'Web&JS',
            link: '/algorithm/web/'
          }
        ]
      },
      {
        text: 'About',
        link: '/about/'
      }
    ],

    sidebar: {
      '/blog/': [{
          title: 'Zen',
          collapsable: false,
          children: [
            '/blog/zen/',
            '/blog/zen/thoughts'
          ]
        },
        {
          title: 'Web',
          collapsable: true,
          children: [
            '/blog/web/',
            '/blog/web/vue-cli',
            '/blog/web/vue',
            '/blog/web/database',
            '/blog/web/flask',
            '/blog/web/javascript',
            '/blog/web/css'
          ]
        },
        {
          title: 'Project',
          collapsable: true,
          children: [
            '/blog/project/',
            '/blog/project/kilo',
            '/blog/project/qqbot',
            '/blog/project/vueblog',
            '/blog/project/jekyll'
          ]
        },
        {
          title: 'Tool',
          collapsable: true,
          children: [
            '/blog/tool/',
            '/blog/tool/apt',
            '/blog/tool/git',
            '/blog/tool/vim'
          ]
        },
        {
          title: 'Research',
          children: [
            '/blog/research/',
          ]
        },
      ],
      '/books/': [
        '',
        'coder',
        'cpp',
        'mongo'
      ],
      '/algorithm/cpp/': [
        '',
        'c',
        'string',
        'map_set',
        'makefile'
      ],
      '/algorithm/leetcode/': [
        '',
        'math'
      ],
      '/algorithm/python/': [
        '',
        'functions',
        'tools'
      ],
      '/algorithm/web/': [
        ''
      ],
      '/logs/': [
        '',
        'note',
				'log_nov_18'
      ],
      '/': [
        '',
      ]
    },
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }
  }
}