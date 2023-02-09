import React from 'react';
import '../styles/Header.css';
import ContributorList, { ContributorData } from './ContributorList';
import ShareButton from './ShareButton';

interface HeaderProps {
  title: string;
  url: string;
  date: string;
  contributors: ContributorData[];
}

export default function Header({ title, url, date, contributors }: HeaderProps) {
  return (
    <div className="Header">
      <ShareButton url={url} />
      <div>{title}</div>
      <div className="Date">Last Edited {date}</div>;
      <div className="Contributor_Title">Contributors</div>
      <ContributorList contributors={contributors} />
    </div>
  );
}
