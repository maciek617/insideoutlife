<template>
  <div class="min-h-[100vh] p-4 pt-20 lg:flex">
    <UseNav class="flex-1" />

    <div class="flex-1 text-white lg:ml-24 xl:ml-52" v-if="userData">
      <UseTooltip
        text="Tę zakładkę widzisz tylko ty, możesz tutaj zmienić hasło, usunąć konto, podglądnąć twoje statystyki, wybrać badge a także zmienić pseudonim."
      />


      <ProfileWelcome :nick="userData.nick" />

      <ProfileMain :nick="userData.nick" />

      <ProfileStats
        :user-comments-count="userCommentsCount"
        :user-posts-count="userPostsCount"
      />

      <ProfileResetPassword />

      <ProfileDelete />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
const {
  userData,
  userPostsCount,
  userCommentsCount,
  getUser,
  getUserPostsCount,
  getUserCommentsCount,
} = useUser();

onMounted(async () => {
  await getUser();
  await getUserPostsCount();
  await getUserCommentsCount();
});


</script>

<style></style>
