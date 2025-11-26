import type { Database } from "~/types/supabase";
export const useMessages = () => {
  const supabase = useSupabaseClient<Database>();
  const msgSent = ref(false);
  // Send message

  const sendMessage = async (name: string, email: string, msg: string) => {
    msgSent.value = false;
    const { error } = await supabase.from("messages").insert({
      name: name,
      email: email,
      message: msg,
    });

    if (!error) msgSent.value = true;
    console.log(error);
  };

  return { sendMessage, msgSent };
};
