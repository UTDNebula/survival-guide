import React from 'react';
import styles from '../styles/Header.module.css';
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
      <div className="">Last Edited {date}</div>
      <div className={styles.ContributorTitle}>Contributors</div>
      <ContributorList contributors={contributors} />
    </div>
  );
}
