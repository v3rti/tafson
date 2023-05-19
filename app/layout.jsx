import '@styles/globalStyles.css';
import Navbar from '@components/Navbar';

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <Navbar />

        {children}
      </body>
    </html>
  )
}