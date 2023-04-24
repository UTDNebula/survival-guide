export type Author = {
    name: string;
    email: string;
  };

export type Article = {
  title: string;
  slug: string;
};

export type GuideEntry = {
    slug: string;
    title: string;
    authors: Author[];
    content: string;
    /**
     * UNIX timestamp in milliseconds of when this entry was last updated.
     */
    lastUpdated: number;
  };