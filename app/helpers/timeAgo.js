export function timeAgo(dateString) {
  const past = new Date(dateString + "Z");
  const now = new Date();

  const diffMs = now.getTime() - past.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay > 0) return `${diffDay} ${diffDay === 1 ? "dzień" : "dni"} temu`;
  if (diffHour > 0) return `${diffHour} godz temu`;
  if (diffMin > 0) return `${diffMin} min temu`;
  return "Przed chwilą";
}
