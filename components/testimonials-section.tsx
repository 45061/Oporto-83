import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María G.",
    location: "Medellín",
    rating: 5,
    comment: "Excelente atención, cerca al aeropuerto, muy limpio. 100% recomendado.",
  },
  {
    name: "Carlos R.",
    location: "Cali",
    rating: 5,
    comment: "Perfecto para viajeros de negocios. El desayuno es delicioso y la ubicación inmejorable.",
  },
  {
    name: "Ana L.",
    location: "Barranquilla",
    rating: 5,
    comment: "Habitaciones cómodas y personal muy amable. Volveré sin duda en mi próximo viaje.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">Lo que dicen nuestros huéspedes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.comment}"</p>
                <div className="font-semibold">
                  {testimonial.name}
                  <span className="text-muted-foreground font-normal">, {testimonial.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
