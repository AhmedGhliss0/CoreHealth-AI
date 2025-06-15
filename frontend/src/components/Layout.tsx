import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { AIAssistant } from './AIAssistant'
import { NotificationCenter } from './NotificationCenter'

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <div className="flex h-screen bg-secondary-50 dark:bg-secondary-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onAIClick={() => setAiAssistantOpen(!aiAssistantOpen)}
          onNotificationsClick={() => setNotificationsOpen(!notificationsOpen)}
        />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
      
      {/* AI Assistant Panel */}
      <AIAssistant 
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />
      
      {/* Notification Center */}
      <NotificationCenter 
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </div>
  )
}
