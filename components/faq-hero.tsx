import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function FAQHero() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-50 to-amber-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Preguntas Frecuentes</h1>
          <p className="text-xl text-gray-600 mb-8 text-pretty">
            Encuentra respuestas rápidas a las preguntas más comunes sobre Hotel Oporto 83. Si no encuentras lo que
            buscas, no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-600 hover:bg-amber-50 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat en Vivo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
