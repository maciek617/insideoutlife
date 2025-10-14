<template>
  <div class="flex justify-center mt-10">
    <div>
      <input
        v-model="serachTerm"
        type="text"
        placeholder="Znajdź coś dla siebie"
        class="border-b border-[#414141] p-2 rounded-lg bg-[#212121] outline-0 focus:border-[#999999]"
        @keyup="() => {
          if(serachTerm) return
          $emit('searching', '')
        }"
      />
      <UseButton
        text="Szukaj"
        class="ml-4"
        @click="$emit('searching', serachTerm)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const serachTerm = ref("");

const emits = defineEmits(["searching"]);
</script>

<style></style>
