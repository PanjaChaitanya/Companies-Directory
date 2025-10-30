import React, { createContext, useState, useEffect } from 'react';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // filter & sort state
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [sortBy, setSortBy] = useState('name-asc'); // 'name-asc' | 'name-desc' | 'employees-desc' etc.

  // pagination
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // Fetching Data from JSON
  useEffect(() => {
    setLoading(true);
    fetch('/companies.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load');
        return res.json();
      })
      .then(data => {
        setCompanies(data);
        setError(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const resetFilters = () => {
    setSearch('');
    setSelectedLocation('');
    setSelectedIndustry('');
    setSortBy('name-asc');
    setPage(1);
  };

  return (
    <CompanyContext.Provider value={{
      companies, loading, error,
      search, setSearch,
      selectedLocation, setSelectedLocation,
      selectedIndustry, setSelectedIndustry,
      sortBy, setSortBy,
      page, setPage, pageSize,
      resetFilters
    }}>
      {children}
    </CompanyContext.Provider>
  );
};
