import { MapPin, Clock, Plane } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">Ubicación Estratégica</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <img
                src="/map-of-bogota-showing-hotel-location-near-el-dorad.jpg"
                alt="Mapa de ubicación Hotel Oporto 83"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Aeropuerto El Dorado</h3>
                <p className="text-muted-foreground">A solo 12 minutos en vehículo</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Centro Comercial Hayuelos</h3>
                <p className="text-muted-foreground">A 5 minutos para tus compras</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Embajada de EE.UU.</h3>
                <p className="text-muted-foreground">A 10 minutos para tus gestiones</p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <p className="text-lg font-medium text-balance">
                Estamos a 5 minutos del Centro Comercial Hayuelos, 10 minutos de la Embajada de EE.UU. y 12 minutos del
                Aeropuerto El Dorado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
