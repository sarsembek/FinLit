import * as React from "react";
import { FooterLinkProps } from "./types";

export const FooterLinkSection: React.FC<FooterLinkProps> = ({
  title,
  links,
}) => {
  return (
    <div className="flex flex-col w-[180px]">
      <h3 className="font-bold text-white">{title}</h3>
      <nav className="flex flex-col mt-4 w-full text-zinc-400">
        {links.map((link, index) => (
          <a
            href="#"
            key={index}
            className={`${
              index > 0 ? "mt-2" : ""
            } hover:text-white transition-colors duration-200`}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};
