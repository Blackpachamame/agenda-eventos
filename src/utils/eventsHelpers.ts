import type { DateStatus } from "../types/events";

/**
 * Normaliza una fecha a inicio del día local
 */
export const normalizeDate = (date: Date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

/**
 * Suma días a una fecha
 */
export const addDays = (date: Date, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

/**
 * Verifica si es un evento largo
 */
export const isLongEvent = (estimatedTime: number): boolean => {
  return estimatedTime > 60;
};

/**
 * Devuelve si la fecha del evento es hoy/mañana/futuro
 */
export const getDateStatus = (eventDate: string): DateStatus => {
  const event = normalizeDate(new Date(eventDate));
  const today = normalizeDate(new Date());
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = normalizeDate(tomorrowDate);

  if (event.getTime() === today.getTime()) {
    return "today";
  }

  if (event.getTime() === tomorrow.getTime()) {
    return "tomorrow";
  }

  return "future";
};
