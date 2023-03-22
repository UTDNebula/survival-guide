import Link from 'next/link';
import testGlossaryEntries from '../data/test_glossary_entries.json';
import type {
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
    InferGetStaticPropsType,
  } from 'next/types';
import SiteFooter from '../components/SiteFooter';

export default function glossary(entry : InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(entry);
  const glossaryEntries = entry.entry.map(glossaryEntry =>  
    <div key={glossaryEntry.term}>
      <p className='text-lg font-semibold'>{glossaryEntry.term}</p>
      <br />
      <p className='text-sm font-normal text-zinc-600'>{glossaryEntry.content}</p>
      <br />
    </div>   
  );
  return (
    <div className='bg-[#e0ecfb]'>
    <main className="p-16">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="p-12 bg-white rounded-xl shadow-md">
          <h1 className="text-headline4 text-[96px] font-bold font-display">Glossary</h1>
          
          <br />
          {glossaryEntries}
          
        </div>
      </div>
    </main>
      <SiteFooter />
    </div>
  );
}

type GlossaryEntry = {
  term: string,
  content: string
};

type GlossaryEntries = GlossaryEntry[];

type EntryPageProps = {
    entry: GlossaryEntries;
};

/**
 * Fetches glossary entry data.
 *
 * At build time, this gets the data for a Guide entry from our data source.
 */
export async function getStaticProps({
    params,
  }: GetStaticPropsContext): Promise<GetStaticPropsResult<EntryPageProps>> {
    const data = await getGlossaryEntryData();
    return {
      props: {
        entry: data
      }
    };
}

/**
 * Fetches data of all glossary entries for the glossary page.
 *
 * @returns  glossary entry data
 */
async function getGlossaryEntryData(): Promise<GlossaryEntries> {
  return testGlossaryEntries;
}