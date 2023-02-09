import React from 'react';
import Section from './Section';

export type SectionData = {
  heading: string;
  level: number;
  content: string;
};

interface ContentAreaProps {
  sections: SectionData[];
}

export default function ContentArea({ sections }: ContentAreaProps) {
  return (
    <div>
      {sections.map(({ heading, level, content }) => (
        <Section key={heading} heading={heading} level={level} content={content} />
      ))}
    </div>
  );
}
