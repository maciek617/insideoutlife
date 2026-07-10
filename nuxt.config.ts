// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "pl",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/supabase",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@pinia/nuxt",
    "nuxt-schema-org",
  ],
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
  site: {
    baseUrl: "https://insideoutlife.pl",
    url: "https://insideoutlife.pl",
    name: "InsideOutLife - wsparcie dla mężczyzn",
    titleTemplate: "%s | InsideOutLife",
    description:
      "InsideOutLife to wsparcie dla mężczyzn po zdradzie i rozstaniu. Artykuły, wiedza i narzędzia pomagające odbudować pewność siebie, emocje i relacje.",
    author: "Maciej",
    ogImage: "/og-image.png",
    ogType: "website",
    defaultLocale: "pl",
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "InsideOutLife",
      url: "https://insideoutlife.pl",
      description:
        "Wsparcie dla mężczyzn po zdradzie, artykuły i materiały dotyczące relacji, emocji i odbudowy siebie.",
    },
  },
});
