import type { NextPage } from 'next';
import Head from 'next/head';

export default function LandingPage() {
  return(
    <div className="min-h-screen h-full">
      <div className="lg:flex h-full">
        <Head>
          <title>UTD Survival Guide</title>
          <meta
            name="description"
            content="Your one-stop shop for everything you need to know as a student at UT Dallas."
          />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <section className="flex-1 flex flex-col justify-center px-16 py-[240px] color-light text-dark">
          <div className="my-4">
            <div className="text-headline3 font-bold font-display">UTD Survival Guide</div>
            <div className="text-headline4 font-display">Your ticket to the next few years.</div>
            <div className="py-4 text-headline5 font-bold text-blue-400 underline">
              <a href="https://github.com/UTDNebula/survival-guide/display">&gt; Coming soon.</a>
            </div>
          </div>
        </section>
        <section className="flex-1 px-16 bg-primary-light">
          {/* TODO: Nebula graphic and other announcements */}
          {/* TODO: Actually, maybe a testimonial like web.mit.edu */}
        </section>
      </div>
    </div>
  )
}