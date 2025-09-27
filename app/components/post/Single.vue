<template>
  <div class="p-3">
    <div class="flex gap-4">
      <div
        class="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center"
      >
        <p>{{ props.name?.slice(0, 2) }}</p>
      </div>

      <div class="flex-1 text-white flex flex-col">
        <div class="flex justify-between">
          <p class="font-semibold">{{ props.name }}</p>
          <div class="flex items-center relative">
            <p>{{ timeAgo(props.date) }}</p>
            <p
              class="text-xs ml-2 cursor-pointer"
              @click="showReportButton = !showReportButton"
            >
              ●●●
            </p>
            <div
              v-if="showReportButton"
              class="bg-[#262626] absolute -top-full left-1/2 text-center p-1 rounded cursor-pointer"
            >
              <p
                v-if="props.user_id !== userData.id"
                @click="sendPostReport(props.post_id)"
              >
                Zgłoś
              </p>
              <p
                class="mt-2 border-t"
                v-if="props.user_id === userData.id"
                @click="deletePost(props.post_id)"
              >
                Usuń
              </p>
            </div>
          </div>
        </div>
        <!-- CONTENT -->
        <div>
          <p class="text-white text-sm mt-3">
            {{ props.content }}
          </p>
        </div>
        <!-- REACTIONS -->
        <div class="flex mt-8 gap-4">
          <div class="flex flex-col justify-center items-center">
            <p class="p-1 rounded cursor-pointer" @click="$emit('heart')">
              {{ props.hearted ? "❤️" : "🤍" }}
            </p>
            <p class="text-sm">{{ props.heartCount ?? 0 }}</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <p class="p-1 rounded cursor-pointer" @click="$emit('like')">
              {{ props.liked ? "👍" : "👍🏻" }}
            </p>
            <p class="text-sm">{{ props.likes ?? 0 }}</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <p class="p-1 rounded cursor-pointer" @click="$emit('peace')">
              {{ props.peaced ? "🙏" : "🙏🏻" }}
            </p>
            <p class="text-sm">{{ props.peaceCount ?? 0 }}</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <p
              class="p-1 rounded cursor-pointer"
              @click="handleGetCommentsCount"
            >
              💬
            </p>
            <p class="text-sm">{{ commentCount ?? 0 }}</p>
          </div>
        </div>

        <!-- CREATE COMMENT  -->
        <PostCreateComment
          :post_id="props.post_id"
          :user_id="userData.id"
          :nick="userData.nick"
          :avatar="userData.avatar"
          @comment-created="
            () => {
              commentCount++;
              typedComments.unshift(...newComment);
            }
          "
        />

        <div v-if="showComments">
          <PostComment
            v-for="comment in typedComments"
            :key="comment.id"
            :name="comment.nick"
            :content="comment.content"
            :is-author="props.user_id === comment.user_id"
            :id="comment.id"
            :comment_user_id="comment.user_id"
            :user_id="userData.id"
            @delete-comment="
              (e) => {
                const index = typedComments.findIndex((item) => item.id === e);
                if (index !== -1) typedComments.splice(index, 1);
                commentCount--;
              }
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { timeAgo } from "~/helpers/timeAgo";
interface CommentInterface {
  id: string;
  nick: string;
  content: string;
  user_id: string;
}
const props = defineProps({
  name: String,
  user_id: String,
  post_id: String,
  avatar: String,
  content: String,
  likes: Number,
  liked: Boolean,
  hearted: Boolean,
  peaced: Boolean,
  heartCount: Number,
  peaceCount: Number,
  date: String,
});
const showComments = ref(false);
const emits = defineEmits(["like", "heart", "peace"]);

const showReportButton = ref(false);

const {
  getCommentsCount,
  getComments,
  commentCount,
  comments,
  newComment,
} = usePostComment();

const typedComments = comments as Ref<CommentInterface[]>;

const { sendPostReport } = useReport();

const { userData } = useUser();
const { deletePost } = usePost();

onMounted(async () => {
  await getCommentsCount(props.post_id);
});

async function handleGetCommentsCount() {
  if (!commentCount.value) return;
  showComments.value = !showComments.value;
  if (comments.value.length) return;
  await getComments(props.post_id);
  showComments.value = true;
}
</script>

<style></style>
