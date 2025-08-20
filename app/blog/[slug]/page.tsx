import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'

// This would typically come from a CMS or database
// For now, we'll import the articles from Hendricks.AI
const articles = {
  'building-production-ai-why-pocs-fail': {
    title: "Building Production AI: Why 99% of AI POCs Fail to Scale",
    category: "AI Engineering",
    date: "2025-01-20",
    readTime: "7 min read",
    content: `<p>After building AI systems that process 2.8 million signals daily...</p>`
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <article className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
    </div>
  )
}