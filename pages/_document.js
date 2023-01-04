import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      
      </Head>
      <body id='top'>
      <div className="preload" data-preaload>
       <div className="circle"></div>
       <p className="text">Grilli</p>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
