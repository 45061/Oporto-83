import { Shield, Award, CheckCircle } from "lucide-react"

const trustIndicators = [
  {
    icon: Shield,
    title: "Certificación de Bioseguridad",
    description: "Protocolos COVID-19 implementados",
  },
  {
    icon: Award,
    title: "Reconocimiento Booking.com",
    description: "Hotel destacado 2024",
  },
  {
    icon: CheckCircle,
    title: "Cancelación Flexible",
    description: "Cancela hasta 24h antes sin costo",
  },
]

export function TrustSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">Confianza y Seguridad</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <indicator.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{indicator.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{indicator.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-8">
          <img src="/booking-logo.png" alt="Booking.com" className="h-12 opacity-60" />
          <img src="/google-reviews-logo.png" alt="Google Reviews" className="h-12 opacity-60" />
          <img src="/tripadvisor-logo.png" alt="TripAdvisor" className="h-12 opacity-60" />
        </div>
      </div>
    </section>
  )
}
