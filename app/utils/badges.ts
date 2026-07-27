import type { BadgeName } from "~/types/badges";

import SleepBadge from "~/components/badges/sleep.vue";

export const badgeComponents: Record<BadgeName, any> = {
  sleepBadge: SleepBadge,
};
