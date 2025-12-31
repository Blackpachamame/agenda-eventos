import { useState } from "react";
import { eventsMock } from "../data/events.mock";
import { filterByType, sortByDate, sortByDuration } from "../utils/filters";
import EventFilter from "./EventFilter";
import EventList from "./EventList";
import type { Event } from "../types/events";

type SortBy = "date" | "duration";
type ByType = Event["type"];

export default function EventPage() {
  const [sortBy, setSortBy] = useState<SortBy>("date");
  const [selectedType, setSelectedType] = useState<ByType | undefined>(undefined);

  const filteredEvents = filterByType(eventsMock, selectedType);
  const sortedEvents =
    sortBy === "date" ? sortByDate(filteredEvents) : sortByDuration(filteredEvents);

  return (
    <main className="w-full p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Eventos</h1>
      <EventFilter
        sortBy={sortBy}
        selectedType={selectedType}
        onSortChange={setSortBy}
        onTypeChange={setSelectedType}
      />
      <EventList events={sortedEvents} />
    </main>
  );
}
