import Link from 'next/link'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

const aiMarketingPosts = [
  {
    title: "The Hidden Cost of AI Hallucinations in Marketing: A $4.2B Problem",
    excerpt: "New research reveals how AI hallucinations in marketing automation tools are costing enterprises billions in wasted ad spend and missed opportunities.",
    date: "2025-01-19",
    readTime: "5 min",
    slug: "ai-hallucinations-marketing-cost"
  },
  {
    title: "Predictive Analytics vs Traditional Marketing: The 312% ROI Difference",
    excerpt: "A deep dive into how predictive AI transforms marketing ROI by anticipating demand rather than reacting to it.",
    date: "2025-01-15",
    readTime: "6 min",
    slug: "predictive-analytics-vs-traditional-marketing"
  },
  {
    title: "The Death of Last-Click Attribution: AI's Answer to Marketing Measurement",
    excerpt: "Why AI-powered multi-touch attribution models are making traditional measurement obsolete.",
    date: "2025-01-10",
    readTime: "8 min",
    slug: "death-of-last-click-attribution"
  },
  {
    title: "Google Performance Max + Predictive AI: The Ultimate Growth Hack",
    excerpt: "How to supercharge Performance Max campaigns with predictive demand signals for 287% better results.",
    date: "2025-01-08",
    readTime: "5 min",
    slug: "google-performance-max-predictive-ai"
  }
]

export default function AIMarketingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-800/50 rounded-full text-sm text-blue-400 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>AI Marketing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Marketing Insights
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exploring the intersection of artificial intelligence and marketing strategy. 
              From predictive analytics to automated optimization, discover how AI is reshaping 
              the future of demand generation.
            </p>
          </div>

          {/* Featured Topics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Predictive Analytics</h3>
              <p className="text-gray-400 text-sm">Forecasting market demand before it materializes</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Marketing Automation</h3>
              <p className="text-gray-400 text-sm">AI-powered campaign optimization at scale</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Attribution Modeling</h3>
              <p className="text-gray-400 text-sm">Beyond last-click with AI-driven insights</p>
            </div>
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {aiMarketingPosts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all"
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
                      
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <span className="text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Get Weekly AI Marketing Insights</h3>
            <p className="text-gray-300 mb-6">
              Stay ahead with the latest trends in predictive marketing and AI-driven growth strategies.
            </p>
            <Link
              href="https://hendricks.ai/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}