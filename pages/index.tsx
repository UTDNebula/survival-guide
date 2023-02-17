import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import IndexPage from './IndexPage';
import SiteFooter from '../components/SiteFooter';
import Link from 'next/link';
import LandingPage from './LandingPage';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Guide Index</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <SiteHeader />
      <LandingPage />
      <SiteFooter />
    </div>
  );
}
