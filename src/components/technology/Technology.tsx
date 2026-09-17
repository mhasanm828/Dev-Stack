import { use, useState } from "react";
import { toast } from "react-toastify";

import type { ITechnology } from "../../types/technologyType";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyProps {
  technologysPromise: Promise<ITechnology[]>;
}

const Technology = ({ technologysPromise }: TechnologyProps) => {

  // Get JSON data
  const technologies = use(technologysPromise);

  // Selected technologies
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  // ADD
  const handleAdd = (technology: ITechnology) => {

    // Check duplicate
    const alreadyExists = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    // Add
    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // REMOVE
  const handleRemove = (id: string) => {

    const removedTechnology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  // REMOVE ALL
  const handleRemoveAll = () => {

    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section
      id="technologies"
      className="bg-white px-6 py-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">

          {/* ALL TECHNOLOGIES */}
          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

              {technologies.map((technology) => (

                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={selectedTechnologies.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={handleAdd}
                />

              ))}

            </div>

          </div>

          {/* YOUR STACK */}
          <div className="lg:col-span-1">

            <YourStack
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Technology;