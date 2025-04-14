
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useTokens } from "@/contexts/TokenContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const { isLoggedIn, login, logout } = useTokens();

  const handleLogin = () => {
    login();
    toast({
      title: "Login Successful",
      description: "You have been logged in successfully.",
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been logged out.",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              Deed<span className="text-accent">It</span>Up
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a href="#rewards" className="text-sm font-medium hover:text-primary">
            Rewards
          </a>
          <a href="#leaderboard" className="text-sm font-medium hover:text-primary">
            Leaderboard
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary">
            About
          </a>
          <ThemeToggle />
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors"
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col space-y-4">
            <a
              href="/"
              className="text-sm font-medium hover:text-primary px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#rewards"
              className="text-sm font-medium hover:text-primary px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards
            </a>
            <a
              href="#leaderboard"
              className="text-sm font-medium hover:text-primary px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="flex items-center justify-between px-2 py-2">
              <ThemeToggle />
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg transition-colors"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleLogin();
                    setIsMenuOpen(false);
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
