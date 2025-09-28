import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, TrendingUp, Truck, Users, Award } from "lucide-react";

const Mayoreo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    negocio: "",
    contacto: "",
    correo: "",
    whatsapp: "",
    ciudad: "",
    volumen: "",
    sabores: "",
    frecuencia: "",
    comentarios: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    const message = `¡Hola! Estoy interesado en sus servicios de mayoreo:

🏢 *INFORMACIÓN DEL NEGOCIO:*
• Nombre: ${formData.negocio}
• Contacto: ${formData.contacto}
• Correo: ${formData.correo}
• WhatsApp: ${formData.whatsapp}
• Ciudad: ${formData.ciudad}

📊 *REQUERIMIENTOS:*
• Volumen estimado/semana: ${formData.volumen}
• Sabores de interés: ${formData.sabores}
• Frecuencia de pedidos: ${formData.frecuencia}

💬 *Comentarios adicionales:*
${formData.comentarios}

Me gustaría recibir más información sobre precios y condiciones.

¡Gracias!`;

    const whatsappNumber = "5216622000000"; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleEmailSubmit = () => {
    // Here you would send to your email endpoint or save to database
    toast({
      title: "Solicitud enviada",
      description: "Hemos recibido tu solicitud de mayoreo. Te contactaremos en las próximas 24 horas.",
    });
    
    setFormData({
      negocio: "",
      contacto: "",
      correo: "",
      whatsapp: "",
      ciudad: "",
      volumen: "",
      sabores: "",
      frecuencia: "",
      comentarios: ""
    });
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Ventas B2B
          </Badge>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
            Mayoreo para tu Negocio
          </h1>
          <p className="font-poppins text-lg text-muted-foreground max-w-3xl mx-auto">
            Integra los brownies de Angel's Desserts a tu cafetería, oficina o restaurante. 
            Ofrecemos precios especiales, entregas programadas y soporte personalizado.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center p-6 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
                Precios por Volumen
              </h3>
              <p className="font-poppins text-muted-foreground">
                Descuentos especiales basados en la cantidad de pedido. Márgenes atractivos para tu negocio.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
                Entregas Programadas
              </h3>
              <p className="font-poppins text-muted-foreground">
                Horarios fijos de entrega para mantener tu inventario siempre fresco y completo.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
                Material de Exhibición
              </h3>
              <p className="font-poppins text-muted-foreground">
                Displays, carteles y material promocional para maximizar la visibilidad en tu local.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-hero rounded-lg p-8 mb-12">
          <h2 className="font-playfair font-bold text-3xl text-center text-foreground mb-8">
            Casos de Uso Ideales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">Cafeterías</h4>
              <p className="font-poppins text-sm text-muted-foreground">
                Complementa tu oferta de bebidas con postres irresistibles
              </p>
            </div>
            <div className="text-center">
              <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">Oficinas</h4>
              <p className="font-poppins text-sm text-muted-foreground">
                Servicios de catering para reuniones y eventos corporativos
              </p>
            </div>
            <div className="text-center">
              <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">Restaurantes</h4>
              <p className="font-poppins text-sm text-muted-foreground">
                Amplía tu menú de postres con opciones premium y originales
              </p>
            </div>
            <div className="text-center">
              <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">Eventos</h4>
              <p className="font-poppins text-sm text-muted-foreground">
                Postres únicos para bodas, cumpleaños y celebraciones especiales
              </p>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <Card className="max-w-4xl mx-auto shadow-card">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-center">
              Solicitar Cotización
            </CardTitle>
            <p className="font-poppins text-muted-foreground text-center">
              Completa el formulario y te contactaremos con una propuesta personalizada
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="negocio" className="font-poppins">Nombre del negocio</Label>
                <Input
                  id="negocio"
                  value={formData.negocio}
                  onChange={(e) => handleInputChange('negocio', e.target.value)}
                  className="font-poppins"
                />
              </div>
              <div>
                <Label htmlFor="contacto" className="font-poppins">Persona de contacto</Label>
                <Input
                  id="contacto"
                  value={formData.contacto}
                  onChange={(e) => handleInputChange('contacto', e.target.value)}
                  className="font-poppins"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="correo" className="font-poppins">Correo electrónico</Label>
                <Input
                  id="correo"
                  type="email"
                  value={formData.correo}
                  onChange={(e) => handleInputChange('correo', e.target.value)}
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
              <Label htmlFor="ciudad" className="font-poppins">Ciudad</Label>
              <Input
                id="ciudad"
                value={formData.ciudad}
                onChange={(e) => handleInputChange('ciudad', e.target.value)}
                className="font-poppins"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="volumen" className="font-poppins">Volumen estimado por semana</Label>
                <Select onValueChange={(value) => handleInputChange('volumen', value)}>
                  <SelectTrigger className="font-poppins">
                    <SelectValue placeholder="Selecciona cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-20">1-20 piezas</SelectItem>
                    <SelectItem value="21-50">21-50 piezas</SelectItem>
                    <SelectItem value="51-100">51-100 piezas</SelectItem>
                    <SelectItem value="100+">Más de 100 piezas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="frecuencia" className="font-poppins">Frecuencia de pedidos</Label>
                <Select onValueChange={(value) => handleInputChange('frecuencia', value)}>
                  <SelectTrigger className="font-poppins">
                    <SelectValue placeholder="Selecciona frecuencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diario">Diario</SelectItem>
                    <SelectItem value="semanal">Semanal</SelectItem>
                    <SelectItem value="quincenal">Quincenal</SelectItem>
                    <SelectItem value="mensual">Mensual</SelectItem>
                    <SelectItem value="eventos">Solo para eventos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="sabores" className="font-poppins">Sabores de interés</Label>
              <Input
                id="sabores"
                value={formData.sabores}
                onChange={(e) => handleInputChange('sabores', e.target.value)}
                placeholder="Oreo, Brookie, Limón, Mazapán, M&M o todos"
                className="font-poppins"
              />
            </div>

            <div>
              <Label htmlFor="comentarios" className="font-poppins">Comentarios adicionales</Label>
              <Textarea
                id="comentarios"
                value={formData.comentarios}
                onChange={(e) => handleInputChange('comentarios', e.target.value)}
                placeholder="Cuéntanos más sobre tu negocio y necesidades específicas..."
                className="font-poppins"
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <Button
                onClick={generateWhatsAppMessage}
                className="bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar por WhatsApp
              </Button>
              <Button
                onClick={handleEmailSubmit}
                variant="outline"
                className="font-poppins font-medium"
              >
                <Mail className="mr-2 h-4 w-4" />
                Enviar a correo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Mayoreo;