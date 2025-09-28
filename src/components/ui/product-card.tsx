import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  available: boolean;
  category: 'base' | 'temporada';
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!product.available) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category
    }, quantity);
    
    toast({
      title: "Agregado al carrito",
      description: `${quantity} ${product.name} agregado${quantity > 1 ? 's' : ''} al carrito`,
    });
    
    setQuantity(1);
  };

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-square bg-gradient-hero relative overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-warm">
            <span className="text-4xl font-playfair font-bold text-card opacity-60">
              {product.name.charAt(0)}
            </span>
          </div>
        )}
        
        {!product.available && (
          <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Agotado
            </Badge>
          </div>
        )}
        
        {product.category === 'temporada' && product.available && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            Temporada
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-muted-foreground text-sm mb-3 font-poppins">
            {product.description}
          </p>
        )}
        <p className="font-poppins font-bold text-xl text-accent">
          ${product.price}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={!product.available || quantity <= 1}
            className="h-8 w-8 p-0"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="font-poppins font-medium w-8 text-center">
            {quantity}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(quantity + 1)}
            disabled={!product.available}
            className="h-8 w-8 p-0"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          disabled={!product.available}
          className="bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium"
        >
          Agregar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;