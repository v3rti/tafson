import '@styles/globalStyles.css';

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        
        {children}
      </body>
    </html>
  )
}