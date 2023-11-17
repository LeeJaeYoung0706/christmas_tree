import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './globals.module.scss'

// 구글 폰트
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChristmasTree KOSMO',
  description: 'ChristmasTree KOSMO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.bodyClass}`}>{children}</body>
    </html>
  )
}
