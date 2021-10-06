import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

interface SearchBoxProps {
  /**
   * A box
   */
  onSearchSubmit: (query: string) => void;
}

/**
 * A search box
 */
export default function SearchBox({ onSearchSubmit }: SearchBoxProps) {
  const [currentQuery, setCurrentQuery] = React.useState('');

  const handleSubmitSearch = () => {
    onSearchSubmit(currentQuery);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setCurrentQuery(value);
  };

  const isEmpty = currentQuery.toLowerCase().trim() === '';

  return (
    <div className="flex bg-white rounded-md shadow-md">
      <input
        className="p-4 flex-1"
        type="search"
        name="searchQuery"
        id="searchQuery"
        enterKeyHint="search"
        placeholder="Search for anything"
        value={currentQuery}
        onChange={handleChange}
      />
      <button
        className="align-middle p-2"
        onClick={handleSubmitSearch}
        disabled={isEmpty}
        tabIndex={-1}
      >
        <SearchIcon />
      </button>
    </div>
  );
}
