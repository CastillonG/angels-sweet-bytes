import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Settings, 
  Package,
  Calendar,
  Shield
} from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);
  const [seasonActive, setSeasonActive] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const ADMIN_PASSWORD = "admin123"; // In real app, this would be env variable

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Acceso concedido",
        description: "Bienvenido al panel de administración",
      });
    } else {
      toast({
        title: "Contraseña incorrecta",
        description: "Verifica tu contraseña e intenta de nuevo",
        variant: "destructive"
      });
    }
  };

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "base",
    available: true
  });

  const handleSaveProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      toast({
        title: "Error",
        description: "Nombre y precio son requeridos",
        variant: "destructive"
      });
      return;
    }

    const product = {
      id: Date.now().toString(),
      ...newProduct,
      price: parseFloat(newProduct.price)
    };

    setProducts(prev => [...prev, product]);
    setNewProduct({
      name: "",
      price: "",
      description: "",
      category: "base",
      available: true
    });
    
    toast({
      title: "Producto guardado",
      description: "El producto ha sido agregado exitosamente",
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    toast({
      title: "Producto eliminado",
      description: "El producto ha sido eliminado",
    });
  };

  const toggleSeasonActive = () => {
    setSeasonActive(!seasonActive);
    toast({
      title: seasonActive ? "Temporada desactivada" : "Temporada activada",
      description: seasonActive ? 
        "Los productos de temporada ya no serán visibles" : 
        "Los productos de temporada ahora son visibles",
    });
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen py-8 px-4 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-card">
          <CardHeader className="text-center">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="font-playfair text-2xl">Panel de Administración</CardTitle>
            <p className="font-poppins text-muted-foreground">
              Ingresa la contraseña para acceder
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password" className="font-poppins">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="font-poppins"
              />
            </div>
            <Button 
              onClick={handleLogin}
              className="w-full bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium"
            >
              Acceder
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-playfair font-bold text-4xl text-foreground mb-4">
            Panel de Administración
          </h1>
          <p className="font-poppins text-muted-foreground">
            Gestiona productos, configuraciones y temporadas
          </p>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto lg:grid-cols-3 bg-card">
            <TabsTrigger value="products" className="font-poppins">
              <Package className="h-4 w-4 mr-2" />
              Productos
            </TabsTrigger>
            <TabsTrigger value="season" className="font-poppins">
              <Calendar className="h-4 w-4 mr-2" />
              Temporada
            </TabsTrigger>
            <TabsTrigger value="settings" className="font-poppins">
              <Settings className="h-4 w-4 mr-2" />
              Configuración
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            {/* Add New Product */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Agregar Producto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-poppins">Nombre</Label>
                    <Input
                      id="name"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                      className="font-poppins"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price" className="font-poppins">Precio (MXN)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, price: e.target.value }))}
                      className="font-poppins"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="font-poppins">Descripción</Label>
                  <Textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                    className="font-poppins"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="category" className="font-poppins">Categoría:</Label>
                    <select 
                      value={newProduct.category}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
                      className="font-poppins"
                    >
                      <option value="base">Base</option>
                      <option value="temporada">Temporada</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={newProduct.available}
                      onCheckedChange={(checked) => setNewProduct(prev => ({ ...prev, available: checked }))}
                    />
                    <Label className="font-poppins">Disponible</Label>
                  </div>
                </div>

                <Button 
                  onClick={handleSaveProduct}
                  className="bg-gradient-warm hover:opacity-90 text-card font-poppins font-medium"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Guardar Producto
                </Button>
              </CardContent>
            </Card>

            {/* Products List */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair">Productos Existentes</CardTitle>
              </CardHeader>
              <CardContent>
                {products.length === 0 ? (
                  <p className="font-poppins text-muted-foreground text-center py-8">
                    No hay productos personalizados. Los productos base están definidos en el código.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {products.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div>
                          <h4 className="font-poppins font-medium text-foreground">{product.name}</h4>
                          <p className="font-poppins text-sm text-muted-foreground">${product.price}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={product.category === 'base' ? 'default' : 'secondary'}>
                              {product.category}
                            </Badge>
                            <Badge variant={product.available ? 'default' : 'destructive'}>
                              {product.available ? 'Disponible' : 'Agotado'}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="season">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair">Configuración de Temporada</CardTitle>
                <p className="font-poppins text-muted-foreground">
                  Activa o desactiva la visibilidad de productos de temporada
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <h4 className="font-poppins font-medium text-foreground">Estado de Temporada</h4>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {seasonActive ? 
                        'Los productos de temporada son visibles para los clientes' : 
                        'Los productos de temporada están ocultos'
                      }
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={seasonActive ? 'default' : 'secondary'}>
                      {seasonActive ? 'Activa' : 'Inactiva'}
                    </Badge>
                    <Switch
                      checked={seasonActive}
                      onCheckedChange={toggleSeasonActive}
                    />
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h5 className="font-poppins font-medium text-foreground mb-2">Instrucciones:</h5>
                  <ul className="font-poppins text-sm text-muted-foreground space-y-1">
                    <li>• Cuando la temporada está <strong>activa</strong>, los productos de temporada aparecen en el menú</li>
                    <li>• Cuando está <strong>inactiva</strong>, se muestra el mensaje "Próximamente"</li>
                    <li>• Los productos base siempre están disponibles independientemente de esta configuración</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-playfair">Configuración de Envíos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="delivery-cost" className="font-poppins">Costo de envío base (MXN)</Label>
                    <Input
                      id="delivery-cost"
                      type="number"
                      defaultValue="50"
                      className="font-poppins"
                    />
                  </div>
                  <div>
                    <Label htmlFor="delivery-zones" className="font-poppins">Zonas de entrega</Label>
                    <Textarea
                      id="delivery-zones"
                      defaultValue="Hermosillo y alrededores"
                      className="font-poppins"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-playfair">Horarios de Atención</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weekday-hours" className="font-poppins">Lun - Vie</Label>
                      <Input
                        id="weekday-hours"
                        defaultValue="9:00 AM - 8:00 PM"
                        className="font-poppins"
                      />
                    </div>
                    <div>
                      <Label htmlFor="saturday-hours" className="font-poppins">Sábados</Label>
                      <Input
                        id="saturday-hours"
                        defaultValue="10:00 AM - 6:00 PM"
                        className="font-poppins"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="sunday-hours" className="font-poppins">Domingos</Label>
                    <Input
                      id="sunday-hours"
                      defaultValue="10:00 AM - 4:00 PM"
                      className="font-poppins"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Admin;