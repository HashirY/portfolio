import { twMerge } from "tailwind-merge";

export const TechStack = ({ techName, children, className, leftOrRight }) => {
  const baseClasses = `grid grid-cols-2 place-items-center ${
    leftOrRight === "left" ? "border-l-4" : "border-r-4"
  } border-text p-1  text-[#FE62C3]`;

  const mergedClasses = twMerge([baseClasses, className]);

  return (
    <p className={mergedClasses}>
      {children}
      <span className="text-sm font-semibold">{techName}</span>
    </p>
  );
};
