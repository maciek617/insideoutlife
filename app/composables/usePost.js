export function usePost() {
  const supabase = useSupabaseClient();
  const { userData } = useUser();

  const { posts } = usePostsStats();

  async function deletePost(postId) {
    const response = await supabase.from("posts").delete().eq("id", postId);
    const index = posts.value.findIndex((post) => post.id === postId);
    if (index !== -1) {
      posts.value.splice(index, 1);
    }
  }

  async function createPost(content) {
    const { data, error } = await supabase
      .from("posts")
      .insert({
        content: content,
        user_id: userData.value.id,
        nick: userData.value.nick,
      })
      .select();

    console.log(error);

    if (!error && data) {
      console.log(posts.value);
      posts.value.unshift(
        ...data.map((post) => ({
          ...post,
          liked: false,
          peaced: false,
          hearted: false,
          heartCount: 0,
          likeCount: 0,
          peaceCount: 0,
        }))
      );
    }
  }

  return { createPost, deletePost };
}
