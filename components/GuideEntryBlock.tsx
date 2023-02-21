import React from 'react';
import ContentArea, { SectionData } from './ContentArea';
import { ContributorData } from './ContributorList';
import Header from './Header';

interface ViewAreaProps {
  url: string;
  date: string;
  title: string;
  contributors: ContributorData[];
  sections: SectionData[];
}

export default function GuidePageContent({ url, date, title, contributors, sections }: ViewAreaProps) {
  return (
    <div className="p-8 bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-4xl mx-auto rounded-md">
      <Header url={url} date={date} title={title} contributors={contributors} />
      <ContentArea sections={sections} />
    </div>
  );
}
