import React from 'react';
import '../styles/View_Area.css';
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

export function ViewArea({ url, date, title, contributors, sections }: ViewAreaProps) {
  return (
    <div className="View-area">
      <Header url={url} date={date} title={title} contributors={contributors} />
      <ContentArea sections={sections} />
    </div>
  );
}
