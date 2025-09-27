// composables/usePostLikes.ts
import { useSupabaseClient, useSupabaseUser } from "#imports";

export const usePostsLikes = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  /**
   * Toggle like dla posta (dodaje lub usuwa)
   * @param postId - UUID posta
   * @returns true jeśli post jest teraz polubiony, false jeśli lajka usunięto
   */
  const toggleLike = async (postId) => {
    if (!user.value) throw new Error("User not logged in");

    // 1️⃣ sprawdzamy czy lajk już istnieje
    const { data: existing, error: selectError } = await supabase
      .from("post_likes")
      .select("post_id")
      .eq("post_id", postId)
      .eq("user_id", user.value.id)
      .maybeSingle(); // zwróci obiekt lub null, zamiast rzucać error

    if (selectError) throw selectError;

    // 2️⃣ jeśli lajk istnieje → usuń
    if (existing) {
      const { error: delError } = await supabase
        .from("post_likes")
        .delete()
        .eq("post_id", postId)
        .eq("user_id", user.value.id);

      if (delError) throw delError;
      return false;
    }

    // 3️⃣ jeśli lajk nie istnieje → dodaj
    const { error: insertError } = await supabase.from("post_likes").insert({
      post_id: postId,
      user_id: user.value.id,
    });

    if (insertError) throw insertError;
    return true;
  };

  return { toggleLike };
};
