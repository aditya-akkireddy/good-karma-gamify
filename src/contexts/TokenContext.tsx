import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { auth } from "@/firebase"; // Adjust path if needed
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

type TokenContextType = {
  tokens: number;
  addTokens: (amount: number) => void;
  deductTokens: (amount: number) => void;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  user: User | null;
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export function TokenProvider({ children }: { children: ReactNode }) {
  const [tokens, setTokens] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        setIsLoggedIn(true);
        const storedTokens = localStorage.getItem("userTokens");
        setTokens(storedTokens ? parseInt(storedTokens) : 50); // default 50 tokens
      } else {
        setIsLoggedIn(false);
        setTokens(0);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("userTokens", tokens.toString());
    }
  }, [tokens, isLoggedIn]);

  const addTokens = (amount: number) => {
    setTokens((prev) => prev + amount);
  };

  const deductTokens = (amount: number) => {
    setTokens((prev) => Math.max(0, prev - amount));
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    setTokens(0);
    localStorage.removeItem("userTokens");
  };

  return (
    <TokenContext.Provider
      value={{ tokens, addTokens, deductTokens, isLoggedIn, login, logout, user }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useTokens() {
  const context = useContext(TokenContext);
  if (!context) throw new Error("useTokens must be used within a TokenProvider");
  return context;
}
