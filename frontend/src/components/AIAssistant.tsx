import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  XMarkIcon, 
  PaperAirplaneIcon,
  SparklesIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  content: string
  type: 'user' | 'assistant'
  timestamp: Date
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI health assistant. I can help you track your diabetes, analyze your health data, provide medication reminders, and answer health-related questions. How can I assist you today?',
      type: 'assistant',
      timestamp: new Date()
    }
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      type: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(message),
        type: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const generateAIResponse = (userMessage: string): string => {
    const responses = [
      "Based on your recent blood glucose readings, I notice they've been trending higher than usual. Have you been following your meal plan consistently?",
      "Your medication adherence is excellent! Keep up the great work. Remember to take your evening dose of Metformin.",
      "I see you've been more active lately - that's fantastic! Regular exercise really helps with glucose control.",
      "Your sleep pattern has been irregular recently. Poor sleep can affect blood sugar levels. Would you like some tips for better sleep hygiene?",
      "I notice it's time for your quarterly HbA1c test. Shall I help you schedule an appointment with Dr. Smith?"
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

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
                <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 dark:text-secondary-100">
                    AI Health Assistant
                  </h3>
                  <p className="text-xs text-secondary-500">Always here to help</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                        : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-white/70' : 'text-secondary-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary-100 dark:bg-secondary-800 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-secondary-200/50 dark:border-secondary-700/50">
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything about your health..."
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-secondary-400 hover:text-primary-500 transition-colors">
                    <MicrophoneIcon className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isTyping}
                  className="px-3"
                >
                  <PaperAirplaneIcon className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Check my glucose trends',
                  'Medication reminder',
                  'Schedule appointment',
                  'Diet recommendations'
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setMessage(suggestion)}
                    className="px-3 py-1 text-xs bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
