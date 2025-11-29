<template>
  <div class="my-10">
    <p class="uppercase tracking-wide text-sm font-bold text-gray-400">
      Twórca
    </p>
    <div class="flex gap-2 mt-2">
      <NuxtImg
        src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg"
        quality="80"
        loading="lazy"
        class="w-12 h-12 rounded-full object-cover shadow-xl"
      />
      <div>
        <p class="font-medium">Admin</p>
        <p class="text-gray-400">{{ formattedDate }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({ date: String });
// Formatowanie daty
const formattedDate = computed(() => {
  if (props.date) {
    return new Intl.DateTimeFormat("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(props.date));
  }
});
</script>

<style></style>
