export type EventType = "meeting" | "call" | "reminder";
export type DateStatus = "today" | "tomorrow" | "future";

export type Event = {
  id: string;
  title: string;
  date: string; // ISO string
  duration: number; // minutos
  type: EventType;
};
