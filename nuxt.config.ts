// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  }

});
