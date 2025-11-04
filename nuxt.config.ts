// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Aachen Open 2025',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/aachen-open-logo.svg'
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]
    }
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["../app/assets/styles/main.css"],
  fonts: {
    families: [
      {
        name: "helvetica world",
        src: "../app/assets/fonts/helvetica-world-regular.woff2"
      }
    ]
  },
  runtimeConfig: {
    googleSpreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    googleApiKey: process.env.GOOGLE_API_KEY,

    public: {
    }
  },
});
