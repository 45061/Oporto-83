import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const rooms = [
  {
    name: "Habitación Ejecutiva",
    price: "Desde $180.000 COP/noche",
    image: "/executive-hotel-room-with-desk-and-city-view.jpg",
    features: ["Cama King Size", "Escritorio de trabajo", "Vista a la ciudad"],
  },
  {
    name: "Habitación Familiar",
    price: "Desde $220.000 COP/noche",
    image: "/family-hotel-room.png",
    features: ["2 Camas Dobles", "Espacio amplio", "Ideal para familias"],
  },
  {
    name: "Suite Premium",
    price: "Desde $280.000 COP/noche",
    image: "/luxury-hotel-suite-with-living-area.jpg",
    features: ["Sala de estar", "Jacuzzi privado", "Servicio premium"],
  },
]

export function RoomsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">Tipos de Habitaciones</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col">
              <div className="aspect-video">
                <img src={room.image || "/placeholder.svg"} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{room.price}</p>
                <ul className="space-y-2">
                  {room.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90">Reservar esta habitación</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
