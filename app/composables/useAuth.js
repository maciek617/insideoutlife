import { useSupabaseClient } from "#imports";

export function useAuth() {
  const supabase = useSupabaseClient();
  const loginError = ref("");

  async function changePassword(newPassword) {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    await signOut();
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    navigateTo("/login");
  }

  async function deleteUser(userId) {
    await supabase.from("reports_comments").delete().eq("user_id", userId);
    await supabase.from("reports_post").delete().eq("user_id", userId);
    const response = await supabase.from("users").delete().eq("id", userId);
  }

  async function createUser(email, name, id) {
    const { error } = await supabase
      .from("users")
      .insert({ email: email, nick: name, id: id });

    console.log(error);
  }

  async function register(email, password, name) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (data && !error) {
      navigateTo(`/confirm-${email}`);
    }
  }

  async function login(email, password) {
    loginError.value = "";
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      loginError.value = error.message;
      if (loginError.value === "Email not confirmed") {
        navigateTo(`/confirm-${email}`);
        return;
      }
      return;
    }

    if (data && !error) {
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select()
        .eq("id", data.user.id);

      if (!userData.length && !userError) {
        await createUser(email, data.user.user_metadata.name, data.user.id);
        return navigateTo("/app/dashboard");
      }
      return navigateTo("/app/dashboard");
    }
  }

  return { register, login, loginError, signOut, deleteUser, changePassword };
}
