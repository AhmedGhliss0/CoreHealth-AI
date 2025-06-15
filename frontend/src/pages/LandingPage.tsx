import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  HeartIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  SparklesIcon,
  CheckIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'

const features = [
  {
    icon: ChartBarIcon,
    title: 'Smart Health Analytics',
    description: 'AI-powered insights from your health data with predictive analysis and personalized recommendations.',
  },
  {
    icon: SparklesIcon,
    title: 'AI Health Assistant',
    description: 'Your personal health companion available 24/7 to answer questions and provide guidance.',
  },
  {
    icon: UserGroupIcon,
    title: 'Care Team Integration',
    description: 'Seamlessly connect with your healthcare providers for better coordinated care.',
  },
  {
    icon: HeartIcon,
    title: 'Comprehensive Monitoring',
    description: 'Track glucose, blood pressure, medications, and lifestyle factors in one place.',
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Type 1 Diabetes Patient',
    content: 'CoreHealth-AI has revolutionized how I manage my diabetes. The AI insights are incredibly accurate and helpful.',
    avatar: '👩‍⚕️'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Endocrinologist',
    content: 'The platform provides me with comprehensive patient data, enabling better treatment decisions and outcomes.',
    avatar: '👨‍⚕️'
  },
  {
    name: 'Robert Martinez',
    role: 'Type 2 Diabetes Patient',
    content: 'The medication reminders and trend analysis have helped me achieve the best glucose control I\'ve had in years.',
    avatar: '👨‍💼'
  },
]

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-950 dark:via-secondary-900 dark:to-primary-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-secondary-900/80 backdrop-blur-xl border-b border-secondary-200/50 dark:border-secondary-700/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
                <HeartIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  CoreHealth-AI
                </h1>
                <p className="text-xs text-secondary-500">Smart Healthcare Platform</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-secondary-100 leading-tight">
                The Future of{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Diabetes Care
                </span>{' '}
                is Here
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-400 mt-6 leading-relaxed">
                Experience revolutionary AI-powered healthcare management. CoreHealth-AI combines cutting-edge 
                technology with personalized care to help you live your healthiest life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Journey
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10K+</div>
                  <div className="text-sm text-secondary-500">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">95%</div>
                  <div className="text-sm text-secondary-500">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-secondary-500">AI Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 rounded-2xl p-6 mb-6">
                    <h3 className="text-white font-semibold mb-4">Today's Health Summary</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">142</div>
                        <div className="text-white/70 text-sm">mg/dL</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">7.2%</div>
                        <div className="text-white/70 text-sm">HbA1c</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-4">
                    <div className="flex items-center justify-between text-white">
                      <span>AI Health Score</span>
                      <span className="font-bold">85/100</span>
                    </div>
                    <div className="mt-2 bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-secondary-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
              Powerful Features for Better Health
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Discover how our AI-powered platform transforms diabetes management with intuitive tools and intelligent insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl w-fit">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              See what our users say about their experience with CoreHealth-AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="h-full">
                  <CardContent>
                    <p className="text-secondary-700 dark:text-secondary-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-secondary-900 dark:text-secondary-100">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-secondary-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Health Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of users who are already experiencing better diabetes management with CoreHealth-AI
            </p>
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-white/90 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary-900 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
                <HeartIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold">CoreHealth-AI</span>
            </div>
            <p className="text-secondary-400 text-sm">
              © 2025 CoreHealth-AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
