import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Car, Coffee, Tv, Bath, Wind, Shield, Clock, Utensils, Briefcase, ShoppingBag, Phone, WashingMachine, Sun } from "lucide-react"

const amenities = [
  {
    category: "Conectividad",
    items: [
      { icon: Wifi, name: "WiFi gratuito de alta velocidad", description: "Internet rápido en todas las áreas" },
      { icon: Tv, name: "TV por cable", description: "Canales nacionales e internacionales" },
    ],
  },
  {
    category: "Comodidades",
    items: [
      { icon: Bath, name: "Baño privado", description: "Con agua caliente 24 horas" },
      { icon: Coffee, name: "Cafetera", description: "Café y té" },
      { icon: Sun, name: "Habitaciones con luz natural", description: "Ambientes luminosos y agradables" },
    ],
  },
  {
    category: "Servicios",
    items: [
      { icon: Car, name: "Servicio deParqueadero", description: "Espacios seguros y vigilados" },
      { icon: Shield, name: "Seguridad 24/7", description: "Recepción y vigilancia permanente" },
      { icon: Clock, name: "Check-in/out flexible", description: "Horarios adaptados a tu vuelo" },
      { icon: WashingMachine, name: "Servicio de Lavanderia", description: "Lavado y planchado de ropa" },
    ],
  },
  {
    category: "Adicionales",
    items: [
      { icon: Utensils, name: "Restaurante", description: "Desayuno buffet y menú a la carta" },
      { icon: Briefcase, name: "Zona de Cooworking", description: "Espacio de trabajo compartido" },
      { icon: ShoppingBag, name: "Tienda de recuerdos", description: "Recuerdos y productos locales" },
    ],
  },
]

export function RoomAmenities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Amenidades incluidas</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Disfruta de todas estas comodidades sin costo adicional durante tu estadía
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((category) => (
            <Card key={category.category} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-cyan-600">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm">{item.name}</h4>
                        <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
