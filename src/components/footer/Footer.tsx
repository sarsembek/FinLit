import * as React from "react";
import { FooterLinkSection } from "./FooterLinkSection";
import { LogoSection } from "./LogoSection";

const footerSections = [
  {
    title: "About us",
    links: ["Investors", "Features", "Team"],
  },
  {
    title: "Products",
    links: ["Financial Calculator", "AI Advice", "Courses"],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-20 pt-16 pb-9 w-full bg-zinc-800 bg-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <section className="flex flex-wrap gap-8 items-center justify-between max-md:max-w-full">
          <LogoSection
            logoSrc="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/c0f831d3f57e077b86b645dab119bd17e1be02ddbd3b429cbb0c25d01a88d03f?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
            title="FinLit.AI"
            description="Discover financial literacy with FinLit.AI with interactive training, courses and tools for your financial success"
          />
          <div className="flex flex-wrap gap-8 items-start my-auto text-base min-w-[240px] max-md:max-w-full">
            {footerSections.map((section, index) => (
              <FooterLinkSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};
