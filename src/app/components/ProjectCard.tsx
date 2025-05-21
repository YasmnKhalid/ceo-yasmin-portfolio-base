'use client'

import { motion } from 'framer-motion';
import { useState } from 'react'

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  codeLink?: string;
};


export default function ProjectCard({ title, description, tech, liveLink, codeLink }: ProjectCardProps) {
  const [showToast, setShowToast] = useState(false)

  const handleViewLive = () => {
    if (!liveLink) {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } else {
      window.open(liveLink, '_blank')
    }
  }

  return (
    <motion.div
      className="flex flex-col justify-between h-full rounded-lg p-6 border border-gray-200 bg-white shadow-sm hover:border-emerald-400 hover:ring-2 hover:ring-emerald-300/60 hover:shadow-md transition 
               dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-400 dark:hover:ring-emerald-400/40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 text-sm text-emerald-600 font-medium">
        {tech.map((t, i) => (
          <span key={i} className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        {/* View Live Button with Tooltip */}
        <div className="relative group">
          <button
            onClick={handleViewLive}
            className={`px-4 py-2 text-sm rounded transition ${liveLink
              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            disabled={!liveLink}
          >
            View Live
          </button>
          {/* Custom Tooltip for Portfolio */}
          {title === 'Yasmin Khalid Porfolio Website' && (
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
              you are here! 👀
            </span>
          )}

          {/* Tooltip */}
          {!liveLink && (
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              🚧 Work in progress!
            </span>
          )}
        </div>

        {/* View Code */}
        <a
          href={codeLink || '#'}
          target="_blank"
          className={`px-4 py-2 text-sm rounded transition ${codeLink
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          onClick={(e) => {
            if (!codeLink) e.preventDefault();
          }}
        >
          View Code
        </a>
      </div>
    </motion.div>
  )
}

