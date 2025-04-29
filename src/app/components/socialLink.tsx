// src/app/components/SocialLinks.tsx

import { FaGithub, FaLinkedin} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 mt-12 dark:bg-gray-900">
      <a href="https://github.com/YasmnKhalid" target="_blank" rel="noopener noreferrer"
         className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 text-2xl transition">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/ysmnkhalid" target="_blank" rel="noopener noreferrer"
         className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 text-2xl transition">
        <FaLinkedin />
      </a>
      {/* <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer"
         className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 text-2xl transition">
        <FaTwitter />
      </a> */}
    </div>
  )
}

export default SocialLinks
