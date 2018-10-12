module.exports = {
  title: 'work.weigao.cc',
  description: 'anothor site for work',
  // plugins: ['@vuepress/back-to-top'],
  base: '/vueblog/',
  plugins: {
    '@vuepress/back-to-top' : true,
    // '@vuepress/last-updated' : true
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/last-update': true
    
  },
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
        link: '/blog/'
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
      '/blog/': [{
          title: 'Zen',
          collapsable: false,
          children: [
            '/blog/zen/pyzen'
          ]
        },
        {
          title: 'Web',
          collapsable: true,
          children: [
            '/blog/web/vue',
            '/blog/web/database',
            '/blog/web/flask'
          ]
        },
        {
          title: 'Python',
          collapsable: true,
          children: [
            '/blog/python/fileserver',
            '/blog/python/qqbot',
            '/blog/python/re',
          ]
        },
        {
          title: 'Tool',
          collapsable: false,
          children: [
            '/blog/tool/apt',
            '/blog/tool/git',
            '/blog/tool/vim',
            '/blog/tool/jekyll'
          ]
        },
        {
          title: 'Research',
          children: [
            '/blog/research/'
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
      updatePopup: true,
      updatePopup: { 
         message: "New content is available.", 
         buttonText: "Refresh" 
      }
    }
  }
}