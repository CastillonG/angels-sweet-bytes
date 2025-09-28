import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Truck, Gift } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
            Disponible todo el año
          </Badge>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight">
            Brownies claros, elegantes
            <br />
            <span className="text-accent">y deliciosos</span>
          </h1>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Angel's Desserts es una repostería juvenil e innovadora que transforma el brownie en una experiencia práctica, deliciosa y divertida. Menú base: Oreo, Brookie, Limón, Mazapán y M&M. Ediciones de temporada disponibles en fechas especiales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium">
              <Link to="/menu">
                Ver menú
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-poppins font-medium">
              <Link to="/domicilio">Pedir a domicilio</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-poppins font-medium">
              <Link to="/mayoreo">Cotizar mayoreo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-playfair font-bold text-3xl text-center text-foreground mb-12">
            ¿Por qué elegir Angel's Desserts?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
                  Prácticos para llevar
                </h3>
                <p className="font-poppins text-muted-foreground">
                  Empaque elegante y funcional, perfecto para cualquier ocasión y fácil de transportar.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
                  Sabores originales
                </h3>
                <p className="font-poppins text-muted-foreground">
                  Recetas únicas que combinan tradición e innovación para crear experiencias inolvidables.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
                  Listos para regalar
                </h3>
                <p className="font-poppins text-muted-foreground">
                  Presentación cuidada que los convierte en el regalo perfecto para cualquier momento especial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-3xl text-card mb-6">
            ¿Listo para probar nuestros brownies?
          </h2>
          <p className="font-poppins text-lg text-card/90 mb-8">
            Descubre por qué somos la opción favorita para postres únicos y deliciosos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-poppins font-medium">
              <Link to="/menu">Explorar menú</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/20 border-card text-card hover:bg-card hover:text-foreground font-poppins font-medium">
              <Link to="/contacto">Contactanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
