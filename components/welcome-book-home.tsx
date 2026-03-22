"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  CarFront,
  Coffee,
  Compass,
  Home,
  MapPin,
  MessageCircle,
  PhoneCall,
  UtensilsCrossed,
  Wifi,
} from "lucide-react"

import { hotelWelcomeInfo, type Locale } from "@/lib/welcome-book-data"
import WelcomeBookHeroIllustration from "@/components/welcome-book-hero-illustration"
import WelcomeBookMobileNav from "@/components/welcome-book-mobile-nav"

const translations = {
  es: {
    greeting: "Hola Oporto",
    subtitle: "Tu guia rapida para moverte mejor durante la estancia",
    language: "Idioma",
    sections: {
      wifi: "WiFi",
      checkin: "Check-in",
      breakfast: "Desayuno",
      parking: "Parqueadero",
      location: "Ubicacion",
      restaurants: "Restaurantes",
      plans: "Planes",
      contact: "Contacto",
    },
    bottom: { home: "Inicio", explore: "Explorar", chat: "Chat", profile: "Perfil" },
    callToAction: "Escribir a recepcion",
  },
  en: {
    greeting: "Hello Oporto",
    subtitle: "Your quick guide to move around more easily during your stay",
    language: "Language",
    sections: {
      wifi: "WiFi",
      checkin: "Check-in",
      breakfast: "Breakfast",
      parking: "Parking",
      location: "Location",
      restaurants: "Restaurants",
      plans: "Things to do",
      contact: "Contact",
    },
    bottom: { home: "Home", explore: "Explore", chat: "Chat", profile: "Profile" },
    callToAction: "Message reception",
  },
  fr: {
    greeting: "Bonjour Oporto",
    subtitle: "Votre guide rapide pour mieux vous orienter pendant le sejour",
    language: "Langue",
    sections: {
      wifi: "WiFi",
      checkin: "Check-in",
      breakfast: "Petit-dejeuner",
      parking: "Parking",
      location: "Emplacement",
      restaurants: "Restaurants",
      plans: "Activites",
      contact: "Contact",
    },
    bottom: { home: "Accueil", explore: "Explorer", chat: "Chat", profile: "Profil" },
    callToAction: "Ecrire a la reception",
  },
} as const

const sectionCards = [
  { slug: "wifi", icon: Wifi, key: "wifi" },
  { slug: "check-in", icon: Home, key: "checkin" },
  { slug: "desayuno", icon: Coffee, key: "breakfast" },
  { slug: "parqueadero", icon: CarFront, key: "parking" },
  { slug: "ubicacion", icon: MapPin, key: "location" },
  { slug: "restaurantes", icon: UtensilsCrossed, key: "restaurants" },
  { slug: "planes", icon: Compass, key: "plans" },
  { slug: "contacto", icon: PhoneCall, key: "contact" },
] as const

function useLocale() {
  const searchParams = useSearchParams()
  const lang = searchParams.get("lang")
  return lang === "en" || lang === "fr" ? lang : "es"
}

export default function WelcomeBookHome() {
  const locale = useLocale()
  const t = translations[locale]
  const router = useRouter()
  const pathname = usePathname()

  function setLocale(nextLocale: Locale) {
    router.replace(`${pathname}?lang=${nextLocale}`, { scroll: false })
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(241,245,249,0.85),rgba(255,255,255,1))] px-4 py-6">
      <div className="mx-auto max-w-md overflow-hidden rounded-[2.25rem] border border-primary/10 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
        <section className="relative overflow-hidden bg-primary px-6 pb-8 pt-8 text-primary-foreground">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-secondary/25 blur-2xl" />
          <div className="absolute left-0 top-24 h-28 w-28 rounded-full bg-white/8 blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_100%)]" />
          <WelcomeBookHeroIllustration />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm text-primary-foreground/80">{hotelWelcomeInfo.hotelName}</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight">{t.greeting}</h1>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/85">{t.subtitle}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
              83
            </div>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-primary-foreground/80">{t.language}</span>
            {(["es", "en", "fr"] as Locale[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLocale(option)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
                  locale === option
                    ? "bg-secondary text-secondary-foreground"
                    : "border border-white/10 bg-white/10 text-primary-foreground"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-2 border-t border-border/60">
          {sectionCards.map((card) => {
            const Icon = card.icon
            const label = t.sections[card.key]

            return (
              <Link
                key={card.slug}
                href={`/libro-digital-bienvenida/${card.slug}?lang=${locale}`}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 border-b border-r border-border/60 p-5 text-center transition hover:bg-card"
              >
                <div className="rounded-2xl bg-primary/8 p-4 text-primary transition group-hover:bg-secondary/15 group-hover:text-secondary">
                  <Icon className="h-8 w-8" />
                </div>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </Link>
            )
          })}
        </section>

        <section className="px-5 py-5">
          <a
            href={hotelWelcomeInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-4 text-sm font-semibold text-secondary-foreground shadow-sm"
          >
            <MessageCircle className="h-4 w-4" />
            {t.callToAction}
          </a>
        </section>

        <WelcomeBookMobileNav locale={locale} active="home" />
      </div>
    </main>
  )
}
