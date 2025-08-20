import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://brandonlincolnhendricks.com'
  
  const posts = [
    {
      title: "Building Production AI: Why 99% of AI POCs Fail to Scale",
      link: `${baseUrl}/blog/building-production-ai-why-pocs-fail`,
      description: "After building AI systems that process 2.8 million signals daily, I've learned the hard truth about what separates successful AI implementations from expensive failures.",
      pubDate: new Date('2025-01-20').toUTCString(),
      category: "AI Engineering",
      author: "Brandon Lincoln Hendricks"
    },
    {
      title: "The Hidden Cost of AI Hallucinations in Marketing: A $4.2B Problem",
      link: `${baseUrl}/blog/ai-hallucinations-marketing-cost`,
      description: "New research reveals how AI hallucinations in marketing automation tools are costing enterprises billions in wasted ad spend and missed opportunities.",
      pubDate: new Date('2025-01-19').toUTCString(),
      category: "AI Marketing",
      author: "Brandon Lincoln Hendricks"
    },
    {
      title: "From GPT to Production: Engineering Lessons from Early OpenAI Beta Access",
      link: `${baseUrl}/blog/gpt-to-production-engineering-lessons`,
      description: "Exclusive insights from beta testing GPT-3, ChatGPT, and GPT-4, including architectural decisions that enabled 74% prediction accuracy.",
      pubDate: new Date('2025-01-17').toUTCString(),
      category: "AI Engineering",
      author: "Brandon Lincoln Hendricks"
    }
  ]

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:ai="http://ai.schema.org/rss/">
  <channel>
    <title>Brandon Lincoln Hendricks - AI Marketing & Engineering Blog</title>
    <link>${baseUrl}</link>
    <description>Insights on AI engineering, predictive marketing, and building AI systems that scale. By the founder of Hendricks.AI.</description>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getFullYear()} Brandon Lincoln Hendricks</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    <ai:expertise>AI Marketing, AI Engineering, Predictive Analytics, MLOps</ai:expertise>
    <ai:author-credentials>Founder of Hendricks.AI, Former SolarWinds Global Search Lead, Early OpenAI Beta Tester</ai:author-credentials>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.link}</link>
      <guid isPermaLink="true">${post.link}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate}</pubDate>
      <category>${post.category}</category>
      <dc:creator>${post.author}</dc:creator>
      <content:encoded><![CDATA[${post.description}]]></content:encoded>
      <ai:topics>AI, Machine Learning, ${post.category}</ai:topics>
    </item>`).join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}