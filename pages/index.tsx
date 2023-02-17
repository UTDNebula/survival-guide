import type { GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ArticleList, { Article } from '../components/ArticleList';
import SiteFooter from '../components/SiteFooter';
import test_entries from '../data/test_entries.json';

export default function LandingPage({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <div className="lg:flex h-full">
        <section className="p-8 md:max-w-5xl flex-auto flex flex-col justify-center color-light text-dark bg-slate-50">
          <div className="max-w-2xl mx-auto">
            <div className="text-headline4 lg:text-headline2 font-bold font-display my-4">
              UTD Survival Guide
            </div>
            <div className="text-headline6 lg:text-headline5 font-display my-8 font-medium">
              The UTD Survival Guide is an open source project developed by Nebula Labs. We aim to
              provide a collection of articles and resources for traditional and non-traditional UTD
              Students to survive and thrive academically and socially.
            </div>
            <div className="text-subtitle1 font-normal">
              This website is currently in version 0.1.0 and is subject to change. If you encounter
              any issues, please click the “report a bug” button above.
            </div>
            <div className="py-8">
              <Link
                href="#featured"
                className="rounded-[16px] text-white p-3 text-xl bg-[#4659A7] hover:bg-[#3D4E94] transition shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
        <section className="flex-1 px-16 bg-[url('../public/nebula_background.svg')] bg-no-repeat bg-cover bg-slate-50">
          {/* TODO: Nebula graphic and other announcements */}
        </section>
      </div>
      <section
        id="featured"
        className="w-full flex h-fit p-4 bg-indigo-100 justify-center px-10 py-12"
      >
        <div className="container max-w-6xl mx-auto p-8 font-display rounded-lg bg-white max-h-screen">
          <h2 className="pb-2 text-4xl font-medium">Featured Articles</h2>
          <ArticleList articles={articles} />
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

type LandingPageProps = {
  articles: Article[];
};

async function fetchEntries(): Promise<Article[]> {
  return test_entries;
}

export async function getStaticProps({}): Promise<GetStaticPropsResult<LandingPageProps>> {
  const entries = await fetchEntries();
  console.log(entries);
  return {
    props: {
      articles: entries,
    },
  };
}
