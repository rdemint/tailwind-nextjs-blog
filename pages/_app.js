import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import { InstantSearch } from 'react-instantsearch-hooks-web'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import { Provider } from '@lyket/react'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import algoliasearch from 'algoliasearch/lite'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET
const searchClient = algoliasearch('B1KIR36PT1', '368b0ae1e4189a50b98135ffa70128e0')

export default function App({ Component, pageProps }) {
  return (
    <InstantSearch searchClient={searchClient} indexName="qms_data_index">
      <Provider apiKey="pt_b95e0dc4778a3b172b9b370f3684d0">
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          {isDevelopment && isSocket && <ClientReload />}
          <Analytics />
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ThemeProvider>
      </Provider>
    </InstantSearch>
  )
}
