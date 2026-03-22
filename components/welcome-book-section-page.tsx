"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  ArrowLeft,
  CarFront,
  CheckCircle2,
  Coffee,
  Compass,
  Home,
  MapPin,
  MessageCircle,
  PhoneCall,
  UtensilsCrossed,
  Wifi,
} from "lucide-react"

import {
  getArrivalNotes,
  getEmergencyContacts,
  getFallbackPlaces,
  getNearbyHighlights,
  hotelWelcomeInfo,
  localizedHotelInfo,
  type Locale,
} from "@/lib/welcome-book-data"
import WelcomeBookHeroIllustration from "@/components/welcome-book-hero-illustration"
import WelcomeBookMobileNav from "@/components/welcome-book-mobile-nav"

const pageCopy = {
  es: {
    back: "Volver",
    language: "Idioma",
    wifi: {
      title: "WiFi del hotel",
      description: "Conectate rapidamente con estos datos.",
      bullets: ["La red esta disponible en las habitaciones y zonas comunes.", "Si la conexion falla, escribe a recepcion por WhatsApp."],
      network: "Red",
      password: "Clave",
    },
    "check-in": {
      title: "Check-in y llegada",
      description: "Todo lo que necesitas antes de ingresar al hotel.",
    },
    desayuno: {
      title: "Desayuno",
      description: "Horarios y referencia rapida para organizar tu manana.",
      schedule: localizedHotelInfo.breakfast.es,
    },
    parqueadero: {
      title: "Parqueadero",
      description: "Informacion rapida para huespedes que llegan en vehiculo.",
      detail: localizedHotelInfo.parking.es,
      bullets: ["Te recomendamos confirmar disponibilidad con anticipacion.", "Recepcion puede orientarte al llegar."],
    },
    ubicacion: {
      title: "Ubicacion y como llegar",
      description: "Referencias utiles para ubicarte mejor en la zona.",
      maps: "Abrir Google Maps",
      address: "Direccion",
      airport: "Aeropuerto",
      time: "Tiempo estimado",
    },
    restaurantes: {
      title: "Restaurantes recomendados",
      description: "Opciones cercanas para comer durante tu estancia.",
      maps: "Ver en Google Maps",
    },
    planes: {
      title: "Planes y lugares para visitar",
      description: "Ideas cercanas para conocer Bogota y disfrutar la zona.",
      maps: "Ver en Google Maps",
    },
    contacto: {
      title: "Contacto y ayuda",
      description: "Canales rapidos para recibir apoyo durante tu estancia.",
      whatsapp: "Abrir WhatsApp",
    },
  },
  en: {
    back: "Back",
    language: "Language",
    wifi: {
      title: "Hotel WiFi",
      description: "Connect quickly using these details.",
      bullets: ["The network is available in rooms and common areas.", "If the connection fails, message reception on WhatsApp."],
      network: "Network",
      password: "Password",
    },
    "check-in": {
      title: "Check-in and arrival",
      description: "Everything you need before entering the hotel.",
    },
    desayuno: {
      title: "Breakfast",
      description: "Schedule and quick reference to organize your morning.",
      schedule: localizedHotelInfo.breakfast.en,
    },
    parqueadero: {
      title: "Parking",
      description: "Quick information for guests arriving by car.",
      detail: localizedHotelInfo.parking.en,
      bullets: ["We recommend confirming availability in advance.", "Reception can guide you upon arrival."],
    },
    ubicacion: {
      title: "Location and how to get here",
      description: "Useful references to help you get around the area.",
      maps: "Open Google Maps",
      address: "Address",
      airport: "Airport",
      time: "Estimated time",
    },
    restaurantes: {
      title: "Recommended restaurants",
      description: "Nearby options to eat during your stay.",
      maps: "View on Google Maps",
    },
    planes: {
      title: "Things to do and places to visit",
      description: "Nearby ideas to discover Bogota and enjoy the area.",
      maps: "View on Google Maps",
    },
    contacto: {
      title: "Contact and support",
      description: "Quick channels to get help during your stay.",
      whatsapp: "Open WhatsApp",
    },
  },
  fr: {
    back: "Retour",
    language: "Langue",
    wifi: {
      title: "WiFi de l'hotel",
      description: "Connectez-vous rapidement avec ces informations.",
      bullets: ["Le reseau est disponible dans les chambres et les espaces communs.", "Si la connexion echoue, contactez la reception sur WhatsApp."],
      network: "Reseau",
      password: "Mot de passe",
    },
    "check-in": {
      title: "Check-in et arrivee",
      description: "Tout ce qu'il faut savoir avant d'entrer a l'hotel.",
    },
    desayuno: {
      title: "Petit-dejeuner",
      description: "Horaires et rappel rapide pour organiser votre matin.",
      schedule: localizedHotelInfo.breakfast.fr,
    },
    parqueadero: {
      title: "Parking",
      description: "Informations rapides pour les clients arrivant en voiture.",
      detail: localizedHotelInfo.parking.fr,
      bullets: ["Nous recommandons de confirmer la disponibilite a l'avance.", "La reception peut vous orienter a votre arrivee."],
    },
    ubicacion: {
      title: "Emplacement et acces",
      description: "Reperes utiles pour mieux vous orienter dans le secteur.",
      maps: "Ouvrir Google Maps",
      address: "Adresse",
      airport: "Aeroport",
      time: "Temps estime",
    },
    restaurantes: {
      title: "Restaurants recommandes",
      description: "Options proches pour manger pendant votre sejour.",
      maps: "Voir sur Google Maps",
    },
    planes: {
      title: "Activites et lieux a visiter",
      description: "Idees proches pour decouvrir Bogota et profiter du secteur.",
      maps: "Voir sur Google Maps",
    },
    contacto: {
      title: "Contact et assistance",
      description: "Canaux rapides pour obtenir de l'aide pendant votre sejour.",
      whatsapp: "Ouvrir WhatsApp",
    },
  },
} as const

const sectionIcons = {
  wifi: Wifi,
  "check-in": Home,
  desayuno: Coffee,
  parqueadero: CarFront,
  ubicacion: MapPin,
  restaurantes: UtensilsCrossed,
  planes: Compass,
  contacto: PhoneCall,
}

export type SectionSlug =
  | "wifi"
  | "check-in"
  | "desayuno"
  | "parqueadero"
  | "ubicacion"
  | "restaurantes"
  | "planes"
  | "contacto"

function getLocale(searchParams: URLSearchParams): Locale {
  const lang = searchParams.get("lang")
  return lang === "en" || lang === "fr" ? lang : "es"
}

export default function WelcomeBookSectionPage({ slug }: { slug: SectionSlug }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const locale = getLocale(searchParams)
  const t = pageCopy[locale]
  const Icon = sectionIcons[slug]

  function setLocale(nextLocale: Locale) {
    router.replace(`${pathname}?lang=${nextLocale}`, { scroll: false })
  }

  const restaurants = getFallbackPlaces(locale).filter((item) => item.category === "restaurantes")
  const plans = getFallbackPlaces(locale).filter((item) => item.category === "planes")
  const contacts = getEmergencyContacts(locale)
  const nearby = getNearbyHighlights(locale)
  const arrival = getArrivalNotes(locale)
  const activeTab = slug === "restaurantes" || slug === "planes" || slug === "ubicacion" ? "explore" : slug === "contacto" ? "profile" : "home"

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(241,245,249,0.85),rgba(255,255,255,1))] px-4 py-6">
      <div className="mx-auto max-w-md overflow-hidden rounded-[2.25rem] border border-primary/10 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
        <section className="relative overflow-hidden bg-primary px-6 pb-7 pt-7 text-primary-foreground">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_100%)]" />
          <WelcomeBookHeroIllustration />
          <div className="flex items-center justify-between">
            <Link href={`/libro-digital-bienvenida?lang=${locale}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85">
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </Link>
            <div className="inline-flex rounded-full border border-white/10 bg-white/10 p-1">
              {(["es", "en", "fr"] as Locale[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLocale(option)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                    locale === option
                      ? "bg-secondary text-secondary-foreground"
                      : "text-primary-foreground/85"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{t[slug].title}</h1>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">{t[slug].description}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4 px-5 py-5">
          {slug === "wifi" && (
            <>
              <div className="rounded-3xl bg-card p-5">
                <p className="text-sm text-muted-foreground">{t.wifi.network}</p>
                <p className="mt-1 text-2xl font-bold text-foreground">{hotelWelcomeInfo.wifiName}</p>
              </div>
              <div className="rounded-3xl bg-card p-5">
                <p className="text-sm text-muted-foreground">{t.wifi.password}</p>
                <p className="mt-1 text-2xl font-bold text-foreground">{hotelWelcomeInfo.wifiPassword}</p>
              </div>
              {t.wifi.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </>
          )}

          {slug === "check-in" && (
            <>
              {arrival.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
              <div className="rounded-3xl bg-card p-5 text-sm text-muted-foreground">
                Check-in: <strong>{hotelWelcomeInfo.checkIn}</strong>
                <br />
                Check-out: <strong>{hotelWelcomeInfo.checkOut}</strong>
              </div>
            </>
          )}

          {slug === "desayuno" && (
            <div className="rounded-3xl bg-card p-5 text-sm leading-relaxed text-muted-foreground">{t.desayuno.schedule}</div>
          )}

          {slug === "parqueadero" && (
            <>
              <div className="rounded-3xl bg-card p-5 text-sm leading-relaxed text-muted-foreground">{t.parqueadero.detail}</div>
              {t.parqueadero.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </>
          )}

          {slug === "ubicacion" && (
            <>
              <div className="rounded-3xl bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                <strong>{t.ubicacion.address}:</strong> {hotelWelcomeInfo.address}
                <br />
                <strong>{t.ubicacion.airport}:</strong> {localizedHotelInfo.airportDistance[locale]}
                <br />
                <strong>{t.ubicacion.time}:</strong> {localizedHotelInfo.airportTime[locale]}
              </div>
              {nearby.slice(0, 4).map((place, index) => (
                <div key={place.name} className={`overflow-hidden rounded-3xl ${index === 0 ? "border border-secondary/30 shadow-sm" : "border border-border/60"}`}>
                  <img src={place.imagePath} alt={place.name} className="h-44 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-semibold text-foreground">{place.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{place.description}</p>
                  </div>
                </div>
              ))}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+23+%2383-20+Bogota+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-2xl bg-secondary px-4 py-4 text-sm font-semibold text-secondary-foreground"
              >
                {t.ubicacion.maps}
              </a>
            </>
          )}

          {slug === "restaurantes" && (
            <>
              {restaurants.map((item) => (
                <div key={item.name} className="rounded-3xl border border-border/60 p-5">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{item.address}</p>
                  <a href={item.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-primary">
                    {t.restaurantes.maps}
                  </a>
                </div>
              ))}
            </>
          )}

          {slug === "planes" && (
            <>
              {plans.map((item) => (
                <div key={item.name} className="rounded-3xl border border-border/60 p-5">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{item.address}</p>
                  <a href={item.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-primary">
                    {t.planes.maps}
                  </a>
                </div>
              ))}
            </>
          )}

          {slug === "contacto" && (
            <>
              {contacts.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border/60 p-5">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  <a href={item.actionHref} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-primary">
                    {item.actionLabel}
                  </a>
                </div>
              ))}
              <a
                href={hotelWelcomeInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-4 text-sm font-semibold text-secondary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                {t.contacto.whatsapp}
              </a>
            </>
          )}
        </section>

        <WelcomeBookMobileNav locale={locale} active={activeTab} />
      </div>
    </main>
  )
}
