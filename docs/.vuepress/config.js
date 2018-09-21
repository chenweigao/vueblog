module.exports = {
  title: 'WEIGAO WORK',
  description: 'anothor site for work',
  // head: [
  //   ['link', { rel: 'icon', href: '/dist/assets/img/author21.png'}]
  // ],
  markdown: {
    lineNumbers: true
  },
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
        text: 'Tool',
        link: '/tool/'
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
      // '/algorithm/leetcode/': [
      //   '',
      // ],
      '/web/': [
        '',
        'a',
        'b',
      ],
      'algorithm': [
        '',
        '/cpp/'
      ],
      '/': [
        '',
      ]
    },
    // sidebar : 'auto',
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