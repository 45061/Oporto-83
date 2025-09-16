import AboutHero from "@/components/about-hero"
import AboutStory from "@/components/about-story"
import AboutValues from "@/components/about-values"
import AboutTeam from "@/components/about-team"
import AboutLocation from "@/components/about-location"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutLocation />
      <Footer />
    </main>
  )
}
