# Spookify - Halloween Party Landing Page

A modern, interactive Halloween party landing page built with Next.js, TypeScript, and Framer Motion. This project features stunning gradient animations, spooky decorative elements, and an immersive user experience perfect for Halloween events.

## ✨ Features

### 🎨 Design & UI
- **Halloween Theme**: Authentic spooky atmosphere with orange (#FE772D) and dark (#000015) color scheme
- **Gradient Animations**: Multi-layered gradient backgrounds with smooth transitions
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Typography**: Custom font combinations (Jolly Lodger, Rubik, Lato)
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### 🎭 Interactive Elements
- **Animated Decorations**: Floating bats, spiders, and cobwebs with realistic movements
- **Framer Motion Animations**: Smooth spring animations and hover effects
- **Interactive Social Icons**: Hover effects with glow and rotation animations
- **Newsletter Signup**: Animated form with success feedback
- **Event Countdown Timer**: Real-time countdown to Halloween party with pulsing animations

### 📱 Components

#### Header
- Navigation menu with smooth scrolling
- Halloween-themed logo and branding
- Mobile-responsive hamburger menu

#### Hero Section
- Full-screen Halloween party announcement
- Call-to-action buttons with hover effects
- Event details display
- Animated background elements

#### Gallery
- Halloween party photo showcase
- Interactive image grid
- Lightbox functionality

#### About Section
- Event information and features
- Animated feature list with checkmarks
- Location and date details

#### Reservation System
- Party booking form
- Input validation and feedback
- Animated form elements

#### Footer (Enhanced)
- **Newsletter Signup**: Email subscription with animated feedback
- **Event Countdown**: Real-time timer with pulsing animations
- **Contact Information**: Phone and email with hover effects
- **Social Media Links**: Animated icons with platform-specific colors
- **Gradient Backgrounds**: Multi-layered animated gradients
- **Decorative Elements**: Floating Halloween decorations

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **CSS Modules**: Scoped styling with CSS custom properties
- **Framer Motion**: Advanced animations and transitions

### Styling
- **CSS Custom Properties**: Consistent design system
- **Gradient Animations**: CSS keyframes and transforms
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: Flexbox, Grid, and advanced selectors

### Development Tools
- **ESLint**: Code linting and formatting
- **TypeScript**: Static type checking
- **CSS Variables**: Centralized design tokens

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hakangokdev/spookify.git
   cd spookify
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
spookify/
├── public/
│   ├── images/           # Halloween party images
│   └── vectors/          # SVG decorative elements
│       ├── bats.png
│       ├── cobweb.png
│       ├── spider.png
│       └── ...
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/
│   │   ├── Header/       # Navigation component
│   │   ├── Hero/         # Hero section
│   │   ├── Gallery/      # Photo gallery
│   │   ├── About/        # About section
│   │   ├── Reservation/  # Booking form
│   │   ├── Footer/       # Enhanced footer
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   └── index.ts
│   │   └── index.ts      # Component exports
│   └── constants/
│       ├── colors.ts     # Color palette
│       ├── typography.ts # Font definitions
│       └── css-variables.css # CSS custom properties
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--color-primary-main: #FE772D;        /* Halloween Orange */
--color-primary-background: #000015;   /* Dark Background */
--color-primary-gray: #333333;        /* Text Gray */

/* Text Colors */
--color-text-primary: #333333;        /* Primary Text */
--color-text-secondary: #FFFFFF;      /* White Text */
--color-text-light: #F5F5F5;         /* Light Gray */

/* Gradient Combinations */
background: linear-gradient(135deg, #000015 0%, #1a0a0a 25%, #2d1810 50%, #1a0a0a 75%, #000015 100%);
```

### Typography
```css
/* Primary Font - Headlines */
--font-family-primary: 'Jolly Lodger', cursive;

/* Secondary Font - Body Text */
--font-family-secondary: 'Rubik', sans-serif;

/* Tertiary Font - Labels */
--font-family-tertiary: 'Lato', sans-serif;
```

### Animation System
- **Spring Animations**: Natural, bouncy transitions
- **Staggered Animations**: Sequential element reveals
- **Hover Effects**: Interactive feedback on all clickable elements
- **Scroll Animations**: Elements animate into view

## 🎭 Component Features

### Enhanced Footer Component

#### Newsletter Signup
- **Email Validation**: Real-time input validation
- **Animated Feedback**: Success message with smooth transitions
- **Responsive Form**: Adapts to mobile and desktop layouts
- **Accessibility**: Proper labels and keyboard navigation

#### Event Countdown Timer
- **Real-time Updates**: Live countdown to Halloween party (October 31st, 2024)
- **Pulsing Animations**: Each time unit pulses with different delays
- **Responsive Layout**: Stacks vertically on mobile devices
- **Visual Hierarchy**: Clear distinction between numbers and labels

#### Interactive Elements
- **Social Media Icons**: Platform-specific hover colors and animations
- **Contact Information**: Clickable phone and email with hover effects
- **Decorative Animations**: Floating Halloween elements with realistic physics

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px  
- **Desktop**: 1200px+

### Mobile Optimizations
- Touch-friendly button sizes (minimum 44px)
- Simplified animations for better performance
- Stacked layouts for better readability
- Optimized image sizes and loading

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Alternative styling for better visibility
- **Reduced Motion**: Respects user's motion preferences
- **Focus Indicators**: Clear focus states for all interactive elements

## 🔧 Customization

### Changing Colors
Edit `src/constants/colors.ts`:
```typescript
export const colors = {
  primary: {
    main: '#YOUR_COLOR',        // Change primary color
    background: '#YOUR_BG',     // Change background
  }
};
```

### Adding New Animations
```typescript
const customVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};
```

### Modifying Countdown Date
Edit the event date in `Footer.tsx`:
```typescript
const eventDate = new Date('2024-10-31T20:00:00').getTime();
```

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Scoped styles with CSS Modules
- **Animation Performance**: GPU-accelerated transforms
- **Lazy Loading**: Images and components load on demand

## 🧪 Testing

### Running Tests
```bash
npm run test
# or
yarn test
```

### Test Coverage
- Component rendering tests
- Animation behavior tests
- Form validation tests
- Responsive design tests

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Event schema markup
- **Sitemap**: Automatic sitemap generation
- **Performance**: Optimized Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use CSS Modules for styling
- Write meaningful commit messages
- Test your changes across different devices
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hakan Gök**
- GitHub: [@hakangokdev](https://github.com/hakangokdev)
- LinkedIn: [Hakan Gök](https://linkedin.com/in/gokhakan)

## 🙏 Acknowledgments

- Halloween vector graphics from custom design
- Framer Motion for amazing animations
- Next.js team for the excellent framework
- Community feedback and contributions

## 📞 Support

If you have any questions or need help with the project:

1. **GitHub Issues**: [Create an issue](https://github.com/hakangokdev/spookify/issues)
2. **Email**: Contact through GitHub profile
3. **Documentation**: Check this README for detailed information

---

**Happy Halloween!** 🎃 Enjoy creating spooktacular experiences with Spookify!
