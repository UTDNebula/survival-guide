import React, { useState } from 'react';

export type ContributorData = {
  email: string;
  name: string;
};

function ContributorChip({ email, name }: ContributorData) {
  return (
    <span>
      {name} ({email})
    </span>
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
    <div onClick={handleClick}>
      <div className="font-display text-lg underline cursor-pointer">
        {active ? 'Hide' : 'See'} contributors
      </div>
      {active && (
        <div>
          {contributors.map((contributor) => (
            <ContributorChip key={contributor.email} {...contributor} />
          ))}
        </div>
      )}
    </div>
  );
}
