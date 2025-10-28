import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import TermsOfPrivacy from "./pages/TermsOfPrivacy";
import CalculadoraROI from "./pages/CalculadoraROI";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/terms-of-privacy" element={<TermsOfPrivacy />} />
            <Route path="/calculator" element={<CalculadoraROI />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculadora-roi" element={<Navigate to="/calculator" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
