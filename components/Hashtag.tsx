import React from 'react';
import '../styles/Hashtag.css';

interface HashtagProps {
  heading: string;
}

export default function Hashtag({ heading }: HashtagProps) {
  return (
    <div className="Hashtag" id={heading.split(' ').join('_')}>
      #
    </div>
  );
}
