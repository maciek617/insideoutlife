import { defineStore } from "pinia";
import { type Update } from "~/interfaces/Update";

export const useUpdatesStore = defineStore("updates", () => {
  const supabase = useSupabaseClient();
  const updates = ref<Array<Update>>();
  const update = ref<Update>();
  const loading = ref<boolean>(false);

  const fetchAllUpdates = async () => {
    loading.value = true;
    const { data, error } = await supabase
      .from("updates")
      .select()
      .order("created_at", { ascending: false });

    if (data && !error) {
      updates.value = data;
      loading.value = false;
    }

    loading.value = false;
  };

  const fetchSingleUpdate = async (slug: string) => {
    loading.value = true;

    if (!slug) {
      loading.value = false;
      return;
    }

    slug = slug?.toString().replaceAll(/-/g, " ");

    const { data, error } = await supabase
      .from("updates")
      .select()
      .eq("title", slug)
      .single();
    if (data && !error) {
      update.value = data;
      loading.value = false;
    }

    loading.value = false;
  };

  return { updates, fetchAllUpdates, fetchSingleUpdate, update, loading };
});
