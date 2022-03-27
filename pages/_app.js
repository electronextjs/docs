import "nextra-theme-docs/style.css"
import "@code-hike/mdx/dist/index.css"

import GlobalStyle from '../styles/global'
import { Container } from '../components/container'
import Head from "next/head"

export default function Nextra({ Component, pageProps }) {

  return (
  <Container>
    <Head>
    <link rel="icon" href="/electronext.logo.svg" />
    </Head>
    <GlobalStyle/>
    <Component {...pageProps} />
  </Container>
  )

}
