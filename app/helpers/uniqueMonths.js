export const getUniqueMonthsFromData = (items) => {
  const monthsPL = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  const monthSet = new Set();
  items.forEach((item) => {
    const date = new Date(item.created_at);
    monthSet.add(date.getMonth());
  });

  return [...monthSet]
    .sort((a, b) => a - b)
    .map((monthIndex) => monthsPL[monthIndex]);
};
