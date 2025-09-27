<template>
  <div class="p-2 flex-1 max-w-2xl lg:mx-auto">
    <div class="flex-1 flex items-start gap-2">
      <!-- Avatar: sztywne wymiary i brak rozciągania -->
      <div
        class="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center"
      >
        <p>{{ userData?.nick?.slice(0, 2) }}</p>
      </div>

      <!-- Tekst -->
      <div class="flex-1 text-white">
        <div class="flex justify-between">
          <p class="font-semibold pb-2 text-lg">{{ userData?.nick }}</p>
          <UseButton text="Opublikuj" class="p-0" @click="handeCreatePost()" />
        </div>
        <textarea
          v-model="postContent"
          class="w-full border rounded p-2 mt-2 border-none outline-none"
          placeholder="Wyrzuć z siebie emocje..."
        ></textarea>
      </div>
    </div>
    <div>
      <p class="text-gray-400 text-right border-b pb-4">
        {{ countLetters }}/500
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePost } from "#imports";
const { getUser, userData } = useUser();

const { createPost } = usePost();

const postContent = ref("");

const countLetters = computed(() => postContent.value.length);

async function handeCreatePost() {
  if (countLetters.value > 500 || postContent.value.length < 3) return;
  await createPost(postContent.value);
  postContent.value = "";
}

onMounted(async () => {
  await getUser();
});
</script>

<style></style>
