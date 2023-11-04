import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styled from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JobScribe</title>
        <meta name="description" content="時間を記録して効率よくtoDoをこなすお手伝い!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F3F3F3;
  orverflow-y: scroll;
`