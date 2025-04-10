import { useState } from "react";
import AccessibilityMenu from "./AccessibilityMenu";
import { Link } from "wouter";

const Header = () => {
  const [isAccessibilityMenuOpen, setIsAccessibilityMenuOpen] = useState(false);

  const toggleAccessibilityMenu = () => {
    setIsAccessibilityMenuOpen(!isAccessibilityMenuOpen);
  };

  // Close menu if clicked outside
  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#accessibilityMenu') && !target.closest('#toggleAccessibility')) {
      setIsAccessibilityMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-primary text-2xl">📊</span>
            <h1 className="text-xl font-semibold text-gray-800">Enneagramma Test</h1>
          </div>
        </Link>
        <div className="flex items-center">
          <button 
            id="toggleAccessibility" 
            className="p-2 rounded-full hover:bg-gray-100" 
            aria-label="Opzioni di accessibilità"
            onClick={toggleAccessibilityMenu}
          >
            <span className="text-gray-600">⚙️</span>
          </button>
        </div>
      </div>

      {/* Accessibility Menu (conditionally rendered) */}
      {isAccessibilityMenuOpen && (
        <div onClick={handleClickOutside}>
          <AccessibilityMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
