import type { Event } from "../types/events";
import { getDateStatus, isLongEvent } from "../utils/events";

export default function EventCard({ event }: { event: Event }) {
  const dateStatus = getDateStatus(event.date);
  const isLong = isLongEvent(event.duration);

  return (
    <article className="w-full bg-white border border-gray-100 rounded-lg shadow-md p-3 flex flex-col gap-2">
      {dateStatus === "next" && (
        <span className="bg-indigo-100 text-indigo-700 w-fit flex items-center justify-start text-sm px-3 rounded">
          Comienza pronto
        </span>
      )}

      <h3 className="text-lg text-indigo-950 font-medium">{event.title}</h3>

      <p className="text-sm text-gray-600">
        📅{" "}
        <time dateTime={event.date}>
          {new Date(event.date).toLocaleDateString("es-AR")}
          {/* {new Date(event.date).toLocaleString("es-AR", { timeStyle: "short" })} */}
        </time>
      </p>

      <div className="flex items-center gap-2 text-sm text-gray-700">
        <p>⏰ {event.duration} min</p>

        {isLong && (
          <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-xl text-xs font-medium">
            Larga
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600">
        📌{" "}
        {event.type === "meeting" ? "Reunión" : event.type === "call" ? "Llamada" : "Recordatorio"}
      </p>
    </article>
  );
}
