import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2, MessageCircle, Mail } from "lucide-react";

const Domicilio = () => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    direccion: "",
    referencia: "",
    colonia: "",
    cp: "",
    fecha: "",
    horario: "",
    metodoPago: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega productos antes de continuar",
        variant: "destructive"
      });
      return;
    }

    const orderDetails = items.map(item => 
      `• ${item.quantity}x ${item.name} - $${item.price * item.quantity}`
    ).join('\n');

    const message = `¡Hola! Me gustaría hacer un pedido:

📋 *PEDIDO:*
${orderDetails}

💰 *Total estimado:* $${total}

👤 *Datos de entrega:*
• Nombre: ${formData.nombre}
• WhatsApp: ${formData.whatsapp}
• Dirección: ${formData.direccion}
• Referencia: ${formData.referencia}
• Colonia/CP: ${formData.colonia}, ${formData.cp}
• Fecha: ${formData.fecha}
• Horario: ${formData.horario}
• Método de pago: ${formData.metodoPago}

¡Gracias!`;

    const whatsappNumber = "5216622000000"; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleEmailSubmit = () => {
    if (items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega productos antes de continuar",
        variant: "destructive"
      });
      return;
    }

    // Here you would send to your email endpoint
    toast({
      title: "Pedido enviado",
      description: "Hemos recibido tu pedido. Te contactaremos pronto para confirmar los detalles.",
    });
    
    clearCart();
    setFormData({
      nombre: "",
      whatsapp: "",
      direccion: "",
      referencia: "",
      colonia: "",
      cp: "",
      fecha: "",
      horario: "",
      metodoPago: ""
    });
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-playfair font-bold text-3xl text-foreground mb-4">
              Tu carrito está vacío
            </h1>
            <p className="font-poppins text-muted-foreground mb-8">
              Explora nuestro menú y agrega tus brownies favoritos.
            </p>
            <Button asChild size="lg" className="bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium">
              <Link to="/menu">Ver menú</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-playfair font-bold text-4xl text-foreground mb-4">
            Finalizar Pedido
          </h1>
          <p className="font-poppins text-muted-foreground">
            Completa tus datos para procesar tu pedido a domicilio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-playfair flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Resumen del pedido
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-poppins font-medium text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      ${item.price} c/u
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-7 w-7 p-0"
                      >
                        -
                      </Button>
                      <span className="font-poppins font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-7 w-7 p-0"
                      >
                        +
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-poppins font-semibold text-foreground">
                        ${item.price * item.quantity}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="h-auto p-1 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <span className="font-playfair font-semibold text-lg">Total:</span>
                <span className="font-playfair font-bold text-2xl text-accent">${total}</span>
              </div>
              
              <div className="bg-muted/30 p-3 rounded-lg">
                <p className="text-sm font-poppins text-muted-foreground">
                  <strong>Zonas de entrega:</strong> Hermosillo y alrededores. 
                  El costo de envío se confirmará al procesar tu pedido.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-playfair">Datos de entrega</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre" className="font-poppins">Nombre completo</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    className="font-poppins"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="font-poppins">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="662 123 4567"
                    className="font-poppins"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="direccion" className="font-poppins">Dirección completa</Label>
                <Textarea
                  id="direccion"
                  value={formData.direccion}
                  onChange={(e) => handleInputChange('direccion', e.target.value)}
                  placeholder="Calle, número, colonia..."
                  className="font-poppins"
                />
              </div>

              <div>
                <Label htmlFor="referencia" className="font-poppins">Referencias (opcional)</Label>
                <Input
                  id="referencia"
                  value={formData.referencia}
                  onChange={(e) => handleInputChange('referencia', e.target.value)}
                  placeholder="Casa color azul, entre calle X y Y..."
                  className="font-poppins"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="colonia" className="font-poppins">Colonia</Label>
                  <Input
                    id="colonia"
                    value={formData.colonia}
                    onChange={(e) => handleInputChange('colonia', e.target.value)}
                    className="font-poppins"
                  />
                </div>
                <div>
                  <Label htmlFor="cp" className="font-poppins">Código Postal</Label>
                  <Input
                    id="cp"
                    value={formData.cp}
                    onChange={(e) => handleInputChange('cp', e.target.value)}
                    className="font-poppins"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fecha" className="font-poppins">Fecha de entrega</Label>
                  <Input
                    id="fecha"
                    type="date"
                    value={formData.fecha}
                    onChange={(e) => handleInputChange('fecha', e.target.value)}
                    className="font-poppins"
                  />
                </div>
                <div>
                  <Label htmlFor="horario" className="font-poppins">Horario preferido</Label>
                  <Select onValueChange={(value) => handleInputChange('horario', value)}>
                    <SelectTrigger className="font-poppins">
                      <SelectValue placeholder="Selecciona horario" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9-12">9:00 AM - 12:00 PM</SelectItem>
                      <SelectItem value="12-15">12:00 PM - 3:00 PM</SelectItem>
                      <SelectItem value="15-18">3:00 PM - 6:00 PM</SelectItem>
                      <SelectItem value="18-21">6:00 PM - 9:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="metodoPago" className="font-poppins">Método de pago</Label>
                <Select onValueChange={(value) => handleInputChange('metodoPago', value)}>
                  <SelectTrigger className="font-poppins">
                    <SelectValue placeholder="Selecciona método de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="efectivo">Efectivo</SelectItem>
                    <SelectItem value="transferencia">Transferencia bancaria</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Button
                  onClick={generateWhatsAppMessage}
                  className="bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Confirmar por WhatsApp
                </Button>
                <Button
                  onClick={handleEmailSubmit}
                  variant="outline"
                  className="font-poppins font-medium"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar solicitud
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Domicilio;