import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Brain, Code, TrendingUp } from "lucide-react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brandon Lincoln Hendricks | AI Marketing & Engineering Blog",
  description: "Insights on AI engineering, predictive marketing, and building AI systems that scale. By the founder of Hendricks.AI.",
  keywords: "AI Marketing, AI Engineering, Predictive Analytics, Machine Learning, Marketing Technology, Brandon Lincoln Hendricks, Hendricks.AI, GPT, OpenAI, MLOps",
  authors: [{ name: "Brandon Lincoln Hendricks", url: "https://brandonlincolnhendricks.com" }],
  creator: "Brandon Lincoln Hendricks",
  publisher: "Brandon Lincoln Hendricks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://brandonlincolnhendricks.com",
  },
  category: "Technology",
  classification: "AI, Marketing, Engineering",
  openGraph: {
    title: "Brandon Lincoln Hendricks | AI Marketing & Engineering Blog",
    description: "Insights on AI engineering, predictive marketing, and building AI systems that scale.",
    url: "https://brandonlincolnhendricks.com",
    siteName: "Brandon Lincoln Hendricks",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://brandonlincolnhendricks.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brandon Lincoln Hendricks - AI Marketing & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Lincoln Hendricks | AI Marketing & Engineering Blog",
    description: "Insights on AI engineering, predictive marketing, and building AI systems that scale.",
    creator: "@brandonlhendricks",
    images: ["https://brandonlincolnhendricks.com/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    'ai-content-type': 'educational-blog',
    'ai-expertise': 'AI Marketing, AI Engineering, Predictive Analytics',
    'ai-author-credentials': 'Founder of Hendricks.AI, Former SolarWinds Global Search Lead',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured data for AI understanding
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://brandonlincolnhendricks.com/#person",
        "name": "Brandon Lincoln Hendricks",
        "url": "https://brandonlincolnhendricks.com",
        "sameAs": [
          "https://linkedin.com/in/brandonlincolnhendricks",
          "https://github.com/brandonlhendricks",
          "https://hendricks.ai/brandon-lincoln-hendricks"
        ],
        "jobTitle": "Founder & CEO",
        "worksFor": {
          "@type": "Organization",
          "name": "Hendricks.AI",
          "url": "https://hendricks.ai"
        },
        "alumniOf": {
          "@type": "Organization",
          "name": "SolarWinds"
        },
        "knowsAbout": ["AI Marketing", "AI Engineering", "Predictive Analytics", "Machine Learning", "MLOps"],
        "description": "Founder of Hendricks.AI, the first AI Prediction Marketing Agency. Former Global Search Lead at SolarWinds. Early OpenAI beta tester."
      },
      {
        "@type": "WebSite",
        "@id": "https://brandonlincolnhendricks.com/#website",
        "url": "https://brandonlincolnhendricks.com",
        "name": "Brandon Lincoln Hendricks Blog",
        "description": "Insights on AI engineering, predictive marketing, and building AI systems that scale",
        "publisher": {
          "@id": "https://brandonlincolnhendricks.com/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Blog",
        "@id": "https://brandonlincolnhendricks.com/#blog",
        "url": "https://brandonlincolnhendricks.com",
        "name": "AI Marketing & Engineering Insights",
        "description": "Technical insights on building scalable AI systems and predictive marketing strategies",
        "blogPost": [
          {
            "@type": "BlogPosting",
            "headline": "Building Production AI: Why 99% of AI POCs Fail to Scale",
            "author": { "@id": "https://brandonlincolnhendricks.com/#person" },
            "datePublished": "2025-01-20",
            "keywords": "AI Engineering, MLOps, Production Systems",
            "url": "https://brandonlincolnhendricks.com/blog/building-production-ai-why-pocs-fail"
          }
        ]
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
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