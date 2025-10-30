
---

# 🏢 Companies Directory — Frontend Project

A responsive and dynamic **Companies Directory** web application built using **React.js** and **Tailwind CSS**.  
This project was developed as part of the **Frontlines Media Assessment Task**.

It demonstrates efficient use of **React Context API**, **custom filtering**, **sorting**, **pagination**, and **modular UI design** with **Tailwind CSS** — all without any external API calls (using a mock `companies.json` file).

---

## 🚀 Features

- 🔍 **Search Functionality** — Instantly filter companies by name.
- 🏭 **Filter by Industry & Location** — Narrow down results dynamically.
- ↕️ **Sorting** — Sort companies alphabetically or by number of employees.
- 📑 **Pagination** — Display a fixed number of records per page for cleaner UI.
- ⚙️ **Global State Management** — Managed efficiently using **React Context API**.
- 🧩 **Reusable Components** — Modular structure for better scalability.
- 🎨 **Tailwind CSS Styling** — Clean, modern, and fully responsive design.
- ✅ **Error & Loading States** — Graceful handling of data fetch errors and loading screens.
- 🌐 **Deployed on Vercel** — Fast and production-ready deployment.

---

## 🛠️ Tech Stack

| Category | Tools / Libraries |
|-----------|-------------------|
| **Frontend** | React.js (Functional Components, Hooks) |
| **State Management** | React Context API |
| **Styling** | Tailwind CSS |
| **Build Tool** | Vite / Create React App (depending on setup) |
| **Deployment** | Vercel |
| **Data Source** | `companies.json` (Static Mock API) |

---

## 📂 Project Structure

companies-directory/ │ ├── public/ │   ├── companies.json          # Mock API data │   └── index.html │ ├── src/ │   ├── components/ │   │   ├── CompanyCard.jsx     # UI card for each company │   │   ├── CompanyList.jsx     # Filters, sorting & pagination logic │   │   ├── Pagination.jsx      # Page navigation component │   │   └── FilterBar.jsx       # Dropdowns & search input │   │ │   ├── context/ │   │   └── CompanyContext.jsx  # Global state (Context API) │   │ │   ├── App.jsx                 # Root component │   ├── index.js                # Entry point │   └── styles.css              # Tailwind import / custom CSS │ ├── package.json └── README.md

---

## ⚙️ Installation & Setup

Follow the steps below to set up the project locally.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/companies-directory.git
cd companies-directory

2️⃣ Install dependencies

Make sure Node.js and npm (or yarn) are installed.

npm install
# or
yarn install

3️⃣ Start the development server

npm start
# or
yarn start

Then open your browser and visit:
👉 http://localhost:3000

4️⃣ Build for production

npm run build

This creates an optimized production-ready build in the /build directory.


---

📦 Mock API — companies.json

All company data is fetched from a static JSON file located in the /public folder.

Example snippet:

[
  {
    "id": 1,
    "name": "TechNova Solutions",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 150,
    "description": "Leading provider of cloud and AI solutions."
  },
  {
    "id": 2,
    "name": "HealthPlus Labs",
    "location": "Hyderabad",
    "industry": "Healthcare",
    "employees": 80,
    "description": "Innovating healthcare with digital diagnostics."
  }
]


---

🧠 Code Walkthrough (Core Logic)

1. Global State — CompanyContext.jsx

Handles:

Fetching data from companies.json

Managing filters (search, location, industry)

Sorting and pagination

Error/loading handling


Key Hooks used:

useEffect(() => {
  fetch('/companies.json')
    .then(res => res.json())
    .then(data => setCompanies(data))
    .catch(() => setError(true))
    .finally(() => setLoading(false));
}, []);

Also includes:

resetFilters = () => {
  setSearch('');
  setSelectedLocation('');
  setSelectedIndustry('');
  setSortBy('name-asc');
  setPage(1);
};


---

2. Filtering & Sorting — CompanyList.jsx

Uses useMemo() for performance optimization — only recalculates filtered data when dependencies change.

const filtered = useMemo(() => {
  let arr = companies.slice();

  if (search) arr = arr.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  if (selectedLocation) arr = arr.filter(c => c.location === selectedLocation);
  if (selectedIndustry) arr = arr.filter(c => c.industry === selectedIndustry);

  if (sortBy === 'name-asc') arr.sort((a,b)=> a.name.localeCompare(b.name));
  else if (sortBy === 'employees-desc') arr.sort((a,b)=> b.employees - a.employees);

  return arr;
}, [companies, search, selectedLocation, selectedIndustry, sortBy]);

Then applies pagination logic:

const total = filtered.length;
const start = (page - 1) * pageSize;
const paged = filtered.slice(start, start + pageSize);


---

3. UI Rendering

Conditional rendering for clean UX:

if (loading) return <div>Loading companies...</div>;
if (error) return <div>Failed to load company data.</div>;
if (!filtered.length) return <div>No companies found.</div>;

Cards are displayed using:

{paged.map(c => <CompanyCard key={c.id} company={c} />)}


---

4. Reusable onChange Handler

A higher-order function to handle dropdown changes efficiently:

const onChange = (setter) => (e) => {
  setter(e.target.value);
  setPage(1);
};


---

5. Styling

Fully built with Tailwind CSS, ensuring:

Responsive grid layout

Clean spacing and typography

Consistent theme for light/dark backgrounds



---

🌍 Deployment (Vercel)

Steps:

1. Push your code to a GitHub repository.


2. Go to Vercel.


3. Import the GitHub repo.


4. Click Deploy — that’s it!
Vercel automatically detects the React project and builds it.



✅ Live Link Example:
https://companies-directory.vercel.app


---

🧾 Summary

This project demonstrates:

Clear understanding of React fundamentals (hooks, props, context)

Efficient state management

Clean modular design using reusable components

Frontend architecture optimized for readability and performance



---

👨‍💻 Author

Chaitanya Panja
📧 Email: panjachaitanya23@gmail.com
🔗 GitHub: https://github.com/PanjaChaitanya
🔗 LinkedIn: https://www.linkedin.com/in/chaitanyapanja


---

🏁 Final Output Preview



> Built with ❤️ using React.js and Tailwind CSS.
