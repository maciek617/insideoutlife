<template>
  <div class="min-h-100vh h-full min-h-[100vh] text-white px-4">
    <UseIntroNav />
    <HomeIntro />
    <HomeHero />
    <HomeWhy />
    <!-- <HomeQuote class="lg:mt-32 xl:mt-44" /> -->
    <HomeStats class="lg:mt-32" />
    <HomeImages class="lg:mt-32" />
    <HomeEnd class="lg:mt-44" />
    <HomeFaq class="lg:mt-24" />
    <HomeNewsletter class="lg:mt-24" />
    <!-- <HomeMotivate /> -->
    <HomeScrollUp />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default-no-app'
})
useSeoMeta({
  title: "Wsparcie dla mężczyzn po zdradzie i rozstaniu",
  description:
    "InsideOutLife pomaga mężczyznom po zdradzie i rozstaniu lepiej zrozumieć emocje, odbudować pewność siebie i świadomie budować kolejne relacje.",

  ogTitle: "InsideOutLife – wsparcie dla mężczyzn po zdradzie i rozstaniu",
  ogDescription:
    "Wiedza, narzędzia i materiały pomagające zrozumieć emocje, odbudować pewność siebie i relacje.",
  ogType: "website",
  ogUrl: "https://insideoutlife.pl",
  ogSiteName: "InsideOutLife",
  ogLocale: "pl_PL",
});
</script>

<style>
.bg-button {
  background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
}
</style>
