import React from 'react';
import Link from 'next/link';
import {Article} from "../lib/Schema"

function generateRoute(slug: string) {
    return `/entry/${slug}`;
  }


function ArticleItem({ title, slug }: Article) {
return (
    <tr className="">
        <th className='border border-slate-300 text-left py-4'>
            <Link
                href={generateRoute(slug)}
                className="text-xl text-primary-light hover:text-primary-dark focus:text-primary-dark transition"
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
        <div className = "container mx-0 my-8 px-4 bg-[#E2E7FF] rounded-2xl">
            <h2 className='py-4 text-2xl'>Articles</h2>
            <table className='table-auto mx-auto my-auto w-full'>  
                {items}
            </table>
        </div>
    );
  }
