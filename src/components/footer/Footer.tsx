import * as React from "react";
import { FooterLinkSection } from "./FooterLinkSection";
import { LogoSection } from "./LogoSection";

const footerSections = [
  {
    title: "About us",
    links: ["Investors", "Features", "Book a demo", "Security"],
  },
  {
    title: "Products",
    links: ["Financial Calculator", "AI Advice", "Courses", "Gift Cards"],
  },
  {
    title: "Useful Links",
    links: ["Free rewards", "Documentation", "Affiliate program"],
  },
  {
    title: "Social",
    links: ["Changelog", "License", "Site Maps", "News"],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-20 pt-16 pb-9 w-full bg-zinc-800 bg-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <section className="flex flex-wrap gap-8 items-center max-md:max-w-full">
          <LogoSection
            logoSrc="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/c0f831d3f57e077b86b645dab119bd17e1be02ddbd3b429cbb0c25d01a88d03f?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
            title="FinLit.AI"
            description="Discover the power of our secure and rewarding credit cards"
          />
          <div className="flex flex-wrap gap-8 items-start self-stretch my-auto text-base min-w-[240px] w-[816px] max-md:max-w-full">
            {footerSections.map((section, index) => (
              <FooterLinkSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-wrap gap-10 justify-between items-center mt-20 w-full text-xs leading-loose max-w-[1240px] text-zinc-400 max-md:mt-10 max-md:max-w-full">
          <p className="self-stretch my-auto">
            copyright 2023 DoraDesign All Rights Reserved
          </p>
          <div className="flex self-stretch my-auto min-w-[240px] w-[289px]">
            <p className="flex-auto mr-0">
              This page uses cookies. See cookies details here{" "}
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/552e9e433a00f1b7169602c19f9595ac8558ab9b2c2ccad931bba7829f08574c?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
              alt=""
              className="object-contain shrink-0 self-start mt-4 w-7 aspect-[27.78]"
            />
          </div>
        </section>
      </div>
    </footer>
  );
};
