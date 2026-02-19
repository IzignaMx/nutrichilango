
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "@/components/theme-context";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import DishesComparison from "./pages/DishesComparison";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import DataSources from "./pages/DataSources";
import Guide from "./pages/Guide";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import PantryCreator from "./pages/PantryCreator";
import BusinessDirectory from "./pages/BusinessDirectory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <SonnerToaster />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col w-full" id="top">
            <Header />
            <main className="flex-1 w-full">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dishes-comparison" element={<DishesComparison />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/data-sources" element={<DataSources />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/despensa" element={<PantryCreator />} />
                <Route path="/emprendimientos" element={<BusinessDirectory />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
