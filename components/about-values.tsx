import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Star, Users } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Hospitalidad",
      description:
        "Tratamos a cada huésped como familia, brindando calidez y atención personalizada en cada interacción.",
    },
    {
      icon: Star,
      title: "Excelencia",
      description:
        "Nos comprometemos con los más altos estándares de calidad en todos nuestros servicios y instalaciones.",
    },
    {
      icon: Shield,
      title: "Confianza",
      description:
        "Construimos relaciones duraderas basadas en la transparencia, seguridad y cumplimiento de promesas.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Valoramos a nuestro equipo y contribuimos positivamente al desarrollo de nuestra comunidad local.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Los principios que guían cada decisión y acción en el Hotel Oporto 83
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-balance">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
