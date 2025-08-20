import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Code } from 'lucide-react'

const aiEngineeringPosts = [
  {
    title: "Building Production AI: Why 99% of AI POCs Fail to Scale",
    excerpt: "After building AI systems that process 2.8 million signals daily, I've learned the hard truth about what separates successful AI implementations from expensive failures.",
    date: "2025-01-20",
    readTime: "7 min",
    slug: "building-production-ai-why-pocs-fail"
  },
  {
    title: "From GPT to Production: Engineering Lessons from Early OpenAI Beta Access",
    excerpt: "Exclusive insights from beta testing GPT-3, ChatGPT, and GPT-4, including architectural decisions that enabled 74% prediction accuracy.",
    date: "2025-01-17",
    readTime: "6 min",
    slug: "gpt-to-production-engineering-lessons"
  },
  {
    title: "The Real Cost of Technical Debt in AI Systems",
    excerpt: "Why shortcuts in AI development compound faster than traditional software, and how to build maintainable ML systems.",
    date: "2025-01-12",
    readTime: "8 min",
    slug: "technical-debt-ai-systems"
  },
  {
    title: "Scaling from 1K to 2.8M Daily Predictions: Architecture Deep Dive",
    excerpt: "The infrastructure, design decisions, and hard lessons learned scaling an AI prediction system by 2,800x.",
    date: "2025-01-05",
    readTime: "10 min",
    slug: "scaling-ai-predictions-architecture"
  }
]

export default function AIEngineeringPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-800/50 rounded-full text-sm text-purple-400 mb-6">
              <Code className="w-4 h-4" />
              <span>AI Engineering</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Engineering Deep Dives
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technical insights on building, scaling, and maintaining production AI systems. 
              From MLOps best practices to architectural patterns that actually work in the real world.
            </p>
          </div>

          {/* Featured Topics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">MLOps & Infrastructure</h3>
              <p className="text-gray-400 text-sm">Building reliable AI pipelines at scale</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Model Architecture</h3>
              <p className="text-gray-400 text-sm">Design patterns for production AI systems</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Performance & Scale</h3>
              <p className="text-gray-400 text-sm">Optimizing for millions of daily predictions</p>
            </div>
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {aiEngineeringPosts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <span className="text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Code Examples CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Want the Code?</h3>
            <p className="text-gray-300 mb-6">
              Get access to code examples, architecture diagrams, and implementation guides from these articles.
            </p>
            <Link
              href="https://github.com/brandonlhendricks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}