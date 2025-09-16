import { Wifi, Car, Coffee, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: Wifi,
    title: "WiFi de alta velocidad",
    description: "Conexión rápida y confiable",
  },
  {
    icon: Car,
    title: "Transporte al aeropuerto",
    description: "A solo 12 minutos del El Dorado",
  },
  {
    icon: Coffee,
    title: "Desayuno incluido",
    description: "Comienza tu día con energía",
  },
  {
    icon: Shield,
    title: "Parqueadero privado",
    description: "Seguridad para tu vehículo",
  },
  {
    icon: Users,
    title: "Para familias y ejecutivos",
    description: "Habitaciones adaptadas a tus necesidades",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
