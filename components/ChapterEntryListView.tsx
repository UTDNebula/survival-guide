import React from 'react';
import Link from 'next/link';
import {Article} from "../lib/Schema"

function generateRoute(slug: string) {
    return `/entry/${slug}`;
  }


function ArticleItem({ title, slug }: Article) {
return (
    <tr className="">
        <th className='border border-solid border-black/[.40] text-left py-4 bg-white'>
            <Link
                href={generateRoute(slug)}
                className="px-4 text-xl text-dark font-bold	hover:text-primary-dark focus:text-primary-dark transition"
            >
                {title}
            </Link>
        </th>
    </tr>
);
}
  
  interface ArticleListProps {
    articles: Article[];
  }
  
  export default function ChapterEntryListView({ articles }: ArticleListProps) {
    const items = articles.map((article) => <ArticleItem key={article.slug} {...article} />);
    return (
        <div className = "mx-0 my-6 px-0 pb-4 bg-[#E2E7FF] rounded-2xl border border-solid border-black">
            <h2 className='px-5 py-4 text-2xl font-semibold'>Articles</h2>
            <table className='table-auto mx-auto my-auto w-full pb-8'>  
                {items}
            </table>
        </div>
    );
  }
