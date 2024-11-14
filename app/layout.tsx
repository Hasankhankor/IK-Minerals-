import { googleSans } from '@/libs/font'
import type { Metadata } from 'next'
import '@/style/reset.scss'
import '@/style/global.scss'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'IK Minerals',
  description: 'Unearthing Natures Green Treasures from the Heart of Swat ',
  openGraph:{
    images : [""]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={googleSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
