import { useState } from 'react'
import { motion } from 'framer-motion'
import {   ChartBarIcon, 
  HeartIcon, 
  BeakerIcon,
  CameraIcon,
  DocumentTextIcon,
  CalendarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  FunnelIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const timelineData = [
  {
    id: '1',
    date: '2025-06-15',
    type: 'glucose_reading',
    title: 'Blood Glucose: 142 mg/dL',
    description: 'Post-meal reading, 2 hours after lunch',
    value: 142,
    status: 'warning',
    notes: 'Slightly elevated after pasta meal'
  },
  {
    id: '2',
    date: '2025-06-14',
    type: 'medication',
    title: 'Metformin Taken',
    description: 'Evening dose - 500mg',
    status: 'good',
    notes: 'Taken with dinner as prescribed'
  },
  {
    id: '3',
    date: '2025-06-14',
    type: 'lab_result',
    title: 'HbA1c Result: 7.2%',
    description: 'Quarterly diabetes panel',
    value: 7.2,
    status: 'warning',
    notes: 'Slight improvement from 7.4% last quarter'
  },
  {
    id: '4',
    date: '2025-06-13',
    type: 'appointment',
    title: 'Endocrinologist Visit',
    description: 'Dr. Sarah Smith - Routine checkup',
    status: 'good',
    notes: 'Discussed adjusting insulin dosage'
  },
  {
    id: '5',
    date: '2025-06-12',
    type: 'glucose_reading',
    title: 'Blood Glucose: 95 mg/dL',
    description: 'Fasting morning reading',
    value: 95,
    status: 'good',
    notes: 'Excellent fasting level'
  },
  {
    id: '6',
    date: '2025-06-10',
    type: 'exercise',
    title: '30-minute Walk',
    description: 'Evening exercise session',
    status: 'good',
    notes: 'Helped stabilize post-dinner glucose'
  },
  {
    id: '7',
    date: '2025-06-08',
    type: 'prescription',
    title: 'Prescription Updated',
    description: 'Insulin dosage adjusted',
    status: 'info',
    notes: 'Increased rapid-acting insulin by 2 units'
  }
]

const glucoseTrend = [
  { date: '06/01', morning: 102, afternoon: 145, evening: 128 },
  { date: '06/02', morning: 98, afternoon: 152, evening: 135 },
  { date: '06/03', morning: 105, afternoon: 138, evening: 122 },
  { date: '06/04', morning: 95, afternoon: 148, evening: 131 },
  { date: '06/05', morning: 101, afternoon: 142, evening: 126 },
  { date: '06/06', morning: 97, afternoon: 155, evening: 139 },
  { date: '06/07', morning: 103, afternoon: 141, evening: 124 },
  { date: '06/08', morning: 99, afternoon: 147, evening: 133 },
  { date: '06/09', morning: 96, afternoon: 144, evening: 127 },
  { date: '06/10', morning: 104, afternoon: 139, evening: 121 },
  { date: '06/11', morning: 100, afternoon: 150, evening: 134 },
  { date: '06/12', morning: 95, afternoon: 143, evening: 125 },
  { date: '06/13', morning: 102, afternoon: 146, evening: 129 },
  { date: '06/14', morning: 98, afternoon: 149, evening: 132 },
  { date: '06/15', morning: 101, afternoon: 142, evening: 128 },
]

const predictions = [
  {
    type: 'glucose_trend',
    title: 'Glucose Trend Prediction',
    description: 'Based on your recent patterns, your glucose levels may trend higher next week due to increased stress and irregular meal times.',
    confidence: 78,
    timeframe: '7 days',
    recommendation: 'Consider stress management techniques and maintaining consistent meal schedules.'
  },
  {
    type: 'medication_adherence',
    title: 'Medication Reminder',
    description: 'You may forget your evening Metformin dose on Wednesday based on your schedule patterns.',
    confidence: 85,
    timeframe: '3 days',
    recommendation: 'Set an additional reminder for Wednesday evening.'
  },
  {
    type: 'appointment_needed',
    title: 'Recommended Check-up',
    description: 'Your glucose variability suggests scheduling an appointment with your endocrinologist.',
    confidence: 72,
    timeframe: '2 weeks',
    recommendation: 'Book appointment to discuss current management plan.'
  }
]

export function HealthTimelinePage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d')

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'glucose_reading':
        return <ChartBarIcon className="h-5 w-5" />
      case 'medication':
        return <BeakerIcon className="h-5 w-5" />
      case 'lab_result':
        return <DocumentTextIcon className="h-5 w-5" />
      case 'appointment':
        return <CalendarIcon className="h-5 w-5" />
      case 'exercise':
        return <HeartIcon className="h-5 w-5" />
      case 'prescription':
        return <DocumentTextIcon className="h-5 w-5" />
      default:
        return <DocumentTextIcon className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'glucose_reading':
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900'
      case 'medication':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900'
      case 'lab_result':
        return 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900'
      case 'appointment':
        return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900'
      case 'exercise':
        return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900'
      case 'prescription':
        return 'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900'
      default:
        return 'text-secondary-600 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircleIcon className="h-4 w-4 text-green-600" />
      case 'warning':
        return <ExclamationTriangleIcon className="h-4 w-4 text-yellow-600" />
      case 'critical':
        return <ExclamationTriangleIcon className="h-4 w-4 text-red-600" />
      default:
        return <CheckCircleIcon className="h-4 w-4 text-blue-600" />
    }
  }

  const filteredData = timelineData.filter(item => 
    selectedFilter === 'all' || item.type === selectedFilter
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
            Health Timeline
          </h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Track your health journey and AI-powered predictions
          </p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="ghost">
            <CameraIcon className="h-4 w-4 mr-2" />
            Add Photo
          </Button>
          <Button>
            <DocumentTextIcon className="h-4 w-4 mr-2" />
            Add Record
          </Button>
        </div>
      </motion.div>

      {/* Glucose Trend Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-2" />
              Glucose Trends (Last 15 Days)
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">7d</Button>
              <Button variant="ghost" size="sm">14d</Button>
              <Button size="sm">30d</Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={glucoseTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(255, 255, 255, 0.9)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="morning" 
                  stackId="1" 
                  stroke="#22c55e" 
                  fill="#22c55e" 
                  fillOpacity={0.3}
                />
                <Area 
                  type="monotone" 
                  dataKey="afternoon" 
                  stackId="2" 
                  stroke="#f59e0b" 
                  fill="#f59e0b" 
                  fillOpacity={0.3}
                />
                <Area 
                  type="monotone" 
                  dataKey="evening" 
                  stackId="3" 
                  stroke="#0ea5e9" 
                  fill="#0ea5e9" 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* AI Predictions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
              AI Health Predictions
            </CardTitle>
            <p className="text-sm text-secondary-500">
              Insights based on your health patterns and data
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {predictions.map((prediction, index) => (
                <motion.div
                  key={prediction.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="p-4 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950/20 dark:to-accent-950/20 border border-primary-200 dark:border-primary-800"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-secondary-900 dark:text-secondary-100">
                      {prediction.title}
                    </h4>
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                      <span>{prediction.confidence}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                    {prediction.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-secondary-500">
                      <span>Timeframe: {prediction.timeframe}</span>
                      <span>Confidence</span>
                    </div>
                    <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${prediction.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-white/50 dark:bg-secondary-800/50 rounded-lg">
                    <p className="text-xs text-secondary-700 dark:text-secondary-300">
                      <strong>Recommendation:</strong> {prediction.recommendation}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-2"
      >
        {[
          { key: 'all', label: 'All Records' },
          { key: 'glucose_reading', label: 'Glucose' },
          { key: 'medication', label: 'Medications' },
          { key: 'lab_result', label: 'Lab Results' },
          { key: 'appointment', label: 'Appointments' },
          { key: 'exercise', label: 'Exercise' }
        ].map((filter) => (
          <button
            key={filter.key}
            onClick={() => setSelectedFilter(filter.key)}
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
              selectedFilter === filter.key
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-medium'
                : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4"
      >
        {filteredData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="relative"
          >
            {/* Timeline line */}
            {index !== filteredData.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-secondary-200 dark:bg-secondary-700"></div>
            )}
            
            <Card className="ml-16 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900 dark:text-secondary-100">
                          {item.title}
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {new Date(item.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-secondary-700 dark:text-secondary-300 mb-3">
                      {item.description}
                    </p>
                    
                    {item.notes && (
                      <div className="p-3 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg mb-3">
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          <strong>Notes:</strong> {item.notes}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(item.status)}
                    <Button variant="ghost" size="sm">
                      <EyeIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Timeline node */}
            <div className="absolute left-4 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-secondary-900 shadow-md"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
