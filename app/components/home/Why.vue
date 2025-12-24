<template>
  <div class="mt-28 lg:mt-32 xl:mt-40 2xl:mt-52">
    <div class="flex flex-col items-center lg:flex-row lg:justify-around">
      <div>
        <HomeHeader text="Dlaczego warto?" />
        <div
          v-for="b in base"
          :key="b"
          class="text-gray-300 text-lg font-thin my-4 flex items-center gap-4 flex-1"
        >
          <p>✨</p>
          <p>{{ b }}</p>
        </div>
      </div>
      <div class="relative max-w-sm w-full">
        <div
          class="absolute -mt-8 ml-6 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-32 z-10 h-32 rounded-full bg-gradient-to-r from-[#F14D5C] to-[#FDC70C] blur-3xl"
        ></div>
        <IconsMagnet class="max-w-sm w-full" />
      </div>
    </div>

    <div class="mt-10 lg:mt-20 xl:mt-32 flex justify-end">
      <div
        class="flex-col flex items-center lg:flex-row-reverse lg:justify-around lg:items-start w-full"
      >
        <div>
          <HomeHeader text="Odkryj moc artykułów" />
          <p class="text-gray-300 max-w-xl font-thin lg:mt-2 lg:text-lg">
            Już teraz nawet bez zakładania konta możesz przeczytać artykuły,
            które mogą Ci pomóc w budowaniu nowej, lepszej wersji Ciebie.
          </p>
          <NuxtLink to="/articles">
            <UseButton text="Artykuły" class="mt-8" />
          </NuxtLink>
        </div>
        <div class="relative max-w-sm w-full lg:-mt-10">
          <div
            class="absolute -mt-8 ml-1 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-32 z-10 h-32 rounded-full bg-gradient-to-r from-[#F14D5C] to-[#FDC70C] blur-3xl"
          ></div>
          <IconsArt class="max-w-sm w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const base = ref([
  "Anonimowość i bezpieczeństwo",
  "Prawdziwe wsparcie od osób w podobnej sytuacji",
  "Narzędzia, które pomogą Ci odbudować siebie",
]);
</script>

<style></style>
