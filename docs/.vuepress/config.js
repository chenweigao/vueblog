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
  plugins: [
    ['@vuepress/back-to-top', true],
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
    // ['git-log']

  ],
  themeConfig: {
    sidebar: 'auto',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Discuss',
        link: '/discuss/'
      },
      {
        text: 'Commits',
        link: '/commits/'
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