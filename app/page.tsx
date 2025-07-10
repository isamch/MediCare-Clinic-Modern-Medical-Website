import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { ContactSection } from "@/components/ContactSection"

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
