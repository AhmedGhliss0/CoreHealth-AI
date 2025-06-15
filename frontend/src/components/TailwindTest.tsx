import React from 'react'

export function TailwindTest() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <div className="h-12 w-12 bg-primary-500 rounded-full flex items-center justify-center text-white">
          T
        </div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Tailwind v3 Test</div>
        <p className="text-gray-500">Tailwind CSS is working correctly!</p>
      </div>
    </div>
  )
}
