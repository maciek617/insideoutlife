<template>
  <div class="mt-4 flex gap-2 items-center justify-between border-t">
    <textarea
      v-model="content"
      placeholder="Wesprzyj słowem..."
      class="w-full mt-4 p-2 max-h-96"
    ></textarea>
    <UseButton text="Dodaj" @click="handlePostComment()" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  post_id: String,
  user_id: String,
  nick: String,
  avatar: String,
});
const { createComment } = usePostComment();
const content = ref("");
const emits = defineEmits(["comment-created"]);

async function handlePostComment() {
  if (!content.value || content.value.trim().length > 2000) return;

  await createComment(
    props.post_id,
    props.user_id,
    content.value,
    props.nick,
    props.avatar
  );

  content.value = "";
  emits("comment-created");
}
</script>

<style></style>
