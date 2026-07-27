export interface Challenge {
  badge_claimed: boolean | null;
  created_at: string;
  current_stage: number | null;
  id: string;
  is_done: boolean | null;
  max_stage: number | null;
  updated_at: string | null;
  user_id: string | null;
}