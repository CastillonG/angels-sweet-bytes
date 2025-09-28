import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { seasonalProducts } from "@/data/products";
import { Calendar, Star, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Temporada = () => {
  const [isSeasonActive] = useState(false); // This would be controlled by admin

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Ediciones Especiales
          </Badge>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
            Sabores de Temporada
          </h1>
          <p className="font-poppins text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestras creaciones especiales disponibles por tiempo limitado. 
            Sabores únicos inspirados en fechas especiales y tendencias del momento.
          </p>
        </div>

        {/* Status Banner */}
        <div className="bg-gradient-hero rounded-lg p-8 mb-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center shadow-soft">
              {isSeasonActive ? (
                <Star className="h-8 w-8 text-accent" />
              ) : (
                <Calendar className="h-8 w-8 text-muted-foreground" />
              )}
            </div>
          </div>
          
          {isSeasonActive ? (
            <>
              <h2 className="font-playfair font-bold text-2xl text-foreground mb-3">
                ¡Temporada Activa!
              </h2>
              <p className="font-poppins text-muted-foreground mb-6">
                Estos sabores especiales están disponibles por tiempo limitado. ¡No te los pierdas!
              </p>
              <Badge className="bg-accent text-accent-foreground">
                Disponible ahora
              </Badge>
            </>
          ) : (
            <>
              <h2 className="font-playfair font-bold text-2xl text-foreground mb-3">
                Próximamente
              </h2>
              <p className="font-poppins text-muted-foreground mb-6">
                Estamos preparando deliciosas ediciones especiales para ti. 
                Mantente atento a nuestras redes sociales y sé el primero en probar nuestras nuevas creaciones.
              </p>
              <Badge variant="outline" className="bg-muted/30 text-muted-foreground border-muted">
                Temporada no activa
              </Badge>
            </>
          )}
        </div>

        {/* Products or Coming Soon */}
        {isSeasonActive && seasonalProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {seasonalProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-warm rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="font-playfair font-bold text-2xl text-card mb-4">
                  ¿Ya probaste todos los sabores?
                </h3>
                <p className="font-poppins text-card/90 mb-6">
                  Completa tu experiencia explorando nuestro menú base, disponible todo el año.
                </p>
                <Button asChild size="lg" variant="secondary" className="font-poppins font-medium">
                  <Link to="/menu">Ver menú completo</Link>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              {/* Coming Soon Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-foreground mb-2">
                    Sabores Únicos
                  </h4>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Creaciones especiales que no encontrarás en otro lugar
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-foreground mb-2">
                    Fechas Especiales
                  </h4>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Sabores inspirados en festividades y temporadas del año
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-foreground mb-2">
                    Tiempo Limitado
                  </h4>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Disponibles solo durante períodos específicos del año
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 shadow-card">
                <h3 className="font-playfair font-bold text-xl text-foreground mb-4">
                  Mantente Informado
                </h3>
                <p className="font-poppins text-muted-foreground mb-6">
                  Síguenos en redes sociales o suscríbete a nuestro newsletter para ser el primero en conocer 
                  cuando lancemos nuevos sabores de temporada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium">
                    <Link to="/contacto">Contactanos</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="font-poppins font-medium">
                    <Link to="/menu">Explorar menú base</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Temporada;