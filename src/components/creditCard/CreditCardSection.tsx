import * as React from "react";

export const CreditCardSection: React.FC = () => {
  return (
    <main id="process" className="flex flex-wrap gap-8 items-center w-full mt-32 md:px-32 px-12">
      <section className="flex flex-col grow shrink self-stretch px-7 pb-5 my-auto rounded-none min-w-[240px] w-[483px] max-md:px-5 max-md:max-w-full">
        <img src="/cards.svg" alt="Credit Cards" />
      </section>

      <section className="flex flex-col grow shrink self-stretch my-auto text-base text-white min-w-[240px] w-[483px] max-md:max-w-full">
        <h1 className="text-4xl font-bold max-md:max-w-full">
        Find the best courses on our website on financial literacy
        </h1>
        <p className="mt-6 leading-6 text-zinc-400 max-md:max-w-full">
        Understand the basics of finance - from budgeting to investing. Learn how to create and manage a personal budget, which helps you avoid debt. Learn about various investment tools and strategies, which allows you to make informed decisions. Ability to set financial goals and develop plans to achieve them. Understanding financial risks and ways to minimize them. Preparing for retirement and creating a sustainable financial future.
        </p>
        <button
          className="flex gap-4 self-start px-8 py-4 mt-6 font-medium text-white bg-green-600 rounded-[64px] max-md:px-5 transition-colors duration-200 ease-in-out hover:bg-green-700 active:bg-green-800"
        >
          Learn More
        </button>
      </section>
    </main>
  );
};
