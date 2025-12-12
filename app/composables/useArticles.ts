import type { Articles } from "~/interfaces/Article";
const allArticles = ref<Articles[]>([]);

export const useArticles = () => {
  const supabase = useSupabaseClient();
  const range = ref(3);
  const noMoreArticlesMsg = ref(false);

  async function getAllArticles() {
    const { data, error } = await supabase
      .from("articles")
      .select("id, title, slug, content")
      .order("created_at", { ascending: false })
      .range(0, range.value);

    if (data && !error) {
      allArticles.value = data;
    }
  }

  async function loadMoreArticles() {
    let tempRange = range.value + 1;
    range.value = tempRange + 3;
    noMoreArticlesMsg.value = false;
    const { data, error } = await supabase
      .from("articles")
      .select("title, slug, content")
      .order("created_at", { ascending: false })
      .range(tempRange, range.value);

    console.log(error);

    if (data && !error) {
      allArticles.value.push(...data);

      if (!data.length) {
        noMoreArticlesMsg.value = true;
      }
    }
  }

  return { getAllArticles, allArticles, loadMoreArticles, noMoreArticlesMsg };
};
