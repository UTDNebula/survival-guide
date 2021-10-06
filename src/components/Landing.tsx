import { Link } from 'gatsby';
import React from 'react';
import SearchBox from './SearchBox';
import Seo from './seo';

function ProfileDialog() {
  const user = {
    name: 'Willie Chalmers III',
    major: 'Computer Science',
  };

  const authenticated = false;

  const authText = authenticated ? 'Sign out' : 'Sign in';
  const authRedirect = authenticated ? '/auth/signOut' : '/auth/signIn';

  return (
    <div className="min-w-xl max-w-2xl bg-white rounded-md shadow-lg">
      <div className="flex p-4 space-x-4">
        <div>
          <div className="inline-block rounded-full h-10 w-10 bg-blue-300">
            {/* Profile icon */}
          </div>
        </div>
        <div>
          <div className="text-body1 font-bold">{user.name}</div>
          <div className="text-subtitle1">{user.major}</div>
        </div>
      </div>
      <ul>
        <Link to="/profile">
          <li className="p-4 uppercase text-button font-bold hover:bg-gray-200">Update profile</li>
        </Link>
        <Link to={authRedirect}>
          <li className="p-4 uppercase text-button font-bold hover:bg-gray-200">{authText}</li>
        </Link>
      </ul>
    </div>
  );
}

function ProfileHeaderItem() {
  const [showDialog, setShowDialog] = React.useState(false);
  const toggleProfile = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="relative cursor-pointer">
      <div className=" space-x-4 flex items-center" onClick={toggleProfile}>
        <span className="text-subtitle1">Your profile</span>
        <div className="inline-block rounded-full h-10 w-10 bg-blue-300"></div>
      </div>
      <div className="absolute top-2 right-2">{showDialog && <ProfileDialog />}</div>
    </div>
  );
}

type ChipType = 'recommendation' | 'userChip';

type SearchChipType = {
  type: ChipType;
  content: string;
  link: string;
};

const CHIP_ICON_MAPPINGS: Record<ChipType, { color: string; image: string }> = {
  recommendation: {
    color: '#452753',
    image: '',
  },
  userChip: {
    color: '#452753',
    image: '',
  },
};

type SearchChipProps = SearchChipType & {
  onClick?: () => void;
};

function SearchChip({ type, content, link, onClick = () => undefined }: SearchChipProps) {
  const { image, color } = CHIP_ICON_MAPPINGS[type];
  return (
    <a className="inline-block bg-gray-200 p-4 rounded-md" onClick={onClick} href={link}>
      <span className="">{image}</span>
      <span className="text-body1">{content}</span>
    </a>
  );
}

const CHIP_EXAMPLES: SearchChipType[] = [
  {
    type: 'recommendation',
    content: 'What should I bring at move-in?',
    link: '/faq#move-in',
  },
  {
    type: 'recommendation',
    content: 'What should I expect on the first day?',
    link: '/faq#first-day',
  },
  {
    type: 'recommendation',
    content: 'What parking pass should I get?',
    link: '/faq#parking',
  },
];

type InfoBlockProps = {
  onSearchSubmit?: (query: string) => void;
};

function InfoBlock({ onSearchSubmit = () => undefined }: InfoBlockProps) {
  const chips = CHIP_EXAMPLES.map((chip) => (
    <div key={chip.content + chip.link} className="inline-block pr-2">
      <SearchChip key={chip.link} {...chip} />
    </div>
  ));
  return (
    <div className="flex-1 p-8 pt-32 pb-32 lg:py-0 relative lg:rounded-tr-[32px] lg:rounded-br-[32px] bg-[#f5f5f5] flex flex-col justify-center">
      <header className="absolute top-0 left-0 right-0 p-4 flex flex-row-reverse">
        <ProfileHeaderItem />
      </header>
      <div className="py-4">
        <div className="text-headline3 md:text-headline2 font-bold">UTD Survival Guide</div>
        <div className="text-headline5 md:text-headline4 my-4">
          Your handbook to the next four years.
        </div>
      </div>
      <div>
        <SearchBox onSearchSubmit={onSearchSubmit} />
        <div className="py-4">{chips}</div>
      </div>
      <div>
        <div className="text-subtitle1 font-bold">See what&apos;s inside</div>
      </div>
    </div>
  );
}

type NewsAnnouncement = {
  title: string;
  link: string;
  date: Date;
};

function NewsCard({ title, link, date }: NewsAnnouncement) {
  return (
    <article className="my-2">
      <div className="text-headline6">{title}</div>
      <a className="text-body2" href={link}>
        Read more
      </a>
      <div className="mt-2 mb-4 text-caption">{date.toLocaleDateString()}</div>
    </article>
  );
}

type NewsListProps = {
  announcements: NewsAnnouncement[];
};

function NewsList({ announcements }: NewsListProps) {
  const items = announcements.map((announcement, index) => (
    <NewsCard {...announcement} key={announcement.title + announcement.date + index} />
  ));

  return (
    <div className="rounded-lg p-4 bg-white opacity-75">
      <div className="text-headline5">Campus Announcements</div>
      <div>{items}</div>
    </div>
  );
}

type Chapter = {
  slug: string;
  title: string;
  description: string;
  graphicUrl?: string;
};

type ChaptersBlockProps = {
  /**
   * Chapter contents to be displayed in this block.
   */
  chapters: Chapter[];
};

/**
 * A chapter card
 */
function ChapterCard({ slug, title, description, graphicUrl }: Chapter) {
  return (
    <Link to={slug}>
      <article className="max-w-lg bg-white rounded-md shadow-sm hover:shadow-md md:flex">
        <div className="aspect-w-16 aspect-h-9 md:aspect-w-1 md:aspect-h-1">
          <img className="object-cover w-full rounded-t-md" src={graphicUrl} />
        </div>
        <div className="p-4">
          <div className="mb-2 text-headline6">{title}</div>
          <div className="text-subtitle1">{description}</div>
        </div>
      </article>
    </Link>
  );
}

function ChaptersBlock({ chapters }: ChaptersBlockProps) {
  const chapterCards = chapters.map((chapter) => {
    return <ChapterCard key={chapter.slug} {...chapter} />;
  });
  return (
    <div className="p-16 bg-[#f5f5f5] rounded-[32px] max-w-7xl mx-auto">
      <header>
        <div className="text-headline4 font-bold my-2">What&apos;s Inside</div>
        <div className="text-headline5">Everything you need to survive and thrive in college.</div>
        {/* TODO: Shared element transition to search bar */}
      </header>
      <div className="grid gap-4 lg:grid-cols-3 py-4">{chapterCards}</div>
    </div>
  );
}

const TEST_ANNOUNCEMENTS: NewsAnnouncement[] = [
  {
    title: 'University moves to online instruction',
    link: 'https://example.com',
    date: new Date(),
  },
  {
    title: 'University moves to online instruction',
    link: 'https://example.com',
    date: new Date(),
  },
];

const TEST_CHAPTERS: Chapter[] = [
  {
    slug: '/entries/introduction',
    title: 'Introduction',
    description: "What does it even mean to be a college student? Let's find out.",
    graphicUrl: 'https://picsum.photos/240',
  },
];

export default function Landing() {
  // TODO: Use query to fetch chapters

  const submitSearch = (query: string) => {
    // TODO: Redirect to search page, probably don't use JS
  };

  return (
    <>
      <Seo title="Home" />
      <div className="min-h-full bg-primary-light nebula-background">
        <div className="lg:flex lg:min-h-screen">
          <section id="overview" className="lg:py-8 lg:min-h-screen flex flex-col">
            <InfoBlock onSearchSubmit={submitSearch} />
          </section>
          <section id="updates" className="flex-1 max-w-4xl p-8 lg:p-16">
            <NewsList announcements={TEST_ANNOUNCEMENTS} />
          </section>
        </div>
        <section id="contents" className="lg:py-8">
          <ChaptersBlock chapters={TEST_CHAPTERS} />
        </section>
      </div>
    </>
  );
}
