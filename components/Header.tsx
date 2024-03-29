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
      <div className="">
        <div className="flex space-x-8">
          <div className="text-[60px] font-bold font-display">{title}</div>
        </div>
        <div className="absolute top-4 right-4">
          <ShareButton url={url} />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="font-display text-xl">Last Edited {date}</div>
        <ContributorList contributors={contributors} />
      </div>
    </div>
  );
}
