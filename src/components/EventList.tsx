import type { Event } from "../types/events";
import EventCard from "./EventCard";

export default function EventList({ events }: { events: Event[] }) {
  return (
    <section className="w-full">
      {events.length === 0 ? (
        <p>No se encontraron eventos.</p>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}
