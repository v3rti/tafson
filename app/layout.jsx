import '@styles/globalStyles.css';

import Navbar from '@components/Navbar';
import DemoBody from '@components/DemoBody';
import Musicbar from '@components/Musicbar';

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className="h-screen">
        {/* Navbar */}
        <Navbar />
        <DemoBody content={children}/>
        <Musicbar />
      </body>
    </html>
  )
}