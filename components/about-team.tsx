import { Card, CardContent } from "@/components/ui/card"

export default function AboutTeam() {
  const team = [
    {
      name: "María González",
      position: "Gerente General",
      image: "/professional-hotel-manager-woman-smiling.jpg",
      description:
        "Con más de 15 años de experiencia en la industria hotelera, María lidera nuestro equipo con pasión y dedicación.",
    },
    {
      name: "Carlos Rodríguez",
      position: "Chef Ejecutivo",
      image: "/professional-chef-man-in-kitchen-uniform.jpg",
      description:
        "Especialista en cocina colombiana e internacional, Carlos crea experiencias gastronómicas únicas para nuestros huéspedes.",
    },
    {
      name: "Ana Martínez",
      position: "Directora de Servicios",
      image: "/professional-hotel-service-director-woman.jpg",
      description:
        "Ana se asegura de que cada huésped reciba la atención personalizada que caracteriza al Hotel Oporto 83.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Conoce a las personas apasionadas que hacen posible tu experiencia excepcional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-cyan-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-balance">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
