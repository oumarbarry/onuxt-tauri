// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: { shim: false },

  vite: {
    clearScreen: false,
    server: { strictPort: true },
    envPrefix: ['VITE_', 'TAURI_'],
    build: {
      target: process.env.TAURI_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
      minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
      sourcemap: !!process.env.TAURI_DEBUG,
    },
  },

  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
  ],

  tailwindcss: { viewer: false },
})
