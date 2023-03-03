import React from 'react';
import { ContributorData } from './ContributorList';
import Header from './Header';

interface GuidePageContentProps {
  url: string;
  date: number;
  title: string;
  contributors: ContributorData[];
  content: string;
}

export default function GuidePageContent({
  url,
  date,
  title,
  contributors,
  content,
}: GuidePageContentProps) {
  return (
    <div className="p-8 bg-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] max-w-4xl mx-auto rounded-md">
      <Header
        url={url}
        date={new Date(date).toLocaleDateString()}
        title={title}
        contributors={contributors}
      />
      <div className="mt-4 prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
