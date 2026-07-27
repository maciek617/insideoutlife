import type { Challenge } from "~/interfaces/Challenge";
import type { Database } from "~/types/supabase";

type ChallengeName = "7daysleep";

export function useChallenge(challengeName: ChallengeName) {
  const supabase = useSupabaseClient<Database>();
  const { userData, getUser } = useUser();

  const userChallengeInfo = ref<Challenge | null>(null);

  const showNextTask = ref(false);
  const isDone = ref(false);

  const badgeClaimed = computed(
    () => userChallengeInfo.value?.badge_claimed ?? false,
  );

  const challengeDone = computed(
    () => userChallengeInfo.value?.is_done === true || isDone.value === true,
  );

  const shouldShowNextTask = computed(
    () => showNextTask.value && !challengeDone.value,
  );

  async function getUserChallengeInfo() {
    if (!userData.value) return;

    const { data, error } = await supabase
      .from(challengeName)
      .select("*")
      .eq("user_id", userData.value.id)
      .single();

    if (error) {
      userChallengeInfo.value = null;
      return;
    }

    userChallengeInfo.value = data;
  }

  async function createUserRecord() {
    if (!userData.value) return;

    const { error } = await supabase.from(challengeName).insert({
      id: userData.value.id,
      user_id: userData.value.id,
      current_stage: 1,
      max_stage: 7,
      is_done: false,
      badge_claimed: false,
    });

    if (!error) {
      await getUserChallengeInfo();
    }
  }

  async function init() {
    await getUser();

    await getUserChallengeInfo();

    if (!userChallengeInfo.value) {
      await createUserRecord();
    }

    checkIfCanContinue();
  }

  function checkIfCanContinue() {
    const updatedAt = userChallengeInfo.value?.updated_at;

    if (!updatedAt) return;

    showNextTask.value =
      new Date(updatedAt).toDateString() === new Date().toDateString();
  }

  async function updateStage() {
    if (!userChallengeInfo.value) return;

    const currentStage = userChallengeInfo.value.current_stage ?? 1;

    const nextStage = currentStage + 1;

    const finished = nextStage > (userChallengeInfo.value.max_stage ?? 7);

    const updatedAt = new Date().toISOString();

    const { error } = await supabase
      .from(challengeName)
      .update({
        current_stage: nextStage,
        is_done: finished,
        updated_at: updatedAt,
      })
      .eq("user_id", userData.value.id);

    if (!error) {
      userChallengeInfo.value.current_stage = nextStage;
      userChallengeInfo.value.is_done = finished;
      userChallengeInfo.value.updated_at = updatedAt;

      isDone.value = finished;
      showNextTask.value = true;
    }
  }

  async function challengeGetBadge() {
    if (!userChallengeInfo.value) return;

    const updatedAt = new Date().toISOString();

    const { error } = await supabase
      .from(challengeName)
      .update({
        badge_claimed: true,
        updated_at: updatedAt,
      })
      .eq("user_id", userData.value.id);

    if (!error) {
      userChallengeInfo.value.badge_claimed = true;
      userChallengeInfo.value.updated_at = updatedAt;

      const { error } = await supabase
        .from("users")
        .update({
          badges: ["sleepBadge"], // W przyszłości dodać do odznak, na razie jest jedna tylko
        })
        .eq("id", userData.value.id);

      console.log(error);
    }
  }

  return {
    userChallengeInfo,
    showNextTask,
    badgeClaimed,
    challengeDone,
    shouldShowNextTask,
    init,
    updateStage,
    challengeGetBadge,
  };
}
