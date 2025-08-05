import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'districts', label: 'Districts Wise Reports' },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            {/* Replaced Shield icon with Ashok Stambha */}
            <img 
              src="https://lsprintingpress.com/wp-content/uploads/2025/03/Ashok-Stambh-National-Emblem-of-India_11zon.png" 
              alt="Ashok Stambha" 
              className="h-20 w-20"
            />
            <div>
              <h1 className="text-xl font-bold">Maharashtra Police</h1>
              <p className="text-sm text-blue-200">Cyber Crime Mapping Dashboard</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-200 hover:text-white hover:bg-blue-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Icon - 75 Years of Azaadi */}
          <div className="hidden md:flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Azadi-Ka-Amrit-Mahotsav-Logo.png/500px-Azadi-Ka-Amrit-Mahotsav-Logo.png" 
              alt="75 Years of Azaadi" 
              className="h-20 w-auto"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-200 hover:text-white hover:bg-blue-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
