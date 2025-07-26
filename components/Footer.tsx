import Link from "next/link"
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const footerLinks = {
  "Quick Links": [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/#services" },
    { name: "Blog", href: "/blog" },
  ],
  Services: [
    { name: "Emergency Care", href: "/#services" },
    { name: "Cardiology", href: "/#services" },
    { name: "Pediatrics", href: "/#services" },
    { name: "Orthopedics", href: "/#services" },
  ],
  Contact: [
    { name: "Book Appointment", href: "/appointments" },
    { name: "Contact Us", href: "/contact" },
    { name: "(555) 123-4567", href: "tel:+15551234567" },
    { name: "info@medicareClinic.com", href: "mailto:info@medicareClinic.com" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">IC MediCare</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing exceptional healthcare services with compassion, expertise, and cutting-edge medical technology
              for over 25 years.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} IC MediCare. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              HIPAA Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
