import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Medical Center Drive", "Healthcare City, HC 12345"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Emergency: (555) 911-1234", "Appointments: (555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@medicareClinic.com", "appointments@medicareClinic.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"],
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or need to schedule an appointment? We're here to help. Contact us today and let us take care
            of your health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
