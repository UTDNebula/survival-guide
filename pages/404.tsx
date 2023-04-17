import Link from 'next/link';

export default function Entry404() {
  return (
    <div className="min-h-screen bg-slate-100 bg-[url(/nebula_background.svg)] bg-cover">
      <main className="p-16">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="p-12 bg-white rounded-xl shadow-md">
            <h1 className="text-headline4 text-[96px] font-bold font-display ">Whoops!</h1>
            {/* <h1 className="text-display-extra-large">Whoops!</h1>*/}
            <div className="text-4xl">We couldn&apos;t find what you were looking for.</div>
            <div className="mt-4 text-lg text-2xl">
              Go{' '}
              <Link
                href="/"
                className="text-primary font-semibold underline hover:text-primary-dark transition-all ease-in-out"
              >
                home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
