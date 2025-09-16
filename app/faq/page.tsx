import type { Metadata } from "next"
import FAQHero from "@/components/faq-hero"
import FAQContent from "@/components/faq-content"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - Hotel Oporto 83",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre Hotel Oporto 83, ubicado cerca del Aeropuerto El Dorado en Bogotá.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <FAQHero />
      <FAQContent />
      <Footer />
    </main>
  )
}
