import type { Event } from "../types/events";

type SortBy = "date" | "duration";
type ByType = Event["type"];

type EventFilterProps = {
  sortBy: SortBy;
  selectedType?: ByType;
  onSortChange: (value: SortBy) => void;
  onTypeChange: (value?: ByType) => void;
};

export default function EventFilter({
  sortBy,
  selectedType,
  onSortChange,
  onTypeChange,
}: EventFilterProps) {
  return (
    <section className="w-full">
      <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 flex gap-4 items-center">
        <label htmlFor="order" className="flex gap-2 items-center text-sm text-gray-600">
          Ordenar por:
          <select
            id="order"
            className="border border-gray-500 rounded"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortBy)}>
            <option value="date">Fecha</option>
            <option value="duration">Duración</option>
          </select>
        </label>

        <label htmlFor="type" className="flex gap-2 items-center text-sm text-gray-600">
          Elegir Tipo:
          <select
            id="type"
            className="border border-gray-500 rounded"
            value={selectedType ?? ""}
            onChange={(e) => onTypeChange(e.target.value ? (e.target.value as ByType) : undefined)}>
            <option value="">Todas</option>
            <option value="meeting">Reunión</option>
            <option value="call">Llamada</option>
            <option value="reminder">Recordatorio</option>
          </select>
        </label>
      </div>
    </section>
  );
}
