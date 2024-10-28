import * as React from "react";
import { FAQItemProps } from "./types";

interface ExtendedFAQItemProps extends FAQItemProps {
  className?: string; // Add className prop
}

export const FAQItem: React.FC<ExtendedFAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  className, // Destructure className
}) => {
  return (
    <article className={`flex flex-col pb-4 w-full border-b-2 border-zinc-400 ${className}`}>
      <button
        onClick={onToggle}
        className="flex flex-wrap gap-10 justify-between items-center w-full text-2xl font-bold leading-none text-white max-md:max-w-full transition-colors duration-200 ease-in-out"
        aria-expanded={isOpen}
      >
        <h3 className="self-stretch my-auto max-md:max-w-full">{question}</h3>
        {isOpen ? (
          <div className="flex shrink-0 self-stretch my-auto w-4 bg-white h-[3px]" />
        ) : (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/d6da56611466c8004c3c5a8e3ed8c6a3925e2e4b419c435d195e25c43bb49334?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square transition-transform duration-200 ease-in-out transform"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} // Rotate icon when open
          />
        )}
      </button>
      <p
        className={`mt-4 text-base leading-6 text-zinc-400 max-md:max-w-full overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }} // Control maxHeight and opacity
      >
        {answer}
      </p>
    </article>
  );
};
