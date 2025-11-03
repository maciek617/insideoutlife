<template>
  <div
    class="fixed bg-[#212121] top-20 min-w-xs max-w-sm p-4 rounded shadow-xl pb-8 right-5 animate-[moveRight_0.5s_ease-in-out_alternate,moveLeft_0.5s_ease-in_10s_forwards] group hover:[animation-play-state:paused]"
    :class="[
      variantsText[props.type],
      closeToast ? 'translate-x-[120%] transition-all' : '',
    ]"
  >
    <div class="flex justify-between">
      <h1 class="text-xl font-bold">{{ props.title }}</h1>
      <IconsXmark
        class="w-7 cursor-pointer hover:rotate-12 transition-all rounded"
        :class="variantsBg[props.type]"
        @click="handleCloseToast"
      />
    </div>
    <p class="text-gray-300 mt-3">
      {{ props.desc }}
    </p>

    <span
      class="block h-2 absolute bottom-0 left-0 rounded-bl rounded-br animate-[moveBack_10s_ease-in-out] group-hover:[animation-play-state:paused]"
      :class="variantsBg[props.type]"
    ></span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  desc: string;
  type: "success" | "error" | "info";
}>();

const emits = defineEmits(["handleCloseToast"]);

const closeToast = ref(false);

const handleCloseToast = () => {
  closeToast.value = true;
  emits("handleCloseToast", closeToast.value);
};

const variantsText = {
  success: "prose-h1:text-green-400",
  error: "prose-h1:text-red-400",
  info: "prose-h1:text-blue-400",
};

const variantsBg = {
  success: "bg-green-400",
  error: "bg-red-400",
  info: "bg-blue-400",
};

</script>

<style>
@keyframes moveBack {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

@keyframes moveRight {
  0% {
    right: -100%;
  }
  100% {
    right: 20px;
  }
}

@keyframes moveLeft {
  100% {
    right: -100%;
  }
}
</style>
