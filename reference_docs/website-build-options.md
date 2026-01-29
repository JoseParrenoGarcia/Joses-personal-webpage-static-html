# Website Build Options

This document outlines three different approaches to building the personal website based on the website-blueprint.md specifications.

---

## Option 1: Plain HTML/CSS on GitHub Pages

### Setup Process
- Create HTML files for each page
- Write CSS for styling
- Push to GitHub repo
- Enable GitHub Pages (free hosting)
- Point custom domain (requires domain purchase ~$10-15/year)

### Pros
- Free hosting
- Full control over code
- Simple, no build tools needed
- Fast load times
- Easy to understand and edit

### Cons
- **Forms won't work** - GitHub Pages is static only, no backend for contact form processing
  - Workaround: Use Formspree, Netlify Forms, or Google Forms embed (adds dependency)
- Manual newsletter integration (embed Substack form)
- Repetitive code (nav/footer copied across all pages)
- No templating = harder to maintain consistency
- Manual updates across multiple HTML files
- Basic, might look dated if not carefully designed

### Time to Build
1-2 days for basic version

### Cost
Domain only (~$10-15/year)

### Best For
If you're comfortable with HTML/CSS and don't mind form workarounds

---

## Option 2: Static Site Generator (Astro/Hugo) + Netlify

### Setup Process
- Install Astro or Hugo (static site generators)
- Create page templates with components
- Write content in Markdown
- Push to GitHub
- Deploy on Netlify (free hosting with forms included)
- Connect custom domain

### Pros
- Free hosting on Netlify
- **Built-in form handling** (Netlify Forms - 100 submissions/month free)
- Component-based (write nav once, use everywhere)
- Easier to maintain and update
- Better performance than plain HTML
- Modern dev experience
- Can add features later without rewriting
- Deploy automatically on git push

### Cons
- Learning curve if unfamiliar with static site generators
- Need Node.js installed locally
- Slightly more complex setup than plain HTML
- Need to learn basic templating syntax

### Time to Build
2-3 days (including learning)

### Cost
Free (Netlify free tier + domain $10-15/year)

### Best For
If you want a professional site with forms and easier long-term maintenance

### Example Form Setup (Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Setup Steps
1. Install Astro: `npm create astro@latest`
2. Create page templates based on blueprint
3. Push to GitHub
4. Connect to Netlify (one-click deploy)
5. Set up Netlify Forms for contact page
6. Add custom domain

---

## Option 3: Next.js + Vercel (or Astro + Vercel)

### Setup Process
- Create Next.js project (React framework)
- Build pages as React components
- Push to GitHub
- Deploy on Vercel (free hosting)
- Connect custom domain

### Pros
- Free hosting on Vercel
- Modern, scalable framework
- Easy to add interactive features later (booking calendar, gated content, etc.)
- Automatic deployments on git push
- Built-in image optimization
- Great SEO support
- Can add API routes for custom form handling
- Industry-standard (easy to hire help if needed)

### Cons
- Steeper learning curve (need React knowledge)
- More complex than static HTML
- Overkill for a simple site
- Form handling requires custom API route or third-party service

### Time to Build
3-5 days (including React learning if needed)

### Cost
Free (Vercel free tier + domain $10-15/year)

### Best For
If you want maximum flexibility for future features and have some dev experience

---

## Comparison Table

| Factor | HTML/CSS + GitHub Pages | Astro/Hugo + Netlify | Next.js + Vercel |
|--------|-------------------------|----------------------|------------------|
| **Setup difficulty** | Easy | Medium | Medium-Hard |
| **Maintenance** | Hard (repetitive code) | Easy (components) | Easy (components) |
| **Form handling** | Requires workaround | Built-in (100/mo free) | Requires setup |
| **Cost** | Domain only (~$12/yr) | Domain only (~$12/yr) | Domain only (~$12/yr) |
| **Speed to build** | 1-2 days | 2-3 days | 3-5 days |
| **Future scalability** | Limited | Good | Excellent |
| **Learning curve** | Minimal | Low-Medium | Medium-High |
| **Professional look** | Depends on CSS skills | Easy with themes | Easy with components |

---

## Recommendation: Option 2 (Astro + Netlify)

### Why This Option
1. **Forms just work** - Critical for consulting inquiries
2. **Components prevent repetition** - Write nav/footer once
3. **Easy content updates** - Change text without touching layout
4. **Free** - No ongoing costs beyond domain
5. **Professional appearance** - Easy to make it look polished
6. **Not overkill** - Appropriate complexity for your needs
7. **Room to grow** - Can add features later without rewriting

---

## Decision Questions

Before choosing an option, consider:

1. **Comfort with command line?**
   - If no → Option 1 might be better
   - If yes → Option 2 or 3

2. **Time to invest in learning?**
   - Minimal → Option 1
   - Moderate → Option 2
   - Significant → Option 3

3. **Need forms working day 1?**
   - If yes → Option 2 or form service with Option 1

4. **Future plans?**
   - If blog/resources/booking calendar likely → Option 2 or 3
   - If simple site forever → Option 1

---

## Next Steps

1. Decide which option fits your technical comfort and time availability
2. Purchase domain name (e.g., joseparreno.com)
3. Set up development environment based on chosen option
4. Use website-blueprint.md as content guide
5. Build page by page
6. Test thoroughly on mobile and desktop
7. Deploy and connect domain
8. Set up analytics tracking
9. Test all forms and CTAs
10. Launch and promote
