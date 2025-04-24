'use client'
// import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import useDarkMode from '../hooks/useDarkMode'



const Navbar = () => {
  const { darkMode, toggle } = useDarkMode()

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Yasmin Khalid</h1>
        <div className="space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400">About</a>
          <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400">Projects</a>
          <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400">Contact</a>
          <button
            onClick={toggle}
            className="ml-4 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="/yasmin-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition"
          >
            View CV
          </a>
        </div>
      </div>

    </motion.nav>


  )
}

export default Navbar;
