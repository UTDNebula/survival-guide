import Link from 'next/link';
import testGlossaryEntries from '../data/test_glossary_entries.json';
import type {
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
    InferGetStaticPropsType,
  } from 'next/types';

export default function glossary() {
  return (
    <div className="min-h-screen bg-slate-100 bg-[url(/nebula_background.svg)] bg-cover">
      <main className="p-16">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="p-12 bg-white rounded-xl shadow-md">
            <h1 className="text-headline4 text-[96px] font-bold font-display">I got you NIgga</h1>
            <div className="text-4xl">We couldn&apos;t find what you were looking for NIgga.</div>
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

type GlossaryEntry = {
    term: string,
    content: string
};

type GlossaryEntries = {
    GlossaryEntryList: GlossaryEntry[];
};

type EntryPageProps = {
    entry: GlossaryEntry;
};

/**
 * Fetches entry data.
 *
 * At build time, this gets the data for a Guide entry from our data source.
 */
export async function getStaticProps({
    params,
  }: GetStaticPropsContext): Promise<GetStaticPropsResult<EntryPageProps>> {
    const data = await getEntryData();
    return {
      props: {
        entry: data,
      },
    };
}

/**
 * Fetches data for one Guide entry page.
 *
 * @param id
 * @returns Guide entry data
 */
async function getEntryData(): Promise<GlossaryEntries> {
    let list: string;
    for(let i = 0; i < testGlossaryEntries.length; i++){
        let entry : GlossaryEntry;
        entry = {term: testGlossaryEntries[i].term, content: testGlossaryEntries[i].content}
        list += {GlossaryEntryList : [entry]}
    }
    if(list === null){
        throw new Error('Invalid ');
    }
    else{
        return list;
    }
    
    // const entry = testGlossaryEntries.find((entry) => list += [term: entry.term, content : entry.content]:Promise<GlossaryEntry>);
    // if(list){
    //     return list;
    // }else{
    //     throw new Error('Invalid entry ID provided');
    // }
    // if (entry) {
    //   const data = {
    //     ...entry,
    //     lastUpdated: new Date(entry.lastUpdated).valueOf(),
    //     content: (await remark().use(html).process(entry.content)).toString(),
    //   };
    //   return data;
    // } else {
    //   throw new Error('Invalid entry ID provided.');
    // }
  }