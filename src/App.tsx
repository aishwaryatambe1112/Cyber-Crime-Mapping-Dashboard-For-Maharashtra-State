import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import DistrictsReports from './components/DistrictsReports';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} setSelectedDistrict={setSelectedDistrict} />;
      case 'about':
        return <About />;
      case 'districts':
        return <DistrictsReports selectedDistrict={selectedDistrict} />;
      default:
        return <Home setActiveTab={setActiveTab} setSelectedDistrict={setSelectedDistrict} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}


export default App;