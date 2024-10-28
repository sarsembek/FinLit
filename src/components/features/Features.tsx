import * as React from "react";
import { FeatureCard } from "./FeatureCard";

const featureData = [
  {
    iconSrc: "/1.svg",
    title: "Financial Literacy Basics",
    description: "Introduction to financial literacy, understanding basic terms and concepts.",
  },
  {
    iconSrc: "/2.svg",
    title: "Personal Budget",
    description: "How to create and manage a personal or family budget. Practical tips for planning expenses and income.",
  },
  {
    iconSrc: "/3.svg",
    title: "Savings and Investments",
    description: "The differences between savings and investments. Basics of investment instruments: stocks, bonds, funds.",
  },
  {
    iconSrc: "/1.svg",
    title: "Financial Literacy for Business",
    description: "Small Business Finance Management. Budgeting and Financial Analysis.",
  },
  {
    iconSrc: "/2.svg",
    title: "Real Estate Investments",
    description: "Basics of Real Estate Investing: from buying to renting. Financial Literacy for Business.",
  },
  {
    iconSrc: "/3.svg",
    title: "Cryptocurrencies and Blockchain",
    description: "Basics of Cryptocurrencies and Blockchain Technologies. Risks and Opportunities of Investing in Cryptocurrencies.",
  },
  {
    iconSrc: "/1.svg",
    title: "Financial Risks and Insurance",
    description: "Understanding financial risks. Types of insurance and how to choose the right policy.",
  },
  {
    iconSrc: "/2.svg",
    title: "Teaching Children Financial Literacy",
    description: "How to Teach Children to Handle Money and Develop Financial Skills.",
  },
  {
    iconSrc: "/3.svg",
    title: "Psychology of Money",
    description: "How Financial Behavior Affects Decision Making. Managing Emotions and Money.",
  },
];

export const Features: React.FC = () => {
  return (
    <section
      data-layername="features"
      className="flex flex-col items-center mt-32 px-12 max-md:mt-10 max-md:mx-4 max-md:max-w-full"
      id="courses"
    >
      <h2
        data-layername="whatDoWeOffer"
        className="text-4xl font-bold text-white"
      >
        Courses
      </h2>
      <div className="flex flex-wrap gap-8 items-start justify-center mt-16 max-md:mt-10 max-md:max-w-full">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            iconSrc={feature.iconSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
