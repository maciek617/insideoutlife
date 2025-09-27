// import { ref } from "vue";
// import { useSupabaseClient, useSupabaseUser } from "#imports";
// import { usePostHearts } from "~/composables/usePostHearts";
// import { usePostPeace } from "~/composables/usePostPeace";
// import { usePostsLikes } from "#imports";

// export const usePostsStats = () => {
//   const supabase = useSupabaseClient();
//   const user = useSupabaseUser();
//   const { toggleHeart } = usePostHearts();
//   const { togglePeace } = usePostPeace();
//   const { toggleLike } = usePostsLikes();

//   const posts = ref([]);
//   const loading = ref(false);

//   const fetchPosts = async (limit = 10) => {
//     loading.value = true;
//     try {
//       // 1️⃣ posty
//       const { data: fetchedPosts, error: postsError } = await supabase
//         .from("posts")
//         .select("*")
//         .order("created_at", { ascending: false })
//         .limit(limit);

//       if (postsError) throw postsError;
//       if (!fetchedPosts) return;

//       const postIds = fetchedPosts.map((p) => p.id);

//       let likedPosts = [];
//       if (user.value) {
//         const { data: userLikes } = await supabase
//           .from("post_likes")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);

//         likedPosts = userLikes?.map((l) => l.post_id) || [];
//       }

//       const { data: likesCounts } = await supabase
//         .from("post_likes")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       // 2️⃣ liczniki hearts
//       const { data: heartsCounts } = await supabase
//         .from("post_hearts")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       // 3️⃣ liczniki peace
//       const { data: peaceCounts } = await supabase
//         .from("post_peace")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       // 4️⃣ lajki użytkownika
//       let heartedPosts = [];
//       let peacedPosts = [];

//       if (user.value) {
//         const { data: userHearts } = await supabase
//           .from("post_hearts")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);

//         heartedPosts = userHearts?.map((h) => h.post_id) || [];

//         const { data: userPeace } = await supabase
//           .from("post_peace")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);

//         peacedPosts = userPeace?.map((p) => p.post_id) || [];
//       }

//       // 5️⃣ łączenie wyników
//       posts.value = fetchedPosts.map((post) => {
//         const heartCount =
//           heartsCounts?.filter((h) => h.post_id === post.id).length ?? 0;
//         const peaceCount =
//           peaceCounts?.filter((p) => p.post_id === post.id).length ?? 0;
//         const likeCount =
//           likesCounts?.filter((l) => l.post_id === post.id).length || 0;
//         const peaced = peacedPosts.includes(post.id);
//         const liked = likedPosts.includes(post.id);
//         const hearted = heartedPosts.includes(post.id);
//         return {
//           ...post,
//           heartCount,
//           hearted,
//           peaceCount,
//           peaced,
//           likeCount,
//           liked,
//         };
//       });
//     } catch (err) {
//       console.error(err);
//     } finally {
//       loading.value = false;
//     }
//   };

//   const togglePostLike = async (postId) => {
//     try {
//       const nowLiked = await toggleLike(postId);
//       const post = posts.value.find((p) => p.id === postId);
//       console.log(nowLiked);

//       if (post) {
//         post.liked = nowLiked;
//         post.likeCount += nowLiked ? 1 : -1;
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const togglePostHeart = async (postId) => {
//     const nowHearted = await toggleHeart(postId);
//     const post = posts.value.find((p) => p.id === postId);
//     if (post) {
//       post.hearted = nowHearted;
//       post.heartCount += nowHearted ? 1 : -1;
//     }
//   };

//   const togglePostPeace = async (postId) => {
//     const nowPeaced = await togglePeace(postId);
//     const post = posts.value.find((p) => p.id === postId);
//     if (post) {
//       post.peaced = nowPeaced;
//       post.peaceCount += nowPeaced ? 1 : -1;
//     }
//   };

//   return {
//     posts,
//     loading,
//     fetchPosts,
//     togglePostHeart,
//     togglePostPeace,
//     togglePostLike,
//   };
// };

// import { ref } from "vue";
// import { useSupabaseClient, useSupabaseUser } from "#imports";
// import { usePostHearts } from "~/composables/usePostHearts";
// import { usePostPeace } from "~/composables/usePostPeace";
// import { usePostsLikes } from "#imports";

// export const usePostsStats = () => {
//   const supabase = useSupabaseClient();
//   const user = useSupabaseUser();
//   const { toggleHeart } = usePostHearts();
//   const { togglePeace } = usePostPeace();
//   const { toggleLike } = usePostsLikes();

//   const posts = ref([]);
//   const loading = ref(false);

//   // 🆕 stan kursora (ostatni created_at)
//   const lastCreatedAt = ref();
//   // 🔹 pobranie pierwszej paczki
//   const fetchPosts = async (limit = 10) => {
//     posts.value = []; // reset feedu
//     lastCreatedAt.value = null;
//     await loadMorePosts(limit);
//   };

//   // 🔹 ładowanie kolejnych postów
//   const loadMorePosts = async (limit = 10) => {
//     if (loading.value) return;
//     loading.value = true;

//     try {
//       let query = supabase
//         .from("posts")
//         .select("*")
//         .order("created_at", { ascending: false })
//         .limit(limit);

//       if (lastCreatedAt.value) {
//         query = query.lt("created_at", lastCreatedAt.value);
//       }

//       const { data: fetchedPosts, error: postsError } = await query;
//       if (postsError) throw postsError;
//       if (!fetchedPosts || fetchedPosts.length === 0) return;

//       const postIds = fetchedPosts.map((p) => p.id);

//       // 1️⃣ pobranie lajków / hearts / peace
//       const { data: likesCounts } = await supabase
//         .from("post_likes")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       const { data: heartsCounts } = await supabase
//         .from("post_hearts")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       const { data: peaceCounts } = await supabase
//         .from("post_peace")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       // 2️⃣ sprawdzenie co zalajkował user
//       let likedPosts = [];
//       let heartedPosts = [];
//       let peacedPosts = [];

//       if (user.value) {
//         const { data: userLikes } = await supabase
//           .from("post_likes")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);
//         likedPosts = userLikes?.map((l) => l.post_id) || [];

//         const { data: userHearts } = await supabase
//           .from("post_hearts")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);
//         heartedPosts = userHearts?.map((h) => h.post_id) || [];

//         const { data: userPeace } = await supabase
//           .from("post_peace")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);
//         peacedPosts = userPeace?.map((p) => p.post_id) || [];
//       }

//       // 3️⃣ mapowanie wyników
//       const enriched = fetchedPosts.map((post) => {
//         const likeCount =
//           likesCounts?.filter((l) => l.post_id === post.id).length || 0;
//         const heartCount =
//           heartsCounts?.filter((h) => h.post_id === post.id).length || 0;
//         const peaceCount =
//           peaceCounts?.filter((p) => p.post_id === post.id).length || 0;

//         return {
//           ...post,
//           likeCount,
//           liked: likedPosts.includes(post.id),
//           heartCount,
//           hearted: heartedPosts.includes(post.id),
//           peaceCount,
//           peaced: peacedPosts.includes(post.id),
//         };
//       });

//       // 4️⃣ dołączenie do istniejącej listy
//       posts.value.push(...enriched);

//       // 5️⃣ update kursora
//       lastCreatedAt.value = fetchedPosts[fetchedPosts.length - 1].created_at;
//     } catch (err) {
//       console.error(err);
//     } finally {
//       loading.value = false;
//     }
//   };

//   const togglePostLike = async (postId) => {
//     const nowLiked = await toggleLike(postId);
//     const post = posts.value.find((p) => p.id === postId);
//     if (post) {
//       post.liked = nowLiked;
//       post.likeCount += nowLiked ? 1 : -1;
//     }
//   };

//   const togglePostHeart = async (postId) => {
//     const nowHearted = await toggleHeart(postId);
//     const post = posts.value.find((p) => p.id === postId);
//     if (post) {
//       post.hearted = nowHearted;
//       post.heartCount += nowHearted ? 1 : -1;
//     }
//   };

//   const togglePostPeace = async (postId) => {
//     const nowPeaced = await togglePeace(postId);
//     const post = posts.value.find((p) => p.id === postId);
//     if (post) {
//       post.peaced = nowPeaced;
//       post.peaceCount += nowPeaced ? 1 : -1;
//     }
//   };

//   return {
//     posts,
//     loading,
//     fetchPosts,
//     loadMorePosts, // 🆕 udostępniamy funkcję
//     togglePostHeart,
//     togglePostPeace,
//     togglePostLike,
//   };
// };
// composables/usePostsStats.ts

// import { ref } from "vue";
// import { useSupabaseClient, useSupabaseUser } from "#imports";
// import { usePostHearts } from "~/composables/usePostHearts";
// import { usePostPeace } from "~/composables/usePostPeace";
// import { usePostsLikes } from "#imports";

// export const usePostsStats = () => {
//   const supabase = useSupabaseClient();
//   const user = useSupabaseUser();
//   const { toggleHeart } = usePostHearts();
//   const { togglePeace } = usePostPeace();
//   const { toggleLike } = usePostsLikes();

//   const posts = ref([]);
//   const loading = ref(false);
//   const lastCreatedAt = ref(null); // 🔑 do paginacji

//   const fetchPosts = async (limit = 10) => {
//     if (loading.value) return;
//     loading.value = true;

//     try {
//       // 1️⃣ pobieramy posty (paginacja po created_at)
//       let query = supabase
//         .from("posts")
//         .select("*")
//         .order("created_at", { ascending: false })
//         .limit(limit);

//       if (lastCreatedAt.value) {
//         query = query.lt("created_at", lastCreatedAt.value);
//       }

//       const { data: fetchedPosts, error: postsError } = await query;

//       if (postsError) throw postsError;
//       if (!fetchedPosts || fetchedPosts.length === 0) return;

//       const postIds = fetchedPosts.map((p) => p.id);

//       // 2️⃣ lajki użytkownika
//       let likedPosts = [];
//       let heartedPosts = [];
//       let peacedPosts = [];

//       if (user.value) {
//         const { data: userLikes } = await supabase
//           .from("post_likes")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);

//         likedPosts = userLikes?.map((l) => l.post_id) || [];

//         const { data: userHearts } = await supabase
//           .from("post_hearts")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);

//         heartedPosts = userHearts?.map((h) => h.post_id) || [];

//         const { data: userPeace } = await supabase
//           .from("post_peace")
//           .select("post_id")
//           .in("post_id", postIds)
//           .eq("user_id", user.value.id);

//         peacedPosts = userPeace?.map((p) => p.post_id) || [];
//       }

//       // 3️⃣ liczniki
//       const { data: likesCounts } = await supabase
//         .from("post_likes")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       const { data: heartsCounts } = await supabase
//         .from("post_hearts")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       const { data: peaceCounts } = await supabase
//         .from("post_peace")
//         .select("post_id, user_id")
//         .in("post_id", postIds);

//       // 4️⃣ łączenie wyników
//       const enrichedPosts = fetchedPosts.map((post) => {
//         const likeCount =
//           likesCounts?.filter((l) => l.post_id === post.id).length || 0;
//         const heartCount =
//           heartsCounts?.filter((h) => h.post_id === post.id).length ?? 0;
//         const peaceCount =
//           peaceCounts?.filter((p) => p.post_id === post.id).length ?? 0;

//         const liked = likedPosts.includes(post.id);
//         const hearted = heartedPosts.includes(post.id);
//         const peaced = peacedPosts.includes(post.id);

//         return {
//           ...post,
//           likeCount,
//           liked,
//           heartCount,
//           hearted,
//           peaceCount,
//           peaced,
//         };
//       });

//       // 🔥 doklejamy zamiast nadpisywać
//       posts.value.push(...enrichedPosts);

//       // ustawiamy nowy kursor
//       lastCreatedAt.value = enrichedPosts[enrichedPosts.length - 1].created_at;
//     } catch (err) {
//       console.error(err);
//     } finally {
//       loading.value = false;
//     }
//   };

//   // toggle akcji
//   const togglePostLike = async (postId) => {
//     try {
//       const nowLiked = await toggleLike(postId);
//       const post = posts.value.find((p) => p.id === postId);
//       if (post) {
//         post.liked = nowLiked;
//         post.likeCount += nowLiked ? 1 : -1;
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const togglePostHeart = async (postId) => {
//     try {
//       const nowHearted = await toggleHeart(postId);
//       const post = posts.value.find((p) => p.id === postId);
//       if (post) {
//         post.hearted = nowHearted;
//         post.heartCount += nowHearted ? 1 : -1;
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const togglePostPeace = async (postId) => {
//     try {
//       const nowPeaced = await togglePeace(postId);
//       const post = posts.value.find((p) => p.id === postId);
//       if (post) {
//         post.peaced = nowPeaced;
//         post.peaceCount += nowPeaced ? 1 : -1;
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return {
//     posts,
//     loading,
//     fetchPosts,
//     togglePostLike,
//     togglePostHeart,
//     togglePostPeace,
//   };
// };

// composables/usePostsStats.ts
import { ref } from "vue";
import { useSupabaseClient, useSupabaseUser } from "#imports";
import { usePostHearts } from "~/composables/usePostHearts";
import { usePostPeace } from "~/composables/usePostPeace";
import { usePostsLikes } from "#imports";
const posts = ref([]);
export const usePostsStats = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const { toggleHeart } = usePostHearts();
  const { togglePeace } = usePostPeace();
  const { toggleLike } = usePostsLikes();

  const loading = ref(false);
  const lastCreatedAt = ref(null);

  // 🔹 pierwsze ładowanie feedu
  const initPosts = async (limit = 10) => {
    posts.value = [];
    lastCreatedAt.value = null;
    await loadMorePosts(limit);
  };

  // 🔹 ładowanie kolejnych postów (doklejanie)
  const loadMorePosts = async (limit = 10) => {
    if (loading.value) return;
    loading.value = true;

    try {
      let query = supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(limit);

      if (lastCreatedAt.value) {
        query = query.lt("created_at", lastCreatedAt.value);
      }

      const { data: fetchedPosts, error } = await query;
      if (error) throw error;
      if (!fetchedPosts || fetchedPosts.length === 0) return;

      const postIds = fetchedPosts.map((p) => p.id);

      // 🔹 liczniki reakcji dla nowych postów tylko
      const { data: likesCounts } = await supabase
        .from("post_likes")
        .select("post_id")
        .in("post_id", postIds);

      const { data: heartsCounts } = await supabase
        .from("post_hearts")
        .select("post_id")
        .in("post_id", postIds);

      const { data: peaceCounts } = await supabase
        .from("post_peace")
        .select("post_id")
        .in("post_id", postIds);

      // 🔹 reakcje zalogowanego użytkownika dla nowych postów
      let likedPosts = [];
      let heartedPosts = [];
      let peacedPosts = [];

      if (user.value) {
        const { data: userLikes } = await supabase
          .from("post_likes")
          .select("post_id")
          .in("post_id", postIds)
          .eq("user_id", user.value.id);
        likedPosts = userLikes?.map((l) => l.post_id) || [];

        const { data: userHearts } = await supabase
          .from("post_hearts")
          .select("post_id")
          .in("post_id", postIds)
          .eq("user_id", user.value.id);
        heartedPosts = userHearts?.map((h) => h.post_id) || [];

        const { data: userPeace } = await supabase
          .from("post_peace")
          .select("post_id")
          .in("post_id", postIds)
          .eq("user_id", user.value.id);
        peacedPosts = userPeace?.map((p) => p.post_id) || [];
      }

      // 🔹 tworzymy obiekty tylko dla nowych postów
      const newPosts = fetchedPosts.map((post) => {
        return {
          ...post,
          likeCount:
            likesCounts?.filter((l) => l.post_id === post.id).length || 0,
          liked: likedPosts.includes(post.id),
          heartCount:
            heartsCounts?.filter((h) => h.post_id === post.id).length ?? 0,
          hearted: heartedPosts.includes(post.id),
          peaceCount:
            peaceCounts?.filter((p) => p.post_id === post.id).length ?? 0,
          peaced: peacedPosts.includes(post.id),
        };
      });

      // 🔹 doklejamy nowe posty do istniejącej listy
      posts.value.push(...newPosts);

      // 🔹 aktualizacja kursora
      lastCreatedAt.value = newPosts[newPosts.length - 1].created_at;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // 🔹 toggle like/heart/peace dla istniejących postów
  const togglePostLike = async (postId) => {
    try {
      const nowLiked = await toggleLike(postId);
      const post = posts.value.find((p) => p.id === postId);
      if (post) {
        post.liked = nowLiked;
        post.likeCount += nowLiked ? 1 : -1;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const togglePostHeart = async (postId) => {
    try {
      const nowHearted = await toggleHeart(postId);
      const post = posts.value.find((p) => p.id === postId);
      if (post) {
        post.hearted = nowHearted;
        post.heartCount += nowHearted ? 1 : -1;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const togglePostPeace = async (postId) => {
    try {
      const nowPeaced = await togglePeace(postId);
      const post = posts.value.find((p) => p.id === postId);
      if (post) {
        post.peaced = nowPeaced;
        post.peaceCount += nowPeaced ? 1 : -1;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    posts,
    loading,
    initPosts, // pierwsze ładowanie
    loadMorePosts, // doklejanie kolejnych postów
    togglePostLike,
    togglePostHeart,
    togglePostPeace,
  };
};
