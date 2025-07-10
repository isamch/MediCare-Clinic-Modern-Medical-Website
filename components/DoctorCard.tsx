import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar } from "lucide-react"

interface Doctor {
  id: string
  name: string
  specialty: string
  image: string
  bio: string
  experience: string
  education: string[]
  location: string
  availability: string[]
}

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center">
        <Image
          src={doctor.image || "https://images.unsplash.com/photo-1511174511562-5f97f4f4c1b3?auto=format&fit=crop&w=400&q=80"}
          alt={doctor.name}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{doctor.name}</h3>
        <Badge variant="secondary" className="mx-auto">
          {doctor.specialty}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{doctor.bio}</p>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-2" />
          {doctor.location}
        </div>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="h-4 w-4 mr-2" />
          {doctor.experience} experience
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Link href={`/doctors/${doctor.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              View Profile
            </Button>
          </Link>
          <Link href="/appointments" className="flex-1">
            <Button size="sm" className="w-full">
              Book Appointment
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
