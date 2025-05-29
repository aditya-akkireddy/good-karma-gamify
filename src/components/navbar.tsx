import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useTokens } from "@/contexts/TokenContext";
import { Dialog } from "@headlessui/react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { isLoggedIn, login, logout, tokens } = useTokens();
  const location = useLocation();
  const navigate = useNavigate();

  // Simulate login API call
  const loginUser = async (email: string, password: string) => {
    // This is where you'd replace with actual API call
    return new Promise<{ success: boolean; tokens?: string; message?: string }>(
      (resolve) => {
        setTimeout(() => {
          if (email === "user@example.com" && password === "password") {
            resolve({ success: true, tokens: "100" }); // example tokens
          } else {
            resolve({ success: false, message: "Invalid email or password." });
          }
        }, 1500);
      }
    );
  };

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Validation Error",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await loginUser(email, password);
      setIsLoading(false);
      if (response.success) {
        login(response.tokens ?? "");
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        setIsLoginModalOpen(false);
        setEmail("");
        setPassword("");
        navigate("/"); // Redirect after login if you want
      } else {
        toast({
          title: "Login Failed",
          description: response.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been logged out.",
    });
    navigate("/"); // Optionally redirect after logout
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

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/good-deeds" className={`text-sm ${isActive("/good-deeds")}`}>
            Good Deeds
          </Link>
          <Link to="/rewards" className={`text-sm ${isActive("/rewards")}`}>
            Rewards
          </Link>
          <Link to="/about" className={`text-sm ${isActive("/about")}`}>
            About
          </Link>

          {isLoggedIn && (
            <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full flex items-center gap-1">
              <span className="font-medium">{tokens}</span>
            </div>
          )}

          <ThemeToggle />
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg"
            >
              Login
            </button>
          )}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-sm ${isActive("/")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/good-deeds"
              className={`text-sm ${isActive("/good-deeds")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Good Deeds
            </Link>
            <Link
              to="/rewards"
              className={`text-sm ${isActive("/rewards")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards
            </Link>
            <Link
              to="/about"
              className={`text-sm ${isActive("/about")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {isLoggedIn && (
              <div className="flex items-center px-2 py-2">
                <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full flex items-center gap-1">
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
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg"
                >
                  Login
                </button>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Login Modal */}
      <Dialog open={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 dark:bg-background border border-border">
            <Dialog.Title className="text-lg font-medium mb-4">Login</Dialog.Title>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-muted text-muted-foreground"
                disabled={isLoading}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-muted text-muted-foreground"
                disabled={isLoading}
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-muted-foreground text-muted-foreground"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogin}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}
