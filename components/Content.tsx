import React from 'react';
import '../styles/Content.css';

interface ContentProps {
  content: string;
}

export default function Content({ content }: ContentProps) {
  return (
    <div className="Content">
      {content.split('\n').map((str) => (
        <p key={str}>{str}</p>
      ))}
    </div>
  );
}
