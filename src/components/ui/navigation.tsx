import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
// Use the public folder for the logo (place `logo.png` in the `public/` directory)

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { items } = useCart();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/menu", label: "Menú" },
    { href: "/domicilio", label: "Pedidos" },
    { href: "/mayoreo", label: "Mayoreo" },
    { href: "/temporada", label: "Temporada" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Angel's Desserts Logo" className="h-10 w-10" />
          <span className="font-playfair font-bold text-xl text-foreground">Angel's Desserts</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-poppins font-medium transition-colors hover:text-accent ${
                isActive(item.href) ? "text-accent" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Cart & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link to="/domicilio">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-poppins font-medium text-lg transition-colors hover:text-accent ${
                      isActive(item.href) ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;