
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useTokens } from "@/contexts/TokenContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const { isLoggedIn, login, logout, tokens } = useTokens();
  const location = useLocation();
  const navigate = useNavigate();

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

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-medium" : "hover:text-primary";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              Deed<span className="text-accent">It</span>Up
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/good-deeds" className={`text-sm ${isActive('/good-deeds')}`}>
            Good Deeds
          </Link>
          <Link to="/rewards" className={`text-sm ${isActive('/rewards')}`}>
            Rewards
          </Link>
          <Link to="/about" className={`text-sm ${isActive('/about')}`}>
            About
          </Link>
          
          {isLoggedIn && (
            <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
              <span className="font-medium">{tokens}</span>
            </div>
          )}
          
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
            <Link
              to="/"
              className={`text-sm ${isActive('/')} px-2 py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/good-deeds"
              className={`text-sm ${isActive('/good-deeds')} px-2 py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Good Deeds
            </Link>
            <Link
              to="/rewards"
              className={`text-sm ${isActive('/rewards')} px-2 py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards
            </Link>
            <Link
              to="/about"
              className={`text-sm ${isActive('/about')} px-2 py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {isLoggedIn && (
              <div className="flex items-center px-2 py-2">
                <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                  <span className="font-medium">{tokens}</span>
                </div>
              </div>
            )}
            
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
