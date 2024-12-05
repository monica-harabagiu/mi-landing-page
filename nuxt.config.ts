// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@hypernym/nuxt-gsap'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  css: [
    '@/assets/main.scss'
  ],
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
      script: [
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '366239555196435');
            fbq('track', 'PageView');
              `
          }
        ]
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