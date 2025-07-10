import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Health is Our <span className="text-primary">Priority</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Experience world-class healthcare with our team of experienced doctors and state-of-the-art medical
              facilities. We're here to provide you with the best care possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointments">
                <Button size="lg" className="group">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group bg-transparent">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>
          <div className="animate-slide-up">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Your Health is Our Priority"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
