import { VoiceInput, GamificationPanel, PWAInstallPrompt } from '../components/InteractiveFeatures'
import { TailwindTest } from '../components/TailwindTest'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

export function TestPage() {
  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <h1 className="text-3xl font-heading font-bold mb-4">
        CoreHealth-AI Component Test
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tailwind CSS v3 Test</CardTitle>
          </CardHeader>
          <CardContent>
            <TailwindTest />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Voice Input Component</CardTitle>
          </CardHeader>
          <CardContent>
            <VoiceInput onCommand={(command) => console.log('Command received:', command)} />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Gamification Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <GamificationPanel />
          </CardContent>
        </Card>
      </div>
      
      <div className="flex space-x-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
      
      <PWAInstallPrompt />
    </div>
  )
}
