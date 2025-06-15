import { motion, AnimatePresence } from 'framer-motion'
import { 
  XMarkIcon, 
  BellIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

interface NotificationCenterProps {
  isOpen: boolean
  onClose: () => void
}

interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  category: 'health' | 'appointment' | 'medication' | 'system'
  timestamp: Date
  read: boolean
  actionUrl?: string
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'High Blood Glucose Alert',
    message: 'Your latest reading of 180 mg/dL is above target range. Consider checking ketones.',
    type: 'warning',
    category: 'health',
    timestamp: new Date(Date.now() - 30 * 60000), // 30 minutes ago
    read: false
  },
  {
    id: '2',
    title: 'Appointment Reminder',
    message: 'Your appointment with Dr. Smith is tomorrow at 2:00 PM',
    type: 'info',
    category: 'appointment',
    timestamp: new Date(Date.now() - 2 * 60 * 60000), // 2 hours ago
    read: false
  },
  {
    id: '3',
    title: 'Medication Reminder',
    message: "It's time to take your evening Metformin (500mg)",
    type: 'info',
    category: 'medication',
    timestamp: new Date(Date.now() - 15 * 60000), // 15 minutes ago
    read: false
  },
  {
    id: '4',
    title: 'Weekly Report Ready',
    message: 'Your diabetes management report for this week is ready to view',
    type: 'success',
    category: 'health',
    timestamp: new Date(Date.now() - 24 * 60 * 60000), // 1 day ago
    read: true
  },
  {
    id: '5',
    title: 'Data Sync Complete',
    message: 'Successfully synced 24 glucose readings from your CGM device',
    type: 'success',
    category: 'system',
    timestamp: new Date(Date.now() - 3 * 60 * 60000), // 3 hours ago
    read: true
  }
]

export function NotificationCenter({ isOpen, onClose }: NotificationCenterProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
      case 'error':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      default:
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />
    }
  }

  const getTimeAgo = (timestamp: Date) => {
    const now = new Date()
    const diff = now.getTime() - timestamp.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    if (minutes > 0) return `${minutes}m ago`
    return 'Just now'
  }

  const unreadCount = mockNotifications.filter(n => !n.read).length

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-96 bg-white/90 dark:bg-secondary-900/90 backdrop-blur-xl border-l border-secondary-200/50 dark:border-secondary-700/50 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-secondary-200/50 dark:border-secondary-700/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl relative">
                  <BellIcon className="h-5 w-5 text-white" />
                  {unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 dark:text-secondary-100">
                    Notifications
                  </h3>
                  <p className="text-xs text-secondary-500">
                    {unreadCount} unread
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Actions */}
            <div className="p-4 border-b border-secondary-200/50 dark:border-secondary-700/50">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  Mark all read
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  Clear all
                </Button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
              {mockNotifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 border-b border-secondary-200/50 dark:border-secondary-700/50 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors cursor-pointer ${
                    !notification.read ? 'bg-primary-50/50 dark:bg-primary-950/20' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-medium truncate ${
                          !notification.read 
                            ? 'text-secondary-900 dark:text-secondary-100' 
                            : 'text-secondary-700 dark:text-secondary-300'
                        }`}>
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="h-2 w-2 bg-primary-500 rounded-full flex-shrink-0 ml-2"></div>
                        )}
                      </div>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-secondary-500 flex items-center">
                          <ClockIcon className="h-3 w-3 mr-1" />
                          {getTimeAgo(notification.timestamp)}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          notification.category === 'health' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                          notification.category === 'appointment' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                          notification.category === 'medication' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          'bg-secondary-100 text-secondary-700 dark:bg-secondary-800 dark:text-secondary-300'
                        }`}>
                          {notification.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-secondary-200/50 dark:border-secondary-700/50">
              <Button variant="ghost" className="w-full">
                View all notifications
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
