import { hotelWelcomeInfo } from "@/lib/welcome-book-data"

function toJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}

export default function WelcomeBookStructuredData({
  slug,
  title,
  description,
}: {
  slug?: string
  title: string
  description: string
}) {
  const path = slug ? `/libro-digital-bienvenida/${slug}` : "/libro-digital-bienvenida"

  const lodgingBusiness = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: hotelWelcomeInfo.hotelName,
    description,
    telephone: hotelWelcomeInfo.phone,
    email: hotelWelcomeInfo.email,
    url: path,
    image: "/Recepcion.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 23 #83-20",
      addressLocality: "Bogota",
      addressCountry: "CO",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parqueadero", value: true },
      { "@type": "LocationFeatureSpecification", name: "Desayuno", value: true },
    ],
  }

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: path,
    isPartOf: {
      "@type": "WebSite",
      name: hotelWelcomeInfo.hotelName,
      url: "/",
    },
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Libro de Bienvenida",
        item: "/libro-digital-bienvenida",
      },
      ...(slug
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: title,
              item: path,
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(lodgingBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb) }} />
    </>
  )
}
