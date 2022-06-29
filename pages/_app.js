import '../styles/globals.css'
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return(  
  <SWRConfig> 
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#85A1BA] to-[#194591]">
  <Component {...pageProps}/>
  </div>
  </SWRConfig>)
}

export default MyApp
