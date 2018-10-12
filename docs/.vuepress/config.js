module.exports = {
  title: 'work.weigao.cc',
  description: 'anothor site for work',
  plugins: ['@vuepress/back-to-top', '@vuepress/last-updated'],
  // plugins: {
  //   '@vuepress/back-to-top' : true,
  //   // '@vuepress/last-updated' : true
  // },
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
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
  // head: [
  //   ['link', { rel: 'icon', href: '/dist/assets/img/author21.png'}]
  // ],
  // markdown: {
  //   lineNumbers: true
  // },
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Blog',
        link: '/dev/'
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
          }
        ]
      },
      {
        text: 'About',
        items: [{
          text: 'Main Blog',
          link: 'https://www.weigao.cc'
        }, {
          text: 'GitHub',
          link: 'https://github.com/chenweigao'
        }]
      }
    ],

    sidebar: {
      '/dev/': [{
          title: 'Zen',
          collapsable: false,
          children: [
            '/dev/zen/pyzen'
          ]
        },
        {
          title: 'Web',
          collapsable: false,
          children: [
            '/dev/web/vue',
            '/dev/web/qqbot',
            '/dev/web/flask'
          ]
        },
        {
          title: 'Python',
          collapsable: true,
          children: [
            '/dev/python/fileserver',
            '/dev/python/re'
          ]
        },
        {
          title: 'Tool',
          collapsable: false,
          children: [
            '/dev/tool/git',
            '/dev/tool/jekyll'
          ]
        },
        {
          title: 'Research',
          children: [
            '/dev/research/'
          ]
        },
      ],
      '/algorithm/cpp/': [
        '',
        'c'
      ],
      '/algorithm/leetcode/': [
        '',
      ],
      '/algorithm/python/': [
        '',
        'urllib'
      ],
      '/logs/': [
        '',
        'note'
      ],
      '/': [
        '',
      ]
    },
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    }
  }
}