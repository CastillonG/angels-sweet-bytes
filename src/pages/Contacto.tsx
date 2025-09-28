import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would send to your email endpoint
    toast({
      title: "Mensaje enviado",
      description: "Hemos recibido tu mensaje. Te responderemos pronto.",
    });
    
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: ""
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre Angel's Desserts.");
    const whatsappNumber = "5216622000000"; // Replace with actual number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Estamos aquí para ayudarte
          </Badge>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
            Contacto
          </h1>
          <p className="font-poppins text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros productos, pedidos especiales o quieres ser distribuidor? 
            No dudes en contactarnos. Estamos listos para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair flex items-center gap-2">
                  <Phone className="h-5 w-5 text-accent" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-poppins font-medium text-foreground">Ubicación</p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      Hermosillo, Sonora<br />
                      México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-poppins font-medium text-foreground">Teléfono</p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      +52 662 200 0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-poppins font-medium text-foreground">Email</p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      hola@angelsdesserts.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-poppins font-medium text-foreground">Horarios</p>
                    <div className="font-poppins text-sm text-muted-foreground space-y-1">
                      <p>Lun - Vie: 9:00 AM - 8:00 PM</p>
                      <p>Sábados: 10:00 AM - 6:00 PM</p>
                      <p>Domingos: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair">Contacto Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full font-poppins font-medium"
                >
                  <a href="mailto:hola@angelsdesserts.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair">Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
                <p className="font-poppins text-sm text-muted-foreground mt-3">
                  Mantente al día con nuestras novedades y sabores de temporada.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Envíanos un Mensaje</CardTitle>
                <p className="font-poppins text-muted-foreground">
                  Completa el formulario y te responderemos lo antes posible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="font-poppins">Nombre completo</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        required
                        className="font-poppins"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-poppins">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="font-poppins"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefono" className="font-poppins">Teléfono (opcional)</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        className="font-poppins"
                      />
                    </div>
                    <div>
                      <Label htmlFor="asunto" className="font-poppins">Asunto</Label>
                      <Input
                        id="asunto"
                        value={formData.asunto}
                        onChange={(e) => handleInputChange('asunto', e.target.value)}
                        required
                        className="font-poppins"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="font-poppins">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange('mensaje', e.target.value)}
                      required
                      className="font-poppins min-h-[120px]"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-card mt-6">
              <CardHeader>
                <CardTitle className="font-playfair">Nuestra Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="font-poppins font-medium text-foreground">Mapa interactivo</p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      Hermosillo, Sonora, México
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="font-playfair font-bold text-3xl text-center text-foreground mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <h4 className="font-playfair font-semibold text-lg text-foreground mb-3">
                  ¿Hacen envíos?
                </h4>
                <p className="font-poppins text-muted-foreground text-sm">
                  Sí, realizamos entregas a domicilio en Hermosillo y alrededores. 
                  El costo de envío se calcula según la distancia.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="pt-6">
                <h4 className="font-playfair font-semibold text-lg text-foreground mb-3">
                  ¿Cuánto duran frescos?
                </h4>
                <p className="font-poppins text-muted-foreground text-sm">
                  Nuestros brownies se mantienen frescos hasta 5 días a temperatura ambiente 
                  y hasta 2 semanas refrigerados.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="pt-6">
                <h4 className="font-playfair font-semibold text-lg text-foreground mb-3">
                  ¿Pedidos especiales?
                </h4>
                <p className="font-poppins text-muted-foreground text-sm">
                  Sí, aceptamos pedidos especiales para eventos. Contactanos con al menos 
                  48 horas de anticipación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacto;