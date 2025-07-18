# 🚀 Deployment Checklist - Domain Consolidation

## ✅ Pre-Deployment Checklist

### 1. Code Changes (COMPLETED)
- [x] Updated `package.json` homepage to `https://www.silasabiodun.com/`
- [x] Updated all meta tags in `index.html` to use main domain
- [x] Updated structured data (JSON-LD) to use main domain
- [x] Updated sitemap.xml to use main domain
- [x] Updated robots.txt to use main domain
- [x] Created `_redirects` file for Vercel
- [x] Created comprehensive SEO optimization

### 2. Vercel Configuration (REQUIRED)

**In your Vercel dashboard:**

- [ ] **Add Custom Domain:**
  - Go to Project Settings → Domains
  - Add: `www.silasabiodun.com`
  - Verify DNS settings

- [ ] **Set up Redirects:**
  - Go to Project Settings → Redirects
  - Add redirect rule:
    ```
    Source: https://silas-abiodun.vercel.app/*
    Destination: https://www.silasabiodun.com/:splat
    Status: 301 (Permanent)
    ```

- [ ] **Environment Variables:**
  - Add: `NEXT_PUBLIC_SITE_URL=https://www.silasabiodun.com`

### 3. DNS Configuration (REQUIRED)

**In your domain registrar:**

- [ ] **A Records:**
  - `@` → Vercel IP (or your hosting provider)
  - `www` → Vercel IP (or your hosting provider)

- [ ] **CNAME Records:**
  - `www` → `cname.vercel-dns.com` (if using Vercel)

### 4. Google Search Console (CRITICAL)

**Set up for both domains:**

- [ ] **Add Properties:**
  - `https://silas-abiodun.vercel.app/`
  - `https://www.silasabiodun.com/`

- [ ] **Verify Ownership:**
  - Both domains verified
  - DNS verification completed

- [ ] **Submit Sitemaps:**
  - Submit sitemap for both domains
  - Monitor indexing status

### 5. Deploy Updated Code

- [ ] **Deploy to Vercel:**
  ```bash
  git add .
  git commit -m "Domain consolidation: Update all URLs to www.silasabiodun.com"
  git push origin main
  ```

- [ ] **Verify Build:**
  - Check Vercel deployment logs
  - Ensure no build errors
  - Test redirects work

## 🔍 Post-Deployment Verification

### 1. Test Redirects

```bash
# Test Vercel domain redirect
curl -I https://silas-abiodun.vercel.app/
# Should return: 301 Moved Permanently to https://www.silasabiodun.com/

# Test non-www to www redirect
curl -I https://silasabiodun.com/
# Should return: 301 Moved Permanently to https://www.silasabiodun.com/
```

### 2. Check Meta Tags

- [ ] Visit `https://www.silasabiodun.com/`
- [ ] View page source
- [ ] Verify canonical URL is correct
- [ ] Check Open Graph tags
- [ ] Verify structured data

### 3. Test SEO Tools

- [ ] **Google Rich Results Test:**
  - Test `https://www.silasabiodun.com/`
  - Verify structured data is valid

- [ ] **Google Search Console:**
  - Check for crawl errors
  - Monitor redirect status
  - Submit URL for re-indexing

### 4. Monitor Search Results

- [ ] **Search "Silas Abiodun" on Google:**
  - Check if main domain appears
  - Note current ranking position
  - Monitor changes over time

## 📊 Monitoring Timeline

### Week 1-2:
- [ ] Daily: Check Google Search Console for errors
- [ ] Daily: Monitor redirect status
- [ ] Weekly: Check search results for "Silas Abiodun"

### Week 3-4:
- [ ] Request re-indexing of main domain
- [ ] Monitor traffic to both domains
- [ ] Check if main domain starts ranking

### Month 2-3:
- [ ] Main domain should rank #1 for "Silas Abiodun"
- [ ] Vercel domain should redirect properly
- [ ] Traffic should consolidate on main domain

## 🚨 Troubleshooting

### If Redirects Don't Work:

1. **Check Vercel Settings:**
   - Verify redirect rules are active
   - Check domain configuration
   - Review deployment logs

2. **Check DNS:**
   - Verify A records point to correct IP
   - Check CNAME records
   - Allow 24-48 hours for DNS propagation

3. **Check Google Search Console:**
   - Look for crawl errors
   - Check redirect status
   - Submit URL for re-indexing

### If Main Domain Still Doesn't Rank:

1. **Build Backlinks:**
   - Update all external profiles
   - Create content on main domain
   - Build local citations

2. **Content Strategy:**
   - Add blog posts
   - Create case studies
   - Publish industry insights

3. **Local SEO:**
   - Set up Google My Business
   - Add to local directories
   - Create location-specific content

## 🎯 Success Indicators

**You'll know it's working when:**

- [ ] `https://silas-abiodun.vercel.app/` redirects to `https://www.silasabiodun.com/`
- [ ] Google search for "Silas Abiodun" shows main domain
- [ ] Google Search Console shows redirect status as "Success"
- [ ] Traffic increases to main domain
- [ ] Main domain ranks #1 for your name

---

**Remember:** Domain consolidation is a process that takes time. Be patient and consistent with monitoring and optimization. 