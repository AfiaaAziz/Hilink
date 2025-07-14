import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider'; // <-- IMPORT

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* WRAP EVERYTHING WITH THE PROVIDER */}
        <AuthProvider> 
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}