<template>
  <div class="mt-20">
    <HomeHeader text="Poznaj aplikację!" />
    <p class="text-gray-300 mt-4 lg:text-lg xl:text-xl">
      Sprawdź jak wygląda wnętrze aplikacji, by nic Cię nie zaskoczyło po
      zalogowaniu
    </p>
    <div class="flex flex-wrap gap-10 justify-center mt-10">
      <NuxtImg
        src="/1.png"
        alt="Widok aplikacji"
        class="lg:max-w-md xl:max-w-xl 2xl:max-w-2xl rounded shadow-xl"
      />
      <NuxtImg
        src="/2.png"
        alt="Widok aplikacji"
        class="lg:max-w-md xl:max-w-xl 2xl:max-w-2xl rounded shadow-xl"
      />
      <NuxtImg
        src="/3.png"
        alt="Widok aplikacji"
        class="xl:max-w-xl 2xl:max-w-2xl rounded shadow-xl object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
