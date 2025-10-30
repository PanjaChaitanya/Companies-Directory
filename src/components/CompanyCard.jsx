import { Building2,MapPin, Briefcase, Users,ExternalLink} from "lucide-react";


const CompanyCard = ({ company }) =>{
  return (
    <div
      className="cursor-pointer rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-100 transition p-4 bg-white">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-linear-to-br from-[#3A6FE1] to-[#56B1AC] flex items-center justify-center shadow">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{company.name}</h3>
            <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
              <MapPin className="h-4 w-4" />
              {company.location}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-xl text-sm font-medium tooltip">
          <Briefcase className="h-3 w-3 " />
          {company.industry}
          <span class="tooltiptext">Industry</span>
        </div>
      </div>

      {/* Description
      {company.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{company.description}</p>
      )} */}

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-gray-400 pt-3 pb-6 mt-2 text-sm text-gray-500">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 tooltip">
            <Users className="h-4 w-4" />
            {company.employees}
            <span class="tooltiptext">Employees</span>
          </div>
        </div>
        <button
          className="flex items-center gap-1 p-2 rounded-xl font-semibold hover:bg-[#E6EEFB] hover:text-blue-400 text-gray-700 hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            window.open(company.website, "_blank");
          }}
        >
          Visit <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
export default CompanyCard;