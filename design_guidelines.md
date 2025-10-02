# Design Guidelines: Business Management Tool

## Design Approach

**Hybrid Approach**: Landing page draws inspiration from modern SaaS leaders (Linear, Notion, Stripe) with bold visuals and strategic color use. Dashboard and auth pages follow a utility-first design system prioritizing clarity, efficiency, and data visualization.

**Key References**: 
- Landing: Stripe's confident minimalism + Linear's precise typography
- Dashboard: Linear's clean data presentation + Notion's flexible layouts
- Auth: Clean, professional forms with clear hierarchy

**Core Principles**:
1. Data clarity over decoration in dashboard
2. Strategic color use on landing for conversion
3. Consistent spacing rhythm across all pages
4. Professional credibility through typography and whitespace

## Color Palette

**Landing Page Colors** (Dark Mode Primary):
- Primary Brand: 220 90% 56% (Professional blue - trust and technology)
- Background: 222 47% 11% (Deep slate)
- Surface: 217 33% 17% (Elevated cards)
- Text Primary: 210 40% 98%
- Text Secondary: 215 20% 65%
- Accent: 142 76% 36% (Success green for CTAs - decisive, action-oriented)
- Border: 215 28% 25%

**Dashboard Colors** (Dark Mode Functional):
- Background: 222 47% 11%
- Surface Cards: 217 33% 17%
- Surface Elevated: 215 28% 22%
- Primary Action: 220 90% 56%
- Success: 142 71% 45%
- Warning: 38 92% 50%
- Error: 0 84% 60%
- Info: 199 89% 48%
- Text Primary: 210 40% 98%
- Text Secondary: 215 20% 65%
- Text Muted: 215 16% 47%
- Borders: 215 28% 25%

**Light Mode**: Invert lightness values while maintaining hue and saturation relationships.

## Typography

**Font Families**: 
- Primary: Inter (via Google Fonts) - UI, body text, dashboard
- Display: Cal Sans or Clash Display (via Google Fonts) - Landing page headlines only

**Type Scale**:
- Display (Landing Hero): text-6xl to text-7xl (60-72px), font-bold, tracking-tight
- H1 (Dashboard): text-3xl (30px), font-semibold
- H2 (Section Headers): text-2xl (24px), font-semibold
- H3 (Card Titles): text-xl (20px), font-medium
- Body: text-base (16px), font-normal, leading-relaxed
- Small/Metadata: text-sm (14px), font-normal
- Captions: text-xs (12px), text-muted

**Text Hierarchy**: Maintain consistent weight progression (normal → medium → semibold → bold) rather than size jumps.

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 8, 12, 16, 20, 24 for consistent rhythm.
- Component padding: p-4 to p-8
- Section spacing: py-16 to py-24 (landing), py-8 to py-12 (dashboard)
- Card gaps: gap-6 to gap-8
- Inline spacing: space-x-3 to space-x-4

**Grid Systems**:
- Landing Page: max-w-7xl container, 12-column grid
- Dashboard: Full-width layouts with max-w-screen-2xl, flexible sidebars
- Auth Pages: max-w-md centered forms

**Responsive Breakpoints**: Mobile-first with md: (768px) and lg: (1024px) primary breakpoints.

## Component Library

**Navigation**:
- Landing: Transparent sticky header with blur backdrop, logo left, nav center, CTA button right
- Dashboard: Fixed sidebar (280px width) with collapsible menu, top bar with search and user profile

**Buttons**:
- Primary: Filled with primary color, medium height (h-11), rounded-lg, font-medium
- Secondary: Outline with border-2, same sizing
- Ghost: Transparent hover state for less emphasis
- All buttons: Include focus rings and subtle hover transforms (scale-105)

**Forms & Inputs**:
- Height: h-11 for consistency with buttons
- Border: 2px solid with border color matching surface elevation
- Focus: Ring-2 with primary color
- Labels: text-sm font-medium, mb-2
- Error states: Red border with error message below
- Auth forms: Generous padding (p-8), rounded-xl cards on surface color

**Cards & Surfaces**:
- Dashboard Cards: bg-surface, rounded-xl, p-6, border subtle
- Stat Cards: Include large number (text-3xl font-bold), label below (text-sm text-muted), and optional trend indicator
- Hover: Subtle border color change, no dramatic elevation shifts

**Data Display**:
- Tables: Alternating row backgrounds, sticky headers, text-sm for data density
- Charts: Use Chart.js or Recharts with brand color palette, minimal grid lines
- Badges: Small rounded-full pills for status indicators (success/warning/error colors)

**Dashboard Specific**:
- Sidebar menu items: Hover background, active state with border-l-4 accent
- Quick action buttons: Top-right of dashboard sections
- Empty states: Centered with icon, text, and CTA button

## Images

**Landing Page Hero**:
- Large hero image showcasing a clean dashboard screenshot or abstract business illustration
- Position: Right side of hero section (60% width) on desktop, full-width on mobile
- Style: Modern screenshot with subtle shadow and border, floating above gradient background
- Alternative: Abstract 3D illustration of business growth/analytics if product screenshots aren't ready

**Landing Page Supporting Images**:
- Features section: 3-4 product screenshots showing key functionality (task management, analytics, collaboration)
- Each as rounded-xl cards with subtle shadows
- Social proof: Team photos or client logos in a dedicated section

**Dashboard**:
- No decorative images
- User avatars: rounded-full, 32px-40px sizing
- Empty state illustrations: Simple line-art style icons

**Auth Pages**:
- Optional: Small brand illustration or pattern on left panel (2-column layout on desktop)
- Or pure form-centered with no imagery for fastest load

## Landing Page Structure

**Sections** (7 comprehensive sections):
1. **Hero**: Split layout with headline + CTA left, product image right, includes trust badge ("Trusted by 500+ businesses")
2. **Features Grid**: 3-column grid (1-col mobile) with icon, title, description for 6 key features
3. **Dashboard Preview**: Full-width screenshot carousel showing main dashboard views
4. **Benefits**: 2-column alternating layout with feature highlights and supporting images
5. **Social Proof**: Testimonial cards in 3-column grid with user photos, company names
6. **Pricing/CTA**: Centered pricing tiers or strong final CTA section with value proposition
7. **Footer**: Multi-column with links, newsletter signup, social icons, contact info

**Multi-Column Strategy**: Use 3-column grids for features/testimonials, 2-column for benefits, single column for hero/CTA sections.