import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StuddyBuddy',
  description: 'Your personalized study companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"bg-white"}>
        <Header />

        <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
		    <script src='https://mozilla.github.io/pdf.js/build/pdf.worker.js'></script>
        {children}
      </body>
    </html>
  )
}
