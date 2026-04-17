import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kyueapp.com'),
  title: 'Kyue — Your Wearable, Finally in Context',
  description:
    'Kyue connects your menstrual cycle phase to your wearable data — so you finally understand why your HRV tanks, your energy crashes, and some weeks you can do anything while others you can barely function.',
  keywords: [
    'cycle tracking app',
    'wearable data menstrual cycle',
    'HRV cycle phases',
    'Garmin Oura Whoop cycle',
    'phase-aware wellness',
    'hormonal health app',
    'ADHD menstrual cycle',
    'cycle syncing app iOS',
  ],
  openGraph: {
    title: 'Kyue — Your Wearable, Finally in Context',
    description:
      'Not a period tracker. A phase-aware copilot that connects your cycle to your wearable data.',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyue — Your Wearable, Finally in Context',
    description: 'Your wearable isn\'t broken. You\'re just late luteal.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
