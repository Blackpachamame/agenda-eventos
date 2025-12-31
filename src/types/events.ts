export type EventType = "meeting" | "call" | "reminder";
export type DateStatus = "next" | "future";

export type Event = {
  id: string;
  title: string;
  date: string; // ISO string
  duration: number; // minutos
  type: EventType;
};
