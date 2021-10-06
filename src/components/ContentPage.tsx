import { Link } from 'gatsby';
import React from 'react';
import { Entry } from '../types';

/**
 * Information needed to display a guide entry.
 */
type Content = {
  /**  */
  title: string;
  /** The tagline for the page displayed near the top. */
  description: string;
  /**
   *
   */
  slug: string;
  lastUpdated: string;
  body: JSX.Element | string; // TODO: Turn body into object with blocks
  nextEntry?: Entry;
  previousEntry?: Entry;
};

export default function ContentPage({
  title,
  lastUpdated,
  body,
  previousEntry,
  nextEntry,
}: Content) {
  const feedbackLink = '#feedback'; // TODO: Turn fedback into dialog. Maybe.
  const breadcrumbs = (
    <>
      <Link to="/">Guide</Link> &gt; <Link to="/faq">FAQ</Link>
    </>
  );

  console.log('Previous entry', previousEntry);
  return (
    <article
      className="max-w-5xl mx-auto p-16 bg-white shadow-md rounded-sm"
      itemScope
      itemType="https://schema.org/Article"
    >
      <header className="pb-4">
        <div>
          <div className="py-2 text-subtitle2">{breadcrumbs}</div>
        </div>
        <div className="text-headline3 font-semibold">{title}</div>
        <div className="my-2 text-subtitle1 font-bold">Last updated {lastUpdated}</div>
      </header>
      {(typeof body === 'string' && (
        <main dangerouslySetInnerHTML={{ __html: body }} itemProp="articleBody"></main>
      )) || <main>{body}</main>}
      <section>
        <nav className="flex flex-wrap space-x-4 my-8">
          {previousEntry !== undefined && (
            <div id="previous">
              <div className="text-sm font-bold uppercase">Previous Entry</div>
              <Link to={previousEntry.slug} rel="prev">
                {previousEntry.title}
              </Link>
            </div>
          )}
          {nextEntry !== undefined && (
            <div id="next">
              <div className="text-sm font-bold uppercase">Next Entry</div>
              <Link to={nextEntry.slug} rel="nexct">
                {nextEntry.title}
              </Link>
            </div>
          )}
        </nav>
      </section>
    </article>
  );
}
