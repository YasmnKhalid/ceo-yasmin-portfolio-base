'use client'
import { useState } from 'react'
import { FiCopy, FiCheck, FiMail, FiPhone } from 'react-icons/fi'

const EmailCard = () => {
  const [copied, setCopied] = useState(false)
  const email = "khalidyasmin821@gmail.com"
  const whatsappNumber = "601118870942" 
  const profileImage = "/yasmin2.jpg" 

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 w-full max-w-md mx-auto text-center hover:border-emerald-400 hover:ring-2 hover:ring-emerald-300/60 hover:shadow-md transition">
      {/* 👑 Profile image */}
      <img
        src={profileImage}
        alt="CEO Yasmin"
        className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-emerald-300 shadow-md object-cover"
      />

      <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Let’s Connect</h3>

      {/* Email + copy */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 mb-4">
        <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200 text-sm bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md">
          <FiMail className="text-emerald-500" />
          {email}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm rounded-md transition"
        >
          {copied ? <FiCheck /> : <FiCopy />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* OR Divider */}
      <div className="text-gray-400 text-sm my-4">──────── or ────────</div>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition"
      >
        <FiPhone /> Contact me on WhatsApp
      </a>
    </div>
  )
}

export default EmailCard
