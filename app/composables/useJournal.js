const allEmotes = ref([]);
const entry = ref();
export function useJournal() {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));
  const loading = ref(true);

  async function getAllEmotes() {
    const { data, error } = await supabase
      .from("journal_entries")
      .select("*")
      .eq("user_id", user.value.id)
      .order("created_at", { ascending: false })
      .limit(30);

    if (data && !error) {
      allEmotes.value = data;
      loading.value = false;
    }
  }

  async function checkIfJournalIsCreatedForToday() {
    // TODO: Sprawdzić konkretnego usera
    const { data, error } = await supabase
      .from("journal_entries")
      .select("id")
      .eq("user_id", user.value.id) // wystarczy sprawdzić id
      .gte("created_at", startOfDay.toISOString())
      .lt("created_at", endOfDay.toISOString())
      .limit(1) // sprawdzamy tylko czy jest
      .maybeSingle(); // jak nie ma, zwróci null zamiast błędu

    console.log(data);
    if (error) {
      console.error(error);
    } else if (data) {
      entry.value = true;
    }
  }

  async function createJournalEntry(content, mood) {
    const { data, error } = await supabase
      .from("journal_entries")
      .insert({ user_id: user.value.id, text: content, mood: mood })
      .select();

    if (data && !error) {
      allEmotes.value.unshift(...data);
      entry.value = true;
    }
  }

  return {
    createJournalEntry,
    checkIfJournalIsCreatedForToday,
    getAllEmotes,
    entry,
    allEmotes,
    loading,
  };
}
