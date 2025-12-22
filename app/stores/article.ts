import { defineStore } from "pinia";
import type { Article, ArticleLikes, Articles } from "~/interfaces/Article";

export const useArticleStore = defineStore("article", () => {
  const supabase = useSupabaseClient<Article>();
  const user = useSupabaseUser();
  const router = useRouter();
  const article = ref<Article>();
  const allArticles = ref<Articles[]>([]);
  const range = ref(3);
  const noMoreArticlesMsg = ref(false);
  const articleLikes = ref();
  const likeArticleExists = ref<boolean>(false);
  const headings = ref<string[]>([]);
  const loading = ref<boolean>(false);
  const isNightTime = ref(false);
  const errorToast = ref(false);
  const showSummary = ref(false);

  const fetchAllArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("id, title, slug, content")
      .order("created_at", { ascending: false })
      .range(0, range.value);

    if (data && !error) {
      allArticles.value = data;
    }
  };

  const loadMoreArticles = async () => {
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
  };

  const fetchSingleArticle = async (slug: string) => {
    loading.value = true;
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .single<Article>();

    if (error && !data) {
      console.error(error);
      loading.value = false;
      router.push("/404");
      return;
    }

    article.value = data;
    headings.value = article.value.content
      .filter((item: any) => item.type === "heading")
      .map((item: any) => item.data);
    loading.value = false;
  };

  const checkIfArticlesWasLiked = async () => {
    // 1️⃣ sprawdzamy czy lajk już istnieje
    if (!article.value?.id) return;
    if (!user.value) throw new Error("Użytkownik nie jest zalogowany");
    likeArticleExists.value = false;

    const { data: existing, error: selectError } = await supabase
      .from("article_likes")
      .select("article_id")
      .eq("article_id", article.value.id)
      .eq("user_id", user.value.id)
      .maybeSingle<ArticleLikes>(); // zwróci obiekt lub null, zamiast rzucać error

    if (existing && !selectError) likeArticleExists.value = true;
  };

  const toggleArticleLike = async () => {
    if (!article.value?.id) return;
    if (!user.value) {
      errorToast.value = true;
      throw new Error("Użytkownik nie jest zalogowany");
    }
    errorToast.value = false;
    await checkIfArticlesWasLiked();

    if (likeArticleExists.value) {
      const { error: delError } = await supabase
        .from("article_likes")
        .delete()
        .eq("article_id", article.value.id)
        .eq("user_id", user.value.id);

      if (delError) throw delError;
      likeArticleExists.value = false;
      articleLikes.value = articleLikes.value - 1;
      return;
    }

    const { error: insertError } = await supabase.from("article_likes").insert([
      {
        article_id: article.value.id,
        user_id: user.value.id,
      },
    ] as any);

    if (insertError) throw insertError;
    likeArticleExists.value = true;
    articleLikes.value = articleLikes.value + 1;
  };

  const countCurrentArticleLikes = async () => {
    if (!article.value?.id) return;
    const { count, error } = await supabase
      .from("article_likes")
      .select("*", { count: "exact", head: true })
      .eq("article_id", article.value?.id);

    console.log(error);
    articleLikes.value = count;
  };

  const toggleShowSummary = () => {
    showSummary.value = !showSummary.value;
  };

  return {
    fetchSingleArticle,
    article,
    headings,
    loading,
    isNightTime,
    articleLikes,
    countCurrentArticleLikes,
    checkIfArticlesWasLiked,
    toggleArticleLike,
    likeArticleExists,
    user,
    errorToast,
    fetchAllArticles,
    loadMoreArticles,
    allArticles,
    noMoreArticlesMsg,
    toggleShowSummary,
    showSummary,
  };
});
