import { HeroSection } from "./HeroSection";
import { CardPreview } from "./CardPreview";

export function CreditCardDesigner() {
  return (
    <main className="mt-32 pb-7 w-full flex justify-center">
      <div className="flex gap-16 max-md:flex-col items-center max-w-screen-lg">
        <HeroSection />
        <CardPreview />
      </div>
    </main>
  );
}
