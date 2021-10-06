import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Landing from '../components/Landing';

// things to look at/read - add to github at some point
// - seperate data streams
// - seperate pages with content for each page
// - config the config file more
// - https://www.netlifycms.org/docs/open-authoring/#linking-to-specific-entries-in-the-cms
// - File size limit for uploads
// - https://www.netlifycms.org/docs/beta-features/#nested-collections
// - search
//   - https://www.algolia.com/blog/engineering/how-algolia-created-its-netlify-build-plugin/
//   - https://mrkaluzny.com/blog/full-text-search-with-gatsby-and-netlify-cms/

// TODO - get all attribute fields from graphql and filter by tags (similar to MVP)

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

export default function IndexRoute({ data, location }: PageProps<DataProps>) {
  const siteTitle = data.site.siteMetadata?.title || `Home`;
  const posts = data.allMarkdownRemark.nodes;
  console.log(posts);
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="UTD Survival Guide" />
      <Landing />
    </Layout>
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
