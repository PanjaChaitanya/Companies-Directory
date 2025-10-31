import React, { useState } from "react";
import { Building2, MapPin, Briefcase, Users, Globe, ExternalLink, X } from "lucide-react";

const CompanyCard = ({ company }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      {/* Card */}
      <div className="card cursor-pointer rounded-lg border border-neutral-200 shadow-md hover:shadow-lg hover:shadow-blue-200 transition p-4 bg-white" onClick={openModal}> 
        {/* Header */} 
        <div className="flex flex-wrap justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-linear-to-br from-[#3A6FE1] to-[#56B1AC] flex items-center justify-center shadow">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div> 
              <h3 className="text-lg font-semibold text-gray-800">{company.name}</h3> 
              <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
                <MapPin className="h-4 w-4" /> {company.location}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-xl text-sm font-medium tooltip">
            <Briefcase className="h-3 w-3 " /> {company.industry} <span className="tooltiptext">Industry</span> 
          </div>
        </div> 

        {/* Description
      
        {company.description && ( <p className="text-gray-600 text-sm mb-3 line-clamp-2">{company.description}</p> )} 
        
        */} 
        
        {/* Footer */}
        <div className="flex justify-between items-center border-t border-gray-400 pt-3 pb-6 mt-2 text-sm text-gray-500">
          <div className="flex gap-4"> <div className="flex items-center gap-1 tooltip"> 
            <Users className="h-4 w-4" /> {company.employees} <span className="tooltiptext">Employees</span> 
          </div> 
        </div> 
        <button 
          className="flex items-center gap-1 p-2 rounded-xl font-semibold hover:bg-[#E6EEFB] hover:text-blue-400 text-gray-700 hover:underline" 
          onClick={(e) => { e.stopPropagation(); window.open(company.website, "_blank"); }} > 
          Visit <ExternalLink className="h-4 w-4" /> 
        </button>
        </div> 
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 modal-overlay"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl border border-neutral-200 shadow-2xl w-[600px] max-w-full p-6 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-linear-to-br from-[#3A6FE1] to-[#56B1AC] flex items-center justify-center shadow">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{company.name}</h2>
                <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {company.industry}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {company.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                  <Users className="h-5 w-5 text-[#3A6FE1]" /> Employees
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {company.employees}
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                  <Globe className="h-5 w-5 text-[#3A6FE1] " /> Industry
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {company.industry}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-between ">
              <button
                onClick={() => window.open(company.website, "_blank")}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium w-1/2 mr-2 transition cursor-pointer"
              >
                <ExternalLink className="h-4 w-4" /> Visit Website
              </button>
              <button
                onClick={closeModal}
                className=" border border-gray-300 hover:bg-[#00ecfd] hover:text-white text-gray-700 px-4 py-2 rounded-lg font-medium w-1/2 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyCard;
