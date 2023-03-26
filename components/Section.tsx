import React from 'react';
import Content from './Content';
import Heading from './Heading';

interface SectionProps {
  heading: string;
  content: string;
  level: number;
}

export default function Section({ heading, content, level }: SectionProps) {
  return (
    <div className="Section">
      <Heading heading={heading} level={level} />
      <Content content={content} />
    </div>
  );
}
