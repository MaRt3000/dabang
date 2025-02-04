import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log('Searching for:', event.target.value);
  };

  return (
    <>
    <TextInput
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      // icon={<Search size={18} className="text-indigo-600" />}
      radius="md"
      size="md"
      classNames={{
        input: 'bg-[#F9FAFB] lg:w-full rounded-2xl border border-[#E1E8F1] text-[#6B7280] focus:border-[#2563EB] focus:ring-[#2563EB] focus:ring-opacity-50',
      }}
    />
    <Search size={18} className="text-indigo-600" />
    </>
  );
};

export default SearchBar;
