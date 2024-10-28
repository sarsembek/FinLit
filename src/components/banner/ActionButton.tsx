import * as React from "react";
import { ButtonProps } from "./types";

export const ActionButton: React.FC<ButtonProps> = ({ text, iconSrc }) => (
  <button
    className="flex gap-4 items-center px-8 py-4 mt-8 text-base font-medium text-white bg-green-600 rounded-[64px] max-md:px-5 transition-colors duration-200 ease-in-out hover:bg-green-700 active:bg-green-800"
    type="button"
  >
    <span className="self-stretch my-auto">{text}</span>
    <img
      loading="lazy"
      src={iconSrc}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto aspect-[1.44] w-[23px]"
    />
  </button>
);
