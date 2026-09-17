<template>
  <div
    class="flex items-center justify-center text-center mt-5 text-xl font-bold"
  >
    <div
      @click="switchTabsTools(true)"
      class="flex-1 h-16 flex items-center justify-center rounded-l cursor-pointer hover:bg-[#f45c43] transition-all shadow"
      :class="isActive ? 'bg-[#f45c43]' : 'bg-[#333]'"
    >
      <p>Aplikacje</p>
    </div>
    <div
      @click="switchTabsTools(false)"
      class="flex-1 h-16 flex items-center justify-center rounded-r cursor-pointer hover:bg-[#f45c43] transition-all shadow"
      :class="!isActive ? 'bg-[#f45c43]' : 'bg-[#333]'"
    >
      <p>Książki</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isActive = ref(true);

const switchTabsTools = (flag: boolean) => {
  // Prevent from double click
  isActive.value = flag;
  emit("switch", isActive.value);
};

const emit = defineEmits(["switch"]);
</script>

<style></style>
