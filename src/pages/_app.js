import '@/styles/globals.css'
import Layout from "@/components/layout";
import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }) {
  
  return (
  <ClerkProvider {...pageProps} >
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ClerkProvider>
  )
}