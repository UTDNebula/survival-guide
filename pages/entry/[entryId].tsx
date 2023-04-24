import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next/types';
import { remark } from 'remark';
import html from 'remark-html';
import GuideEntryBlock from '../../components/GuideEntryBlock';
import testEntries from '../../data/test_entries.json';
import {Author} from "../../lib/Schema"

export default function EntryPage({ entry }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="py-8 bg-[#e0ecfb] min-h-screen">
      <GuideEntryBlock
        url={''}
        date={entry.lastUpdated}
        title={entry.title}
        contributors={entry.authors}
        content={entry.content}
      />
    </div>
  );
}


type GuideEntry = {
  slug: string;
  title: string;
  authors: Author[];
  content: string;
  /**
   * UNIX timestamp in milliseconds of when this entry was last updated.
   */
  lastUpdated: number;
};

type EntryPageProps = {
  entry: GuideEntry;
};

/**
 * Fetches data for one Guide entry page.
 *
 * @param id
 * @returns Guide entry data
 */
async function getEntryData(id: string): Promise<GuideEntry> {
  const entry = testEntries.find((entry) => entry.slug === id);
  if (entry) {
    const data = {
      ...entry,
      lastUpdated: new Date(entry.lastUpdated).valueOf(),
      content: (await remark().use(html).process(entry.content)).toString(),
    };
    return data;
  } else {
    throw new Error('Invalid entry ID provided.');
  }
}

/**
 * Returns all valid entryId params.
 *
 * Functionally, this gets all possible entry IDs so Next.js has all the valid
 * routes used to check the validity of the requested URL on each request.
 */
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: testEntries.map(({ slug }) => {
      return {
        params: {
          entryId: slug,
        },
      };
    }),
    fallback: false,
  };
}

/**
 * Fetches entry data.
 *
 * At build time, this gets the data for a Guide entry from our data source.
 */
export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<EntryPageProps>> {
  const id = params?.entryId as string;
  const data = await getEntryData(id);
  return {
    props: {
      entry: data,
    },
  };
}
