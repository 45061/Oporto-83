import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wifi, Car, Coffee, Tv, Bath, Wind, Users, Bed } from "lucide-react"

const rooms = [
  {
    id: "ejecutiva",
    name: "Habitación Ejecutiva",
    price: "180,000",
    image: "/modern-executive-hotel-room-with-desk-and-city-vie.jpg",
    description: "Perfecta para viajeros de negocios que buscan comodidad y funcionalidad.",
    features: ["Escritorio ejecutivo", "WiFi de alta velocidad", 'TV 43"', "Baño privado", "Aire acondicionado"],
    amenities: [
      { icon: Wifi, label: "WiFi gratis" },
      { icon: Tv, label: 'TV 43"' },
      { icon: Wind, label: "A/C" },
      { icon: Bath, label: "Baño privado" },
      { icon: Coffee, label: "Cafetera" },
      { icon: Car, label: "Parqueadero" },
    ],
    capacity: "1-2 personas",
    size: "25 m²",
  },
  {
    id: "familiar",
    name: "Habitación Familiar",
    price: "220,000",
    image: "/spacious-family-hotel-room-with-two-beds-and-seati.jpg",
    description: "Amplia y cómoda, ideal para familias que viajan juntas.",
    features: ["Dos camas dobles", "Área de estar", "Minibar", "Caja fuerte", "Balcón privado"],
    amenities: [
      { icon: Users, label: "Hasta 4 personas" },
      { icon: Bed, label: "Dos camas dobles" },
      { icon: Wifi, label: "WiFi gratis" },
      { icon: Tv, label: 'TV 50"' },
      { icon: Wind, label: "A/C" },
      { icon: Car, label: "Parqueadero" },
    ],
    capacity: "2-4 personas",
    size: "35 m²",
  },
  {
    id: "suite",
    name: "Premium Suite",
    price: "280,000",
    image: "/luxury-hotel-suite.png",
    description: "La máxima expresión de lujo y confort para una experiencia inolvidable.",
    features: [
      "Sala de estar separada",
      "Jacuzzi",
      "Vista panorámica",
      "Servicio de habitaciones 24h",
      "Amenidades premium",
    ],
    amenities: [
      { icon: Users, label: "Hasta 3 personas" },
      { icon: Bath, label: "Jacuzzi" },
      { icon: Wifi, label: "WiFi premium" },
      { icon: Tv, label: 'TV 55"' },
      { icon: Coffee, label: "Minibar premium" },
      { icon: Car, label: "Parqueadero VIP" },
    ],
    capacity: "2-3 personas",
    size: "50 m²",
  },
]

export function RoomsGrid() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Elige tu habitación ideal</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cada habitación está diseñada pensando en tu comodidad y necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={room.image || "/placeholder.svg"} alt={room.name} className="w-full h-64 object-cover" />
                <Badge className="absolute top-4 right-4 bg-amber-500 text-white">{room.size}</Badge>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-slate-900">{room.name}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-600">${room.price}</div>
                    <div className="text-sm text-slate-500">COP/noche</div>
                  </div>
                </div>
                <p className="text-slate-600">{room.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Users className="w-4 h-4" />
                  {room.capacity}
                </div>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="features">Características</TabsTrigger>
                    <TabsTrigger value="amenities">Amenidades</TabsTrigger>
                  </TabsList>

                  <TabsContent value="features" className="mt-4">
                    <ul className="space-y-2">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="amenities" className="mt-4">
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                          <amenity.icon className="w-4 h-4 text-cyan-500" />
                          {amenity.label}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Reservar ahora</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
