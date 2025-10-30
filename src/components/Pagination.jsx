import React, { useContext } from 'react';
import { CompanyContext } from '../contextAPI/CompanyContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
export default function Pagination({ total }) {
  const { page, setPage, pageSize } = useContext(CompanyContext);
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  const onPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button onClick={() => onPage(page-1)} className="px-3 py-1 border border-gray-400 rounded-full" disabled={page===1}><ArrowLeft/> </button>

      {pages.map(p => (
        <button key={p} onClick={() => onPage(p)}
          className={`px-3 py-1 border border-gray-400 rounded-full hover:bg-[#1bd6f7] hover:text-white ${p === page ? 'bg-linear-to-br from-[#0d8ae9] to-[#85fbff] text-white' : ''}`}>
          {p}
        </button>
      ))}

      <button onClick={() => onPage(page+1)} className="px-3 py-1 border border-gray-400 rounded-full" disabled={page===totalPages}> <ArrowRight/></button>
    </div>
  );
}
