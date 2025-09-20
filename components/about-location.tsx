import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Plane, Car } from "lucide-react"

export default function AboutLocation() {
  const locationFeatures = [
    {
      icon: Plane,
      title: "Cerca del Aeropuerto",
      description: "A solo 15 minutos del Aeropuerto Internacional El Dorado",
    },
    {
      icon: Car,
      title: "Fácil Acceso",
      description: "Ubicación estratégica con excelente conectividad vial",
    },
    {
      icon: MapPin,
      title: "Centro de Bogotá",
      description: "Acceso rápido a los principales puntos de interés de la ciudad",
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Servicios de recepción y transporte disponibles las 24 horas",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Ubicación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Estratégicamente ubicados para ofrecerte la máxima comodidad y accesibilidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {locationFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-balance">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué elegir nuestra ubicación?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ideal para viajeros de negocios con vuelos temprano o tarde
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Perfecto para turistas que quieren explorar Bogotá
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transporte público y privado fácilmente accesible
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Zona segura y bien conectada de la ciudad
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/Bogota.png"
                alt="Ubicación del Hotel Oporto 83"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
