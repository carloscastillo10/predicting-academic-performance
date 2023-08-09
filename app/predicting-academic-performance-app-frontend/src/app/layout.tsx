import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Predicción del Rendimiento Académico',
  description: '🎓🔮 ¡Descubre tu éxito académico! Nuestra aplicación web con IA predice tu rendimiento estudiantil. Prepárate para un futuro brillante. 💡📚✨',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-black`}>{children}</body>
    </html>
  )
}
