import * as React from "react";
import { LogoSectionProps } from "./types";

export const LogoSection: React.FC<LogoSectionProps> = ({
  logoSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col self-stretch my-auto min-h-[176px] min-w-[240px] w-[392px]">
      <div className="flex gap-3 justify-center items-center self-start text-xl font-bold tracking-tight leading-tight text-white whitespace-nowrap">
        <img
          loading="lazy"
          src={logoSrc}
          alt="FinLit.AI Logo"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <h1 className="self-stretch my-auto">{title}</h1>
      </div>
      <p className="mt-2.5 text-base tracking-tight leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  );
};
