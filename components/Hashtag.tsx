import React from 'react';
import styles from '../styles/Hashtag.module.css';

interface HashtagProps {
  heading: string;
}

export default function Hashtag({ heading }: HashtagProps) {
  return (
    <div className={styles.Hashtag} id={heading.split(' ').join('_')}>
      #
    </div>
  );
}
