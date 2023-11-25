export function toShortDate(locales: string, value: string) {
  return Intl.DateTimeFormat(locales, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
