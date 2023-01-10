import '../styles/globals.css';
import { Raleway} from '@next/font/google'

const raleway = Raleway ({
  subsets: ['latin'],
  variable: '--fontFamily-dm_sans'

}
 
)

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
