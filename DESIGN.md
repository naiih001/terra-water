---
name: Terra
description: Natural spring water brand — refined, minimal, intentional
colors:
  warm-stone: "#f5f2eb"
  warm-stone-deep: "#e8e3d8"
  forest: "#1a3323"
  sage: "#7a9b7a"
  spring-blue: "#6baabe"
  spring-blue-deep: "#3a7a8a"
  sand: "#d4c5a9"
  ink: "#1c1c1c"
  stone: "#6b6560"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(4rem, 8vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.7
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "0.04em"
rounded:
  pill: "100px"
  card: "16px"
  sm: "12px"
  input: "10px"
spacing:
  section: "120px"
  section-mobile: "80px"
  grid-gap: "32px"
  grid-gap-mobile: "20px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.forest}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
    border: "1.5px solid {colors.forest}"
  card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.card}"
  input:
    backgroundColor: "#ffffff"
    rounded: "{rounded.input}"
    border: "1.5px solid #e0e0e0"
    padding: "12px 16px"
  input-focus:
    backgroundColor: "#ffffff"
    rounded: "{rounded.input}"
    border: "1.5px solid {colors.sage}"
    padding: "12px 16px"
  nav-tab:
    backgroundColor: "transparent"
    textColor: "{colors.stone}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  nav-tab-active:
    backgroundColor: "#ffffff"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
---

# Design System: Terra

## 1. Overview

**Creative North Star: "The Source"**

Terra's visual system starts from the same place its water does: the mountain spring. Everything else is just what's necessary to present it clearly. The palette draws from stone, forest, and water — not as decoration, but as a honest reflection of origin. The typography pairs a refined serif for storytelling with a clean sans for commerce, never competing for attention.

The system explicitly rejects overdesigned "natural" tropes: no wood textures, no kraft paper, no doodle leaves, no glassmorphism, no heavy gradients. Every element earns its place through clarity and purpose. Warmth comes from the photographic content (mountains, spring, bottle) and the serif's character, not from a tinted background.

**Key Characteristics:**
- Warm minimalism — earthy without being rustic, refined without being cold
- Serif storytelling for the brand narrative, sans commerce for the shop
- Rounded but grounded — pill buttons and 16px card corners feel tactile, not playful
- Flat surfaces by default; depth conveyed through tonal layering, not shadow
- Generous whitespace creates breathing room for an everyday audience

## 2. Colors

The palette is restrained — a single committed green with warm stone neutrals and cool blue accents. The green (Forest) carries 30-60% of the branded surface; the neutrals handle structure and text; the blue (Spring Blue) is a rare accent for moments of freshness.

### Primary
- **Forest** (#1a3323 / oklch(32.5% 0.06 160)): The brand color. Used for the logo, primary buttons, active filter states, footer background, and all heading text. A dark, cool-leaning green that reads as natural without being literal.

### Secondary
- **Sage** (#7a9b7a / oklch(60% 0.06 155)): Product pricing, badges, focus rings, and muted accents. A desaturated green that bridges Forest and the neutrals.

### Tertiary
- **Spring Blue** (#6baabe / oklch(66% 0.08 225)): A rare accent for the Discover section's water drop icon and the product detail page's backdrop blur element. Used sparingly, never by default.

### Neutral
- **Warm Stone** (#f5f2eb / oklch(94.5% 0.01 80)): Page background. A near-white with a barely perceptible warm lean toward earth, not the AI-default cream band.
- **Warm Stone Deep** (#e8e3d8 / oklch(89% 0.015 80)): Section alternation background (Story section, shop preview). The tonal layering mechanism — one step darker than the body.
- **Sand** (#d4c5a9 / oklch(79% 0.03 75)): A warm mid-tone, appearing in hero blob backgrounds. Use sparingly.
- **Ink** (#1c1c1c / oklch(17% 0.008 0)): Body text. High contrast against Warm Stone (≥10:1).
- **Stone** (#6b6560 / oklch(43% 0.015 65)): Secondary text, nav links, placeholder text. Sits at approximately 4.5:1 against Warm Stone for AA compliance.

### Named Rules
**The Tonal Layering Rule.** Depth is conveyed by shifting background values within the neutral family, not by drop shadows. A card on Warm Stone sits at white; an alternating section uses Warm Stone Deep. No resting shadows.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** A considered contrast — Playfair Display's calligraphic refinement carries the brand storytelling (headlines, product names, section titles), while Inter's neutral clarity handles everything transactional (body copy, prices, labels, buttons). They share nothing in common, which is what makes the pairing work: no overlap, no competition.

### Hierarchy
- **Display** (Playfair 400, clamp(4rem, 8vw, 7rem), 0.95 lh, -0.03em ls): Hero headline only. The single largest statement on the page, reserved for the brand name itself.
- **Headline** (Playfair 400, clamp(2.5rem, 5vw, 3.5rem), 1.15 lh): Section headers. `text-wrap: balance` applied for even line breaks.
- **Title** (Playfair 400, 1.15–1.4rem, 1.3 lh): Card titles, product names, modal headers. The serif carries the brand warmth at small sizes.
- **Body** (Inter 300, 1rem, 1.7 lh, max-width 65–75ch): All paragraph text. The light weight reads airy and refined; avoid making it the sole differentiator on colored backgrounds.
- **Label** (Inter 500, 0.75–0.85rem, 0.04em ls): Buttons, badges, nav links, small uppercase labels. Weight and spacing provide hierarchy without size.

### Named Rules
**The One-Type Rule.** Playfair Display handles everything narrative; Inter handles everything functional. No mixing weights for decorative effect — switch families at the semantic boundary.

## 4. Elevation

Flat by default. Resting surfaces carry no shadow — depth is created through the tonal neutral scale (Warm Stone → Warm Stone Deep → white). Shadows appear only as a response to state: a subtle lift on hover (translateY(-2px)) paired with a soft glow.

### State Shadows
- **Hover lift** (`box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08)`, `translateY(-2px)`): Cards and buttons on hover. The 24px blur is acceptable here because it's a state response, not a resting treatment.
- **Modal backdrop** (`box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12)`): The auth modal. Deep and focused — the only large-elevation element in the system.

### Named Rules
**The Flat-By-Default Rule.** No resting shadows on any surface. If a surface needs to separate, use tonal layering (Warm Stone Deep for alternating sections, white for cards). Shadow is reserved for state feedback only.

## 5. Components

### Buttons
- **Shape:** Full pill (100px radius).
- **Primary:** Forest background, white text. Hover lifts with `translateY(-2px)` and a soft Forest-tinted shadow. Active scales to 0.97.
- **Secondary:** Transparent background, Forest text, 1.5px Forest stroke. Hover fills at 6% opacity. Same lift and press behavior as primary.
- **States:** All button transitions use `160ms var(--ease-out)` for transform, `200ms ease` for background/shadow. Reduced motion disables all animated transitions.

### Cards (Feature / Product)
- **Corner Style:** 16px radius.
- **Background:** White.
- **Shadow Strategy:** No resting shadow (the Flat-By-Default Rule). Hover lift uses `translateY(-2px)` + `box-shadow: 0 8px 24px rgba(0,0,0,0.08)`.
- **Internal Padding:** 40px 28px (feature cards), 0 28px 24px (product cards with inset visual).
- **Transition:** Staggered entrance on scroll via `useInView` hook. Stagger delays at 60–80ms intervals.

### Inputs / Fields
- **Style:** 1.5px solid stroke (#e0e0e0), 10px radius, white background.
- **Focus:** Border shifts to Sage; 3px Sage-tinted focus ring at 15% opacity.
- **Label:** 0.82rem, 500 weight, Stone color, 0.02em letter-spacing.
- **Placeholder:** Stone color at 50% opacity (meets 4.5:1 contrast).
- **Error:** #c0392b text on 6% tinted background, 8px radius.

### Navigation (Site Nav)
- **Style:** Fixed top bar, linear gradient background (Warm Stone to transparent), 8px backdrop blur. Max-width 1280px centered.
- **Logo:** Playfair Display 600, 1.5rem, 0.08em letter-spacing, Forest.
- **Links:** Inter 500, 0.85rem, Stone. Hover → Forest. No underline — color shift alone signals state.
- **Mobile:** Links hidden; cart and sign-in remain visible. Logo + actions only.

### Chips (Filter / Badge)
- **Style:** Pill shape, palette-dependent. Active filters use Forest filled + white text; inactive use transparent with Stone stroke.
- **Badges (product):** Sage background, white text, 0.7rem, 0.08em uppercase.

### Modals (Auth)
- **Overlay:** Fixed full-screen, black at 40% opacity, 4px backdrop-blur. Enter animation: 200ms fade.
- **Panel:** White, 16px radius, 400px max-width. Enter animation: 250ms fade+translateY(12px)+scale(0.97).
- **Tabs:** Segmented pill control in Warm Stone Deep container. Active tab gets white background + subtle shadow.
- **Close:** Icon button, Stone, 8px radius hover with Warm Stone Deep background.

### Quantity Picker
- **Style:** Inline pill with 1.5px Warm Stone Deep stroke. 40px square buttons flank a centered value.
- **Disabled:** 30% opacity, cursor default.
- **Value:** Inter 500, 0.95rem, Forest, `tabular-nums` for stable width.

## 6. Do's and Don'ts

### Do:
- **Do** use the Forest green as the primary brand color on buttons, footer, active states, and headings — it carries 30-60% of branded surfaces.
- **Do** rely on the tonal neutral scale (Warm Stone → Warm Stone Deep → white) for surface hierarchy. One step darker is enough.
- **Do** keep buttons pill-shaped with generous horizontal padding. The full-radius end caps feel tactile.
- **Do** stagger scroll-reveal animations using 60-80ms delays across items within a section.
- **Do** use Playfair Display for storytelling and Inter for commerce — switch at the semantic boundary, not for decorative contrast.
- **Do** keep body copy in Inter 300 with a max line length of 65-75ch.

### Don't:
- **Don't** use resting box-shadows on surfaces. The Flat-By-Default Rule: tonal layering, not shadow, creates depth at rest.
- **Don't** apply heavy gradients, glassmorphism, wood textures, kraft paper, doodle leaves, or any generic "natural" decorative tropes.
- **Don't** use gradient text (`background-clip: text`). Emphasis comes from weight or size, not color transitions.
- **Don't** pair the two type families as decoration — each has a semantic role.
- **Don't** exceed 6rem (~96px) for display headings in new compositions. The hero is at the ceiling.
- **Don't** use numbered section markers (01 / 02 / 03) as decorative section headers. If the section is a sequence, the copy should make that clear.
- **Don't** use uppercase tracked eyebrows ("ABOUT", "PROCESS") above every section. Let the heading speak.
- **Don't** add border-left or border-right greater than 1px as a colored accent stripe. Prefer full background tints or nothing.
