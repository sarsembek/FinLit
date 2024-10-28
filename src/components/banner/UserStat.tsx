import * as React from "react";
import { UserStatProps } from "./types";

export const UserStat: React.FC<UserStatProps> = ({ count, description }) => (
  <div className="flex flex-col self-stretch my-auto w-[177px]">
    <h3 className="text-base font-bold text-white">{count}</h3>
    <p className="text-xs leading-4 text-zinc-400">{description}</p>
  </div>
);
