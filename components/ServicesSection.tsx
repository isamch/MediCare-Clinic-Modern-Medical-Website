import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Bone, Eye, Baby, Stethoscope, Activity, Shield } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Comprehensive heart care including diagnostics, treatment, and prevention of cardiovascular diseases.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert care for neurological conditions affecting the brain, spine, and nervous system.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Treatment of musculoskeletal conditions including bones, joints, ligaments, and muscles.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services from routine exams to complex surgical procedures.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents up to 18 years old.",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Primary healthcare services for adults including preventive care and chronic disease management.",
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response and critical care capabilities.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Health screenings, vaccinations, and wellness programs to prevent illness and promote health.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of medical services to meet all your healthcare needs under one roof with the
            highest standards of care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
