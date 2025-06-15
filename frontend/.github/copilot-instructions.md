<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# CoreHealth-AI Frontend Development Instructions

## Project Overview
This is a modern React TypeScript frontend application for CoreHealth-AI, a futuristic healthcare platform specializing in diabetes and chronic disease management using AI assistance.

## Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Heroicons
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Toast Notifications**: React Hot Toast

## Design Philosophy
- **Aesthetic**: Apple meets Tesla in healthcare - clean, futuristic, minimalist
- **Theme**: Glass morphism and neumorphism design elements
- **Colors**: Primary blue (#0ea5e9), accent purple (#d946ef), semantic colors for health data
- **Typography**: Inter for body text, Space Grotesk for headings
- **Responsive**: Mobile-first, fully responsive design

## Code Style Guidelines
1. Use functional components with hooks
2. TypeScript for all files with proper type definitions
3. Use the existing utility functions in `lib/utils.ts`
4. Follow the established component structure in `components/ui/`
5. Use Framer Motion for animations with staggered delays
6. Implement proper loading states and error handling
7. Use the theme context for dark/light mode support

## Component Structure
- `components/ui/` - Reusable UI components (Button, Card, Input, etc.)
- `components/` - Feature-specific components (Layout, Sidebar, Header, etc.)
- `pages/` - Page components for routing
- `contexts/` - React contexts for global state
- `types/` - TypeScript type definitions
- `lib/` - Utility functions and helpers

## Health Data Types
The application handles various health metrics including:
- Blood glucose readings
- Blood pressure measurements
- Medication tracking
- Appointments and scheduling
- Lab results and medical records
- AI insights and predictions

## Design Patterns
1. Use the `cn()` utility for conditional class names
2. Implement proper error boundaries
3. Use loading skeletons for better UX
4. Follow the established color system for health status indicators
5. Implement proper accessibility features (ARIA labels, keyboard navigation)

## AI Features
The application includes AI-powered features such as:
- Health insights and recommendations
- Glucose trend predictions
- Medication adherence tracking
- Personalized health coaching
- Risk assessment and alerts

## Development Notes
- The app uses mock data for demonstration purposes
- Authentication is implemented with a simple context provider
- The design system is fully implemented in TailwindCSS
- All components are responsive and support dark mode
- Charts and visualizations use Recharts library
