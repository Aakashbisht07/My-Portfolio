# Copilot Instructions for Portfolio Codebase

## Project Overview
This is a personal portfolio website (Aakash Bisht) built with vanilla HTML, CSS, and JavaScript. It's a single-page application (SPA) showcasing skills, projects, and education with modern design patterns including glassmorphism, animated blobs, and smooth scrolling navigation.

## Architecture

### File Structure
- **index.html** - Core SPA with semantic sections (home, about, skills, projects, education, contact)
- **style.css** - Centralized styling using CSS custom properties (711 lines)
- **script.js** - Event handlers for navigation and form interaction (~65 lines)
- **extract_pdf.py** - Utility to extract text from CV PDF (backup script, not core to site)

### Design System
The site uses **CSS custom properties** defined in `:root` (at top of style.css):
```css
--bg-color: #0b0f19;          /* Dark background */
--text-color: #e2e8f0;        /* Light text */
--primary-color: #3b82f6;     /* Blue accents */
--secondary-color: #8b5cf6;   /* Purple accents */
--card-bg: rgba(30, 41, 59, 0.4);  /* Semi-transparent cards */
```

All interactive elements use these variables for consistent theming. **Never hardcode colors** - always use CSS variables.

## Key Patterns

### 1. Responsive Navigation with Scroll Detection
**File**: script.js ~30 lines

The navbar updates active links based on scroll position:
- Desktop: Links displayed horizontally
- Mobile (<768px): Hamburger menu toggles slide-out `.nav-links.active`
- Icon changes: fa-bars ↔ fa-times when menu is toggled
- Scroll event adds shadow to header when `scrollY > 50`

When modifying navigation: ensure `.active` class is applied to correct link based on section ID in viewport.

### 2. CSS Grid Layouts for Responsive Cards
**Pattern** used across skills, projects, education sections:
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
```

This auto-wraps cards at mobile widths. **Mobile breakpoint is 768px** - media queries adjust font sizes and flex directions below this.

### 3. Glassmorphism + Backdrop Blur
Cards use semi-transparent backgrounds with backdrop filters:
```css
background: var(--card-bg);
border: 1px solid var(--card-border);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);  /* Safari compatibility */
```

**Critical**: Always include `-webkit-` prefix for Safari.

### 4. Smooth Transitions & Hover Effects
All interactive elements have `transition: var(--transition)` (0.3s ease).

Hover patterns:
- Buttons: `transform: translateY(-3px)` + enhanced shadow
- Cards: `translateY(-10px)` + border color change
- Links: underline animation via `::after` pseudo-element with `width: 0 → 100%`

### 5. Gradient Text (Logo, Names, Titles)
Section titles use background-clip technique for gradient text:
```css
background: linear-gradient(to right, var(--text-color), var(--text-muted));
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

Apply this pattern when adding new branded text elements.

### 6. Timeline Component (Education Section)
Uses ::before pseudo-elements for vertical line and circles:
```css
.timeline::before { /* Vertical line */
.timeline-item::before { /* Circle dots on line */
```

This pattern can be reused for other timeline-like content.

## Developer Workflows

### Adding a New Section
1. Add HTML section with id and class="section" in index.html
2. Add navigation link in `.nav-links` that references the new section's id
3. Create CSS rule: `.new-section { /* section base */ }`
4. Use existing grid patterns (`.skills-grid`, `.projects-grid`) for card layouts
5. Import Google Fonts in `<head>` if needed on line 9

### Mobile Testing
- Test at **max-width: 768px** breakpoint (where menu becomes hamburger)
- Common changes at this breakpoint: grid columns, font sizes, flex-direction
- Use DevTools device emulator for accurate testing

### Form Handling
Contact form (script.js ~48-53) uses:
- `preventDefault()` to block default submission
- Simple alert and `form.reset()` 
- **Note**: Currently no backend integration; email submission is mock

### Styling Buttons
Two button styles exist:
- `.btn-primary`: Gradient background with shadow (used for main CTAs)
- `.btn-secondary`: Transparent with border (used for secondary actions)

Maintain these styles when adding new buttons.

## Integration Points & Dependencies

### External Resources
- Google Fonts: Outfit family (wght 300-700)
- Font Awesome 6.4.0: For icons (bars, times, github, linkedin, envelope, etc.)
- Smooth scroll behavior: HTML `scroll-behavior: smooth;` (no JS needed)

### No Build Step Required
The site is vanilla HTML/CSS/JS - just open index.html in browser. No npm, bundler, or compilation needed.

### Python Script (extract_pdf.py)
- Requires file: "AakashCV (1).pdf" in project root
- Auto-installs PyPDF2 if missing via pip
- Standalone utility - not integrated with website
- Used to extract CV text (for SEO or data purposes)

## Conventions & Anti-patterns

### DO:
- Use CSS variables for all colors/spacing
- Apply `transition: var(--transition)` to all interactive elements
- Include `-webkit-` prefixes for backdrop-filter & background-clip
- Use semantic HTML elements (header, main, section, footer, nav)
- Add `aria-label` to icon-only links for accessibility
- Reference href="#section-id" to enable smooth scroll to sections

### DON'T:
- Hardcode colors; use CSS variables instead
- Forget `-webkit-` prefix for backdrop-filter (breaks Safari)
- Change grid breakpoints without updating media queries
- Add heavy JavaScript animations (use CSS @keyframes - see `.blob` animation)
- Break semantic structure (sections have id + class="section")

## Common Tasks

| Task | Pattern | Files |
|------|---------|-------|
| Add skill category | Copy `.skill-category` div, update h3 & tags | index.html, style.css |
| Add project | Copy `.project-card`, update content/tags | index.html, style.css |
| Change color scheme | Update CSS :root variables | style.css (top) |
| Add navigation link | Add li with href="#id" in `.nav-links` | index.html |
| Adjust mobile layout | Modify @media (max-width: 768px) rules | style.css |
| Add form field | Copy `.form-group` input/textarea | index.html |

## Questions to Guide Modifications
- Is this change visual or interactive?
  - Visual → Update style.css (use grid/flex, variables)
  - Interactive → Update script.js (event listeners, DOM manipulation)
- Will this appear on desktop AND mobile?
  - Yes → Add styles for both, include @media query
- Should this element transition on hover?
  - Add `transition: var(--transition)` to base styles
