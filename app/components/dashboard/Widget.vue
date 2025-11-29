<template>
  <div class="bg-[#212121] rounded-xl shadow-xl max-w-xs min-w-xs p-4">
    <div>
      <p class="text-xl font-bold">{{ props.title }}</p>
      <p class="italic text-center pt-2">{{ props.text }}</p>
      <p class="font-bold text-center text-sm text-gray-400" v-if="props.date">
        {{ props.date }}
      </p>
      <NuxtLink :to="props.link" target="_blank">
        <UseButton
          :text="props.btnText ? props.btnText : 'Dodaj'"
          class="mx-auto block mt-4"
          v-if="props.button"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  text?: string;
  date?: string;
  link: string;
  button: boolean;
  btnText?: string;
}>();
</script>

<style></style>
