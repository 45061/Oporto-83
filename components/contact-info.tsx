import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle, Car } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Dirección",
      info: "Calle 23 #83-20, Bogotá, Colombia",
      subinfo: "A solo 15 minutos del Aeropuerto El Dorado",
      color: "text-cyan-600",
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+57 (319) 798 1552",
      subinfo: "Disponible 24/7 para reservas",
      color: "text-amber-600",
    },
    {
      icon: Mail,
      title: "Email",
      info: "oteloporto83bogota@gmail.com",
      subinfo: "Respuesta en menos de 2 horas",
      color: "text-cyan-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+57 319 798 1552",
      subinfo: "Chat directo con nuestro equipo",
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Recepción 24 horas",
      subinfo: "Check-in: 2:00 PM | Check-out: 12:00 PM",
      color: "text-amber-600",
    },
    {
      icon: Car,
      title: "Transporte",
      info: "Servicio de traslado",
      subinfo: "Desde/hacia el aeropuerto disponible",
      color: "text-cyan-600",
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Información de Contacto</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Múltiples formas de contactarnos para brindarte la mejor atención
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-slate-100 ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                    <p className="text-slate-700 font-medium mb-1">{method.info}</p>
                    <p className="text-sm text-slate-500">{method.subinfo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
