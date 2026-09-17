<template>
  <div class="text-white min-h-[100vh] px-4">
    <NuxtLink to="/" class="mt-4">
      <UseButton text="Powrót" class="mt-4" />
    </NuxtLink>
    <ContactHero />
    <ContactForm />
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Kontakt",
  description: "Masz pytanie? a może plan? wpadnij do InsideOutLife.",

  ogTitle: "Kontakt | InsideOutLife",
  ogDescription: "Masz pytanie? a może plan? wpadnij do InsideOutLife.",
  ogType: "website",
  ogUrl: "https://insideoutlife.pl/contact",
  ogSiteName: "InsideOutLife",
  ogLocale: "pl_PL",
});
</script>

<style></style>
