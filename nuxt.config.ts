export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },

  vite: {
    clearScreen: false,
    server: { strictPort: true },
    envPrefix: ["VITE_", "TAURI_"],
  },

  nitro: { output: { publicDir: "dist" } },

  modules: [
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
  ],

  eslint: { config: { standalone: false } },
})
