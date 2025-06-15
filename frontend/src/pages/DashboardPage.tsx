import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  ChartBarIcon, 
  ClockIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  CalendarIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useAuth } from '../contexts/AuthContext'

// Mock data
const glucoseData = [
  { time: '6:00', value: 95, target: 100 },
  { time: '9:00', value: 142, target: 100 },
  { time: '12:00', value: 158, target: 100 },
  { time: '15:00', value: 134, target: 100 },
  { time: '18:00', value: 167, target: 100 },
  { time: '21:00', value: 121, target: 100 },
]

const weeklyData = [
  { day: 'Mon', avg: 128, readings: 6 },
  { day: 'Tue', avg: 142, readings: 5 },
  { day: 'Wed', avg: 135, readings: 7 },
  { day: 'Thu', avg: 156, readings: 6 },
  { day: 'Fri', avg: 149, readings: 5 },
  { day: 'Sat', avg: 138, readings: 4 },
  { day: 'Sun', avg: 132, readings: 6 },
]

const timeInRangeData = [
  { name: 'In Range', value: 72, color: '#22c55e' },
  { name: 'Above Range', value: 18, color: '#f59e0b' },
  { name: 'Below Range', value: 10, color: '#ef4444' },
]

const healthMetrics = [
  {
    title: 'Current Glucose',
    value: '142',
    unit: 'mg/dL',
    change: { value: 8, type: 'increase' as const },
    status: 'warning' as const,
    icon: ChartBarIcon,
    description: 'Last reading 15 minutes ago'
  },
  {
    title: 'Average This Week',
    value: '138',
    unit: 'mg/dL',
    change: { value: 5, type: 'decrease' as const },
    status: 'good' as const,
    icon: ArrowTrendingDownIcon,
    description: 'Trending better than last week'
  },
  {
    title: 'Time in Range',
    value: '72',
    unit: '%',
    change: { value: 3, type: 'increase' as const },
    status: 'good' as const,
    icon: CheckCircleIcon,
    description: 'Target: >70%'
  },
  {
    title: 'HbA1c Estimate',
    value: '7.2',
    unit: '%',
    change: { value: 0.1, type: 'decrease' as const },
    status: 'warning' as const,
    icon: HeartIcon,
    description: 'Based on 14-day average'
  },
]

const upcomingEvents = [
  {
    id: '1',
    title: 'Dr. Smith Appointment',
    time: 'Tomorrow, 2:00 PM',
    type: 'appointment',
    urgent: false
  },
  {
    id: '2',
    title: 'Metformin Refill Due',
    time: 'In 3 days',
    type: 'medication',
    urgent: true
  },
  {
    id: '3',
    title: 'HbA1c Lab Test',
    time: 'Next week',
    type: 'test',
    urgent: false
  },
]

const aiInsights = [
  {
    id: '1',
    title: 'Meal Pattern Recognition',
    message: 'Your glucose spikes seem to be highest after lunch. Consider reducing carbs or taking a walk after eating.',
    type: 'recommendation',
    priority: 'medium'
  },
  {
    id: '2',
    title: 'Sleep Impact',
    message: 'Poor sleep quality on Wednesday correlates with higher morning glucose. Aim for 7-8 hours of sleep.',
    type: 'insight',
    priority: 'low'
  },
  {
    id: '3',
    title: 'Exercise Benefit',
    message: 'Great job! Your 30-minute walk yesterday helped keep glucose stable for 4 hours.',
    type: 'achievement',
    priority: 'low'
  },
]

export function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
              Welcome back, {user?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="text-secondary-600 dark:text-secondary-400 mt-1">
              Here's your health summary for today, {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <Button className="mt-4 sm:mt-0">
            <PlusIcon className="h-4 w-4 mr-2" />
            Log Reading
          </Button>
        </div>
      </motion.div>

      {/* Health Metrics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {healthMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${
                    metric.status === 'good' ? 'bg-green-100 dark:bg-green-900' :
                    metric.status === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900' :
                    'bg-red-100 dark:bg-red-900'
                  }`}>
                    <metric.icon className={`h-5 w-5 ${
                      metric.status === 'good' ? 'text-green-600 dark:text-green-400' :
                      metric.status === 'warning' ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-red-600 dark:text-red-400'
                    }`} />
                  </div>
                  <div className={`flex items-center text-sm ${
                    metric.change.type === 'increase' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {metric.change.type === 'increase' ? (
                      <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
                    )}
                    {metric.change.value}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
                      {metric.value}
                    </span>
                    <span className="text-lg text-secondary-500">{metric.unit}</span>
                  </div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                    {metric.title}
                  </p>
                  <p className="text-xs text-secondary-500 mt-1">
                    {metric.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Glucose Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Today's Glucose Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={glucoseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.9)', 
                      border: 'none', 
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0ea5e9" 
                    strokeWidth={3}
                    dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 5 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="#22c55e" 
                    strokeDasharray="5 5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Weekly Overview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                Weekly Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.9)', 
                      border: 'none', 
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Bar 
                    dataKey="avg" 
                    fill="#0ea5e9" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Time in Range & AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Time in Range */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Time in Range</CardTitle>
              <p className="text-sm text-secondary-500">Last 14 days</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={timeInRangeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {timeInRangeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {timeInRangeData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-secondary-600 dark:text-secondary-400">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HeartIcon className="h-5 w-5 mr-2" />
                AI Health Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <motion.div
                    key={insight.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="p-4 rounded-xl bg-secondary-50 dark:bg-secondary-800/50 border border-secondary-200 dark:border-secondary-700"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${
                        insight.type === 'achievement' ? 'bg-green-100 dark:bg-green-900' :
                        insight.type === 'recommendation' ? 'bg-blue-100 dark:bg-blue-900' :
                        'bg-purple-100 dark:bg-purple-900'
                      }`}>
                        {insight.type === 'achievement' ? (
                          <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : insight.type === 'recommendation' ? (
                          <ExclamationTriangleIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <ChartBarIcon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-secondary-900 dark:text-secondary-100">
                          {insight.title}
                        </h4>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                          {insight.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className={`p-4 rounded-xl border ${
                    event.urgent 
                      ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20' 
                      : 'border-secondary-200 bg-secondary-50 dark:border-secondary-700 dark:bg-secondary-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-secondary-900 dark:text-secondary-100">
                      {event.title}
                    </h4>
                    {event.urgent && (
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {event.time}
                  </p>
                  <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                    event.type === 'appointment' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                    event.type === 'medication' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                  }`}>
                    {event.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
