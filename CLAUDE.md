# Project: Jose's Personal Website (Static Prototype)

## Purpose

This is a static HTML/CSS/JS personal website for Jose Parreno Garcia (Data Science Leadership Consultant). The site is:
- Built for GitHub Pages deployment (static only)
- A prototype to refine frontend design and content
- Will be migrated to React/framework in a future repo

**Primary goals:**
1. Generate consultancy inquiries from C-suite executives
2. Grow newsletter subscriber base (secondary)

---

## Project Structure

### Core Files
- [index.html](index.html) - Single-page website
- [styles.css](styles.css) - All styles (if exists, otherwise inline)
- [script.js](script.js) - Interactions and animations (if exists, otherwise inline)

### Reference Documentation (Living Documents)
- [website-blueprint.md](reference_docs/website-blueprint.md) - Requirements, content structure, design principles
- [implementation-notes.md](reference_docs/IMPLEMENTATION-NOTES.md) - Design decisions, technical implementation

Update these docs when making significant changes (see Quick Reference for which doc to update).

---

## Design Authority

The site uses a "Financial Editorial Authority" aesthetic inspired by premium business publications (FT, Bloomberg, Economist) targeting C-suite executives.

**Fixed (require explicit approval to change):**
- Typography: Cormorant Garamond (display), IBM Plex Sans (body), IBM Plex Mono (mono)
- Color palette: Charcoal (#1a1f2e), Taupe (#d4c5b9), Terracotta (#c75146), Cream (#faf8f3)
- Layout philosophy: Typography-forward, generous whitespace, editorial precision

**Flexible (can be modified/improved):**
- Component layouts and arrangement
- Adding or removing sections/components
- Content updates and refinements
- Interaction patterns and animations
- Responsive behavior

---

## Iteration Approach

**Workflow for improvements:**
1. Jose and Claude brainstorm potential improvements
2. Create structured todo lists or milestones
3. Implement as atomic PRs (small or large, design or functional)

---

## Known Constraints

### GitHub Pages (Static Hosting)
- Forms don't submit (contact form, newsletter signup)
- No server-side processing
- No backend logic
- This is acceptable for the prototype phase

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge - latest versions)
- Mobile-responsive (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

---

## Testing and Validation

### Before Committing Changes
Claude should verify:
- Visual inspection: Does it look correct in browser?
- Responsive: Does it work on mobile viewport?
- Links: Do navigation and external links work?
- Accessibility: Are semantics and contrast maintained?
- Performance: Are animations smooth?

### No Need to Mention
- GitHub Pages constraints (Jose understands this)
- Future migration concerns (focus on current iteration)
- Server-side limitations (accepted for prototype)

---

## Quick Reference

**Fixed (require explicit approval to change):**
- Typography: Cormorant Garamond, IBM Plex Sans, IBM Plex Mono
- Colors: Charcoal, Taupe, Terracotta, Cream
- Aesthetic: Financial Editorial Authority

**Flexible (can be modified/improved):**
- Layout arrangements and component additions/removals
- Content updates
- Interactions and animations
- Responsive behavior

**When to update reference docs:**
- Content/structure changes → [website-blueprint.md](reference_docs/website-blueprint.md)
- Design/implementation changes → [implementation-notes.md](reference_docs/IMPLEMENTATION-NOTES.md)
