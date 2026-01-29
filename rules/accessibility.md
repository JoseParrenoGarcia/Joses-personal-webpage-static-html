# Accessibility Rules

## Semantic HTML

**Use semantic HTML5 elements:**
- `<nav>` for navigation
- `<section>` for major page sections with ids
- `<header>`, `<footer>`, `<main>` where appropriate
- `<h1>` through `<h6>` in proper hierarchy (don't skip levels)
- `<button>` for interactive elements (not `<div>` or `<a>` without href)

**Heading hierarchy:**
- One `<h1>` per page (hero title)
- `<h2>` for section titles
- `<h3>` for subsections or card titles
- Never skip levels (h2 → h4)

## Color Contrast

**Minimum ratios (WCAG AA):**
- Normal text: 4.5:1
- Large text (18pt+ or 14pt+ bold): 3:1
- UI components and graphical objects: 3:1

**Current palette contrast (against Cream #faf8f3):**
- Charcoal (#1a1f2e): ✓ Passes for all text sizes
- Terracotta (#c75146): ✓ Passes for large text and buttons

Always verify contrast when adding new color combinations.

## Forms

**All form inputs must have:**
- Associated `<label>` with `for` attribute matching input `id`
- Or `aria-label` for inputs without visible labels
- Clear `placeholder` text (but don't rely on it for accessibility)
- `required` attribute for required fields
- Appropriate `type` attribute (email, text, etc.)

**Example:**
```html
<label for="email">Email address</label>
<input type="email" id="email" name="email" required>
```

## Links and Buttons

**Links (`<a>`):**
- Must have meaningful text (not "click here" or "read more")
- External links should indicate they open in new tab if using `target="_blank"`
- All `<a>` tags must have valid `href` attribute

**Buttons (`<button>`):**
- Use for actions (submit form, toggle, open modal)
- Must have descriptive text or `aria-label`
- Never use `<div>` or `<span>` styled as buttons

## Keyboard Navigation

**All interactive elements must be:**
- Reachable by keyboard (Tab key)
- Activatable by keyboard (Enter or Space)
- Show visible focus state (`:focus` styles)

**Focus indicators:**
- Never remove outline without providing alternative
- Minimum 2px visible outline or border
- High contrast focus state

## Images

**All `<img>` tags must have `alt` attribute:**
- Descriptive alt text for meaningful images
- Empty `alt=""` for decorative images
- Don't use "image of" or "picture of" - just describe content

## ARIA

**Use ARIA sparingly:**
- First rule: Don't use ARIA if semantic HTML works
- Use `aria-label` for icon buttons without text
- Use `aria-current="page"` for current navigation item
- Use `role="presentation"` for purely decorative elements

**Never do:**
- Use ARIA when semantic HTML exists
- Use ARIA to fix poorly structured HTML
- Override native semantics unnecessarily
