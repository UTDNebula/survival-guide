import React from 'react';
import ContributorList, { ContributorData } from './ContributorList';
import ShareButton from './ShareButton';

interface HeaderProps {
  title: string;
  url: string;
  date: string;
  contributors: ContributorData[];
}

export default function PageHeader({ title, url, date, contributors }: HeaderProps) {
  return (
    <div className="pt-8">
      <div className="flex space-x-8">
        <div className="text-[60px] font-bold font-display">{title}</div>
      </div>
      <ShareButton url={url} />
      <div className="font-display text-xl">Last Edited {date}</div>
      <div className="font-display text-xl">Contributors</div>
      <ContributorList contributors={contributors} />
    </div>
  );
}
