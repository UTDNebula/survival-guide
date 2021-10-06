import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import ContentPage from '../components/ContentPage';
import Header from '../components/Header';
import Layout from '../components/layout';
import Seo from '../components/seo';

type FAQPageProps = {
  site: {
    buildTime: string;
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: any[];
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
    /**
     * The last time a page was updated.
     */
    date: Date;
  };
};

export default function FAQPage({ data, location }: PageProps<FAQPageProps>) {
  // const faqs = data.allMarkdownRemark.nodes;

  const entry = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || 'UTD Survival Guide | FAQ';
  // const { previous, next } = data;
  const { title, description } = entry.frontmatter;
  const excerpt = entry.excerpt;

  const subtitle = '';
  const lastUpdated = data.site.buildTime;

  const breadcrumbs = (
    <>
      <Link to="/">Guide</Link> &gt; <Link to="/faq">FAQ</Link>
    </>
  );

  return (
    <Layout location={location} title="Home">
      <Seo title={siteTitle} />
      <Header siteTitle={siteTitle} />
      <div className="p-16 bg-gray-200">
        <ContentPage
          title={'Some Questions and Answers'}
          description={description ?? excerpt}
          slug={entry.slug}
          lastUpdated={entry.date.toLocaleDateString()}
          body={
            <>
              <section id="overview">
                <h1 className="text-headline5">Your FAQ for the return to campus</h1>
                <div className="text-subtitle1">Don&apos;t worry. You&apos;re not alone.</div>
                <p>
                  I have seen many questions asked time and time again on Reddit and other platforms
                </p>
              </section>
              <section id="housing" className="py-4">
                <h1 className="text-headline5">What should I bring when I move-in?</h1>
                <p></p>
              </section>
            </>
          }
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query FAQQuery {
    site {
      siteMetadata {
        title
      }
      buildTime(formatString: "dddd, MMMM DD, YYYY, hh:mm A")
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
