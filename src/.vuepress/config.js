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
            'manga-chapter-1',
            'manga-chapter-2',
            'manga-chapter-3',
            'manga-chapter-4',
            'manga-chapter-5',
            'manga-chapter-6',
            'manga-chapter-7',
            'manga-chapter-8',
            'manga-chapter-87',
            'manga-chapter-87.5',
            'manga-chapter-88',
            'manga-chapter-89',
            'manga-chapter-90',
            'manga-chapter-91',
            'manga-chapter-92',
            'manga-chapter-93',
            'manga-chapter-94',
            'manga-chapter-95',
            'manga-chapter-96',
            'manga-chapter-97',
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
