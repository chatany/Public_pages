# Bitzup Style Guide & Standardization Sheet

This document outlines the design tokens and component standards for the Bitzup platform to ensure visual consistency across all pages.

---

## 1. Typography Scale
We use a strictly defined 7-size scale. **Do not use arbitrary pixel values.**

| Token | CSS Variable | Tailwind Class | Value | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **3XL** | `--font-size-3xl` | `text-3xl` | 48px | Hero headings, large titles |
| **2XL** | `--font-size-2xl` | `text-2xl` | 32px | Section headers, page titles |
| **XL** | `--font-size-xl` | `text-xl` | 24px | Card titles, modal headers |
| **LG** | `--font-size-lg` | `text-lg` | 20px | Sub-headers, large body text |
| **Base** | `--font-size-base` | `text-base` | 16px | Primary body text, buttons |
| **SM** | `--font-size-sm` | `text-sm` | 14px | Input labels, secondary text |
| **XS** | `--font-size-xs` | `text-xs` | 12px | Captions, micro-copy, small tags |

---

## 2. Color Palette

### Brand Colors
- **Brand Primary**: `#2EDBAD` (Teal/Green) - Used for primary accents and success states.
- **Brand Gradient**: `linear-gradient(to right, #e91e63, #f44336)` - Used for high-impact Primary Buttons.

### Neutral System
- **Background**: `#0B0E11` (Deep Black)
- **Surface**: `#1E2329` (Dark Gray)
- **Text Primary**: `#EAECEF` (High contrast)
- **Text Secondary**: `#848E9C` (Medium contrast)
- **Border**: `#2B3139` (Low contrast)

---

## 3. Standardized Components

### Buttons
All buttons should use one of the two standardized classes defined in `index.css`.

#### Primary Button (`.btn-primary`)
- **Visuals**: Rose-to-Red Gradient, White Text.
- **Shape**: 16px Rounded (`rounded-2xl`).
- **Usage**: Main CTA (e.g., "Sign Up", "Confirm").

#### Secondary Button (`.btn-secondary`)
- **Visuals**: White background, Gray border, Dark text.
- **Shape**: 16px Rounded (`rounded-2xl`).
- **Usage**: Alternative actions (e.g., "Log in", "Cancel", "View More").

---

## 4. Design Principles
1. **Pill Shapes**: Prefer `rounded-full` or `rounded-2xl` for interactive elements.
2. **Consistency**: Always use the defined tokens. If a size looks "off", use the next nearest token rather than a hardcoded value.
3. **Responsive**: Use `md:` prefix for font scaling (e.g., `text-2xl md:text-3xl`).
4. **Dark Mode First**: The platform is built on a Charcoal/Black theme (`#0B0E11`).

---

## 5. CSS Reference (`src/index.css`)
The following tokens are globally available via Tailwind:
```css
@theme {
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;
  --font-size-2xl: 32px;
  --font-size-3xl: 48px;
}
```
