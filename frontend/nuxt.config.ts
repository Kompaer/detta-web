// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@manic/mavis-base",
    "@nuxtjs/i18n",
    "@nuxtjs/mdc",
    "@pinia/nuxt",
  ],

  devtools: {
    enabled: true,
  },

  mavis: {
    formUrl: "https://form.mavis-app.de/backend",
    backendUrl: "https://panel.mavis-app.de/cms",
    publisherId: "publisher/976fc301-f997-4d6c-8dcc-ad998b1102ae",
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
