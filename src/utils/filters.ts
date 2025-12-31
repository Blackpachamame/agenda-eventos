import type { Event } from "../types/events";

export function filterByType(events: Event[], type?: Event["type"]): Event[] {
  if (!type) return events;

  return events.filter((event) => event.type === type);
}

export function sortByDate(events: Event[]): Event[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB; // ascendente (más próxima primero)
  });
}

export function sortByDuration(events: Event[]): Event[] {
  return [...events].sort((a, b) => {
    return a.duration - b.duration;
  });
}
