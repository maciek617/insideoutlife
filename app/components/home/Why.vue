<template>
  <div class="mt-20 lg:mt-32 xl:mt-40 2xl:mt-52">
    <div class="flex flex-col items-center lg:flex-row lg:justify-between">
      <div>
        <HomeHeader text="Dlaczego warto?" />
        <p v-for="b in base" :key="b" class="text-gray-300 text-xl my-4">{{ b }}</p>
      </div>
      <IconsWhy class="max-w-md w-full" />
    </div>

    <div class="mt-10 lg:mt-20 xl:mt-32 flex justify-end">
      <div
        class="flex-col flex items-center lg:flex-row-reverse lg:justify-between lg:items-start w-full"
      >
        <div>
          <HomeHeader text="Odkryj moc artykułów" />
          <p class="text-gray-300 max-w-xl lg:mt-4 lg:text-lg xl:text-xl">
            Już teraz nawet bez zakładania konta możesz przeczytać artykuły,
            które mogą Ci pomóc w budowaniu nowej, lepszej wersji Ciebie.
          </p>
          <NuxtLink to="/articles">
            <UseButton text="Artykuły" class="mt-4" />
          </NuxtLink>
        </div>
        <IconsHomeArticles class="max-w-lg w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const base = ref([
  "🗸 Anonimowość i bezpieczeństwo",
  "🗸 Prawdziwe wsparcie od osób w podobnej sytuacji",
  "🗸 Narzędzia, które pomogą Ci odbudować siebie",
]);
</script>

<style></style>
