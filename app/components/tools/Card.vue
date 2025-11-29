<template>
  <div
    class="bg-[#212121] max-w-xs p-4 rounded-lg shadow-xl w-full h-52 lg:max-w-sm"
  >
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex justify-between items-center">
          <p class="font-bold text-xl">{{ props.title }}</p>
          <UseBadge v-if="props.isVerified" />
        </div>
        <p class="text-[#dddddd] mt-2">{{ props.desc }}</p>
      </div>

      <NuxtLink :to="props.link" target="_blank">
        <UseButton text="Przejdź na stronę" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  desc: string;
  link: string;
  isVerified: boolean;
}>();
</script>

<style></style>
