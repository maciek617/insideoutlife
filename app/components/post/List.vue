<template>
  <div class="max-w-2xl mx-auto mt-10 p-4">
    <div v-if="!loading">
      <PostSingle
        v-for="post in posts"
        :key="post.id"
        :name="post.nick"
        :post_id="post.id"
        :user_id="post.user_id"
        :avatar="post.avatar"
        :content="post.content"
        :likes="post.likeCount"
        :liked="post.liked"
        :heart-count="post.heartCount"
        :peace-count="post.peaceCount"
        :peaced="post.peaced"
        :hearted="post.hearted"
        :date="post.created_at"
        @heart="togglePostHeart(post.id)"
        @peace="togglePostPeace(post.id)"
        @like="togglePostLike(post.id)"
        class="mt-4"
      />

      <UseButton
        text="Załaduj więcej"
        @click="loadMorePosts(10)"
        class="mt-20 block mx-auto"
      />
    </div>
    <UseSpinner v-else class="mx-auto block" />
  </div>
</template>

<script setup>
import { usePostsStats } from "#imports";

const {
  posts,
  loading,
  togglePostLike,
  togglePostHeart,
  togglePostPeace,
  loadMorePosts,
  initPosts,
} = usePostsStats();

onMounted(() => {
  initPosts(10);
});
</script>

<style></style>
