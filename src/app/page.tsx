'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'
import AboutPage from './about/page'
import useDarkMode from './hooks/useDarkMode';
import Image from 'next/image'
import { projects } from './components/projectData'
import Timeline from './components/Timeline'
import SocialLinks from './components/socialLink'
import EmailCard from './components/EmailCard'



export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { darkMode, toggle } = useDarkMode()

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const onScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const cardWidth = 320;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    slider.addEventListener('scroll', onScroll);
    return () => slider.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="scroll-smooth bg-minty dark:bg-gray-900 text-gray-800 dark:text-gray-100">

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center px-4 dark:bg-gray-900"
        id="home"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Image Section (left) */}
          <div className="relative flex justify-center md:justify-start">
            {/* Gradient Glow Background */}
            <div className="absolute w-72 h-72 rounded-full blur-[100px] z-0
            bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-500
            dark:from-emerald-200 dark:via-emerald-300 dark:to-emerald-400
            opacity-70 dark:opacity-30
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Image
                src="/yasmin.png"
                alt="CEO Yasmin"
                width={256} // = w-64
                height={256}
                className="rounded-xl object-cover h-auto"
                priority // load it immediately
              />
            </motion.div>

          </div>

          {/* Text Section (right) */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
              Hi, I’m Yasmin Khalid!
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md">
              I build apps and websites, teach kids, and lead like a boss. Let’s build the future together 🚀
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-md text-sm shadow-md transition"
              >
                Let’s Work Together!
              </a>
            </div>

          </div>
        </div>
      </section>



      {/* About Section */}
      <motion.section
        id="about"
        className="h-screen flex items-center justify-center dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AboutPage />
      </motion.section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 bg-minty dark:bg-gray-900 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Timeline />
        </div>
      </section>


      {/* Project Section */}
      <section id="projects" className="py-20 px-4 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-emerald-600 text-center">My Projects</h2>

        <div className="relative">
          {/* Responsive Grid (instead of scroll) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="flex">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  liveLink={project.liveLink}
                  codeLink={project.codeLink}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="h-screen flex items-center justify-center dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <EmailCard />
        </div>
      </motion.section>

      <footer className="mt-20 pb-10 dark:bg-gray-900">
        <SocialLinks />
        <p className="text-sm flex justify-center text-gray-500 dark:text-gray-400 mt-4">
          &copy; 2025 Yasmin Khalid. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
