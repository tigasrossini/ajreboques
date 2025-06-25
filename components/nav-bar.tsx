import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Nosso trabalho", href: "/trabalho" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contato", href: "/contato" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full h-[100px] bg-black relative">
      <div className="h-full flex items-center justify-between px-4 md:px-8 lg:px-16">

        <div className="flex-shrink-0">
          <div className="w-[90px] h-[71px] bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4d31814a4feb4dcc6db6f719980ef6990ae8782"
              alt="Logo"
              className="w-[77px] h-[62px] object-contain"
            />
          </div>
        </div>
 
  
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white font-bold text-lg tracking-[-0.1px] hover:text-gray-300 transition-colors duration-200"
              style={{
                fontFamily:
                  "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Register Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Register Button */}
          <Button
            className="bg-[#C41111] hover:bg-[#A30E0E] text-white font-bold text-lg border border-white rounded-[11px] px-6 py-2 h-[41px] tracking-[-0.1px] transition-colors duration-200"
            style={{
              fontFamily:
                "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Registre-se
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-gray-300 transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            type="button"
          >
            <svg
              className={cn("w-6 h-6 transition-transform duration-200", {
                "rotate-90": isMobileMenuOpen,
              })}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 transition-all duration-300 ease-in-out z-50",
          {
            "opacity-100 visible": isMobileMenuOpen,
            "opacity-0 invisible": !isMobileMenuOpen,
          },
        )}
      >
        <nav className="flex flex-col space-y-1 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white font-bold text-lg tracking-[-0.1px] hover:text-gray-300 hover:bg-gray-900 px-4 py-3 rounded-lg transition-all duration-200"
              style={{
                fontFamily:
                  "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;