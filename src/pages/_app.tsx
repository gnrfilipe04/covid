import { RequestProvider } from "../context/RequestsContext"
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <RequestProvider>
      <Component {...pageProps} />
    </RequestProvider>
  )
}

export default MyApp
