import { twMerge } from "tailwind-merge";

export const TechStack = ({ techName, children, className }) => {
  const baseClasses = `lg:grid lg:grid-cols-2 lg:text-center lg:place-items-center block lg:text-normal text-2xl text-center p-1  text-[#FE62C3]`;

  const mergedClasses = twMerge([baseClasses, className]);

  return (
    <p className={mergedClasses}>
      {children}
      <span className="hidden text-sm font-semibold lg:block">{techName}</span>
    </p>
  );
};
