import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Navbar.css";

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  onLanguageToggle: () => void;
  currentLanguage: string;
}

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Specialty", href: "#specialty" },
  { name: "Gallery", href: "#gallery" },
  { name: "Consultation", href: "#consultation" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC<NavbarProps> = ({ onLanguageToggle, currentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-medical-dark">
          Dr. John Smith
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex md:items-center space-x-6">
          {navLinks.map((link) => (
            <div className="hoverable-div" key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-medical transition-colors"
              >
                {link.name}
              </a>
            </div>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={onLanguageToggle}
            aria-label="Toggle language"
            className="ml-2"
          >
            <Globe className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium text-gray-700">
            {currentLanguage === "en" ? "EN" : "বাং"}
          </span>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div className="hoverable-div" key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-medical py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </div>
            ))}
            <div className="flex items-center space-x-2 pt-2">
              <Button
                variant="outline"
                size="icon"
                onClick={onLanguageToggle}
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-gray-700">
                {currentLanguage === "en" ? "English" : "বাংলা"}
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
