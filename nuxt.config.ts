// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  colorMode: {
    classSuffix: ''
  },
  modules: [
    '@nuxtjs/color-mode', 
    '@nuxtjs/tailwindcss', 
    '@nuxt/image',
    'shadcn-nuxt'
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  } ,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },  
})
