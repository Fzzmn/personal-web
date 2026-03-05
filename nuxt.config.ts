// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxt/fonts',
  ],

  fonts: {
    families: [
      { name: 'JetBrains Mono', provider: 'google' },
      { name: 'Inter', provider: 'google' },
    ],
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  app: {
    head: {
      title: 'Fauzi M — Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'I engineer structured web systems with React and Next.js, and build real-time server infrastructure.' },
        { name: 'theme-color', content: '#0a0f1a' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
})
