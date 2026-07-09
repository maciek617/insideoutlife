<template>
  <div>
    <p class="text-2xl font-bold">Zadanie na dziś</p>
    <p class="font-thin text-gray-300">
      Kliknij w kółko obok zadania, by oznaczyć je jako wykonane
    </p>

    <div
      class="text-white bg-black rounded-full flex items-center px-3 py-2 gap-4 mt-6 max-w-sm shadow"
    >
      <div
        @click="$emit('taskDone')"
        class="w-4 h-4 bg-transparent border rounded-full cursor-pointer hover:bg-white transition-colors"
      ></div>
      <p class="font-bold">Idź na spacer</p>
    </div>

    <div class="mt-10 max-w-3xl">
      <p class="font-bold">
        Opis zadania <span class="font-thin ml-5 text-gray-300">60 minut</span>
      </p>
      <p class="mt-5 font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        voluptate quod facilis libero sunt qui veniam at, esse dolore quis
        praesentium, harum laudantium nostrum, porro ad. At distinctio
        consequuntur veniam.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["taskDone"]);
</script>

<style></style>
