import * as React from "react";
import { ActionButton } from "./ActionButton";
import { UserStat } from "./UserStat";

export const Banner: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-8 items-start mt-32 w-full max-md:mt-10 ml-48">
      <div className="flex relative flex-col grow shrink items-start min-w-[240px] w-[483px] max-md:max-w-full">
        <h1 className="z-0 self-stretch text-6xl font-bold tracking-tighter text-white leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Financial literacy educational platform
        </h1>
        <p className="z-0 self-stretch mt-8 text-lg leading-6 text-zinc-400 max-md:max-w-full">
        Discover financial literacy with FinLit.AI
        Interactive training, courses and tools for your financial success
        </p>
        <ActionButton
          text="Get Started"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/9c830570d960914e120635477cc661e91765c20eb9068a4fda856c4fe1fb4422?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
        />
        <div className="flex z-0 gap-4 items-center mt-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/f4da6d11a66cfabc06e8874fac64271e8342682028a7c42c48985804eab03f52?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
            alt=""
            className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[2.5] w-[120px]"
          />
          <UserStat
            count="10.2k+"
            description="Active users around the world"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/bc7be85d32fc0e58431198a9ff4b3c82977595098ce4bd71bfcf85c0d9f42a42?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
          alt=""
          className="object-contain absolute -left-2.5 z-0 max-w-full aspect-[3.58] h-[100px] top-[62px] w-[359px]"
        />
      </div>
      <div className="flex flex-col grow shrink items-start min-w-[240px] w-[483px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/33113e7142937bb6aa223dabca84431476ae34997e390cadbd2ab2b34579157e?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
          alt="Finance journey illustration"
          className="object-contain object-right max-w-full rounded-none aspect-[1.34] w-[793px]"
        />
      </div>
    </section>
  );
};
