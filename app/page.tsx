import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Brain, Code, TrendingUp } from 'lucide-react'

// This would typically come from a CMS or database
const featuredPosts = [
  {
    title: "Building Production AI: Why 99% of AI POCs Fail to Scale",
    excerpt: "After building AI systems that process 2.8 million signals daily, I've learned the hard truth about what separates successful AI implementations from expensive failures.",
    category: "AI Engineering",
    date: "2025-01-20",
    readTime: "7 min",
    slug: "building-production-ai-why-pocs-fail",
    tags: ["AI Engineering", "MLOps", "Production Systems"]
  },
  {
    title: "The Hidden Cost of AI Hallucinations in Marketing: A $4.2B Problem",
    excerpt: "New research reveals how AI hallucinations in marketing automation tools are costing enterprises billions in wasted ad spend and missed opportunities.",
    category: "AI Marketing",
    date: "2025-01-19",
    readTime: "5 min",
    slug: "ai-hallucinations-marketing-cost",
    tags: ["AI Marketing", "Research", "Enterprise"]
  },
  {
    title: "From GPT to Production: Engineering Lessons from Early OpenAI Beta Access",
    excerpt: "Exclusive insights from beta testing GPT-3, ChatGPT, and GPT-4, including architectural decisions that enabled 74% prediction accuracy.",
    category: "AI Engineering",
    date: "2025-01-17",
    readTime: "6 min",
    slug: "gpt-to-production-engineering-lessons",
    tags: ["OpenAI", "GPT", "AI Architecture"]
  }
]

const categories = [
  {
    name: "AI Marketing",
    description: "Predictive analytics, marketing automation, and the future of demand generation",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    href: "/ai-marketing"
  },
  {
    name: "AI Engineering",
    description: "Building scalable AI systems, MLOps, and production-ready architectures",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    href: "/ai-engineering"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Thoughts on AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights on building AI systems that scale, predictive marketing strategies, and the intersection of engineering and business growth.
            </p>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400">
              <span>Founder of Hendricks.AI</span>
              <span>•</span>
              <span>Former Global Search Lead at SolarWinds</span>
              <span>•</span>
              <span>Early OpenAI Beta Tester</span>
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative p-8 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                
                <div className="relative">
                  <category.icon className="w-10 h-10 mb-4 text-blue-400" />
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <span className="text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Articles
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Posts */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Latest Insights</h2>
            
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group p-6 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-xs bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span className="text-sm text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {post.tags.map((tag) => (
                              <span key={tag} className="text-xs text-gray-500">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <span className="text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Brain className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get weekly insights on AI engineering and predictive marketing delivered to your inbox.
          </p>
          <Link
            href="https://hendricks.ai/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  )
}