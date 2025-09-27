// composables/usePostHearts.ts
import { useSupabaseClient, useSupabaseUser } from "#imports";

export const usePostHearts = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const toggleHeart = async (postId) => {
    if (!user.value) throw new Error("User not logged in");

    // sprawdzamy czy już jest serduszko
    const { data: existing, error: selectError } = await supabase
      .from("post_hearts")
      .select("post_id")
      .eq("post_id", postId)
      .eq("user_id", user.value.id)
      .maybeSingle();

    if (selectError) throw selectError;

    if (existing) {
      // usuń serduszko
      const { error: delError } = await supabase
        .from("post_hearts")
        .delete()
        .eq("post_id", postId)
        .eq("user_id", user.value.id);

      if (delError) throw delError;
      return false;
    }

    // dodaj serduszko
    const { error: insertError } = await supabase.from("post_hearts").insert({
      post_id: postId,
      user_id: user.value.id,
    });

    if (insertError) throw insertError;
    return true;
  };

  return { toggleHeart };
};
