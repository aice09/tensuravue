const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Tensura Vue',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Novel',
        link: '/novel/',
      },
      {
        text: 'Manga',
        link: '/manga/'
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/novel/': [
        {
          title: 'Novel',
          collapsable: false,
          children: [
            '',
            'chapter-list',
            'prologue',
            'chapter-29',
            'chapter-245',
            'chapter-246',
            'chapter-247',
            'chapter-248',
          ]
        }
      ],
      '/manga/': [
        {
          title: 'Manga',
          collapsable: false,
          children: [
            '',
            'manga-chapter-90',
            'manga-chapter-96',
          ]
        }
      ],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': 'assets/image'
      }
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
