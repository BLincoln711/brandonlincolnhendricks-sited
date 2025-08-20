import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brandonlincolnhendricks.com'
  
  // Define all your blog posts
  const blogPosts = [
    'building-production-ai-why-pocs-fail',
    'ai-hallucinations-marketing-cost',
    'gpt-to-production-engineering-lessons',
    'predictive-analytics-vs-traditional-marketing',
    'death-of-last-click-attribution',
    'google-performance-max-predictive-ai',
    'technical-debt-ai-systems',
    'scaling-ai-predictions-architecture'
  ]
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-marketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-engineering`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}