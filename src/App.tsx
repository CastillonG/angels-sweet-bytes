import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Domicilio from "./pages/Domicilio";
import Mayoreo from "./pages/Mayoreo";
import Temporada from "./pages/Temporada";
import Contacto from "./pages/Contacto";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background font-poppins">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/domicilio" element={<Domicilio />} />
            <Route path="/mayoreo" element={<Mayoreo />} />
            <Route path="/temporada" element={<Temporada />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
