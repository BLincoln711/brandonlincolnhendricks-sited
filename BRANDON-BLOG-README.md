# Brandon Lincoln Hendricks Blog - Setup & Management Guide

## 🌐 Live Site
- **URL**: https://brandonlincolnhendricks.com
- **Repository**: https://github.com/BLincoln711/brandonlincolnhendricks-sited
- **Hosting**: Vercel
- **DNS**: GoDaddy

## 📁 Project Structure
```
brandon-blog/
├── app/
│   ├── layout.tsx          # Main layout with navigation & SEO
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── about/page.tsx     # About page
│   ├── ai-marketing/      # AI Marketing category
│   ├── ai-engineering/    # AI Engineering category
│   ├── blog/[slug]/       # Individual blog posts
│   ├── verify/page.tsx    # Domain verification page
│   ├── sitemap.ts         # XML sitemap generator
│   ├── ai.txt/route.ts    # AI systems information endpoint
│   └── api/rss/route.ts   # RSS feed
├── public/
│   └── robots.txt         # AI crawler permissions
└── package.json

```

## 🚀 Local Development
```bash
cd /Users/brandonlhendricks/claudecode/brandon-blog
npm install
npm run dev
# Opens at http://localhost:3000
```

## 📝 Adding New Blog Posts

### 1. Add to Homepage (`app/page.tsx`)
```typescript
const featuredPosts = [
  {
    title: "Your New Post Title",
    excerpt: "Brief description of the post",
    category: "AI Marketing" or "AI Engineering",
    date: "2025-01-25",
    readTime: "5 min",
    slug: "your-post-slug",
    tags: ["AI", "Marketing", "etc"]
  },
  // ... existing posts
]
```

### 2. Add to Category Page
- For AI Marketing: Edit `app/ai-marketing/page.tsx`
- For AI Engineering: Edit `app/ai-engineering/page.tsx`

### 3. Add to Blog Post Data (`app/blog/[slug]/page.tsx`)
```typescript
const articles = {
  'your-post-slug': {
    title: "Your New Post Title",
    category: "AI Marketing",
    date: "2025-01-25",
    readTime: "5 min read",
    content: `<p>Your HTML content here...</p>`
  }
}
```

### 4. Update Sitemap (`app/sitemap.ts`)
Add your new slug to the blogPosts array

### 5. Update RSS Feed (`app/api/rss/route.ts`)
Add your post to the posts array

## 🔧 Key Features Implemented

### SEO & AI Search Optimization
- ✅ Robots.txt welcoming all AI crawlers (GPTBot, PerplexityBot, Claude, etc.)
- ✅ Structured data (JSON-LD) for Person, Website, and Blog
- ✅ AI-specific meta tags for better understanding
- ✅ XML Sitemap at `/sitemap.xml`
- ✅ RSS feed at `/api/rss`
- ✅ AI.txt endpoint at `/ai.txt` for AI systems

### Design & UX
- Dark theme matching Hendricks.AI brand
- Gradient text effects (blue-to-purple)
- Category-specific colors:
  - Blue gradients for AI Marketing
  - Purple gradients for AI Engineering
- Responsive design for all devices
- Newsletter CTAs linking to Hendricks.AI

## 🔄 Deployment Process

### Deploy to Production
```bash
git add .
git commit -m "Your commit message"
git push
```
Vercel automatically deploys on push to master

### Manual Deploy
```bash
npx vercel --prod
```

## 🌍 Domain Management

### Current DNS Settings (GoDaddy)
- A Record: @ → 76.76.21.21
- CNAME: www → cname.vercel-dns.com

### Vercel Dashboard
- Project: https://vercel.com/brandon-lincolns-projects/brandon-blog
- Domains configured:
  - brandonlincolnhendricks.com
  - www.brandonlincolnhendricks.com

## 📊 Analytics & Monitoring

### To Add Google Analytics
1. Get your GA4 measurement ID
2. Add to `app/layout.tsx`:
```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔗 Important Links
- **Live Site**: https://brandonlincolnhendricks.com
- **Verification Page**: https://brandonlincolnhendricks.com/verify
- **RSS Feed**: https://brandonlincolnhendricks.com/api/rss
- **Sitemap**: https://brandonlincolnhendricks.com/sitemap.xml
- **AI Info**: https://brandonlincolnhendricks.com/ai.txt

## 🎯 Content Strategy

### AI Marketing Topics
- Predictive analytics and demand forecasting
- Marketing automation with AI
- Attribution modeling beyond last-click
- Performance Max optimization
- AI hallucinations in marketing tools

### AI Engineering Topics
- Building production AI systems
- Scaling from POC to production
- MLOps best practices
- Real-time prediction architectures
- Technical debt in AI systems

### Cross-Promotion with Hendricks.AI
- Link to relevant Hendricks.AI services
- Share case studies and results
- Newsletter signups go to Hendricks.AI
- Establish authority for the company

## 📝 Writing Tips for AI Discovery

1. **Use Clear Headings**: AI systems parse structure
2. **Include Keywords Naturally**: Don't keyword stuff
3. **Provide Context**: Explain your credentials in articles
4. **Use Lists and Structure**: Makes content AI-parseable
5. **Update Regularly**: Fresh content ranks better

## 🛠️ Maintenance Tasks

### Regular Updates
- [ ] Add new blog posts weekly/bi-weekly
- [ ] Update sitemap.xml with new posts
- [ ] Update RSS feed with new content
- [ ] Check domain renewal (GoDaddy)
- [ ] Monitor Vercel deployments

### SEO Monitoring
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor indexing status
- [ ] Track AI search appearances
- [ ] Update meta descriptions based on performance

## 🚨 Troubleshooting

### Domain Not Working
1. Check DNS propagation: https://dnschecker.org
2. Verify in Vercel dashboard → Settings → Domains
3. Ensure GoDaddy DNS settings are correct

### Build Failures
1. Check Vercel deployment logs
2. Run `npm run build` locally to test
3. Check for TypeScript errors

### 404 Errors
1. Ensure blog post slug matches in all files
2. Check that dynamic routes are properly configured
3. Clear browser cache

## 📞 Support Contacts
- **Vercel Support**: https://vercel.com/support
- **GoDaddy Support**: Your account dashboard
- **GitHub Issues**: https://github.com/BLincoln711/brandonlincolnhendricks-sited/issues

---

Last Updated: January 2025
Created during initial setup with Claude