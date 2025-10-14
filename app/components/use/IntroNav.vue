<template>
  <div>
    <div class="fixed top-2 right-4 z-50 lg:hidden" @click="handleShowNav">
      <IconsBars class="w-10" :class="showNav ? 'hidden' : ''" />
      <IconsXmark class="w-10" :class="showNav ? '' : 'hidden'" />
    </div>

    <nav
      class="flex justify-center fixed top-0 left-0 w-full bg-[#111111] py-5 h-full transition-all lg:h-auto lg:translate-x-0"
      :class="showNav ? 'translate-x-0' : '-translate-x-full'"
    >
      <ul
        class="flex gap-14 text-xl text-gray-400 flex-col lg:flex-row pt-20 lg:pt-0"
      >
        <li class="cursor-pointer hover:text-orange-400 transition-all">
          <NuxtLink to="/articles"> Artykuły </NuxtLink>
        </li>
        <li class="cursor-pointer hover:text-orange-400 transition-all">
          <NuxtLink to="/tools"> Dodatkowe narzędzia </NuxtLink>
        </li>
        <li class="cursor-pointer hover:text-orange-400 transition-all">
          <NuxtLink to="/contact"> Kontakt </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const showNav = ref(false);
const handleShowNav = () => (showNav.value = !showNav.value);
</script>

<style></style>
