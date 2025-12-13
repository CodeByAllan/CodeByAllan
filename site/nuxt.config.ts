import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint']
})
