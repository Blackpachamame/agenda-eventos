import type { Event } from "../types/events";
import { addDays, normalizeDate } from "../utils/eventsHelpers";

const today = normalizeDate(new Date());

export const eventsMock: Event[] = [
  {
    id: "1",
    title: "Daily sync",
    date: today.toISOString(),
    duration: 15,
    type: "meeting",
  },
  {
    id: "2",
    title: "Llamada con proveedor",
    date: addDays(today, 0).toISOString(),
    duration: 60,
    type: "call",
  },
  {
    id: "3",
    title: "Planificación sprint",
    date: addDays(today, 0).toISOString(),
    duration: 120,
    type: "meeting",
  },
  {
    id: "4",
    title: "Enviar reporte semanal",
    date: addDays(today, 1).toISOString(),
    duration: 20,
    type: "reminder",
  },
  {
    id: "5",
    title: "1:1 con líder técnico",
    date: addDays(today, 1).toISOString(),
    duration: 45,
    type: "meeting",
  },
  {
    id: "6",
    title: "Demo interna",
    date: addDays(today, 2).toISOString(),
    duration: 90,
    type: "meeting",
  },
  {
    id: "7",
    title: "Llamada cliente",
    date: addDays(today, 3).toISOString(),
    duration: 30,
    type: "call",
  },
  {
    id: "8",
    title: "Preparar presentación trimestral",
    date: addDays(today, 5).toISOString(),
    duration: 180,
    type: "reminder",
  },
];
