import React from 'react';

const SearchComponent = ({ searchQuery, setSearchQuery }) => {
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='mb-4'>
      <input
        type='text'
        placeholder='Search for movies...'
        value={searchQuery}
        onChange={handleSearchInputChange}
        className='px-4 py-2 w-full border rounded-md bg-transparent'
      />
    </div>
  );
};

export default SearchComponent;
