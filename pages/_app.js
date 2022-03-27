import "nextra-theme-docs/style.css"
import "@code-hike/mdx/dist/index.css"

import GlobalStyle from '../styles/global'
import { Container } from '../components/container'
import Head from "next/head"

export default function Nextra({ Component, pageProps }) {

  return (
  <Container>
    <Head>
      <meta name="author"                  content="André Malveira<andremalveira.dev@gmail.com>"/>
      <meta name="description"             content="Electron App Example with Next.js + Typescript"/>
      <meta name="keywords"                content="electron-vibrancy electronext electronjs nextjs typescript"/>

      <meta name="twitter:title"           content="ElectroNext.js"/>
      <meta name="twitter:description "    content="Electron App Example with Next.js + Typescript"/>
      <meta name="twitter:image:src"       content="https://electronextjs.github.io/.github/public/electronext.logo.png"/>
      <meta name="twitter:card"            content="summary"/>

      <meta property="og:type"             content="website" />
      <meta property="og:site_name"        content="electronextjs.vercel.app" /> 
      <meta property="og:type"             content="website" />
      <meta property="og:url"              content="https://electronextjs.vercel.app" />
      <meta property="og:title"            content="ElectroNext.js"/>
      <meta property="og:description"      content="Electron App Example with Next.js + Typescript"/>
      <meta property="og:image"            content="https://electronextjs.github.io/.github/public/electronext.logo.png"/>

      <link rel="icon" href="/electronext.logo.svg" />

    </Head>
    <GlobalStyle/>
    <Component {...pageProps} />
  </Container>
  )

}
