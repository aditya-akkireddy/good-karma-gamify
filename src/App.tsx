// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TokenProvider } from "./contexts/TokenContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GoodDeeds from "./pages/GoodDeeds";
import Rewards from "./pages/Rewards";
import About from "./pages/About";
import Events from "./pages/Events";
import Login from "./pages/Login"; 


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TokenProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/good-deeds" element={<GoodDeeds />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} /> {/* ✅ NEW ROUTE */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </BrowserRouter>
      </TokenProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
