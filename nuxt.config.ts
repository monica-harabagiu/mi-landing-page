// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@hypernym/nuxt-gsap'],
  css: [
    '@/assets/main.scss'
  ],
  ssr: true,
  // nitro: {
  //   baseURL: 'https://metodoimmobiliare.com/landing',
  //   preset: 'node-server'
  // },
  // routeRules: {
  //   "/": {
  //     prerender: false
  //   }
  // },
  // nitro:  {
  //   prerender: {
  //     failOnError: false,
  //   }
  // },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_variables.scss" as *;',
        },
      },
    },
  },
})