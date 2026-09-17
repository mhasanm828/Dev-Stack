import type { ITechnology } from "../../types/technologyType";

interface YourStackProps {
  selectedTechnologies: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-4">

      <h3 className="text-sm font-bold text-gray-900">
        Your Stack
      </h3>

      <p className="mt-1 text-[9px] text-gray-400">
        {selectedTechnologies.length}{" "}
        {selectedTechnologies.length === 1
          ? "Technology"
          : "Technologies"}{" "}
        Selected
      </p>

      {/* Empty */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-4 flex min-h-[105px] items-center justify-center rounded-lg border border-dashed border-gray-200">
          <div className="text-center">
            <p className="text-[10px] text-gray-400">
              Your stack is empty.
            </p>

            <p className="mt-1 text-[8px] text-gray-300">
              Add technologies to build your stack.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-4">

          {/* Selected */}
          <div className="space-y-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-semibold text-gray-800">
                    {technology.name}
                  </p>

                  <p className="text-[8px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="text-sm text-gray-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-md border border-red-200 py-2 text-[9px] font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>

        </div>
      )}
    </div>
  );
};

export default YourStack;