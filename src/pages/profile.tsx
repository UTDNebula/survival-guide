import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Landing from '../components/Landing';

type DataProps = {
  site: {
    siteMetadata?: {
      title: string;
    };
  };
};

export default function IndexRoute({ data, location }: PageProps<DataProps>) {
  const siteTitle = data.site.siteMetadata?.title || `Home`;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="UTD Survival Guide" />
      <main>Profile</main>
    </Layout>
  );
}
