import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MicrophoneIcon, 
  SpeakerWaveIcon,
  TrophyIcon,
  FireIcon,
  GiftIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

// Voice Input Component
export function VoiceInput({ onCommand }: { onCommand: (command: string) => void }) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')

  const startListening = () => {
    setIsListening(true)
    // Simulate voice recognition
    setTimeout(() => {
      const mockCommands = [
        "Log glucose 120",
        "Show my glucose trends",
        "Set medication reminder",
        "Book appointment with Dr. Smith"
      ]
      const randomCommand = mockCommands[Math.floor(Math.random() * mockCommands.length)]
      setTranscript(randomCommand)
      onCommand(randomCommand)
      setIsListening(false)
      setTimeout(() => setTranscript(''), 3000)
    }, 2000)
  }

  return (
    <Card className="p-4 bg-gradient-to-r from-sky-100/50 to-indigo-100/50 dark:from-sky-900/20 dark:to-indigo-900/20">
      <div className="flex items-center gap-3">
        <Button
          onClick={startListening}
          disabled={isListening}
          className={`relative ${isListening ? 'bg-red-500 hover:bg-red-600' : ''}`}
        >
          <MicrophoneIcon className="h-5 w-5" />
          {isListening && (
            <motion.div
              className="absolute inset-0 rounded-md bg-red-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </Button>
        
        <div className="flex-1">
          <p className="text-sm font-medium">
            {isListening ? 'Listening...' : 'Voice Assistant'}
          </p>
          <AnimatePresence>
            {transcript && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs text-gray-600 dark:text-gray-400 mt-1"
              >
                "{transcript}"
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        <SpeakerWaveIcon className="h-5 w-5 text-gray-400" />
      </div>
    </Card>
  )
}

// Gamification Component
interface Achievement {
  id: string
  title: string
  description: string
  icon: typeof TrophyIcon
  progress: number
  maxProgress: number
  unlocked: boolean
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export function GamificationPanel() {
  const [healthScore] = useState(85)
  const [streak] = useState(12)
  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Glucose Guardian',
      description: 'Log glucose 7 days in a row',
      icon: TrophyIcon,
      progress: 7,
      maxProgress: 7,
      unlocked: true,
      rarity: 'common'
    },
    {
      id: '2',
      title: 'Streak Master',
      description: 'Maintain 30-day logging streak',
      icon: FireIcon,
      progress: 12,
      maxProgress: 30,
      unlocked: false,
      rarity: 'rare'
    },
    {
      id: '3',
      title: 'Health Champion',
      description: 'Achieve 90+ health score',
      icon: StarIcon,
      progress: 85,
      maxProgress: 90,
      unlocked: false,
      rarity: 'epic'
    }
  ])

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'text-gray-500'
      case 'rare': return 'text-blue-500'
      case 'epic': return 'text-purple-500'
      case 'legendary': return 'text-yellow-500'
    }
  }

  return (
    <div className="space-y-4">
      {/* Health Score */}
      <Card className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative w-24 h-24 mx-auto mb-4"
          >
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${healthScore}, 100`}
                strokeLinecap="round"
                className="text-green-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{healthScore}</span>
            </div>
          </motion.div>
          
          <h3 className="text-lg font-semibold mb-1">Health Score</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You're doing great! Keep it up.
          </p>
        </div>
      </Card>

      {/* Streak Counter */}
      <Card className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <FireIcon className="h-6 w-6 text-orange-500" />
            <span className="text-2xl font-bold">{streak}</span>
          </div>
          <div>
            <p className="font-medium">Day Streak</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Logging consistently
            </p>
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <TrophyIcon className="h-5 w-5" />
          Achievements
        </h3>
        
        <div className="space-y-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            const progress = Math.min(achievement.progress, achievement.maxProgress)
            const percentage = (progress / achievement.maxProgress) * 100
            
            return (
              <motion.div
                key={achievement.id}
                whileHover={{ scale: 1.02 }}
                className={`p-3 rounded-lg border transition-all ${
                  achievement.unlocked 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                    : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon className={`h-6 w-6 ${getRarityColor(achievement.rarity)}`} />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      {achievement.unlocked && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex-shrink-0"
                        >
                          <GiftIcon className="h-4 w-4 text-green-500" />
                        </motion.div>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {achievement.description}
                    </p>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-2 rounded-full ${
                          achievement.unlocked 
                            ? 'bg-green-500' 
                            : 'bg-blue-500'
                        }`}
                      />
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-1">
                      {progress}/{achievement.maxProgress}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

// Progressive Web App Install Prompt
export function PWAInstallPrompt() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(true)

  if (!showInstallPrompt) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-50"
      >
        <Card className="p-4 bg-gradient-to-r from-sky-100/20 to-indigo-100/20 dark:from-sky-900/20 dark:to-indigo-900/20 border-sky-200/30 dark:border-sky-700/30">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">Install CoreHealth-AI</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Get the full app experience with offline access and notifications.
              </p>
              
              <div className="flex gap-2">
                <Button size="sm" className="text-xs">
                  Install
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => setShowInstallPrompt(false)}
                >
                  Maybe Later
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}
