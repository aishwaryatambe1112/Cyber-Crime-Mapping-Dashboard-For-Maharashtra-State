import React from 'react';
import { AlertTriangle, TrendingUp, Users, MapPin } from 'lucide-react';
import MaharashtraMap from './MaharashtraMap';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  setSelectedDistrict: (district: string) => void;
  selectedDistrict: string; // NEW PROP
}

export default function Home({
  setActiveTab,
  setSelectedDistrict,
  selectedDistrict,
}: HomeProps) {
  const stats = [
    { icon: AlertTriangle, label: 'Total Cases Reported', value: '12,456', color: 'text-red-600' },
    { icon: TrendingUp, label: 'Cases Resolved', value: '9,234', color: 'text-green-600' },
    { icon: Users, label: 'Active Investigations', value: '3,222', color: 'text-blue-600' },
    { icon: MapPin, label: 'Districts Covered', value: '36', color: 'text-purple-600' },
  ];

  const handleDistrictClick = (district: string) => {
    setSelectedDistrict(district);
    setActiveTab('districts');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maharashtra Cyber Crime Mapping Dashboard
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Real-time monitoring and analysis of cyber crime activities across Maharashtra
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('about')}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </button>
            <button 
              onClick={() => setActiveTab('districts')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Reports
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Current Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-12 w-12 ${stat.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Interactive District Map
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Click on any district to view detailed cyber crime reports and statistics for that region
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <MaharashtraMap onDistrictClick={handleDistrictClick} />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Mapping</h3>
              <p className="text-blue-200">
                Live updates of cyber crime incidents across all districts of Maharashtra
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
              <p className="text-blue-200">
                Comprehensive analysis and trending patterns of cyber crimes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Alert System</h3>
              <p className="text-blue-200">
                Immediate notifications for high-priority cyber crime incidents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Stay Safe from Cyber Crimes in {selectedDistrict || 'Maharashtra'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-4">Prevention Tips</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Never share OTP or banking credentials with anyone</li>
                  <li>• Verify online shopping websites before making payments</li>
                  <li>• Be cautious of social media friend requests from strangers</li>
                  <li>• Keep your social media profiles private</li>
                  <li>• Use strong, unique passwords for all accounts</li>
                  <li>• Enable two-factor authentication wherever possible</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-4">What to Do If You’re a Victim</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Immediately report the incident on <a className="text-blue-600 underline" href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a></li>
                  <li>• Contact your nearest cyber police station</li>
                  <li>• Preserve evidence like screenshots and transaction IDs</li>
                  <li>• Inform your bank in case of financial fraud</li>
                  <li>• Don’t delete suspicious messages until reported</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

