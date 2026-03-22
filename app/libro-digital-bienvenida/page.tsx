import type { Metadata } from "next"

import WelcomeBookHome from "@/components/welcome-book-home"
import WelcomeBookPage from "@/components/welcome-book-page"

export const metadata: Metadata = {
  title: "Libro de Bienvenida | Hotel Oporto 83",
  description:
    "Guia digital para huespedes del Hotel Oporto 83 con informacion util de llegada, horarios, servicios, normas del alojamiento y recomendaciones cercanas.",
}

export default function DigitalWelcomeBookPage() {
  return (
    <>
      <div className="md:hidden">
        <WelcomeBookHome />
      </div>
      <div className="hidden md:block">
        <WelcomeBookPage />
      </div>
    </>
  )
}
