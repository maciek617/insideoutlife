<template>
  <div class="text-white">
    <div v-if="props.items?.length">
      <p class="mt-10 text-xl lg:text-2xl">
        Stan twoich emocji na przestrzeni czasu
      </p>
      <p class="text-gray-300 text-xs">
        Odpowiednio: 😄(10), 🙂(8+), 😐(6+), 😕(4+), 😞(2+) lewa strona wykresu
      </p>
      <Line
        id="my-chart-id"
        :options="chartOptions"
        :data="charData"
        class="mt-5"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Line } from "vue-chartjs";
const { allEmotes } = useJournal();
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { avgMoodByMonth } from "~/helpers/avgMood";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Emote = {
  emote: string;
  count: number;
};

const props = defineProps<{
  items: {
    created_at: string;
    id: string;
    mood: number;
    text?: string;
    user_id: string;
  }[];
  emotes: Emote[];
}>();

const chartAllData = computed(() => avgMoodByMonth(allEmotes.value));

const charData = computed(() => ({
  labels: chartAllData.value.labels,
  datasets: [
    {
      label: "Emocje w przeliczeniu na punkty",
      backgroundColor: "#fc6076",
      borderColor: "#f9f871",
      data: chartAllData.value.data,
    },
  ],
}));

const chartOptions = ref({
  responsive: true,
});
</script>

<style></style>
