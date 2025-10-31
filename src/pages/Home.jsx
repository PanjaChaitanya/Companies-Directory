import React from 'react';
import FilterBar from '../components/FilterBar';
import CompanyList from '../components/CompanyList';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      <header className="mb-4 bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Companies Directory</h1>
        <p className="text-sm text-[#3292ff]">Explore Companies</p>
      </header>

      <FilterBar />
      <CompanyList />
    </div>
  );
}
