import { CreateCardButton } from "./CreateCardButton";

export function HeroSection() {
  return (
    <section className="flex flex-col w-full max-md:w-full">
      <div className="flex flex-col self-stretch my-auto w-full text-base text-white max-md:mt-10">
        <h1 className="text-4xl font-bold">
        Find the best courses on our website on financial literacy
        </h1>
        <p className="mt-6 leading-6 text-zinc-400">
        Understand the basics of finance - from budgeting to investing. Learn how to create and manage a personal budget, which helps you avoid debt. Learn about various investment tools and strategies, which allows you to make informed decisions. Ability to set financial goals and develop plans to achieve them. Understanding financial risks and ways to minimize them. Preparing for retirement and creating a sustainable financial future.
        </p>
        <CreateCardButton />
      </div>
    </section>
  );
}
