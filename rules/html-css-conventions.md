# HTML & CSS Conventions

## Class Naming

**Pattern: Component-based (existing pattern in codebase)**

Format: `component-element` or `component-modifier`

**Examples from current code:**
- `hero-content`, `hero-title`, `hero-subtitle`
- `service-card`, `service-title`, `service-description`
- `nav-container`, `nav-links`, `nav-logo`

**Rules:**
- Use lowercase with hyphens (kebab-case)
- Component name first, then element: `component-element`
- For modifiers: `component-modifier` (e.g., `btn-primary`, `btn-secondary`)
- Avoid abbreviations unless very clear (btn is ok, svc is not)
- Be specific and descriptive

**Good:**
```html
<div class="service-card">
  <h3 class="service-title">Title</h3>
  <p class="service-description">Description</p>
</div>
```

**Bad:**
```html
<div class="card">
  <h3 class="title">Title</h3>
  <p class="desc">Description</p>
</div>
```

## HTML Structure

**Indentation:**
- 4 spaces per indent level
- No tabs

**Comments:**
- Use HTML comments for major sections: `<!-- Section Name -->`
- Keep comments brief and clear
- Comment complex structures or non-obvious decisions

**Attributes order:**
1. `id`
2. `class`
3. `name`
4. `type`
5. `href`, `src`, `action`
6. `required`, `disabled`, etc.
7. `aria-*` attributes

## CSS Organization

**File structure (styles.css):**
1. CSS variables (`:root`)
2. Reset/base styles
3. Typography
4. Layout/grid utilities
5. Components (in page order: nav, hero, services, etc.)
6. Responsive/media queries at end

**CSS variables usage:**
Always use CSS variables for:
- Colors: `var(--color-charcoal)`, `var(--color-terracotta)`, etc.
- Typography: `var(--font-display)`, `var(--font-body)`, `var(--font-mono)`
- Spacing: Create variables if patterns emerge

**Never hardcode:**
- Brand colors (use CSS variables)
- Font families (use CSS variables)
- Repeated spacing values

## CSS Naming & Patterns

**Specificity:**
- Use classes, not IDs for styling
- Avoid `!important` unless absolutely necessary
- Keep specificity low (single class is ideal)

**Formatting:**
- One selector per line for multi-selector rules
- Space after colon: `color: red;` not `color:red;`
- Alphabetize properties (or group logically)
- 4 spaces indent for properties

**Example:**
```css
.service-card {
    background: var(--color-cream);
    border-radius: 8px;
    padding: 2rem;
    transition: transform 0.3s ease;
}
```

## Comments

**CSS comments:**
```css
/* ==================
   Section Name
   ================== */
```

Use for major sections (Components, Typography, Layout).

**Inline comments:**
```css
/* Subtle hover lift effect */
transform: translateY(-4px);
```

Use sparingly for non-obvious decisions.

## Responsive Design

**Mobile-first approach:**
- Base styles for mobile
- Media queries for larger screens

**Breakpoints:**
- `768px` - tablet
- `1024px` - desktop
- `1200px` - large desktop (if needed)

**Format:**
```css
@media (min-width: 768px) {
    .component {
        /* Tablet/desktop styles */
    }
}
```

## Performance

**CSS best practices:**
- Minimize animation properties (use `transform` and `opacity`)
- Use `will-change` sparingly and only when needed
- Avoid expensive properties in animations (`box-shadow`, `filter`)
- Prefer CSS transforms over `top/left` for animations

## Typography

**Font application:**
- Display font (Cormorant Garamond): Large headings, hero titles
- Body font (IBM Plex Sans): Paragraphs, navigation, buttons, body text
- Mono font (IBM Plex Mono): Numbers, dates, service numbers (01, 02, etc.)

**Don't:**
- Mix fonts arbitrarily
- Use display font for body text
- Use body font for large expressive headings
