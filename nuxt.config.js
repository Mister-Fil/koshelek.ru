// eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/koshelek.ru/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'koshelek.ru',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/DateTime' },
    { src: '~/plugins/Duration' },
    { src: '~/plugins/Interval' },
    { src: '~/plugins/vue-drag-resize' },
    { src: '~/plugins/vue-native-websocket' },
    { src: '~/plugins/uuidGen' },
    { src: '~/plugins/persistedState.client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    // icons: true,
    // components: ['BIcon', 'BIconAlertFill', 'BIconCalendar', 'BIconGears'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'koshelek.ru',
      short_name: 'koshelek.ru',
      description: 'koshelek.ru',
      lang: 'ru',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      // start_url: '/',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
  },
}
