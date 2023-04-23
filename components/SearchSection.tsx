import React from 'react';
import { useState } from 'react';

export default function SearchSection() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <form action="">
        <input
          className="md:h-[30px] pt-1 pb-1 w-[950px] justify-center md:items-center align-middle bg-[#B1CBF566] rounded-2xl
"
          type="text"
          placeholder="SEARCH"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit"> </button>
      </form>
    </div>
  );
}
