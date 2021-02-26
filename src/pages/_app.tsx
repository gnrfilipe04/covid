import { RequestProvider } from "../context/RequestsContext"

function MyApp({ Component, pageProps }) {
  return (
    <RequestProvider>
      <Component {...pageProps} />
    </RequestProvider>
  )
}

export default MyApp
