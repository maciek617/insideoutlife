import type { Database } from "~/types/supabase";
import type { BadgeName } from "~/types/badges";

export const useBadges = () => {
  const supabase = useSupabaseClient<Database>();
  const { userData } = useUser();

  const badges = ref<BadgeName[]>([]);
  const activeBadge = ref<string | null>(null);

  async function getBadges() {
    const { data, error } = await supabase
      .from("users")
      .select("badges, active_badge")
      .eq("id", userData.value.id)
      .single();

    if (!error) {
      badges.value = (data.badges as BadgeName[]) ?? [];
      activeBadge.value = data.active_badge;
    }
  }

  async function setActiveBadge(badge: string) {
    if (badge === userData.value.active_badge) return;
    const { data, error } = await supabase
      .from("users")
      .update({
        active_badge: badge,
      })
      .eq("id", userData.value.id)
      .select();

    if (!error) {
      activeBadge.value = badge;
    }
  }

  return {
    badges,
    activeBadge,
    getBadges,
    setActiveBadge,
  };
};
