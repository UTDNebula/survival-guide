import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next/types';
import GuideEntryBlock from '../../components/GuideEntryBlock';
import test_entries from '../../data/test_entries.json';

export default function EntryPage({ entry }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="py-8 bg-[#e0ecfb] min-h-screen">
      <GuideEntryBlock
        url={''}
        date={''}
        title={entry.title}
        contributors={entry.authors}
        sections={[{ heading: '', level: 1, content: entry.content }]}
      />
    </div>
  );
}

type Author = {
  name: string;
  email: string;
};

type GuideEntry = {
  slug: string;
  title: string;
  authors: Author[];
  content: string;
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
  const entry = test_entries.find((entry) => entry.slug === id);
  if (entry) {
    return entry;
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
    paths: test_entries.map(({ slug }) => {
      return {
        params: {
          entryId: slug,
        },
      };
    }),
    fallback: true,
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
