import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type TokenContextType = {
  tokens: number;
  addTokens: (amount: number) => void;
  deductTokens: (amount: number) => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export function TokenProvider({ children }: { children: ReactNode }) {
  const [tokens, setTokens] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");

    if (loginStatus === "true") {
      const storedTokens = localStorage.getItem("userTokens");
      setTokens(storedTokens ? parseInt(storedTokens) : 0);
    }
  }, []);

  // Update localStorage when tokens change
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("userTokens", tokens.toString());
    }
  }, [tokens, isLoggedIn]);

  const addTokens = (amount: number) => {
    setTokens(prev => prev + amount);
  };

  const deductTokens = (amount: number) => {
    setTokens(prev => Math.max(0, prev - amount)); // prevents going negative
  };

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <TokenContext.Provider value={{ tokens, addTokens, deductTokens, isLoggedIn, login, logout }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useTokens() {
  const context = useContext(TokenContext);
  if (!context) throw new Error("useTokens must be used within a TokenProvider");
  return context;
}
