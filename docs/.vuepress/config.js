module.exports = {
  title: 'WeiGao',
  description: 'Welcome, friend! ',
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/last-updated']
  ],
  themeConfig: {
    sidebar: 'auto',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Algorithm',
        link: '/algorithm/'
      }
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
    // extendMarkdown: md => {
    //   md.use(require("markdown-it-katex"));
    //   }
  }
}