import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ui/product-card";
import { baseProducts, seasonalProducts } from "@/data/products";

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'base' | 'temporada'>('base');

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
            Nuestro Menú
          </h1>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de brownies artesanales. Menú base disponible todo el año y ediciones especiales de temporada.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-card rounded-lg p-1 shadow-soft">
            <Button
              variant={activeTab === 'base' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('base')}
              className="font-poppins font-medium"
            >
              Menú Base
              <Badge variant="secondary" className="ml-2">
                {baseProducts.length}
              </Badge>
            </Button>
            <Button
              variant={activeTab === 'temporada' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('temporada')}
              className="font-poppins font-medium"
            >
              Temporada
              <Badge variant="secondary" className="ml-2">
                {seasonalProducts.length}
              </Badge>
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'base' && baseProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {activeTab === 'temporada' && (
            seasonalProducts.length > 0 ? (
              seasonalProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-card rounded-lg p-8 shadow-soft max-w-md mx-auto">
                  <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
                    Próximamente
                  </h3>
                  <p className="font-poppins text-muted-foreground mb-6">
                    Estamos preparando deliciosas ediciones especiales para ti. ¡Mantente atento!
                  </p>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    Temporada no activa
                  </Badge>
                </div>
              </div>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-hero rounded-lg">
          <h2 className="font-playfair font-bold text-2xl text-foreground mb-4">
            ¿Ya elegiste tus favoritos?
          </h2>
          <p className="font-poppins text-muted-foreground mb-6">
            Procede a realizar tu pedido o explora nuestras opciones de mayoreo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium">
              <a href="/domicilio">Finalizar pedido</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-poppins font-medium">
              <a href="/mayoreo">Ver mayoreo</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;