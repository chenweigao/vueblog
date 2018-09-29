module.exports = {
  title: 'work.weigao.cc',
  description: 'anothor site for work',
  plugins: ['back-to-top', true],  
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
        text: 'Web',
        link: '/web/'
      },
      {
        text: 'Linux',
        link: '/linux/'
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
      '/algorithm/cpp/': [
        '',
        'c'
      ],
      '/algorithm/leetcode/': [
        '',
      ],
      '/linux/': [
        '',
        'git'
      ],
      '/web/': [
        '',
        'b',
        'flask',
      ],
      '/algorithm/': [
        '',
        '/cpp/',
        '/leetcode/'
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