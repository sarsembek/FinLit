import * as React from "react";
import { TestimonialCardProps } from "./types";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  iconSrc,
  testimonialText,
  // avatarSrc,
  name,
  role,
}) => {
  return (
    <article className="flex flex-col grow shrink items-start px-6 py-6 md:py-12 bg-zinc-800 bg-opacity-20 min-w-[240px] rounded-[32px] w-[314px] max-md:px-5">
      <div className="flex gap-2.5 items-center p-4 w-14 h-14 bg-gray-700 rounded-[56px]">
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain w-6 aspect-square"
        />
      </div>
      <blockquote className="self-stretch mt-8 text-base leading-6 text-white">
        {testimonialText}
      </blockquote>
      <footer className="flex gap-2 justify-center items-start mt-8">
        {/* <img
          loading="lazy"
          src={avatarSrc}
          alt={`${name}'s profile picture`}
          className="object-contain shrink-0 w-12 rounded-full aspect-square"
        /> */}
        <div className="flex flex-col">
          <cite className="text-base font-medium tracking-tight text-white not-italic">
            {name}
          </cite>
          <p className="text-xs leading-loose text-zinc-400">{role}</p>
        </div>
      </footer>
    </article>
  );
};
