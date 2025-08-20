# Hero Component

A stunning, animated hero section for the Halloween Party landing page with immersive visuals and interactive elements.

## Features

- **Full-Screen Background**: Uses hero.png as the main background image with overlay
- **Animated Decorative Elements**: Floating bats, cobwebs, and swinging spiders
- **Gradient Text Effects**: Animated gradient text for the main heading
- **Interactive CTA Buttons**: Primary and secondary buttons with hover effects
- **Event Information**: Date, time, and location details
- **Scroll Indicator**: Animated mouse scroll indicator
- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: Reduced motion support and proper semantic structure

## Visual Elements

### Background & Overlay
- **Background Image**: `/images/hero.png` with cover positioning
- **Gradient Overlay**: Dark gradient overlay for text readability
- **Layered Design**: Multiple z-index layers for proper element stacking

### Decorative Animations
- **Bats**: Floating animation with different timing for left and right bats
- **Cobwebs**: Positioned in top corners with rotation effects
- **Spiders**: Swinging animation with pendulum motion
- **Responsive**: Some elements hidden on mobile for performance

### Typography
- **Main Heading**: Jolly Lodger font with animated gradient text effect
- **Subtitle**: Rubik font with fade-in animation
- **Event Details**: Clean, organized information display

## Content Structure

```
Hero Section
├── Background Image (hero.png)
├── Decorative Elements
│   ├── Bats (floating animation)
│   ├── Cobwebs (corner positioning)
│   └── Spiders (swinging animation)
├── Main Content
│   ├── Heading ("IT'S HALLOWEEN PARTY O'CLOCK!")
│   ├── Subtitle (descriptive text)
│   ├── CTA Buttons
│   │   ├── Primary: "Book Your Spot Now"
│   │   └── Secondary: "View Gallery"
│   └── Event Details
│       ├── Date: October 31st
│       ├── Time: 8:00 PM
│       └── Location: Spooky Manor
└── Scroll Indicator
```

## Usage

```tsx
import { Hero } from '@/components';

export default function Page() {
  return (
    <div>
      <Hero />
      {/* Other page content */}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply |

## Animations

### Text Animations
- **fadeInUp**: Staggered fade-in animations for content elements
- **gradientShift**: Animated gradient effect on main heading
- **Timing**: 0.3s intervals between element animations

### Decorative Animations
- **float**: Vertical floating motion for bats (3-4s duration)
- **swing**: Pendulum motion for spiders (2-2.5s duration)
- **scrollAnimation**: Mouse wheel indicator animation

### Button Interactions
- **Hover Effects**: Transform, shadow, and glow effects
- **Button Glow**: Sliding shine effect on primary button
- **Smooth Transitions**: 0.3s ease transitions

## Responsive Breakpoints

### Desktop (> 768px)
- Full decorative elements visible
- Horizontal button layout
- Large typography scales
- All animations active

### Tablet (768px - 480px)
- Reduced decorative elements
- Stacked button layout
- Medium typography scales
- Simplified animations

### Mobile (< 480px)
- Minimal decorative elements
- Vertical event details layout
- Small typography scales
- Essential animations only

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: Descriptive alt text for decorative images
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Focus Management**: Proper focus indicators for interactive elements
- **Color Contrast**: High contrast text for readability

## Performance Optimizations

- **Image Optimization**: Next.js Image component with priority loading
- **CSS Animations**: Hardware-accelerated transforms
- **Conditional Rendering**: Mobile-specific element hiding
- **Efficient Selectors**: Optimized CSS selectors

## Customization

### Colors
All colors use CSS custom properties from the design system:
- `--color-primary-main`: #FE772D (Halloween orange)
- `--color-text-light`: #F5F5F5 (Light text)
- `--color-bg-primary`: #000015 (Dark background)

### Typography
- **Heading Font**: Jolly Lodger (decorative)
- **Body Font**: Rubik (readable)
- **Responsive Sizing**: clamp() functions for fluid typography

### Animations
Animations can be customized by modifying the CSS custom properties:
- Duration: Adjust animation timing
- Easing: Change transition functions
- Delays: Modify stagger timing

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **CSS Features**: Grid, Flexbox, Custom Properties, Transforms
- **Fallbacks**: Graceful degradation for older browsers
- **Mobile**: iOS Safari, Chrome Mobile

## Assets Used

- **Background**: `/images/hero.png`
- **Decorative Elements**:
  - `/vectors/bats.png`
  - `/vectors/cobweb.png`
  - `/vectors/spider.png`

## File Structure

```
Hero/
├── Hero.tsx           # Main component
├── Hero.module.css    # Component styles
├── index.ts          # Export file
└── README.md         # Documentation