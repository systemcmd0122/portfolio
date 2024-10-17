"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover-lift">
            DevPortfolio
          </Link>
          <div className="flex items-center space-x-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Projects', path: '/projects' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((link, index) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${isActive(link.path)} transition-all duration-300 ease-in-out transform hover:scale-110`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header