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
    modules: ['@nuxtjs/axios'],

<<<<<<< HEAD
    axios: {
        // baseURL: 'https://travel-advisor-backend.vercel.app',
        baseURL: 'https://travel-backend.vercel.app',
        credentials: true,
    },
=======
  axios: {
    // baseURL: 'http://localhost:3100',
    baseURL: 'http://34.203.236.241',
    credentials: true,
  },
>>>>>>> 01e94a54fa54bfa1d5b40d1101a25bdab3b9acbd

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
}