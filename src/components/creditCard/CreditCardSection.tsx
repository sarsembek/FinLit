import * as React from "react";

export const CreditCardSection: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-8 items-center w-full mt-32 px-32">
      <section className="flex flex-col grow shrink self-stretch px-7 pb-5 my-auto rounded-none min-w-[240px] w-[483px] max-md:px-5 max-md:max-w-full">
        <img src="/cards.svg" alt="Credit Cards" />
      </section>

      <section className="flex flex-col grow shrink self-stretch my-auto text-base text-white min-w-[240px] w-[483px] max-md:max-w-full">
        <h1 className="text-4xl font-bold max-md:max-w-full">
          Find the Perfect Credit Card for You
        </h1>
        <p className="mt-6 leading-6 text-zinc-400 max-md:max-w-full">
          Discover your ideal credit card with ease. Our comprehensive selection
          caters to every financial need and lifestyle. Whether you seek
          cashback rewards, travel perks, or building credit, we have the
          perfect credit card waiting for you. Unleash the possibilities and
          find the credit card that fits your unique goals and aspirations.
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
