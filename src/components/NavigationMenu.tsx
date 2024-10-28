import * as React from "react";
import { useNavigate } from "react-router-dom";

type MenuItemProps = {
  label: string;
  href: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => (
  <a
    href={href}
    className="self-stretch my-auto transition-colors duration-200 ease-in-out hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 active:text-green-800"
  >
    {label}
  </a>
);

const menuItems = [
  { label: "Why Us", href: "#whyuss" },
  { label: "Courses", href: "#courses" },
  { label: "Our Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
];

const NavigationMenu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const redirectToHome = () => {
    navigate("/");
  };

  React.useEffect(() => {
    return () => {
      // Re-enable scroll if component unmounts with menu open
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <header className="flex px-8 flex-wrap gap-12 justify-between items-center max-w-full text-base font-bold text-white w-[1240px] relative z-50">
      {/* Logo with Redirect to Home */}
      <div
        onClick={redirectToHome}
        className="flex gap-3 justify-center items-center self-stretch my-auto text-xl tracking-tight leading-tight whitespace-nowrap cursor-pointer"
      >
        <img
          loading="lazy"
          src="/logo.svg"
          alt="FinLit.AI Logo"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <h1 className="self-stretch my-auto">FinLit.AI</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 justify-center items-center self-stretch my-auto font-medium min-w-[240px]">
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item.label} href={item.href} />
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
        <nav className="fixed inset-0 bg-gray-950 bg-opacity-90 p-6 md:hidden flex flex-col transition-transform transform duration-300 ease-in-out z-40">
          <button
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            className="self-end mb-4 p-2 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {menuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} href={item.href} />
          ))}
          <div className="flex items-start gap-4 mt-6">
            <button className="self-stretch py-3 text-center transition-colors duration-200 ease-in-out text-green-600 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
              Login
            </button>
            <button className="self-stretch py-3 text-center transition-colors duration-200 ease-in-out text-green-600 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
              Signup
            </button>
          </div>
        </nav>
      )}

      {/* Desktop Login and Signup Buttons */}
      <div className="hidden md:flex gap-6">
        <button
          className="px-5 py-2 text-green-600 transition-colors duration-200 ease-in-out hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          tabIndex={0}
        >
          Login
        </button>
        <button
          className="px-5 py-2 text-green-600 border-2 border-green-600 rounded-3xl transition-colors duration-200 ease-in-out hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          tabIndex={0}
        >
          Signup
        </button>
      </div>
    </header>
  );
};

export default NavigationMenu;
