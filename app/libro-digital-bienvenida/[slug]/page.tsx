import { notFound } from "next/navigation"

import WelcomeBookSectionPage, { type SectionSlug } from "@/components/welcome-book-section-page"
import WelcomeBookPage from "@/components/welcome-book-page"

const validSlugs = new Set([
  "wifi",
  "check-in",
  "desayuno",
  "parqueadero",
  "ubicacion",
  "restaurantes",
  "planes",
  "contacto",
])

export default function WelcomeBookDetailPage({ params }: { params: { slug: string } }) {
  if (!validSlugs.has(params.slug)) {
    notFound()
  }

  return (
    <>
      <div className="md:hidden">
        <WelcomeBookSectionPage slug={params.slug as SectionSlug} />
      </div>
      <div className="hidden md:block">
        <WelcomeBookPage />
      </div>
    </>
  )
}
