const userData = ref();

export function useUser() {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const userPostsCount = ref(0);
  const userCommentsCount = ref(0);

  async function getUser() {
    if (userData.value) return;
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", user.value.id)
      .single();

    if (data && !error) {
      userData.value = data;
    }
  }

  async function getUserPostsCount() {
    const { count, error } = await supabase
      .from("posts")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userData.value.id);

    console.log(error);

    if (!error && count) {
      userPostsCount.value = count;
    }
  }

  async function getUserCommentsCount() {
    const { count, error } = await supabase
      .from("comments")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userData.value.id);

    console.log(error);

    if (!error && count) {
      userCommentsCount.value = count;
    }
  }

  return {
    getUser,
    getUserPostsCount,
    getUserCommentsCount,
    userData,
    userPostsCount,
    userCommentsCount,
  };
}
