import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const sections = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="sticky top-0 z-50">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-md border-b border-white/20 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Portfolio
              </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 text-gray-500 dark:text-gray-300 font-medium">
              {sections.map((section) => (
                <li key={section}>
                  <Link
                    to={section.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    activeClass="text-purple-600 dark:text-purple-400"
                    className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer capitalize"
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="text-xl p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-800" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-xl p-2 rounded-md hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-gray-800 dark:text-gray-300" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-800 dark:text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[64px] left-0 w-full bg-gray-200 dark:bg-gray-950 z-40 overflow-hidden transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 dark:text-gray-300 font-medium">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer capitalize"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </div>
  );
}

export default Navbar;
