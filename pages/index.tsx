import Head from 'next/head';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>UTD Survival Guide</title>
        <meta
          name="description"
          content="Your one-stop shop for everything you need to know as a student at UT Dallas."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <SiteHeader />
      <div className="lg:flex h-full">
        <section className="flex-auto w-72 flex flex-col justify-center px-16 py-16 color-light text-dark">
          <div className="my-4">
            <div className="text-headline2 font-extrabold	font-display my-4">UTD Survival Guide</div>
            <div className="text-headline5 font-display my-12 font-bold">
              The UTD Survival Guide is an open source project developed by Nebula Labs. We aim to
              provide a collection of articles and resources for traditional and non-traditional UTD
              Students to survive and thrive academically and socially.
            </div>
            <div className="w-9/12 text-headline5 font-display font-normal">
              This website is currently in version 0.1.0 and is subject to change. If you encounter
              any issues, please click the “report a bug” button above.
            </div>
            <div className="ml-32 mt-12">
              <Link href="/IndexPage">
                <button className="w-3/5 h-16 rounded-lg text-white font-bold py-1.5 px-3 text-4xl bg-[#4659A7] hover:bg-[#3D4E94]">
                  Get Started!
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="flex-1 px-16 bg-[url('../public/nebula_background.svg')] bg-no-repeat bg-cover">
          {/* TODO: Nebula graphic and other announcements */}
          {/* TODO: Actually, maybe a testimonial like web.mit.edu */}
        </section>
      </div>
      <SiteFooter />
    </>
  );
}
