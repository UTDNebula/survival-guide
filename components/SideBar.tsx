import ArticleList, { Article } from "./ArticleList";
import Link from "next/link";
import Heading from "./Heading"

export type SideBarLink = {
    head: string;
    articles: Article[];
};

interface SideBarLinks{
    SideBarLinks: SideBarLink[];
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

function SideBarItem({ head, articles }: SideBarLink) {
    const items = articles.map((article) => <ArticleItem {article.title, article.slug} {...article}/>);
    return (
        <div>
            <h2>{head}</h2>
            <ul>
                {items}
            </ul>
        </div>
        
    );
}

function generateRoute(slug: string) {
    return `/entry/${slug}`;
  }
  


export default function SideBar({SideBarLinks}:SideBarLinks){
    const articles = SideBarLinks.map((SideBarLink) => <SideBarItem key={SideBarLink.head, SideBarLink.articles} {...SideBarLink} />);
    return(
        <div>
            {articles}
        </div>
    );
}
