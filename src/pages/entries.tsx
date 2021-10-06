import { Link } from 'gatsby';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/layout';

type DataProps = {
  buildTime: string;
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: any[];
  };
};

// function EntryOverviewItem({
//   title: string,

// }) {
//   return ();
// }

type EntryOverviewCardType = {
  image?: string;
  title: string;
  description?: string;
  excerpt?: string;
  slug: string;
  date: string;
};

function EntryOverviewCard({
  image = '',
  title,
  description,
  date,
  slug,
  excerpt = '',
}: EntryOverviewCardType) {
  return (
    <div className="">
      <li className="rounded-md bg-white m-2">
        <article className="post-list-item" itemScope itemType="http://schema.org/Article">
          <header>
            <h2>
              <Link to={`/entries${slug}`} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            </h2>
            <small>{date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: description || excerpt,
              }}
              itemProp="description"
            />
          </section>
        </article>
      </li>
    </div>
  );
}

/**
 * A page that shows all the guide entries in the guide.
 *
 * Route: /entries
 */
export default function EntriesPage({ data, location }: PageProps<DataProps>) {
  const siteTitle = data.site.siteMetadata?.title || 'Guide Contents';
  const entries = data.allMarkdownRemark.nodes;
  console.log(entries);
  return (
    <div className="min-h-full bg-gray-100">
      <Layout location={location} title={siteTitle}>
        <Header siteTitle={siteTitle} />
        <div className="max-w-5xl mx-auto p-8">
          <ol className="mx-auto p-16 bg-white shadow-md rounded-sm">
            {entries.map((entry) => (
              <EntryOverviewCard
                key={entry.slug}
                title={entry.frontmatter.title}
                date={entry.frontmatter.date}
                slug={entry.fields.slug}
                description={entry.frontmatter.description}
                excerpt={entry.excerpt}
              />
            ))}
          </ol>
        </div>
      </Layout>
    </div>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
