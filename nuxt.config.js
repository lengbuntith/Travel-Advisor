import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'Cambo Travel',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=default',
      },
      //  {
      //   src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCe2Y_jyDxUVmERWNu4xSKtBQ_pC3omxEI&callback',
      //   body: true,
      //   async: true,
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  /*
   ** Build configuration
   */
  build: {},

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  axios: {
    //baseURL: 'http://localhost:3001', //offline
    baseURL: 'https://movieez.ml', //online
    credentials: true,
  },

  auth: {
    strategies: {
      local: {
        token: {
          required: true,
          maxAge: 86400, //in second
          autoLogout: true,
          type: false,
        },

        user: {
          property: false, //if status is error it's mean token is not valid
        },

        //endpoints first login --> user, after logged user request every time
        endpoints: {
          login: { url: '/auth/login', method: 'post' }, //login to get token
          user: { url: '/auth/me', method: 'get' }, //auto request to backend as a verification token is valid
          logout: { url: '/auth/logout', method: 'post' },
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#40b3a2',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },

        light: {
          primary: '#40b3a2',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  generate: {
    fallback: '404.html',
  },

  loadingIndicator: {
    name: 'cube-grid',
    color: 'rgba(64, 179, 162)',
    background: 'rgba(34,193,195,0.4)',
    background:
      'linear-gradient(0deg, rgba(34,193,195,.3) 0%, rgba(223,171,28,.2) 100%)',
  },
}
