import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Contáctanos</h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto text-pretty">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros para reservas, consultas o cualquier información
          que necesites sobre Hotel Oporto 83.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3" asChild>
            <a href="tel:+573197981552" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            asChild
          >
            <a href="mailto:oporto83bogota@gmail.com?subject=Solicitud%20de%20Información%20de%20Hospedaje&body=Hola,%20quisiera%20solicitar%20información%20sobre%20el%20hospedaje." className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </Button>

          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3" asChild>
            <a href="https://wa.me/573197981552?text=Hola,%20quisiera%20solicitar%20información%20sobre%20el%20hospedaje." className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
