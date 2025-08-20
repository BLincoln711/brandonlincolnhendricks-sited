import Link from 'next/link'
import { Brain, Briefcase, GraduationCap, Trophy, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Brandon
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Founder, AI Engineer, and Predictive Marketing Pioneer
            </p>
          </div>

          {/* Bio Section */}
          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-lg leading-relaxed mb-6">
              I'm Brandon Lincoln Hendricks, founder of Hendricks.AI, the first AI Prediction Marketing Agency. 
              I've spent my career at the intersection of technology and marketing, building systems that don't just 
              analyze the past but predict the future.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              As the former Global Lead of Total Search at SolarWinds, I managed a $20M+ annual marketing budget 
              and discovered a fundamental truth: even the most sophisticated marketing teams are essentially reactive, 
              responding to demand after it appears. This realization led me to build Hendricks.AI, where we use 
              AI to predict market demand 2-4 weeks before it materializes with 74% accuracy.
            </p>
            
            <p className="text-lg leading-relaxed">
              As one of the early beta testers for OpenAI's GPT-3, ChatGPT, and GPT-4, I gained unique insights 
              into the potential of AI for predictive analytics. This early access allowed me to experiment with 
              AI applications that weren't yet available to the broader market, ultimately leading to the development 
              of our proprietary prediction system that processes 2.8 million signals daily.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Journey</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Hendricks.AI</h3>
                  <p className="text-gray-400 mb-2">Founder & CEO • 2025 - Present</p>
                  <p className="text-gray-300">
                    Building the first AI Prediction Marketing Agency. Achieved 74% accuracy in predicting 
                    market demand 2-4 weeks early, delivering 312% average ROI for enterprise clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">SolarWinds</h3>
                  <p className="text-gray-400 mb-2">Global Lead of Total Search • 2020 - 2024</p>
                  <p className="text-gray-300">
                    Managed $20M+ annual marketing budget. Led global search strategy across paid and organic channels. 
                    Discovered the reactive nature of traditional marketing that inspired Hendricks.AI.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">OpenAI Beta Programs</h3>
                  <p className="text-gray-400 mb-2">Early Beta Tester • 2020 - Present</p>
                  <p className="text-gray-300">
                    Selected for early access to GPT-3, ChatGPT, and GPT-4 beta programs. Applied learnings 
                    to develop predictive AI systems for marketing applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Areas of Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">AI Engineering</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Production AI systems at scale</li>
                  <li>• MLOps and infrastructure design</li>
                  <li>• Real-time prediction systems</li>
                  <li>• AI architecture patterns</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Predictive Marketing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Demand forecasting algorithms</li>
                  <li>• Performance marketing optimization</li>
                  <li>• Multi-channel attribution</li>
                  <li>• Marketing automation at scale</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Speaking & Writing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Speaking & Writing</h2>
            
            <p className="text-lg text-gray-300 text-center mb-8">
              I regularly share insights on AI engineering, predictive marketing, and the future of demand intelligence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/ai-marketing"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Read AI Marketing Articles
              </Link>
              <Link
                href="/ai-engineering"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Read AI Engineering Articles
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              Interested in AI engineering, predictive marketing, or just want to chat about the future of AI?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://linkedin.com/in/brandonlincolnhendricks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Connect on LinkedIn
              </a>
              <a
                href="mailto:brandon@hendricks.ai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}