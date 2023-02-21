import Hashtag from './Hashtag';
import styles from '../styles/Heading.module.css';

interface HeadingProps {
  level: number;
  heading: string;
}

export default function Heading({ level, heading }: HeadingProps) {
  const size = 20 - (level - 1) * 2;
  return (
    <div className={styles.Heading}>
      <Hashtag heading={heading} />
      <div className={styles.Heading_Title} style={{ fontSize: size }}>
        {heading}
      </div>
    </div>
  );
}
