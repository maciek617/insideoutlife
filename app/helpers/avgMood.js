export const avgMoodByMonth = (items) => {
  const temp = {};

  items.forEach((item) => {
    const month = new Date(item.created_at).getMonth();

    if (!temp[month]) {
      temp[month] = { sum: 0, count: 0 };
    }

    temp[month].sum += item.mood;
    temp[month].count++;
  });

  const labels = [];
  const data = [];

  Object.keys(temp)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((month) => {
      labels.push(
        new Date(2025, month, 1).toLocaleString("pl-PL", { month: "long" })
      );
      data.push(temp[month].sum / temp[month].count);
    });

  return { labels, data };
};
