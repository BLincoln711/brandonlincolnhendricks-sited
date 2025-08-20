import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Brain, Code, TrendingUp } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brandon Lincoln Hendricks | AI Marketing & Engineering Blog",
  description: "Insights on AI engineering, predictive marketing, and building AI systems that scale. By the founder of Hendricks.AI.",
  keywords: "AI Marketing, AI Engineering, Predictive Analytics, Machine Learning, Marketing Technology",
  authors: [{ name: "Brandon Lincoln Hendricks" }],
  openGraph: {
    title: "Brandon Lincoln Hendricks | AI Marketing & Engineering Blog",
    description: "Insights on AI engineering, predictive marketing, and building AI systems that scale.",
    url: "https://brandonlincolnhendricks.com",
    siteName: "Brandon Lincoln Hendricks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Lincoln Hendricks | AI Marketing & Engineering Blog",
    description: "Insights on AI engineering, predictive marketing, and building AI systems that scale.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Brandon Lincoln Hendricks
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/ai-marketing" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  AI Marketing
                </Link>
                <Link href="/ai-engineering" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  AI Engineering
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <a 
                  href="https://hendricks.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
                >
                  Hendricks.AI
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="pt-16">
          {children}
        </main>
        
        <footer className="bg-gray-900 text-gray-300 py-8 mt-20 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Brandon Lincoln Hendricks. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}