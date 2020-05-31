module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'A functional css system',
    titleTemplate: '%s - Preons',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:wght@200;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/default.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://pwa.nuxtjs.org/
    [
      '@nuxtjs/pwa',
      {
        workbox: false
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://content.nuxtjs.org/installation
    '@nuxt/content',
    // https://www.npmjs.com/package/nuxt-bugsnag
    [
      'nuxt-bugsnag',
      {
        config: {
          apiKey: '5dc3d9bfc9eeaaf7918bad1055f13ed9'
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  pwa: {
    meta: {
      theme_color: '#311e67'
    }
  },
  /**
   * Generate routes
   */
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const articles = await $content('articles')
        .only(['path'])
        .fetch()

      const cli = await $content('learn/cli')
        .only(['path'])
        .fetch()

      const ui = await $content('learn/ui')
        .only(['path'])
        .fetch()
      return []
        .concat(articles, cli, ui)
        .map((file) => (file.path === '/index' ? '/' : file.path))
    }
  },

  /**
   * Use babel
   */
  babel: {
    presets({ envName }) {
      const envTargets = {
        client: { browsers: ['last 2 versions', 'iOS >= 8', 'Safari >= 8'] },
        server: { node: 'current' }
      }
      return [
        [
          '@nuxt/babel-preset-app',
          {
            targets: envTargets[envName]
          }
        ]
      ]
    }
  }
}
