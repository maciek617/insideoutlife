<template>
  <div
    class="text-white max-w-xs h-full w-full bg-[#212121] p-2 rounded shadow-xl pb-4"
  >
    <NuxtImg
      :src="props.img"
      alt="Zdjęcie artykułu"
      class="max-w-xs w-full rounded shadow max-h-52 object-cover"
      quality="80"
      placeholder
      loading="lazy"
    />
    <p class="text-xl font-bold mt-2">{{ props.title }}</p>
    <p class="text-sm max-w-[90%] text-gray-300">
      {{
        props.desc && props.desc.length > 85
          ? props.desc.slice(0, 85) + "..."
          : props.desc
      }}
    </p>

    <NuxtLink :to="`/articles/${props.slug}`">
      <UseButton text="Czytaj" class="mt-4" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  desc?: string;
  img?: string;
  slug: string;
}>();
</script>

<style></style>
