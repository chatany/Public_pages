# Bitzup Design System & Standardization Guide

This document defines the official design standards for the Bitzup platform. All developers must adhere to these guidelines to ensure UI/UX consistency, maintainability, and design parity across the application.

---

## 📋 Table of Contents
1. [Typography](#1-typography)
2. [Color Palette](#2-color-palette)
3. [Button Components](#3-button-components)
4. [Rounding & Geometry](#4-rounding--geometry)
5. [Spacing Guidelines](#5-spacing-guidelines)
6. [Best Practices](#6-best-practices)

---

## 1. Typography
We use a strictly enforced 7-size typography scale. **Arbitrary pixel values (e.g., `text-[15px]`) are prohibited.**

| Token | Class | Size | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **3XL** | `text-3xl` | 48px | 100-110% | Main Hero Headings |
| **2XL** | `text-2xl` | 32px | 120% | Page Titles & Section Headers |
| **XL** | `text-xl` | 24px | 130% | Card Titles & Modal Headers |
| **LG** | `text-lg` | 20px | 140% | Sub-headers & Highlighted Body |
| **Base** | `text-base` | 16px | 150% | Primary Body Text & Buttons |
| **SM** | `text-sm` | 14px | 150% | Input Labels & Secondary Info |
| **XS** | `text-xs` | 12px | 150% | Captions & Micro-copy |

> [!TIP]
> Use the `md:` prefix to ensure responsive scaling (e.g., `<h2 className="text-xl md:text-2xl">`).

---

## 2. Color Palette

### 🎨 Brand Colors
- **Teal Primary**: `#2EDBAD` (Used for accents, success states, and primary highlights)
- **Primary Gradient**: `linear-gradient(to right, #e91e63, #f44336)` (Used for high-impact CTA buttons)

### 🌚 Neutral System (Dark Theme)
- **Deep Background**: `#0B0E11`
- **Surface**: `#1E2329`
- **Text Primary**: `#EAECEF`
- **Text Secondary**: `#848E9C`
- **Border**: `#2B3139`

---

## 3. Button Components
Standardized button classes are defined in `src/index.css`. Use these instead of manual styling.

### 🔴 Primary Button (`.btn-primary`)
- **Visuals**: Rose-to-Red Gradient.
- **Corner Radius**: 16px (`rounded-2xl`).
- **Typography**: `text-base` (16px), Semi-bold.
- **Interaction**: Subtle lift on hover, scale down on active.

### ⚪ Secondary Button (`.btn-secondary`)
- **Visuals**: White background with 1.5px gray border.
- **Text**: `#374151` (Dark Gray).
- **Corner Radius**: 16px (`rounded-2xl`).
- **Interaction**: Light gray background shift on hover.

---

## 4. Rounding & Geometry
Consistency in corner radius is vital for a premium feel.
- **Standard Radius**: `16px` (`rounded-2xl`) for cards, buttons, and sections.
- **Circle**: `rounded-full` for avatars and small icons.
- **Subtle**: `rounded-lg` (8px) for small input fields or nested elements.

---

## 5. Spacing Guidelines
Use standard Tailwind spacing increments to maintain vertical and horizontal rhythm.
- **Section Gaps**: `gap-10` (40px) or `gap-20` (80px).
- **Padding**: `p-4` (Mobile) → `p-15` (Desktop).
- **Margin**: `mt-10`, `mt-20`, `mt-30` for section separation.

---

## 6. Best Practices
1. **No Magic Numbers**: If a value is not in the Tailwind config, it shouldn't be in the code.
2. **Component Reuse**: Check `src/Components` before building a new UI element.
3. **Semantic HTML**: Use `<button>` for actions and `<a>` for navigation.
4. **Dark Mode Consistency**: Always verify that text contrast meets AA accessibility standards against the `#0B0E11` background.

---

> [!IMPORTANT]
> Any deviations from this guide must be approved by the lead developer to prevent "Design Creep".
