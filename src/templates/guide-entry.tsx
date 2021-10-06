import React from 'react';
import { Link, graphql } from 'gatsby';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentPage from '../components/ContentPage';
import { Entry } from '../types';
import Header from '../components/Header';

type GuideEntryProps = {
  previous?: Entry;
  next?: Entry;
  site: {
    siteMetadata?: {
      title: string;
    };
  };
  markdownRemark: {
    frontmatter: {
      title: string;
      description?: string;
      date: string;
    };
    slug: string;
    /**
     * A snippet shown before the page is loaded.
     */
    excerpt: string;
    /**
     * Raw HTML to be rendered on the page.
     */
    html: string;
    date: Date;
  };
};

export default function GuideEntry({ data, location }: PageProps<GuideEntryProps>) {
  const entry = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  const { title, description } = entry.frontmatter;
  const excerpt = entry.excerpt;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={title} description={description || entry.excerpt} />
      <Header siteTitle={title} />
      <main className="md:py-16 bg-gray-100">
        <ContentPage
          title={title}
          description={description ?? excerpt}
          slug={entry.slug}
          // nextEntry={next}
          // previousEntry={previous}
          lastUpdated={entry.frontmatter.date}
          body={entry.html}
        />
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
