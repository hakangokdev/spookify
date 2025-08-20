# Header Component

A responsive header component for the Halloween Party landing page, built with React and CSS Modules.

## Features

- **Responsive Design**: Adapts to different screen sizes with mobile-first approach
- **Fixed Navigation**: Stays at the top of the page while scrolling
- **Mobile Menu**: Hamburger menu for mobile devices with smooth animations
- **Smooth Scrolling**: Navigation links smoothly scroll to page sections
- **Design System Integration**: Uses design tokens from Figma for consistent styling
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Design Specifications

Based on the Figma design with the following specifications:

### Typography
- **Logo**: Jolly Lodger, 48px, #F5F5F5
- **Navigation Links**: Rubik, 16px, #F5F5F5, Title Case
- **CTA Button**: Rubik Medium, 16px, #292D32 on #FE772D background

### Layout
- **Container**: Max-width 1122px, centered
- **Padding**: 48px top, 24px horizontal
- **Gap**: 83px between logo, nav, and CTA on desktop
- **Height**: 58px content height

### Colors
- **Background**: #000015 (Primary background)
- **Text**: #F5F5F5 (Light gray)
- **Accent**: #FE772D (Orange)
- **Button Text**: #292D32 (Dark gray)

## Usage

```tsx
import { Header } from '@/components';

export default function Page() {
  return (
    <div>
      <Header />
      {/* Your page content */}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply |

## Responsive Breakpoints

- **Desktop**: 1200px+ - Full navigation with all elements visible
- **Tablet**: 768px - 1199px - Reduced spacing and font sizes
- **Mobile**: < 768px - Hamburger menu with overlay navigation

## Navigation Items

The header includes the following navigation items:

1. **Home** - Links to `#home`
2. **Gallery** - Links to `#gallery`
3. **About Party** - Links to `#about`
4. **Reservation** - Links to `#reservation`
5. **Contacts** - Links to `#contacts`

## Mobile Menu

- Activated by hamburger button on mobile devices
- Full-screen overlay with smooth slide-in animation
- Animated hamburger icon transforms to X when open
- Prevents body scrolling when menu is open
- Auto-closes when navigation link is clicked

## Styling

The component uses CSS Modules for styling with the following files:

- `Header.module.css` - Main component styles
- `../../constants/css-variables.css` - Design system variables

## Accessibility Features

- Proper semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Supports CSS Grid and Flexbox
- Uses CSS custom properties (CSS variables)

## Performance

- CSS Modules for optimized styling
- Minimal JavaScript for mobile menu functionality
- Smooth animations with CSS transitions
- Fixed positioning for optimal scroll performance