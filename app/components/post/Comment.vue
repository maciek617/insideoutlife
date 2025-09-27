<template>
  <div class="px-4 mt-6">
    <div class="flex gap-2">
      <div
        class="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center"
      >
        <p>{{ props.name?.slice(0, 2) }}</p>
      </div>
      <div class="w-full flex-1">
        <div class="flex justify-between relative">
          <p :class="props.isAuthor ? 'text-orange-400 font-semibold' : ''">
            {{ props.name }}
          </p>
          <p
            class="text-xs ml-2 cursor-pointer"
            @click="showReportButton = !showReportButton"
          >
            ●●●
          </p>
          <div
            v-if="showReportButton"
            class="bg-[#262626] absolute -top-[125%] -right-2.5 text-center p-1 rounded cursor-pointer text-sm"
          >
            <p
              v-if="props.comment_user_id !== props.user_id"
              @click="sendCommentReport(props.id)"
            >
              Zgłoś
            </p>
            <p
              v-if="props.comment_user_id === props.user_id"
              class="border-t mt-2"
              @click="
                () => {
                  $emit('delete-comment', props.id);
                  deleteComment(props.id);
                }
              "
            >
              Usuń
            </p>
          </div>
        </div>
        <p class="text-xs">
          {{ props.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: String,
  post_id: String,
  name: String,
  content: String,
  user_id: String,
  comment_user_id: String,
  isAuthor: Boolean,
});
const showReportButton = ref(false);

const { sendCommentReport } = useReport();
const { deleteComment } = usePostComment();

const emits = defineEmits(["delete-comment"]);
</script>

<style></style>
