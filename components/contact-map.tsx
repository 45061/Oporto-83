import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Plane, Car } from "lucide-react"

export default function ContactMap() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-cyan-600" />
            Nuestra Ubicación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-slate-200 rounded-lg mb-4 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Calle%2023%20%23%2083%2020,%20Bogot%C3%A1,%20Colombia%20110931&hl=es&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cyan-600 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Hotel Oporto 83</p>
                <p className="text-slate-600">Calle 23 #83-20, Bogotá, Colombia</p>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a
                href="https://maps.google.com/?q=Hotel+Oporto+83+Bogota"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Ver en Google Maps
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-900">Cómo Llegar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Plane className="w-5 h-5 text-amber-600 mt-0.5" />
            <div>
              <p className="font-medium text-slate-900">Desde el Aeropuerto</p>
              <p className="text-sm text-slate-600">15 minutos en taxi o servicio de traslado</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-cyan-600 mt-0.5" />
            <div>
              <p className="font-medium text-slate-900">En Vehículo</p>
              <p className="text-sm text-slate-600">Parqueadero disponible para huéspedes</p>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Servicio de Traslado:</strong> Ofrecemos transporte desde/hacia el aeropuerto. Contacta con
              anticipación para coordinar.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
