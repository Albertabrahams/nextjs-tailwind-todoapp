import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(  
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#85A1BA] to-[#194591]">
    <Head>
      <title>WesterOps Todo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <Component {...pageProps}/>
  </div>
  )
}

export default MyApp
