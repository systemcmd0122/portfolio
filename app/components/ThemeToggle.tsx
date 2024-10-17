'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <div className="w-6 h-6 relative">
        <SunIcon className="h-6 w-6 text-yellow-500 absolute transition-opacity duration-300 ease-in-out" style={{ opacity: theme === 'dark' ? 1 : 0 }} />
        <MoonIcon className="h-6 w-6 text-blue-500 absolute transition-opacity duration-300 ease-in-out" style={{ opacity: theme === 'dark' ? 0 : 1 }} />
      </div>
    </button>
  )
}

export default ThemeToggle