import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Patients", value: "10,000+" },
  { icon: Award, label: "Years Experience", value: "25+" },
  { icon: Clock, label: "Available 24/7", value: "Always" },
  { icon: Heart, label: "Success Rate", value: "98%" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About IC MediCare</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are dedicated to providing exceptional healthcare services with compassion, expertise, and cutting-edge
            medical technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At IC MediCare, we believe that everyone deserves access to quality healthcare. Our mission is to
              provide comprehensive medical services that promote health, prevent illness, and restore wellness in our
              community.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With a team of highly qualified doctors and medical professionals, we offer personalized care tailored to
              each patient's unique needs. Our state-of-the-art facilities and advanced medical equipment ensure that
              you receive the best possible treatment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Care</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Board-certified physicians with years of experience
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Modern Facilities</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  State-of-the-art equipment and comfortable environment
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Personalized Treatment</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Tailored care plans for each patient's unique needs
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Emergency care available around the clock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
