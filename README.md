# Prestige Fly - International Travel & Education Services

A modern, responsive Next.js 14 website for Prestige Fly, offering comprehensive international travel and education services.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Bilingual Support**: Full English and French localization
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: 
  - Animated service cards with IntersectionObserver
  - Multi-step booking form
  - Interactive world map for destinations
  - Smooth scroll animations
- **Performance Optimized**: 
  - Static site generation
  - Optimized images and assets
  - Fast loading times

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: GSAP, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📱 Pages

- **Home**: Hero section with video background, services overview, testimonials
- **Services**: Detailed service offerings with interactive cards
- **Destinations**: Interactive world map with destination information
- **Book Appointment**: Multi-step consultation booking form
- **Contact**: Contact information and contact form
- **Resources**: Educational articles and guides

## 🎨 Design System

- **Colors**: Primary blue (#1E40AF), Secondary orange (#F59E0B)
- **Typography**: Montserrat (headings), Open Sans (body), Playfair Display (fancy)
- **Animations**: Smooth transitions, hover effects, scroll-triggered animations

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ahmedtarekmekled/prestige-fly.git
cd prestige-fly
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Page components
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utilities and data
└── types/                 # TypeScript type definitions
```

## 🌍 Internationalization

The website supports both English and French languages with:
- Automatic locale detection
- URL-based language switching
- Localized content and metadata
- RTL support ready

## 🎯 Key Features

### Mobile-First Design
- Responsive navigation
- Touch-friendly interfaces
- Optimized form layouts
- Mobile-optimized animations

### Performance
- Static site generation
- Image optimization
- Code splitting
- Lazy loading

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## 🚀 Deployment

The project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Preview deployments for pull requests

## 📄 License

This project is proprietary and confidential.

## 👨‍💻 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Conventional commits

### Contributing
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

**Prestige Fly** - Your Journey to Global Success Starts Here
