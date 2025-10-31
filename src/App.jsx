import React from 'react';
import { CompanyProvider } from './contextAPI/CompanyContext';
import Home from './pages/Home';

export default function App() {
  return (
    <CompanyProvider>
      <div className="max-h-screen">
        <Home />
      </div>
    </CompanyProvider>
  );
}
