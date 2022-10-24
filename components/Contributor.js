import React, {useState} from 'react';
import "../styles/Contributor.css";

export function Contributor(props)
{
  const [active, setActive] = useState(false);

  const handleClick = (e) => 
  {
    setActive(!active);
  }

  const contributors = props.contributors;

  return (
      <div
        className = "Contributor"
      >
        <div 
            className = "Contributor_Title"
            onClick={handleClick}
        >
            Contributors
        </div>
        {active && 
            <div
                className = "Contributor_Details"
            >
                {contributors.map((contributor) => <p>{contributor.name}, {contributor.email}</p>)}
            </div>}
    </div>
  );
};