import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  CalendarIcon, 
  ChartBarIcon,
  UserIcon,
  CogIcon,
  XMarkIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '../contexts/AuthContext'
import { cn } from '../lib/utils'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: 'Dashboard', href: '/app/dashboard', icon: HomeIcon },
  { name: 'Health Timeline', href: '/app/health-timeline', icon: ChartBarIcon },
  { name: 'Appointments', href: '/app/appointments', icon: CalendarIcon },
  { name: 'Profile', href: '/app/profile', icon: UserIcon },
  { name: 'Settings', href: '/app/settings', icon: CogIcon },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()
  const { user, logout } = useAuth()

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-80 bg-white/80 dark:bg-secondary-900/80',
          'backdrop-blur-xl border-r border-secondary-200/50 dark:border-secondary-700/50',
          'lg:relative lg:translate-x-0 lg:z-0',
          !isOpen && 'lg:w-20'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-secondary-200/50 dark:border-secondary-700/50">
            <motion.div 
              className="flex items-center space-x-3"
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
                <HeartIcon className="h-6 w-6 text-white" />
              </div>
              {isOpen && (
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    CoreHealth-AI
                  </h1>
                  <p className="text-xs text-secondary-500">Smart Healthcare</p>
                </div>
              )}
            </motion.div>
            
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={cn(
                    'flex items-center px-4 py-3 rounded-xl transition-all duration-200',
                    'hover:bg-primary-50 dark:hover:bg-primary-950/50',
                    isActive 
                      ? 'bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 text-primary-700 dark:text-primary-300 font-medium shadow-sm'
                      : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
                  )}
                >
                  <item.icon className={cn(
                    'h-5 w-5 flex-shrink-0',
                    isActive ? 'text-primary-600 dark:text-primary-400' : ''
                  )} />
                  {isOpen && (
                    <motion.span 
                      className="ml-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User Profile */}
          {isOpen && (
            <motion.div 
              className="p-4 border-t border-secondary-200/50 dark:border-secondary-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-secondary-50 dark:bg-secondary-800/50">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-secondary-900 dark:text-secondary-100 truncate">
                    {user?.name}
                  </p>
                  <p className="text-xs text-secondary-500 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
              
              <button
                onClick={logout}
                className="mt-3 w-full px-4 py-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors"
              >
                Sign out
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  )
}
