import React, { useState } from 'react';
import '../styles/ContributorList.css';

export type ContributorData = {
  email: string;
  name: string;
};

function ContributorChip({ email, name }: ContributorData) {
  return (
    <p key={email}>
      {name}, {email}
    </p>
  );
}

interface ContributorListProps {
  contributors: ContributorData[];
}

export default function ContributorList({ contributors }: ContributorListProps) {
  const [active, setActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setActive(!active);
  };

  return (
    <div className="Contributor" onClick={handleClick}>
      {active && (
        <div className="Contributor_Details">
          {contributors.map((contributor) => (
            <ContributorChip key={contributor.email} {...contributor} />
          ))}
        </div>
      )}
    </div>
  );
}
