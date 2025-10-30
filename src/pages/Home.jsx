import React from 'react';
import FilterBar from '../components/FilterBar';
import CompanyList from '../components/CompanyList';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Companies Directory</h1>
        <p className="text-sm text-gray-600">Explore Companies</p>
      </header>

      <FilterBar />
      <CompanyList />
    </div>
  );
}
