import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon,
  VideoCameraIcon,
  MapPinIcon,
  PlusIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

const appointments = [
  {
    id: '1',
    title: 'Quarterly Diabetes Check-up',
    doctor: 'Dr. Sarah Smith',
    speciality: 'Endocrinologist',
    date: '2025-06-20',
    time: '14:00',
    duration: 60,
    type: 'in-person',
    location: 'Medical Center, Room 205',
    status: 'confirmed',
    notes: 'Bring your glucose logs for the past 3 months'
  },
  {
    id: '2',
    title: 'Nutrition Consultation',
    doctor: 'Dr. Michael Chen',
    speciality: 'Nutritionist',
    date: '2025-06-25',
    time: '10:30',
    duration: 45,
    type: 'video',
    location: 'Video Call',
    status: 'scheduled',
    notes: 'Discuss meal planning and carb counting'
  },
  {
    id: '3',
    title: 'Lab Results Review',
    doctor: 'Dr. Sarah Smith',
    speciality: 'Endocrinologist',
    date: '2025-07-02',
    time: '15:30',
    duration: 30,
    type: 'video',
    location: 'Video Call',
    status: 'scheduled',
    notes: 'Review HbA1c and lipid panel results'
  },
  {
    id: '4',
    title: 'Eye Examination',
    doctor: 'Dr. Jennifer Davis',
    speciality: 'Ophthalmologist',
    date: '2025-07-15',
    time: '11:00',
    duration: 90,
    type: 'in-person',
    location: 'Eye Clinic, Building B',
    status: 'scheduled',
    notes: 'Annual diabetic retinopathy screening'
  }
]

const upcomingSlots = [
  { date: '2025-06-18', time: '09:00', doctor: 'Dr. Sarah Smith' },
  { date: '2025-06-18', time: '14:30', doctor: 'Dr. Michael Chen' },
  { date: '2025-06-19', time: '10:00', doctor: 'Dr. Sarah Smith' },
  { date: '2025-06-20', time: '16:00', doctor: 'Dr. Jennifer Davis' },
]

export function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showBooking, setShowBooking] = useState(false)

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || apt.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
      case 'scheduled':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
      case 'cancelled':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
      default:
        return 'bg-secondary-100 text-secondary-700 dark:bg-secondary-800 dark:text-secondary-300'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
            Appointments
          </h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Manage your healthcare appointments and consultations
          </p>
        </div>
        <Button onClick={() => setShowBooking(true)} className="mt-4 sm:mt-0">
          <PlusIcon className="h-4 w-4 mr-2" />
          Book Appointment
        </Button>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
          <Input
            placeholder="Search appointments or doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 rounded-xl border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="scheduled">Scheduled</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <Button variant="ghost">
            <FunnelIcon className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Quick Booking Slots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Available This Week</CardTitle>
            <p className="text-sm text-secondary-500">Quick booking slots</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingSlots.map((slot, index) => (
                <motion.div
                  key={`${slot.date}-${slot.time}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="p-4 rounded-xl border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                      {new Date(slot.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="text-sm text-primary-600 dark:text-primary-400">
                      {slot.time}
                    </span>
                  </div>
                  <p className="text-xs text-secondary-600 dark:text-secondary-400">
                    {slot.doctor}
                  </p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Appointments List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        {filteredAppointments.map((appointment, index) => (
          <motion.div
            key={appointment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                          {appointment.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-secondary-600 dark:text-secondary-400">
                          <div className="flex items-center">
                            <UserIcon className="h-4 w-4 mr-1" />
                            {appointment.doctor}
                          </div>
                          <span className="text-secondary-400">•</span>
                          <span>{appointment.speciality}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {formatDate(appointment.date)}
                      </div>
                      <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        {appointment.time} ({appointment.duration} min)
                      </div>
                      <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                        {appointment.type === 'video' ? (
                          <VideoCameraIcon className="h-4 w-4 mr-2" />
                        ) : (
                          <MapPinIcon className="h-4 w-4 mr-2" />
                        )}
                        {appointment.location}
                      </div>
                    </div>

                    {appointment.notes && (
                      <div className="p-3 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg">
                        <p className="text-sm text-secondary-700 dark:text-secondary-300">
                          <strong>Notes:</strong> {appointment.notes}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0 lg:ml-6">
                    {appointment.type === 'video' && (
                      <Button variant="primary" size="sm">
                        <VideoCameraIcon className="h-4 w-4 mr-2" />
                        Join Call
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Booking Modal */}
      {showBooking && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowBooking(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-secondary-900 rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
              Book New Appointment
            </h3>
            <div className="space-y-4">
              <Input label="Appointment Type" placeholder="Select appointment type" />
              <Input label="Preferred Doctor" placeholder="Choose your doctor" />
              <Input label="Preferred Date" type="text" placeholder="Select date" />
              <Input label="Preferred Time" placeholder="Select time" />
              <Input label="Notes" placeholder="Any special requirements" />
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="flex-1">Book Appointment</Button>
              <Button variant="ghost" onClick={() => setShowBooking(false)}>
                Cancel
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
