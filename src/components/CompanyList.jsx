import React, { useContext, useMemo } from 'react';
import { CompanyContext } from '../contextAPI/CompanyContext';
import CompanyCard from './CompanyCard';
import Pagination from './Pagination';

const CompanyList = () => {
  const {
    companies, loading, error,
    search, selectedIndustry, selectedLocation, sortBy,
    page, pageSize
  } = useContext(CompanyContext);

  // filtering
  const filtered = useMemo(() => {
    let arr = companies.slice();

    if (search) {
      const s = search.toLowerCase();
      arr = arr.filter(c => c.name.toLowerCase().includes(s));
    }
    if (selectedLocation) arr = arr.filter(c => c.location === selectedLocation);
    if (selectedIndustry) arr = arr.filter(c => c.industry === selectedIndustry);

    // sorting
    if (sortBy === 'name-asc') arr.sort((a,b)=> a.name.localeCompare(b.name));
    else if (sortBy === 'name-desc') arr.sort((a,b)=> b.name.localeCompare(a.name));
    else if (sortBy === 'employees-desc') arr.sort((a,b)=> b.employees - a.employees);
    else if (sortBy === 'employees-asc') arr.sort((a,b)=> a.employees - b.employees);

    return arr;
  }, [companies, search, selectedIndustry, selectedLocation, sortBy]);

  // paging
  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);

  if (loading) return <div className="p-6 text-center">Loading companies...</div>;
  if (error) return <div className="p-6 text-center text-red-600">Failed to load company data.</div>;
  if (!total) return <div className="p-6 text-center">No companies found.</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paged.map(c => <CompanyCard key={c.id} company={c} />)}
      </div>

      <Pagination total={total} />
    </div>
  );
}

export default CompanyList;