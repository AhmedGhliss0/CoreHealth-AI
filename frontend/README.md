# CoreHealth-AI Frontend

A futuristic, AI-powered healthcare platform specializing in diabetes and chronic disease management. Built with React, TypeScript, and modern web technologies to deliver an intuitive, Apple/Tesla-inspired user experience.

## 🚀 Features

- **Modern UI/UX**: Glass morphism and neumorphism design elements
- **AI Assistant**: Intelligent health insights and recommendations
- **Real-time Analytics**: Interactive charts and health visualizations
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Health Tracking**: Comprehensive diabetes and chronic disease management
- **Appointment Management**: Integrated scheduling and notifications
- **Health Timeline**: Visual health journey with milestones
- **OAuth Ready**: Prepared for Keycloak/Google authentication

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Heroicons & Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns

## 🎨 Design System

### Color Palette
- **Primary**: `#0ea5e9` (Sky Blue)
- **Secondary**: `#6366f1` (Indigo)
- **Accent**: `#d946ef` (Fuchsia)
- **Success**: `#10b981` (Emerald)
- **Warning**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter
- **Weights**: 300, 400, 500, 600, 700

### Glass Morphism Effects
- Background blur with transparency
- Subtle borders and shadows
- Smooth animations and transitions

## 📁 Project Structure

```
src/
├── components/          # Feature-specific components
│   ├── ui/             # Reusable UI components
│   ├── Layout.tsx      # Main app layout
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Header.tsx      # Top navigation
│   ├── AIAssistant.tsx # AI chat component
│   └── NotificationCenter.tsx
├── contexts/           # React contexts
│   ├── ThemeContext.tsx
│   └── AuthContext.tsx
├── pages/             # Route components
│   ├── LandingPage.tsx
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── AppointmentsPage.tsx
│   └── HealthTimelinePage.tsx
├── types/             # TypeScript definitions
├── lib/               # Utilities and helpers
└── main.tsx          # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏥 Health Data Features

### Supported Metrics
- **Blood Glucose**: Real-time monitoring with trend analysis
- **Blood Pressure**: Systolic/diastolic tracking
- **Medications**: Adherence tracking and reminders
- **Lab Results**: Comprehensive medical history
- **Appointments**: Scheduling and management
- **AI Insights**: Predictive analytics and recommendations

### Data Visualization
- Interactive line charts for glucose trends
- Progress rings for health goals
- Heatmaps for pattern recognition
- Timeline views for health journey

## 🤖 AI Features

### Health Assistant
- Natural language health queries
- Personalized recommendations
- Medication reminders
- Risk assessment alerts

### Predictive Analytics
- Glucose trend predictions
- Health pattern recognition
- Personalized goal setting
- Progress tracking

## 🎯 Component Breakdown

### Core UI Components
- **Button**: Primary, secondary, ghost variants with loading states
- **Card**: Glass morphism containers with hover effects
- **Input**: Form inputs with validation states
- **Modal**: Overlay components with backdrop blur

### Feature Components
- **Dashboard**: Health metrics overview with interactive charts
- **AI Assistant**: Chat interface with typing indicators
- **Notification Center**: Toast notifications and alerts
- **Health Timeline**: Visual journey with milestones
- **Appointment Manager**: Calendar integration and scheduling

## ♿ Accessibility Features

- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management
- Semantic HTML structure

## 🔐 Authentication

The app is prepared for OAuth integration with:
- Keycloak SSO
- Google OAuth
- Apple Sign-In
- Microsoft Azure AD

Currently using mock authentication for development.

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large**: 1440px+

### Breakpoint Strategy
- Mobile-first approach
- Progressive enhancement
- Touch-friendly interactions
- Optimized performance

## 🌟 Interactive Features

### Current
- Smooth page transitions
- Hover animations
- Loading skeletons
- Real-time chart updates
- Gesture support

### Planned (Bonus Features)
- **Voice Input**: "Hey CoreHealth, log my glucose"
- **Gamification**: Achievement badges and progress streaks
- **AR Integration**: Medication scanning
- **Offline Mode**: PWA capabilities
- **Wearable Sync**: Apple Watch, Fitbit integration

## 🧪 Testing Strategy

### Unit Tests
- Component testing with React Testing Library
- Hook testing
- Utility function testing

### Integration Tests
- API integration tests
- Authentication flow tests
- Navigation tests

### E2E Tests
- Critical user journeys
- Cross-browser compatibility
- Performance testing

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
```env
VITE_API_URL=https://api.corehealth-ai.com
VITE_KEYCLOAK_URL=https://auth.corehealth-ai.com
VITE_SENTRY_DSN=your-sentry-dsn
```

### Deployment Platforms
- **Vercel**: Recommended for frontend
- **Netlify**: Alternative option
- **AWS S3 + CloudFront**: Enterprise option

## 📊 Performance Metrics

### Core Web Vitals Targets
- **LCP**: < 2.5s
- **FID**: < 100ms  
- **CLS**: < 0.1

### Optimization Techniques
- Code splitting with React.lazy
- Image optimization
- Bundle analysis
- Tree shaking
- Compression (gzip/brotli)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the coding guidelines in `.github/copilot-instructions.md`
4. Submit a pull request

### Code Style
- Use TypeScript for all files
- Follow established component patterns
- Implement proper error boundaries
- Add accessibility features
- Write meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation wiki

---

**CoreHealth-AI** - Transforming healthcare through AI-powered insights and modern user experience.
    ...reactDom.configs.recommended.rules,
  },
})
```
