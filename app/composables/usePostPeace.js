// composables/usePostPeace.ts
import { useSupabaseClient, useSupabaseUser } from "#imports";

export const usePostPeace = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const togglePeace = async (postId) => {
    if (!user.value) throw new Error("User not logged in");

    // sprawdzamy czy już jest ✌️
    const { data: existing, error: selectError } = await supabase
      .from("post_peace")
      .select("post_id")
      .eq("post_id", postId)
      .eq("user_id", user.value.id)
      .maybeSingle();

    if (selectError) throw selectError;

    if (existing) {
      // usuń ✌️
      const { error: delError } = await supabase
        .from("post_peace")
        .delete()
        .eq("post_id", postId)
        .eq("user_id", user.value.id);

      if (delError) throw delError;
      return false;
    }

    // dodaj ✌️
    const { error: insertError } = await supabase.from("post_peace").insert({
      post_id: postId,
      user_id: user.value.id,
    });

    if (insertError) throw insertError;
    return true;
  };

  return { togglePeace };
};
