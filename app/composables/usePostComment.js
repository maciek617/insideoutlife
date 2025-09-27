const newComment = ref();
export function usePostComment() {
  const supabase = useSupabaseClient();
  const comments = ref([]);
  const commentsLoading = ref(true);
  const commentCount = ref();

  async function getComments(postId) {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("post_id", postId)
      .limit(10)
      .order("created_at", { ascending: false });

    if (data && !error) {
      comments.value = data;
      commentsLoading.value = false;
    }

    commentsLoading.value = false;
  }

  async function getCommentsCount(postId) {
    const { count, error } = await supabase
      .from("comments")
      .select("*", { count: "exact", head: true })
      .eq("post_id", postId);

    if (!error) {
      commentCount.value = count;
    }
  }

  //Delete comment
  async function deleteComment(id) {
    const response = await supabase.from("comments").delete().eq("id", id);
  }

  async function createComment(postId, userId, content, nick, avatar) {
    const { data, error } = await supabase
      .from("comments")
      .insert({
        post_id: postId,
        user_id: userId,
        content: content,
        nick: nick,
        avatar: avatar,
      })
      .select();

    if (data && !error) {
      newComment.value = data;
    }
  }

  return {
    createComment,
    getCommentsCount,
    getComments,
    deleteComment,
    commentCount,
    commentsLoading,
    comments,
    newComment,
  };
}
