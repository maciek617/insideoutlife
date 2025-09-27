export function useReport() {
  const supabase = useSupabaseClient();
  const { userData } = useUser();

  async function sendPostReport(postId) {
    const { error } = await supabase.from("reports_post").insert({
      post_id: postId,
      user_id: userData.value.id,
    });
    console.log(error);
  }

  async function sendCommentReport(id) {
    const { error } = await supabase.from("reports_comments").insert({
      comment_id: id,
      user_id: userData.value.id,
    });

    console.log(error);
  }

  return { sendPostReport, sendCommentReport };
}
