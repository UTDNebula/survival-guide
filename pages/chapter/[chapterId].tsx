import type {
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
    InferGetStaticPropsType,
  } from 'next/types';
  import { remark } from 'remark';
  import html from 'remark-html';
  import GuideChapterBlock from '../../components/GuideChapterBlock';
  import testChapters from '../../data/test_chapters.json';
  import { Article } from '../../components/ArticleList';

  export default function EntryPage({ chapter }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <div className="py-8 bg-[#e0ecfb] min-h-screen">
        <GuideChapterBlock
          url={''}
          date={chapter.lastUpdated}
          title={chapter.title}
          contributors={chapter.authors}
          entries = {chapter.chapterEntries}
          content={chapter.content}
        />
      </div>
    );
  }
  
  type Author = {
    name: string;
    email: string;
  };
  
  type GuideEntry = {
    entryTitle: string;
    entrySlug: string
  }

  type GuideChapter = {
    slug: string;
    title: string;
    authors: Author[];
    chapterEntries: Article[];
    content: string;
    /**
     * UNIX timestamp in milliseconds of when this entry was last updated.
     */
    lastUpdated: number;
  };
  
  type ChapterPageProps = {
    chapter: GuideChapter;
  };
  
  /**
   * Fetches data for one Guide entry page.
   *
   * @param id
   * @returns Guide entry data
   */
  async function getEntryData(id: string): Promise<GuideChapter> {
    const chapter = testChapters.find((chapter) => chapter.slug === id);
    console.log(chapter);
    if (chapter) {
      const data = {
        ...chapter,
        lastUpdated: new Date(chapter.lastUpdated).valueOf(),
        content: (await remark().use(html).process(chapter.content)).toString(),
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
      paths: testChapters.map(({ slug }) => {
        return {
          params: {
            chapterId: slug,
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
  }: GetStaticPropsContext): Promise<GetStaticPropsResult<ChapterPageProps>> {
    const id = params?.chapterId as string;
    const data = await getEntryData(id);
    return {
      props: {
        chapter: data,
      },
    };
  }
  