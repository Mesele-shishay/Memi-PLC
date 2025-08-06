# Color System Guide - ME Mi Trading PLC

## Overview

Your application now uses a centralized color system based on CSS custom properties (CSS variables). This allows you to change the entire color palette by modifying only the `src/app/globals.css` file.

## Current Color Palette

### Primary Colors (Green Theme)

- **Primary**: `#4ade80` (Light Green)
- **Primary Light**: `#22c55e` (Medium Green)
- **Primary Dark**: `#16a34a` (Dark Green)
- **Accent**: `#10b981` (Emerald Green)

### Secondary Colors (Slate/Gray Theme)

- **Secondary**: `#0f172a` (Dark Slate)
- **Secondary Light**: `#1e293b` (Medium Slate)
- **Secondary Dark**: `#020617` (Very Dark Slate)

## How to Change Your Color Palette

### Step 1: Choose Your New Colors

Decide on your new color scheme. For example, if you want to change to a blue theme:

```css
/* Blue Theme Example */
:root {
  --primary: #3b82f6; /* Blue-500 */
  --primary-light: #60a5fa; /* Blue-400 */
  --primary-dark: #2563eb; /* Blue-600 */
  --primary-50: #eff6ff; /* Blue-50 */
  --primary-100: #dbeafe; /* Blue-100 */
  --primary-200: #bfdbfe; /* Blue-200 */
  --primary-300: #93c5fd; /* Blue-300 */
  --primary-400: #60a5fa; /* Blue-400 */
  --primary-500: #3b82f6; /* Blue-500 */
  --primary-600: #2563eb; /* Blue-600 */
  --primary-700: #1d4ed8; /* Blue-700 */
  --primary-800: #1e40af; /* Blue-800 */
  --primary-900: #1e3a8a; /* Blue-900 */

  --accent: #0ea5e9; /* Sky-500 */
  --accent-light: #38bdf8; /* Sky-400 */
  --accent-dark: #0284c7; /* Sky-600 */
  --accent-50: #f0f9ff; /* Sky-50 */
  --accent-100: #e0f2fe; /* Sky-100 */
  --accent-200: #bae6fd; /* Sky-200 */
  --accent-300: #7dd3fc; /* Sky-300 */
  --accent-400: #38bdf8; /* Sky-400 */
  --accent-500: #0ea5e9; /* Sky-500 */
  --accent-600: #0284c7; /* Sky-600 */
  --accent-700: #0369a1; /* Sky-700 */
  --accent-800: #075985; /* Sky-800 */
  --accent-900: #0c4a6e; /* Sky-900 */
}
```

### Step 2: Update the CSS Variables

1. Open `src/app/globals.css`
2. Find the `:root` section
3. Replace the color values with your new palette
4. Update the shadow utilities if needed:

```css
/* Update shadow colors to match your new theme */
.shadow-primary {
  box-shadow: 0 10px 25px -3px rgba(59, 130, 246, 0.25); /* Blue shadow */
}

.shadow-accent {
  box-shadow: 0 10px 25px -3px rgba(14, 165, 233, 0.25); /* Sky shadow */
}
```

### Step 3: Test Your Changes

1. Save the file
2. Your application will automatically update with the new colors
3. All components will use the new palette without any additional changes

## Available Color Classes

### Background Colors

- `.bg-primary`, `.bg-primary-50`, `.bg-primary-100`, etc.
- `.bg-accent`, `.bg-accent-50`, `.bg-accent-100`, etc.
- `.bg-secondary`, `.bg-secondary-50`, `.bg-secondary-100`, etc.

### Text Colors

- `.text-primary`, `.text-primary-50`, `.text-primary-100`, etc.
- `.text-accent`, `.text-accent-50`, `.text-accent-100`, etc.
- `.text-secondary`, `.text-secondary-50`, `.text-secondary-100`, etc.

### Border Colors

- `.border-primary`, `.border-primary-50`, `.border-primary-100`, etc.
- `.border-accent`, `.border-accent-50`, `.border-accent-100`, etc.
- `.border-secondary`, `.border-secondary-50`, `.border-secondary-100`, etc.

### Gradient Utilities

- `.gradient-primary` - Primary to accent gradient
- `.gradient-primary-to-accent` - Primary-500 to accent-500
- `.gradient-accent-to-primary` - Accent-500 to primary-500
- `.gradient-primary-light` - Primary-400 to accent-400
- `.gradient-primary-dark` - Primary-600 to accent-600
- `.gradient-bg-light` - Light background gradient
- `.gradient-bg-medium` - Medium background gradient

### Shadow Utilities

- `.shadow-primary` - Primary color shadow
- `.shadow-accent` - Accent color shadow
- `.shadow-primary-hover` - Primary color hover shadow
- `.shadow-accent-hover` - Accent color hover shadow

## Color Palette Examples

### Purple Theme

```css
--primary: #8b5cf6; /* Purple-500 */
--accent: #a855f7; /* Purple-600 */
```

### Orange Theme

```css
--primary: #f97316; /* Orange-500 */
--accent: #ea580c; /* Orange-600 */
```

### Red Theme

```css
--primary: #ef4444; /* Red-500 */
--accent: #dc2626; /* Red-600 */
```

### Teal Theme

```css
--primary: #14b8a6; /* Teal-500 */
--accent: #0d9488; /* Teal-600 */
```

## Benefits of This System

1. **Centralized Control**: Change all colors from one file
2. **Consistency**: All components use the same color system
3. **Maintainability**: Easy to update and maintain
4. **Flexibility**: Easy to create different themes
5. **Performance**: CSS variables are efficient and fast

## Components Already Refactored

The following components have been updated to use the new color system:

- ✅ `HeroSection.tsx`
- ✅ `FeaturesSection.tsx`
- ✅ `TestimonialSection.tsx`
- ✅ `SupportSection.tsx`
- ✅ `PricingSection.tsx`
- ✅ `Header.tsx`
- ✅ `Footer.tsx`
- ✅ `TrustedSection.tsx`
- ✅ `BenefitSection.tsx`
- ✅ `layout.tsx` (meta tags)

## All Components Refactored! 🎉

All components have been successfully refactored to use the centralized color system. The application now uses a consistent color palette that can be easily changed by modifying the CSS variables in `src/app/globals.css`.

## Next Steps

1. **Choose your new color palette**
2. **Update the CSS variables in `globals.css`**
3. **Test the changes**
4. **Optionally refactor remaining components** (if you want to remove all hardcoded colors)

## Tips for Choosing Colors

1. **Accessibility**: Ensure sufficient contrast ratios
2. **Brand Consistency**: Choose colors that match your brand
3. **User Experience**: Consider how colors affect user emotions
4. **Cultural Context**: Be aware of color meanings in different cultures
5. **Testing**: Test your color scheme across different devices and lighting conditions

## Need Help?

If you need assistance with:

- Choosing a color palette
- Refactoring remaining components
- Creating additional color utilities
- Accessibility considerations

Feel free to ask for help with the refactoring process!
