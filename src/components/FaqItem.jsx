import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);

  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className=" mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "text-lg font-bold transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:font-bold",
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className="relative flex size-12 items-center justify-center rounded-full border-2 transition-all duration-500"
        >
          <div className="bg-dark dark:bg-light p-5 rounded-full shadow-xl" />
          <div className={clsx("w-1 h-6 absolute bg-light dark:bg-dark transition-all duration-300", active && "-rotate-90 opacity-0")}></div>
          <div className="w-6 h-1 absolute bg-light dark:bg-dark"></div>
        </div>
      </div>

      <SlideDown>
        {activeId === item.id && (
          <div className="px-7 py-3.5">{item.answer}</div>
        )}
      </SlideDown>

      <div
        className={clsx(
          "dark:bg-light bg-dark/20 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
          active && "opacity-100",
        )}
      >
        <div className="dark:bg-dark bg-light absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 dark:bg-dark-teal bg-accent-magenta" />
      </div>

    </div>
  );
};
export default FaqItem;