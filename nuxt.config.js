import bodyParser from 'body-parser'

export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My cool Web Development Blog',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      },
    ],
  },

  /* controls the progress bar at the top of the page on universal mode */
  loading: { color: '#fa923f', head: '4px', duration: 5000 },

  /* shows a icon on the center of the page on spa mode */
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      'https://nuxt-blog-47a07-default-rtdb.firebaseio.com',
    credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  dev: true,
  env: {
    baseUrl:
      process.env.BASE_URL ||
      'https://nuxt-blog-47a07-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyBQcsYD96YVMVE_cTWk0_wj18P4jb7-PxE',
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  // route: {
  //   middleware: 'log'
  // }
  serverMiddleware: [bodyParser.json(), '~/server'],
}
