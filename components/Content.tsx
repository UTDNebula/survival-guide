import React from 'react';
import styles from '../styles/Content.module.css';

interface ContentProps {
  content: string;
}

export default function Content({ content }: ContentProps) {
  return (
    <div className={styles.Content}>
      {content.split('\n').map((str) => (
        <p key={str}>{str}</p>
      ))}
    </div>
  );
}
