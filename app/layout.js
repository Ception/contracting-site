import '../styles/global.css'
import Header from './(layout-components)/Header'
import Footer from './(layout-components)/Footer'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <Header />
        <body>{children}</body>
      <Footer />
    </html>
  )
}
