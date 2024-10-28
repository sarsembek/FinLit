import * as React from "react";
import { StatCard } from "./StatCard";

const statsData = [
  { value: "16y", label: "Experience" },
  { value: "250+", label: "Merchant Partners" },
  { value: "18+", label: "Years Experience" },
  { value: "10.2k+", label: "Worldwide Clients" },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="flex flex-wrap items-start mx-8 p-8 md:p-16 mt-32 bg-gray-700 bg-opacity-20 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      {statsData.map((stat, index) => (
        <div key={index} className="flex flex-col items-center max-md:w-full max-md:mb-4">
          <StatCard value={stat.value} label={stat.label} />
        </div>
      ))}
    </section>
  );
};
