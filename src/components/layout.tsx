/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './Footer';

/**
 * Default layout for the Guide.
 */
export default function Layout({ children }): JSX.Element {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="min-h-screen h-full">
      <Header siteTitle={data.site.siteMetadata?.title || `UTD Survival Guide`} />
      <div className="flex">
        <div className="flex-1">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
