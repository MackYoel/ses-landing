const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.neax.io/assets/neax-fonts.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '@/assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-131091117-1'
    }]
  ],

  /*
  ** Build configuration
  */
  env: {
    hostName: process.env.HOST_NAME || 'http://localhost:8000'
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    postcss: [
      require('postcss-preset-env')({
        stage: 0,
        preserve: false,
        importFrom: [],
        features: {
          'color-mod-function': {
            unresolved: 'ignore'
          }
        }
      })
    ]
  }
}
