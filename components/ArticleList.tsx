import Link from 'next/link';

function generateRoute(slug: string) {
  return `/entry/${slug}`;
}

function ArticleItem({ title, slug }: Article) {
  return (
    <li className="block pt-2">
      <Link
        href={generateRoute(slug)}
        className="text-xl text-primary-light hover:text-primary-dark focus:text-primary-dark transition"
      >
        {title}
      </Link>
    </li>
  );
}

export type Article = {
  title: string;
  slug: string;
};

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  const items = articles.map((article) => <ArticleItem key={article.slug} {...article} />);
  return <ul className="md:grid md:grid-cols-2 lg:grid-cols-3">{items}</ul>;
}
