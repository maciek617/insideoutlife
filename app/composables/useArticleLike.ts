export const useArticleLike = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const toggleArticleLike = async (articleId: string) => {
    if (!user.value) {
      throw new Error("Użytkownik nie jest zalogowany");
    }
    const { existing, selectError } = await checkIfArticlesWasLiked(articleId);

    if (selectError) throw selectError;

    if (existing) {
      const { error: delError } = await supabase
        .from("article_likes")
        .delete()
        .eq("article_id", articleId)
        .eq("user_id", user.value.id);

      if (delError) throw delError;
      return false;
    }

    const { error: insertError } = await supabase.from("article_likes").insert([
      {
        article_id: articleId,
        user_id: user.value.id,
      },
    ] as any);

    if (insertError) throw insertError;
    return true;
  };

  const checkIfArticlesWasLiked = async (articleId: string) => {
    // 1️⃣ sprawdzamy czy lajk już istnieje
    if (!user.value) throw new Error("Użytkownik nie jest zalogowany");

    const { data: existing, error: selectError } = await supabase
      .from("article_likes")
      .select("article_id")
      .eq("article_id", articleId)
      .eq("user_id", user.value.id)
      .maybeSingle(); // zwróci obiekt lub null, zamiast rzucać error

    return { existing, selectError };
  };

  const countCurrentArticleLikes = async (articleId: string) => {
    const { count, error } = await supabase
      .from("article_likes")
      .select("*", { count: "exact", head: true })
      .eq("article_id", articleId);

    console.log(error);
    return count;
  };

  return {
    toggleArticleLike,
    countCurrentArticleLikes,
    checkIfArticlesWasLiked,
    user,
  };
};
