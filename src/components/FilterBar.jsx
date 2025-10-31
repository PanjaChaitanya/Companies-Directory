import React, { useContext, useMemo } from 'react';
import { CompanyContext } from '../contextAPI/CompanyContext';
import { BadgeX } from 'lucide-react';
const FilterBar = () => {
  const {
    companies, search, setSearch,
    selectedLocation, setSelectedLocation,
    selectedIndustry, setSelectedIndustry,
    sortBy, setSortBy,
    resetFilters, setPage
  } = useContext(CompanyContext);

  // build unique options
  const locations = useMemo(() => [...new Set(companies.map(c => c.location))], [companies]);
  const industries = useMemo(() => [...new Set(companies.map(c => c.industry))], [companies]);

  const onReset = () => {
    resetFilters();
  };

  const onChange = (setter) => (e) => {
    setter(e.target.value);
    setPage(1);
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow mb-2">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search by company name..."
          className="flex-1 p-2 border border-gray-400 rounded-xl"
        />

        <select value={selectedLocation} onChange={onChange(setSelectedLocation)} className="p-2 border border-gray-400 rounded-xl">
          <option value="">All locations</option>
          {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>

        <select value={selectedIndustry} onChange={onChange(setSelectedIndustry)} className="p-2 border border-gray-400 rounded-xl">
          <option value="">All industries</option>
          {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
        </select> 

        <select value={sortBy} onChange={(e)=>{ setSortBy(e.target.value); setPage(1); }} className="p-2 border border-gray-400 rounded-xl">
          <option value="name-asc">Sort A-Z</option>
          <option value="name-desc">Sort Z-A</option>
          <option value="employees-desc">Employees ↓</option>
          <option value="employees-asc">Employees ↑</option>
        </select>

        <button onClick={onReset} className="bg-red-500 text-white px-3 py-2 rounded-full tooltip">
          <BadgeX /><span className="tooltiptext">Cancel</span>
        </button>
      </div>
    </div>
  );
}
export default FilterBar;