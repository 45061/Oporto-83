import type { Metadata } from "next"
import { notFound } from "next/navigation"

import WelcomeBookSectionPage, { type SectionSlug } from "@/components/welcome-book-section-page"
import WelcomeBookPage from "@/components/welcome-book-page"
import WelcomeBookStructuredData from "@/components/welcome-book-structured-data"

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

const metadataBySlug: Record<SectionSlug, Metadata> = {
  wifi: {
    title: "WiFi del Hotel | Libro de Bienvenida Oporto 83",
    description: "Consulta el nombre de la red WiFi y la clave del Hotel Oporto 83 dentro del libro digital de bienvenida.",
  },
  "check-in": {
    title: "Check-in y Llegada | Libro de Bienvenida Oporto 83",
    description: "Informacion de llegada, check-in y recomendaciones para ingresar al Hotel Oporto 83 sin contratiempos.",
  },
  desayuno: {
    title: "Desayuno | Libro de Bienvenida Oporto 83",
    description: "Horarios y referencia del desayuno para huespedes del Hotel Oporto 83 en Bogota.",
  },
  parqueadero: {
    title: "Parqueadero | Libro de Bienvenida Oporto 83",
    description: "Consulta disponibilidad, referencia de tarifa e informacion del parqueadero del Hotel Oporto 83.",
  },
  ubicacion: {
    title: "Ubicacion del Hotel | Libro de Bienvenida Oporto 83",
    description: "Direccion, referencia con el aeropuerto y lugares utiles cercanos al Hotel Oporto 83 en Bogota.",
  },
  restaurantes: {
    title: "Restaurantes Cercanos | Libro de Bienvenida Oporto 83",
    description: "Restaurantes recomendados cerca del Hotel Oporto 83 para almorzar, cenar o comer algo rapido.",
  },
  planes: {
    title: "Planes en Bogota | Libro de Bienvenida Oporto 83",
    description: "Lugares recomendados y actividades cerca del Hotel Oporto 83 para aprovechar tu visita a Bogota.",
  },
  contacto: {
    title: "Contacto del Hotel | Libro de Bienvenida Oporto 83",
    description: "Canales de contacto y ayuda rapida para huespedes del Hotel Oporto 83 durante su estancia.",
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (!validSlugs.has(params.slug)) {
    return {}
  }

  const baseMetadata = metadataBySlug[params.slug as SectionSlug]

  return {
    ...baseMetadata,
    openGraph: {
      title: typeof baseMetadata.title === "string" ? baseMetadata.title : "Libro de Bienvenida | Hotel Oporto 83",
      description: baseMetadata.description ?? "",
      type: "article",
      url: `/libro-digital-bienvenida/${params.slug}`,
      images: [
        {
          url: "/Recepcion.jpg",
          width: 1200,
          height: 630,
          alt: "Recepcion del Hotel Oporto 83 en Bogota",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof baseMetadata.title === "string" ? baseMetadata.title : "Libro de Bienvenida | Hotel Oporto 83",
      description: baseMetadata.description ?? "",
      images: ["/Recepcion.jpg"],
    },
    alternates: {
      canonical: `/libro-digital-bienvenida/${params.slug}`,
    },
  }
}

export default function WelcomeBookDetailPage({ params }: { params: { slug: string } }) {
  if (!validSlugs.has(params.slug)) {
    notFound()
  }

  const pageMetadata = metadataBySlug[params.slug as SectionSlug]
  const title =
    typeof pageMetadata.title === "string" ? pageMetadata.title : "Libro de Bienvenida | Hotel Oporto 83"
  const description = pageMetadata.description ?? "Informacion util para huespedes del Hotel Oporto 83."

  return (
    <>
      <WelcomeBookStructuredData slug={params.slug} title={title} description={description} />
      <div className="md:hidden">
        <WelcomeBookSectionPage slug={params.slug as SectionSlug} />
      </div>
      <div className="hidden md:block">
        <WelcomeBookPage />
      </div>
    </>
  )
}
