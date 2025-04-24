import Navbar from './components/Navbar'

import './styles/globals.css'

export const metadata = {
  title: 'CEO Yasmin Portfolio',
  description: 'Built with love & Tailwind 💅',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
