import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JobScribe</title>
        <meta name="description" content="時間を記録して効率よくtoDoをこなすお手伝い!" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
