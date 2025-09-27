import { serverSupabaseUser } from "#supabase/server";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();


  const supabaseAdmin = createClient(
    config.supabaseUrl,
    config.supabaseServiceRoleKey // 🔒 tylko backend
  );

  const user = await serverSupabaseUser(event);
  if (!user) return { error: "Not authenticated" };
 
  const { error } = await supabaseAdmin.auth.admin.deleteUser(user.id);

  if (error) return { error: error.message };
  return { success: true };
});
