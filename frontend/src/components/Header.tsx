import { motion } from 'framer-motion'
import { 
  Bars3Icon, 
  BellIcon, 
  MagnifyingGlassIcon,
  SparklesIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import { Button } from './ui/Button'

interface HeaderProps {
  onMenuClick: () => void
  onAIClick: () => void
  onNotificationsClick: () => void
}

export function Header({ onMenuClick, onAIClick, onNotificationsClick }: HeaderProps) {
  const { theme, setTheme, isDark } = useTheme()
  const { user } = useAuth()

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 dark:bg-secondary-900/80 backdrop-blur-xl border-b border-secondary-200/50 dark:border-secondary-700/50 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
          
          <div className="hidden md:block">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">
              Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'}, {user?.name?.split(' ')[0]}
            </h2>
            <p className="text-sm text-secondary-500">
              Here's your health summary for today
            </p>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
            <input
              type="text"
              placeholder="Search health data, appointments, medications..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-secondary-600" />
            )}
          </button>

          {/* AI Assistant */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onAIClick}
            className="relative"
          >
            <SparklesIcon className="h-5 w-5" />
            <span className="hidden sm:block ml-2">AI Assistant</span>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
          </Button>

          {/* Notifications */}
          <button
            onClick={onNotificationsClick}
            className="relative p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
          >
            <BellIcon className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </div>
          </button>

          {/* User Avatar */}
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
