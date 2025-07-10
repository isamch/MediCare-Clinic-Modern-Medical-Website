import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={post.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"}
            alt={post.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4">{post.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <User className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.author}</span>
          <Calendar className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime} read</span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-primary/80 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
          >
            Read More
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
