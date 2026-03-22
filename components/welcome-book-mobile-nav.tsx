"use client"

import Link from "next/link"
import { Compass, Home, MessageCircle, PhoneCall } from "lucide-react"

import { hotelWelcomeInfo, type Locale } from "@/lib/welcome-book-data"

const labels = {
  es: { home: "Inicio", explore: "Explorar", chat: "Chat", profile: "Perfil" },
  en: { home: "Home", explore: "Explore", chat: "Chat", profile: "Profile" },
  fr: { home: "Accueil", explore: "Explorer", chat: "Chat", profile: "Profil" },
} as const

export default function WelcomeBookMobileNav({
  locale,
  active,
}: {
  locale: Locale
  active: "home" | "explore" | "chat" | "profile"
}) {
  const t = labels[locale]

  const navItems = [
    {
      key: "home" as const,
      href: `/libro-digital-bienvenida?lang=${locale}`,
      icon: Home,
      label: t.home,
    },
    {
      key: "explore" as const,
      href: `/libro-digital-bienvenida/restaurantes?lang=${locale}`,
      icon: Compass,
      label: t.explore,
    },
    {
      key: "chat" as const,
      href: hotelWelcomeInfo.whatsappUrl,
      icon: MessageCircle,
      label: t.chat,
      external: true,
    },
    {
      key: "profile" as const,
      href: `/libro-digital-bienvenida/contacto?lang=${locale}`,
      icon: PhoneCall,
      label: t.profile,
    },
  ]

  return (
    <nav className="grid grid-cols-4 border-t border-border/60 bg-white px-3 py-3 text-center text-[11px] text-muted-foreground">
      {navItems.map((item) => {
        const Icon = item.icon
        const className = `flex flex-col items-center gap-1 ${active === item.key ? "text-primary" : ""}`

        if (item.external) {
          return (
            <a key={item.key} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
              <Icon className={`h-5 w-5 ${active === item.key ? "text-secondary" : ""}`} />
              <span>{item.label}</span>
            </a>
          )
        }

        return (
          <Link key={item.key} href={item.href} className={className}>
            <Icon className={`h-5 w-5 ${active === item.key ? "text-secondary" : ""}`} />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
