import { Banner } from "./components/banner/Banner";
import { CreditCardSection } from "./components/creditCard/CreditCardSection";
import { CTASection } from "./components/cta/CTASection";
import { FAQ } from "./components/faq/FAQ";
import { Features } from "./components/features/Features";
import { Footer } from "./components/footer/Footer";
import VideoGallery from "./components/VideoGallery";
import NavigationMenu from "./components/navbar/NavigationMenu";
import { TestimonialSection } from "./components/testimonials/TestimonialSection";
import { useNavigate } from "react-router-dom"; 
import { WhyUs } from "./components/WhyUs";


const HomePage = () => {
  const navigate = useNavigate();

  const redirectToCalculator = () => {
    navigate("/finance-calculator"); // Updated path for redirection
  };

  return (
    <main
      className="relative flex overflow-hidden flex-col pb-2.5 bg-zinc-900"
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        margin: "0",
      }}
    >
      <div className="relative flex flex-col items-center w-full pt-8">
        <NavigationMenu />
        <Banner />
        <WhyUs />
        <Features />
        <CreditCardSection />
        <TestimonialSection />
        <VideoGallery />
        <FAQ />
        <CTASection />
        <Footer />

        {/* Sticky Finance Calculator Button */}
        <button
          onClick={redirectToCalculator}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
          aria-label="Go to Finance Calculator"
          style={{
            minWidth: "200px", // Adjust for text width
            height: "56px",
          }}
        >
          <span className="mr-2">Finance Calculator</span>
          <img
            src="/calculator.svg"
            alt="Calculator Icon"
            style={{ width: "24px", height: "24px" }}
          />
        </button>
      </div>
    </main>
  );
};

export default HomePage;
