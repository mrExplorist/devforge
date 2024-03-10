import { cn } from '@/src/utils';
export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn('grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>
      {children}
    </div>
  );
};

// place best tag
export const BentoGridItem = ({ className, title, description, header, icon, tag, date }) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-neutral-700 bg-white border border-transparent justify-between flex flex-col space-y-4 group',
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex items-center justify-between">
          {icon}
          {tag && (
            <span className="font-grotesk font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 capitalize">
              {tag}
            </span>
          )}
        </div>

        <div className="font-grotesk font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>

        <div className="font-grotesk font-normal text-neutral-600 text-xs dark:text-neutral-300 ">{description}</div>

        <div className=" font-semibold text-neutral-600 capitalize dark:text-base text-xs mt-1">{date}</div>
      </div>
    </div>
  );
};
