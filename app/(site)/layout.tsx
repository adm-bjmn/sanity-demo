import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tutorial Site Next+Sanity',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();

  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-10'>
        <header>
          <Link href="/"
            className="text-7xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400
          s via-red-500 to-purple-600 bg-clip-text text-transparent">Adam</Link>

          <div>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                {page.title}
              </Link>

            ))}
          </div>


        </header>

        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
