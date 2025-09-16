import { Card, CardContent } from "@/components/ui/card"

export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-xl text-gray-600 text-balance">
              Una tradición de hospitalidad y excelencia en el corazón de Bogotá
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder-70n81.png"
                alt="Historia del Hotel Oporto 83"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-cyan-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fundación</h3>
                  <p className="text-gray-600">
                    Fundado en 1983, el Hotel Oporto 83 nació con la visión de ofrecer hospitalidad excepcional a
                    viajeros de negocios y turistas que buscan comodidad y ubicación estratégica cerca del Aeropuerto El
                    Dorado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Evolución</h3>
                  <p className="text-gray-600">
                    A lo largo de más de 40 años, hemos evolucionado constantemente, renovando nuestras instalaciones y
                    servicios para mantenernos a la vanguardia de la industria hotelera colombiana.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Presente</h3>
                  <p className="text-gray-600">
                    Hoy somos reconocidos como uno de los hoteles más confiables y cómodos de Bogotá, con más de 10,000
                    huéspedes satisfechos cada año.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
