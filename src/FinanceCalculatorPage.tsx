import { useNavigate } from "react-router-dom";
import FinanceCalculator from "./components/FinanceCalculator";
import NavigationMenu from "./components/NavigationMenu";

const FinanceCalculatorPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/"); // Adjust if the homepage route is different
  };

  return (
   <main
     className="relative flex flex-col pb-2.5 bg-zinc-900"
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
        
        {/* Transparent Back Arrow Button */}
        <button
          onClick={goToHomePage}
          className="fixed md:top-9 left-8 top-20 text-white bg-transparent border border-white rounded-full p-2 hover:bg-white hover:bg-opacity-20 transition-all"
          aria-label="Back to Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <FinanceCalculator />
      </div>
    </main>
  );
};

export default FinanceCalculatorPage;
