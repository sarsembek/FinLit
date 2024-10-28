import * as React from "react";
// import { StoreButton } from "./StoreButton";

// const storeButtons = [
//   {
//     imageSrc:
//       "https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/0b6d17887cb9433c59e68fb18848b3aa0bffb6cb1ed9c09c97bf62cf77f35f5f?apiKey=9fef530e97fe4035b3ccf762ae2eae01&",
//     imageAlt: "Download on App Store",
//     width: "w-[155px]",
//     imageWidth: "w-[123px]",
//     imageAspect: "3.85",
//   },
//   {
//     imageSrc:
//       "https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/c9a957e3d83f2923e230f257af167d73bb0795f7c79fac296a2c6540737a8951?apiKey=9fef530e97fe4035b3ccf762ae2eae01&",
//     imageAlt: "Get it on Google Play",
//     width: "w-[170px]",
//     imageWidth: "w-[138px]",
//     imageAspect: "4.31",
//   },
// ];

export const CTASection: React.FC = () => {
  return (
    <section
      data-layername="cta"
      className="overflow-hidden self-center w-full mt-32 max-w-[1240px] max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col">
        <article className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <div
            data-layername="frame"
            className="flex gap-4 items-start self-stretch my-auto mr-0 rounded-[48px] max-md:mt-10 max-md:max-w-full"
          >
            <div
              data-layername="frame"
              className="flex flex-col min-w-[240px] w-[605px]"
            >
              <header
                data-layername="group"
                className="flex flex-col items-start pr-20 w-full rounded-none max-md:pr-5"
              >
                <h1
                  data-layername="easyWayToManageYourFinances"
                  className="text-5xl font-bold tracking-tight text-white leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]"
                >
                  Easy Way to manage your finances
                </h1>
                {/* <p
                  data-layername="easyToUseMobileAppThatSupportOnAndroidAndIos"
                  className="mt-5 text-lg tracking-tight leading-none text-zinc-400 max-md:max-w-full"
                >
                  Easy to use mobile app that support on android and ios.
                </p> */}
              </header>
              {/* <div
                data-layername="frame"
                className="flex gap-6 items-start self-start mt-8"
              >
                {storeButtons.map((button, index) => (
                  <StoreButton key={index} {...button} />
                ))}
              </div> */}
            </div>
          </div>
        </article>
        <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/b0e0a502f803b69ce6ef8870bd0b1e2f4c22594eb359d04724e2f9c734c2d396?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
            alt="Mobile app interface showcase"
            className="object-contain grow w-full aspect-[1.28] max-md:max-w-full"
          />
        </aside>
      </div>
    </section>
  );
};
