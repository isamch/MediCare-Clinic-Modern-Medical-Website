import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>

            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-6">
              <User className="h-4 w-4 mr-2" />
              <span className="mr-6">{post.author}</span>
              <Calendar className="h-4 w-4 mr-2" />
              <span className="mr-6">{post.date}</span>
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime} read</span>
            </div>

            <Image
              src={post.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Need Medical Advice?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our experienced doctors are here to help. Schedule a consultation today.
            </p>
            <Link href="/appointments">
              <Button>Book an Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
