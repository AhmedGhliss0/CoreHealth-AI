// User Types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'patient' | 'doctor' | 'admin'
  preferences?: UserPreferences
  createdAt: Date
  updatedAt: Date
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  notifications: boolean
  language: string
  timezone: string
}

// Health Data Types
export interface HealthMetric {
  id: string
  type: 'blood_glucose' | 'blood_pressure' | 'weight' | 'heart_rate' | 'steps' | 'sleep'
  value: number
  unit: string
  timestamp: Date
  notes?: string
  userId: string
}

export interface BloodGlucoseReading {
  id: string
  value: number
  unit: 'mg/dL' | 'mmol/L'
  type: 'fasting' | 'post_meal' | 'random' | 'bedtime'
  timestamp: Date
  notes?: string
  mealContext?: string
  userId: string
}

export interface BloodPressureReading {
  id: string
  systolic: number
  diastolic: number
  heartRate?: number
  timestamp: Date
  notes?: string
  userId: string
}

// Medical Records
export interface MedicalRecord {
  id: string
  title: string
  description: string
  type: 'diagnosis' | 'medication' | 'test_result' | 'procedure' | 'note'
  date: Date
  doctorId?: string
  patientId: string
  attachments?: FileAttachment[]
  status: 'active' | 'completed' | 'cancelled'
}

export interface Medication {
  id: string
  name: string
  dosage: string
  frequency: string
  startDate: Date
  endDate?: Date
  instructions?: string
  prescribedBy?: string
  patientId: string
}

export interface FileAttachment {
  id: string
  name: string
  url: string
  type: string
  size: number
  uploadedAt: Date
}

// Appointments
export interface Appointment {
  id: string
  title: string
  description?: string
  startTime: Date
  endTime: Date
  type: 'consultation' | 'checkup' | 'follow_up' | 'emergency'
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled'
  patientId: string
  doctorId: string
  location?: string
  meetingLink?: string
  notes?: string
}

// AI Assistant Types
export interface AIMessage {
  id: string
  content: string
  type: 'user' | 'assistant'
  timestamp: Date
  metadata?: {
    confidence?: number
    sources?: string[]
    suggestions?: string[]
  }
}

export interface AIInsight {
  id: string
  title: string
  description: string
  type: 'warning' | 'recommendation' | 'achievement' | 'reminder'
  priority: 'low' | 'medium' | 'high' | 'critical'
  category: 'glucose' | 'medication' | 'lifestyle' | 'appointment'
  timestamp: Date
  actionRequired?: boolean
  dismissed?: boolean
}

// Notifications
export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  category: 'health' | 'appointment' | 'medication' | 'system'
  timestamp: Date
  read: boolean
  actionUrl?: string
  userId: string
}

// Charts and Analytics
export interface ChartDataPoint {
  date: string
  value: number
  label?: string
  category?: string
}

export interface HealthTrend {
  metric: string
  trend: 'increasing' | 'decreasing' | 'stable'
  percentage: number
  period: string
  recommendation?: string
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  errors?: string[]
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Component Props
export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'neumorphism'
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  error?: string
  disabled?: boolean
  type?: 'text' | 'email' | 'password' | 'number'
  className?: string
}

// Dashboard Types
export interface DashboardMetric {
  id: string
  title: string
  value: string | number
  unit?: string
  change?: {
    value: number
    type: 'increase' | 'decrease'
    period: string
  }
  status?: 'good' | 'warning' | 'critical'
  icon?: string
}

export interface DashboardCard {
  id: string
  title: string
  component: string
  props?: Record<string, any>
  span?: {
    col: number
    row: number
  }
  refreshable?: boolean
}

// Theme Types
export interface ThemeConfig {
  colors: {
    primary: Record<string, string>
    secondary: Record<string, string>
    success: Record<string, string>
    warning: Record<string, string>
    danger: Record<string, string>
  }
  fonts: {
    primary: string
    secondary: string
  }
  animations: {
    duration: {
      fast: string
      normal: string
      slow: string
    }
    easing: string
  }
}
