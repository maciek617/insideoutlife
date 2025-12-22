import { defineStore } from "pinia";
import type { Database } from "~/types/supabase";

export const useStatsStore = defineStore("stats", () => {
  const supabase = useSupabaseClient<Database>();
  const user = useSupabaseUser();
  const countJournalTotalEntries = ref(0);
  const countJournalTotalEntriesWithText = ref(0);
  const firstEntryDate = ref<string | null | undefined | number>("");
  const mostFrequentMood = ref<number | null | undefined>(0);
  const getAllEntries = async () => {
    if (!user.value) return;

    const { count, error } = await supabase
      .from("journal_entries")
      .select("mood", { count: "exact" })
      .eq("user_id", user.value?.id);

    if (!error && count) {
      countJournalTotalEntries.value = count;
    }
  };

  const getAllEntriesWithText = async () => {
    if (!user.value) return;

    const { count, error } = await supabase
      .from("journal_entries")
      .select("mood", { count: "exact" })
      .eq("user_id", user.value?.id)
      .neq("text", "");

    if (!error && count) {
      countJournalTotalEntriesWithText.value = count;
    }
  };

  const getFirstJournalEntry = async () => {
    const { data, error } = await supabase
      .from("journal_entries")
      .select("created_at")
      .order("created_at", { ascending: true })
      .limit(1)
      .single();

    if (!error && data) {
      firstEntryDate.value = data.created_at?.slice(0, 10);
    }
  };

  const getMostFrequentMood = async () => {
    const { data, error } = await supabase.from("most_common_mood").select("*");

    if (data && !error) {
      mostFrequentMood.value = data[0]?.mood;
    }
  };

  return {
    getAllEntries,
    countJournalTotalEntries,
    countJournalTotalEntriesWithText,
    getAllEntriesWithText,
    getFirstJournalEntry,
    firstEntryDate,
    getMostFrequentMood,
    mostFrequentMood,
  };
});
