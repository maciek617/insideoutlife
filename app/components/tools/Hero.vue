<template>
  <div class="pt-10 lg:pt-20">
    <h1
      class="font-bold max-w-4xl mx-auto text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
    >
      Otrzymaj pomoc dzięki
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-[#F14D5C] to-[#FDC70C]"
        >+{{ props.counter }}</span
      >
      {{ props.isApp ? "dostępnych aplikacji" : "książek psychologicznych" }}
    </h1>
    <p
      class="mt-4 text-center font-thin text-gray-300 max-w-xl mx-auto xl:text-lg"
    >
      Sięganie po pomoc nie jest oznaką słabości, skorzystaj z dostępnych
      {{ props.isApp ? "aplikacji" : "książek" }} być może, któraś z nich Ci
      pomoże.
    </p>
    <p class="text-center mt-2 text-sm text-gray-400" v-if="!props.isApp">
      *Insideoutlife nie czerpie żadnych korzyści finansowych w związku z
      zakupem książki z podanych linków
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  isApp: Boolean,
  counter: Number,
});
</script>

<style></style>
