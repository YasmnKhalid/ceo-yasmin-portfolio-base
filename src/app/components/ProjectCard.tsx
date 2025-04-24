'use client'

import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};
const projects = [
  {
    title: "Julie Caretaker App",
    description: "A mobile app to manage care routines for patients. Built using Flutter and Firebase.",
    tech: ["Flutter", "Firebase", "Firestore"],
    link: "https://github.com/ceoyasmin/julie-app",
  },
  {
    title: "Dashboard UI (React + Zustand)",
    description: "Frontend dashboard with Zustand-powered state, loading spinner and charts.",
    tech: ["React", "Tailwind", "Zustand"],
    link: "https://github.com/ceoyasmin/dashboard-ui",
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Track your Web3 assets with live market data and wallet connect features.",
    tech: ["Next.js", "CoinGecko API", "Firebase"],
    link: "https://github.com/ceoyasmin/crypto-tracker",
  },
];

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <motion.div
     className="rounded-lg p-6 border border-gray-200 bg-white shadow-sm hover:border-emerald-400 hover:ring-2 hover:ring-emerald-300/60 hover:shadow-md transition"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm text-emerald-600 font-medium">
        {tech.map((t, i) => (
          <span key={i} className="bg-emerald-100 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" className="inline-block mt-4 text-emerald-500 underline">
          View Project →
        </a>
      )}
    </motion.div>
  );
}
