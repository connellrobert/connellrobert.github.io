import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="flex justify-center space-x-8">
            <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
              <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
              <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">Vite + React</h1>
          <div className="mt-8 text-center">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              count is {count}
            </button>
            <p className="mt-4 text-gray-600">
              Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="mt-8 text-center text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
