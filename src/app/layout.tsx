'use client'
import Navbar from './components/Navbar'
import useDarkMode from './hooks/useDarkMode'
import './styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const { darkMode } = useDarkMode();

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body>
         <Navbar/> 
        {children}
      </body>
    </html>
  )
}
