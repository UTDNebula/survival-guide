import React from 'react';
import Seo from './seo';

export default function Landing() {
  return (
    <>
      <Seo title="Home" />
      <div className="lg:flex h-full">
        <section className="flex-1 flex flex-col justify-center px-16 py-40 color-light text-dark">
          <div className="my-4">
            <div className="text-headline3 font-bold">UTD Survival Guide</div>
            <div className="text-headline4">Your ticket to the next few years.</div>
            <div className="py-4 text-headline5 font-bold text-blue-400 underline">
              <a href="https://github.com/acmutd/nebula-guide">&gt; Coming soon.</a>
            </div>
          </div>
        </section>
        <section className="flex-1 px-16 bg-primary-light">
          {/* TODO: Nebula graphic and other announcements */}
          {/* TODO: Actually, maybe a testimonial like web.mit.edu */}
        </section>
      </div>
    </>
  );
}
