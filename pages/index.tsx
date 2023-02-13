import Head from 'next/head'
import SiteHeader from '../components/SiteHeader'
import IndexPage from './IndexPage'
import Footer from '@/components/Footer'
export default function Home() {
  return (
      <div>
        <Head>
          <title>Guide Index</title>
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <SiteHeader/>
        <IndexPage/>
        <Footer/>
      </div>
  )
}
