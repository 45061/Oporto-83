import type { Metadata } from "next"

import WelcomeBookPage from "@/components/welcome-book-page"

export const metadata: Metadata = {
  title: "Libro de Bienvenida | Hotel Oporto 83",
  description:
    "Guia digital para huespedes del Hotel Oporto 83 con informacion util de llegada, horarios, servicios, normas del alojamiento y recomendaciones cercanas.",
}

export default function DigitalWelcomeBookPage() {
  return <WelcomeBookPage />
}
