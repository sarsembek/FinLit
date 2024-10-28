import { CreateCardButton } from "./CreateCardButton";

export function HeroSection() {
  return (
    <section className="flex flex-col w-full max-md:w-full">
      <div className="flex flex-col self-stretch my-auto w-full text-base text-white max-md:mt-10">
        <h1 className="text-4xl font-bold">
          Design your personalized credit card.
        </h1>
        <p className="mt-6 leading-6 text-zinc-400">
          You have the freedom to personalize the design of your credit card,
          ensuring a truly unique experience that makes you feel extraordinary.
        </p>
        <CreateCardButton />
      </div>
    </section>
  );
}
