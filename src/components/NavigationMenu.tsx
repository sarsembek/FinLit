import * as React from "react";

type MenuItemProps = {
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ label }) => (
  <button
    className="self-stretch my-auto transition-colors duration-200 ease-in-out hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 active:text-green-800"
    tabIndex={0}
  >
    {label}
  </button>
);

const menuItems = ["Why Us", "Services", "Our Process", "Payments", "FAQs"];

const NavigationMenu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-wrap gap-10 justify-between items-center max-w-full text-base font-bold text-white w-[1240px] relative z-50">
      <div className="flex gap-3 justify-center items-center self-stretch my-auto text-xl tracking-tight leading-tight whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/b9848872d89ddcb20c7b78d07c28f45c2c542649735934774886991a4a950d2b?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
          alt="FinLit.AI Logo"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <h1 className="self-stretch my-auto">FinLit.AI</h1>
      </div>

      <nav className="hidden md:flex gap-8 justify-center items-center self-stretch my-auto font-medium min-w-[240px]">
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item} />
        ))}
      </nav>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden p-2"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-gray-800 p-4 md:hidden transition-transform transform duration-300 ease-in-out z-40">
          {menuItems.map((item, index) => (
            <MenuItem key={index} label={item} />
          ))}
          <button
            className="self-stretch my-4 transition-colors duration-200 ease-in-out hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 active:text-green-800"
            tabIndex={0}
          >
            Contact
          </button>
        </nav>
      )}

      <button
        className="gap-2.5 hidden md:flex self-stretch px-8 py-3 my-auto text-green-600 whitespace-nowrap border-2 border-green-600 border-solid rounded-[64px] transition-colors duration-200 ease-in-out hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 active:bg-green-700 active:text-white"
        tabIndex={0}
      >
        Contact
      </button>
    </header>
  );
};

export default NavigationMenu;
