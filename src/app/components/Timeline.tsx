'use client'

import React from 'react'
//import Image from 'next/image'
import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2014-2018',
    title: 'IGCSE & SPM',
    desc: 'MARA Junior Science College (MJSC)',
    // icon: '🎓',
  },
  {
    year: '2019-2021',
    title: 'Diploma in Computer Science',
    desc: 'MARA Professional College (MPC) ',
    // icon: '/icons/kpm.png',
  },
  {
    year: '2022-2025',
    title: 'Bachelor of Information Technology (Hons.) in Software Engineering',
    desc: 'UniKL Malaysian Institute of Information Technology (UniKL MIIT)',
    // icon: '/icons/unikl.png',
  },
]

const Timeline = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 text-center" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-emerald-600 dark:text-emerald-400">
          Education
        </h2>

        <div className="w-full flex justify-center">
          <div className="flex gap-6 snap-x snap-mandatory pb-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[220px] snap-center text-center relative bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md transition-transform ver:border-emerald-400 hover:ring-2 hover:ring-emerald-300/60 hover:shadow-md transition"
              >
                {/* Year */}
                <div
                  className="text-white font-bold py-3 rounded-md shadow-lg bg-gradient-to-r from-emerald-700 to-emerald-900"

                >
                  {item.year}
                </div>

                {/* Divider */}
                <div className="flex justify-center my-3">
                  <div className="w-6 h-1 bg-emerald-500 rounded-full"></div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-black dark:text-white mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-700 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Timeline
