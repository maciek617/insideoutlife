// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/fonts", "@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY, // 🔒 tylko backend
    public: {
      supabaseAnonKey: process.env.SUPABASE_KEY, // 👀 tylko anon key na froncie
    },
  },
});
