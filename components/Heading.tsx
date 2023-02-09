import Hashtag from './Hashtag';
import '../styles/Heading.css';

interface HeadingProps {
  level: number;
  heading: string;
}

export default function Heading({ level, heading }: HeadingProps) {
  const size = 20 - (level - 1) * 2;
  return (
    <div className="Heading">
      <Hashtag heading={heading} />
      <div className="Heading_Title" style={{ fontSize: size }}>
        {heading}
      </div>
    </div>
  );
}
