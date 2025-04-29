import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import ResponsiveNavbar from './components/Home/Navbar/ResponsiveNavbar'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Landing Page ',
  description: 'Modern ve hızlı Next.js 15 landing page örneği',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${roboto.variable} font-sans bg-white`}>
         <ResponsiveNavbar/>
          {children}
        
      </body>
    </html>
  )
} 