export const useNewsletter = () => {
  const supabase = useSupabaseClient();
  const emailExists = ref(false);
  const emailAdded = ref(false);

  async function checkIfEmailExists(email) {
    emailAdded.value = false;
    emailExists.value = false;
    const { data, error } = await supabase
      .from("newsletter")
      .select()
      .eq("newsletter_email", email);

    if (data[0] && !error) {
      emailExists.value = true;
    } else {
      console.log(error);
      emailExists.value = false;
    }
  }

  async function addEmailToNewsletterBase(email) {
    const { error } = await supabase
      .from("newsletter")
      .insert({ newsletter_email: email });

    if (!error) emailAdded.value = true;
    console.log(error);
  }

  return {
    checkIfEmailExists,
    emailExists,
    addEmailToNewsletterBase,
    emailAdded,
  };
};
