import '@styles/globalStyles.css';

import Navbar from '@components/Navbar';
import DemoBody from '@components/DemoBody';

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className="h-screen">
        {/* Navbar */}
        <Navbar />
        <DemoBody />
        {children}
      </body>
    </html>
  )
}