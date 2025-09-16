import ContactHero from "@/components/contact-hero"
import ContactInfo from "@/components/contact-info"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-16">
        <ContactForm />
        <ContactMap />
      </div>
    </main>
  )
}
