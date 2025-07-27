import { notFound } from "next/navigation"
import { doctors } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, GraduationCap, Award, Clock } from "lucide-react"

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id)

  if (!doctor) {
    notFound()
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Doctor Info */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Image
                  src={doctor.image || "https://images.unsplash.com/photo-1511174511562-5f97f4f4c1b3?auto=format&fit=crop&w=400&q=80"}
                  alt={doctor.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{doctor.name}</h1>
                <Badge variant="secondary" className="mx-auto">
                  {doctor.specialty}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {doctor.location}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  {doctor.experience} experience
                </div>
                <Link href="/appointments">
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Doctor Details */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  About Dr. {doctor.name.split(" ")[1]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {doctor.bio} Dr. {doctor.name.split(" ")[1]} is committed to providing personalized care and staying
                  up-to-date with the latest medical advances in {doctor.specialty.toLowerCase()}.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Education & Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {doctor.education.map((edu, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      • {edu}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {doctor.availability.map((time, index) => (
                    <div key={index} className="text-gray-600 dark:text-gray-300 text-sm">
                      {time}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // Importing here to ensure compatibility with static export
  const { doctors } = await import("@/lib/data");
  return doctors.map((doctor) => ({ id: doctor.id }));
}
