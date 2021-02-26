import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * Component properties for SEO.
 */
interface SEOProps {
  /**
   * Information to populate the page's meta description.
   */
  description?: string;

  /**
   * The page language.
   */
  lang?: string;

  /**
   * Additional meta tags to inject.
   */
  meta?: { name: string; content: string }[];

  /**
   * The title of the page.
   */
  title: string;
}

/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook.
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
export default function SEO({ description = '', lang = 'en', meta = [], title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}
