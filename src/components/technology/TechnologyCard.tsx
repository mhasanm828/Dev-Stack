import type { ITechnology } from "../../types/technologyType";

interface TechnologyCardProps {
  technology: ITechnology;
  isSelected: boolean;
  onAdd: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="flex min-h-[200px] flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

      {/* Top */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-[9px] text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-3 text-sm font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-[10px] leading-4 text-gray-500">
        {technology.description}
      </p>

      {/* Bottom */}
      <div className="mt-auto">

        <div className="mt-4 flex items-center justify-between">

          <span className="rounded bg-gray-100 px-2 py-1 text-[8px] text-gray-600">
            {technology.category}
          </span>

          <span className="text-[8px] text-gray-500">
            {technology.difficulty}
          </span>

          <span className="text-[9px]">
            <span className="text-orange-400">★</span>{" "}
            {technology.rating}
          </span>

        </div>

        {/* Add Button */}
        <button
          type="button"
          disabled={isSelected}
          onClick={() => onAdd(technology)}
          className={`mt-3 w-full rounded-md py-2 text-[9px] font-semibold text-white ${
            isSelected
              ? "cursor-not-allowed bg-gray-400"
              : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
};

export default TechnologyCard;