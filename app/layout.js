import '../styles/global.css'

export const metadata = {
  title: 'Searle Construction',
  description: 'Searle Construction is a family owned and operated business...',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <body>{children}</body>
    </html>
  )
}
