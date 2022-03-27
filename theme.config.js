import { Logo } from "./components/logo"

export default {
  github: 'https://github.com/electronextjs',
  projectLink: 'https://github.com/electronextjs',
  docsRepositoryBase:
    'https://github.com/electronextjs/docs/tree/main/pages',
  titleSuffix: ' – ElectroNext.js',
  search: false,
  searchPlaceholder: ({ locale }) => locale === 'pt-BR' ? 'Pesquisar documentação...' : 'Search documentation...',
  //unstable_faviconGlyph: '✦',
  prevLinks: true,
  nextLinks: true,
  unstable_flexsearch: true,
  floatTOC: true,
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  defaultMenuCollapsed: true,
  feedbackLink: ({locale}) => locale == 'pt-BR' ? 'Pergunta? Dê-nos feedback →' : "Question? Give us feedback →",
  feedbackLabels: "feedback",
  footer: true,
  footerEditLink: ({locale}) => locale == 'pt-BR' ? 'Editar esta página no Github' : 'Edit this page on GitHub',
  footerText: `MIT ${new Date().getFullYear()} © ElectroNext.js`,
  logo: () => <Logo/>,
  head: (
    <>
      <meta name="msapplication-TileColor" content="#111111" />
      <meta name="theme-color" content="#111111" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ElectroNext.js Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://github.com/electronextjs" />
      <meta property="og:title" content="ElectroNext.js Documentation" />
      <meta property="og:description" content="ElectroNext.js Documentation" />
      <meta name="apple-mobile-web-app-title" content="ElectroNext.js" />
    </>
  )
}
