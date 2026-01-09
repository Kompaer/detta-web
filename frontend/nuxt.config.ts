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
    publisherId: "a83da577-f51c-457c-83cf-bcb34ebb1474",
  },

  css: ["~/assets/css/main.css"],
  ssr: true,

  routeRules: {
    "/": { prerender: true },
  },

  colorMode: {
    preference: "dark",
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
