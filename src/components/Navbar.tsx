import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/jollof-logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Jollof Creative" className="h-12 lg:h-14" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("/")}
              className={`transition-colors font-medium ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className={`transition-colors font-medium ${
                isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("/services")}
              className={`transition-colors font-medium ${
                isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation("/portfolio")}
              className={`transition-colors font-medium ${
                isActive("/portfolio") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavigation("/reviews")}
              className={`transition-colors font-medium ${
                isActive("/reviews") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Reviews
            </button>
            <Button
              onClick={() => handleNavigation("/contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("/")}
                className={`transition-colors font-medium text-left ${
                  isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className={`transition-colors font-medium text-left ${
                  isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigation("/services")}
                className={`transition-colors font-medium text-left ${
                  isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("/portfolio")}
                className={`transition-colors font-medium text-left ${
                  isActive("/portfolio") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => handleNavigation("/reviews")}
                className={`transition-colors font-medium text-left ${
                  isActive("/reviews") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Reviews
              </button>
              <Button
                onClick={() => handleNavigation("/contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
