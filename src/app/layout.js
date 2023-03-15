import Header from '@/component/Header'
import NavBar from '@/component/NavBar'
import SearchBox from '@/component/SearchBox'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'Hello world',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Providers>
          <Header/>
          <NavBar />
          <SearchBox />
          {children}
        </Providers>
        
      </body>
    </html>
  )
}
