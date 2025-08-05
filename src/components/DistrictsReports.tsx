import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Filter, Download, TrendingUp, TrendingDown, AlertCircle, CheckCircle, 
  ArrowLeft, FileText, AlertTriangle 
} from 'lucide-react';

// --- DETAILED DATA STRUCTURE DEFINITIONS ---
interface CrimeDistribution {
  type: string;
  cases: number;
  percentage: number;
}
interface MonthlyTrend {
  month: string;
  cases: number;
}
interface RecentCase {
  id: string;
  type: string;
  status: 'Resolved' | 'Under Investigation';
  date: string;
  amount: string;
}
interface ContactInfo {
  officer: string;
  phone: string;
  email: string;
  helpline: string;
  hours: string;
  responseTime: string;
}
interface District {
  name: string;
  cases: number;
  resolved: number;
  pending: number;
  trend: 'up' | 'down';
  crimeDistribution: CrimeDistribution[];
  monthlyTrend: MonthlyTrend[];
  recentCases: RecentCase[];
  contactInfo: ContactInfo;
}

// --- NEW COMPONENT: DISTRICT DETAIL VIEW ---
// Renders the detailed report for a single district, matching your images.
const DistrictDetailView = ({ district, onBack }: { district: District, onBack: () => void }) => {
  const resolutionRate = district.cases > 0 ? (district.resolved / district.cases * 100).toFixed(1) : "0.0";
  
  return (
    <div className="bg-[#f8f9fa] min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors mb-6">
          <ArrowLeft size={20} />
          Back to District Reports
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{district.name} District</h1>
          <p className="text-lg text-gray-500 mt-1">Cyber Crime Analysis & Reports</p>
        </div>

        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg"><FileText className="text-blue-600" size={24}/></div>
            <div>
              <p className="text-gray-500 text-sm">Total Cases</p>
              <p className="text-2xl font-bold text-gray-800">{district.cases.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg"><CheckCircle className="text-green-600" size={24}/></div>
            <div>
              <p className="text-gray-500 text-sm">Resolved Cases</p>
              <p className="text-2xl font-bold text-gray-800">{district.resolved.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg"><AlertTriangle className="text-orange-600" size={24}/></div>
            <div>
              <p className="text-gray-500 text-sm">Active Cases</p>
              <p className="text-2xl font-bold text-gray-800">{district.pending.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg"><TrendingUp className="text-purple-600" size={24}/></div>
            <div>
              <p className="text-gray-500 text-sm">Resolution Rate</p>
              <p className="text-2xl font-bold text-gray-800">{resolutionRate}%</p>
            </div>
          </div>
        </div>

        {/* Main Content Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Crime Types Distribution */}
          <div className="lg:col-span-3 bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Crime Types Distribution</h2>
            <div className="space-y-5">
              {district.crimeDistribution.map(crime => (
                <div key={crime.type}>
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="font-medium text-gray-700">{crime.type}</span>
                    <span className="text-gray-500">{crime.cases} cases</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${crime.percentage}%` }}></div>
                  </div>
                  <p className="text-right text-xs text-gray-500 mt-1">{crime.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
          {/* Monthly Trend */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Monthly Trend</h2>
            <div className="space-y-4">
              {district.monthlyTrend.map(month => (
                 <div key={month.month} className="grid grid-cols-5 items-center gap-4">
                    <p className="col-span-1 text-sm font-medium text-gray-700">{month.month}</p>
                    <div className="col-span-3">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: `${(month.cases / 150) * 100}%` }}></div>
                      </div>
                    </div>
                    <p className="col-span-1 text-sm text-gray-600 text-right">{month.cases}</p>
                 </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Cases Table */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
           <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Cases</h2>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-gray-200 text-sm text-gray-500">
                   <th className="py-3 px-4 font-medium">Case ID</th>
                   <th className="py-3 px-4 font-medium">Type</th>
                   <th className="py-3 px-4 font-medium">Status</th>
                   <th className="py-3 px-4 font-medium">Date</th>
                   <th className="py-3 px-4 font-medium">Amount</th>
                 </tr>
               </thead>
               <tbody>
                 {district.recentCases.map(caseItem => (
                   <tr key={caseItem.id} className="border-b border-gray-200 hover:bg-gray-50">
                     <td className="py-3 px-4 text-sm font-medium text-blue-600">{caseItem.id}</td>
                     <td className="py-3 px-4 text-sm text-gray-700">{caseItem.type}</td>
                     <td className="py-3 px-4 text-sm">
                       <span className={`px-2 py-1 text-xs font-semibold rounded-full ${caseItem.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                         {caseItem.status}
                       </span>
                     </td>
                     <td className="py-3 px-4 text-sm text-gray-600">{caseItem.date}</td>
                     <td className="py-3 px-4 text-sm text-gray-800 font-mono">{caseItem.amount}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        {/* Contact Box */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h3 className="text-xl font-bold mb-4">District Cyber Crime Cell Contact</h3>
            <p><span className="font-semibold">Officer In-Charge:</span> {district.contactInfo.officer}</p>
            <p><span className="font-semibold">Phone:</span> {district.contactInfo.phone}</p>
            <p><span className="font-semibold">Email:</span> {district.contactInfo.email}</p>
          </div>
          <div className="md:text-right">
             <p className="mt-4 md:mt-0"><span className="font-semibold">Emergency Helpline:</span> {district.contactInfo.helpline}</p>
             <p><span className="font-semibold">Office Hours:</span> {district.contactInfo.hours}</p>
             <p><span className="font-semibold">Response Time:</span> {district.contactInfo.responseTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- MAIN COMPONENT: DISTRICTS REPORTS ---
interface DistrictsReportsProps {
  selectedDistrict?: string;
}

export default function DistrictsReports({ selectedDistrict }: DistrictsReportsProps) {
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrictLocal, setSelectedDistrictLocal] = useState('');
  const [sortBy, setSortBy] = useState('cases');

  // --- FIX APPLIED HERE ---
  // This ref tracks the last prop value that we used to set the active district.
  const lastProp = useRef<string | null | undefined>(null);

  useEffect(() => {
    // This effect synchronizes the view with the `selectedDistrict` prop.
    // It only triggers a change if the prop has a new, different value
    // than the one we last processed.
    if (selectedDistrict && selectedDistrict !== lastProp.current) {
      setActiveDistrict(selectedDistrict);
      setSelectedDistrictLocal(selectedDistrict);
      // Store this new prop value so we don't react to it again on a simple re-render.
      lastProp.current = selectedDistrict;
    }
  }, [selectedDistrict]);

  // --- EXPANDED DATA SOURCE (20 DISTRICTS) ---
  const districtData: District[] = [
    { 
      name: 'Mumbai', 
      cases: 1245, resolved: 1120, pending: 125, trend: 'up',
      crimeDistribution: [
        { type: 'Online Fraud', cases: 456, percentage: 36.7 }, { type: 'Phishing', cases: 298, percentage: 24.0 },
        { type: 'Identity Theft', cases: 234, percentage: 18.8 }, { type: 'Cyberbullying', cases: 156, percentage: 12.5 },
        { type: 'Data Breach', cases: 101, percentage: 8.0 },
      ],
      monthlyTrend: [
        { month: 'Jan', cases: 95 }, { month: 'Feb', cases: 87 }, { month: 'Mar', cases: 112 }, 
        { month: 'Apr', cases: 98 }, { month: 'May', cases: 123 }, { month: 'Jun', cases: 134 }
      ],
      recentCases: [
        { id: 'CC001', type: 'Online Fraud', status: 'Resolved', date: '2024-01-15', amount: '₹2,50,000' },
        { id: 'CC002', type: 'Phishing', status: 'Under Investigation', date: '2024-01-14', amount: '₹1,20,000' },
        { id: 'CC003', type: 'Identity Theft', status: 'Resolved', date: '2024-01-13', amount: '₹85,000' },
        { id: 'CC004', type: 'Cyberbullying', status: 'Under Investigation', date: '2024-01-12', amount: 'N/A' },
        { id: 'CC005', type: 'Data Breach', status: 'Resolved', date: '2024-01-11', amount: '₹3,45,000' },
      ],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 22-1930 (Ext. 101)', email: 'cybercrime.mumbai@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 2 hours'}
    },
    { 
      name: 'Pune', 
      cases: 1890, resolved: 1420, pending: 470, trend: 'down',
      crimeDistribution: [
        { type: 'Online Fraud', cases: 750, percentage: 39.7 }, { type: 'Identity Theft', cases: 550, percentage: 29.1 },
        { type: 'Phishing', cases: 350, percentage: 18.5 }, { type: 'Cyberstalking', cases: 140, percentage: 7.4 },
        { type: 'Malware Attack', cases: 100, percentage: 5.3 },
      ],
      monthlyTrend: [
        { month: 'Jan', cases: 150 }, { month: 'Feb', cases: 165 }, { month: 'Mar', cases: 140 }, 
        { month: 'Apr', cases: 155 }, { month: 'May', cases: 170 }, { month: 'Jun', cases: 160 }
      ],
      recentCases: [
        { id: 'PC001', type: 'Online Fraud', status: 'Resolved', date: '2024-01-18', amount: '₹1,10,000' },
        { id: 'PC002', type: 'Identity Theft', status: 'Under Investigation', date: '2024-01-17', amount: '₹75,000' },
        { id: 'PC003', type: 'Phishing', status: 'Resolved', date: '2024-01-16', amount: '₹50,000' },
      ],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 20-1930 (Ext. 102)', email: 'cybercrime.pune@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 3 hours' }
    },
    { 
      name: 'Nagpur', 
      cases: 1250, resolved: 980, pending: 270, trend: 'up',
      crimeDistribution: [
        { type: 'Phishing', cases: 400, percentage: 32.0 }, { type: 'Cyberbullying', cases: 350, percentage: 28.0 },
        { type: 'Online Fraud', cases: 300, percentage: 24.0 }, { type: 'Data Breach', cases: 150, percentage: 12.0 },
        { type: 'Other', cases: 50, percentage: 4.0 },
      ],
      monthlyTrend: [
        { month: 'Jan', cases: 100 }, { month: 'Feb', cases: 110 }, { month: 'Mar', cases: 90 }, 
        { month: 'Apr', cases: 120 }, { month: 'May', cases: 130 }, { month: 'Jun', cases: 115 }
      ],
      recentCases: [
        { id: 'NC001', type: 'Phishing', status: 'Under Investigation', date: '2024-01-20', amount: '₹60,000' },
        { id: 'NC002', type: 'Cyberbullying', status: 'Resolved', date: '2024-01-19', amount: 'N/A' },
      ],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 712-1930 (Ext. 103)', email: 'cybercrime.nagpur@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 2.5 hours' }
    },
    {
      name: 'Thane',
      cases: 1100, resolved: 950, pending: 150, trend: 'down',
      crimeDistribution: [{ type: 'Online Fraud', cases: 450, percentage: 40.9 }, { type: 'Identity Theft', cases: 300, percentage: 27.3 }, { type: 'Phishing', cases: 250, percentage: 22.7 }],
      monthlyTrend: [{ month: 'Jan', cases: 90 }, { month: 'Feb', cases: 100 }, { month: 'Mar', cases: 95 }],
      recentCases: [{ id: 'TC001', type: 'Online Fraud', status: 'Resolved', date: '2024-01-17', amount: '₹1,50,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 22-2534-1930', email: 'cybercrime.thane@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 3 hours' }
    },
    {
      name: 'Nashik',
      cases: 980, resolved: 820, pending: 160, trend: 'up',
      crimeDistribution: [{ type: 'Phishing', cases: 350, percentage: 35.7 }, { type: 'Data Breach', cases: 280, percentage: 28.6 }, { type: 'Cyberbullying', cases: 200, percentage: 20.4 }],
      monthlyTrend: [{ month: 'Jan', cases: 80 }, { month: 'Feb', cases: 85 }, { month: 'Mar', cases: 90 }],
      recentCases: [{ id: 'NK001', type: 'Phishing', status: 'Under Investigation', date: '2024-01-19', amount: '₹45,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 253-230-1930', email: 'cybercrime.nashik@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 3.5 hours' }
    },
    {
      name: 'Aurangabad',
      cases: 850, resolved: 710, pending: 140, trend: 'down',
      crimeDistribution: [{ type: 'Identity Theft', cases: 300, percentage: 35.3 }, { type: 'Online Fraud', cases: 250, percentage: 29.4 }, { type: 'Malware Attack', cases: 150, percentage: 17.6 }],
      monthlyTrend: [{ month: 'Jan', cases: 70 }, { month: 'Feb', cases: 75 }, { month: 'Mar', cases: 80 }],
      recentCases: [{ id: 'AU001', type: 'Identity Theft', status: 'Resolved', date: '2024-01-16', amount: '₹90,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 240-224-1930', email: 'cybercrime.aurangabad@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 4 hours' }
    },
    {
      name: 'Solapur',
      cases: 720, resolved: 600, pending: 120, trend: 'up',
      crimeDistribution: [{ type: 'Cyberstalking', cases: 250, percentage: 34.7 }, { type: 'Phishing', cases: 200, percentage: 27.8 }, { type: 'Online Fraud', cases: 150, percentage: 20.8 }],
      monthlyTrend: [{ month: 'Jan', cases: 60 }, { month: 'Feb', cases: 65 }, { month: 'Mar', cases: 70 }],
      recentCases: [{ id: 'SL001', type: 'Cyberstalking', status: 'Resolved', date: '2024-01-15', amount: 'N/A' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 217-274-1930', email: 'cybercrime.solapur@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 4.5 hours' }
    },
    {
      name: 'Kolhapur',
      cases: 650, resolved: 550, pending: 100, trend: 'down',
      crimeDistribution: [{ type: 'Online Fraud', cases: 280, percentage: 43.1 }, { type: 'Identity Theft', cases: 180, percentage: 27.7 }, { type: 'Phishing', cases: 120, percentage: 18.5 }],
      monthlyTrend: [{ month: 'Jan', cases: 50 }, { month: 'Feb', cases: 55 }, { month: 'Mar', cases: 60 }],
      recentCases: [{ id: 'KP001', type: 'Online Fraud', status: 'Under Investigation', date: '2024-01-21', amount: '₹2,00,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 231-265-1930', email: 'cybercrime.kolhapur@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 4 hours' }
    },
    {
      name: 'Sangli',
      cases: 580, resolved: 480, pending: 100, trend: 'up',
      crimeDistribution: [{ type: 'Data Breach', cases: 200, percentage: 34.5 }, { type: 'Phishing', cases: 150, percentage: 25.9 }, { type: 'Online Fraud', cases: 130, percentage: 22.4 }],
      monthlyTrend: [{ month: 'Jan', cases: 45 }, { month: 'Feb', cases: 50 }, { month: 'Mar', cases: 55 }],
      recentCases: [{ id: 'SN001', type: 'Data Breach', status: 'Resolved', date: '2024-01-14', amount: '₹1,25,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 233-267-1930', email: 'cybercrime.sangli@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 5 hours' }
    },
    {
      name: 'Satara',
      cases: 510, resolved: 410, pending: 100, trend: 'down',
      crimeDistribution: [{ type: 'Cyberbullying', cases: 180, percentage: 35.3 }, { type: 'Identity Theft', cases: 150, percentage: 29.4 }, { type: 'Online Fraud', cases: 100, percentage: 19.6 }],
      monthlyTrend: [{ month: 'Jan', cases: 40 }, { month: 'Feb', cases: 45 }, { month: 'Mar', cases: 50 }],
      recentCases: [{ id: 'ST001', type: 'Cyberbullying', status: 'Under Investigation', date: '2024-01-18', amount: 'N/A' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2162-23-1930', email: 'cybercrime.satara@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 5 hours' }
    },
    {
      name: 'Ahmednagar',
      cases: 480, resolved: 380, pending: 100, trend: 'up',
      crimeDistribution: [{ type: 'Online Fraud', cases: 200, percentage: 41.7 }, { type: 'Phishing', cases: 150, percentage: 31.3 }, { type: 'Data Breach', cases: 80, percentage: 16.7 }],
      monthlyTrend: [{ month: 'Jan', cases: 35 }, { month: 'Feb', cases: 40 }, { month: 'Mar', cases: 45 }],
      recentCases: [{ id: 'AN001', type: 'Online Fraud', status: 'Resolved', date: '2024-01-13', amount: '₹80,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 241-232-1930', email: 'cybercrime.ahmednagar@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 4.5 hours' }
    },
    {
      name: 'Jalgaon',
      cases: 450, resolved: 350, pending: 100, trend: 'down',
      crimeDistribution: [{ type: 'Identity Theft', cases: 180, percentage: 40.0 }, { type: 'Cyberstalking', cases: 120, percentage: 26.7 }, { type: 'Phishing', cases: 100, percentage: 22.2 }],
      monthlyTrend: [{ month: 'Jan', cases: 30 }, { month: 'Feb', cases: 35 }, { month: 'Mar', cases: 40 }],
      recentCases: [{ id: 'JG001', type: 'Identity Theft', status: 'Resolved', date: '2024-01-12', amount: '₹65,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 257-222-1930', email: 'cybercrime.jalgaon@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 5.5 hours' }
    },
    {
      name: 'Raigad',
      cases: 420, resolved: 320, pending: 100, trend: 'up',
      crimeDistribution: [{ type: 'Malware Attack', cases: 150, percentage: 35.7 }, { type: 'Online Fraud', cases: 120, percentage: 28.6 }, { type: 'Data Breach', cases: 90, percentage: 21.4 }],
      monthlyTrend: [{ month: 'Jan', cases: 25 }, { month: 'Feb', cases: 30 }, { month: 'Mar', cases: 35 }],
      recentCases: [{ id: 'RG001', type: 'Malware Attack', status: 'Under Investigation', date: '2024-01-22', amount: '₹1,75,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2141-222-1930', email: 'cybercrime.raigad@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 6 hours' }
    },
    {
      name: 'Ratnagiri',
      cases: 380, resolved: 290, pending: 90, trend: 'down',
      crimeDistribution: [{ type: 'Phishing', cases: 140, percentage: 36.8 }, { type: 'Cyberbullying', cases: 100, percentage: 26.3 }, { type: 'Identity Theft', cases: 80, percentage: 21.1 }],
      monthlyTrend: [{ month: 'Jan', cases: 20 }, { month: 'Feb', cases: 25 }, { month: 'Mar', cases: 30 }],
      recentCases: [{ id: 'RT001', type: 'Phishing', status: 'Resolved', date: '2024-01-11', amount: '₹40,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2352-222-1930', email: 'cybercrime.ratnagiri@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 6.5 hours' }
    },
    {
      name: 'Sindhudurg',
      cases: 340, resolved: 260, pending: 80, trend: 'up',
      crimeDistribution: [{ type: 'Online Fraud', cases: 120, percentage: 35.3 }, { type: 'Data Breach', cases: 90, percentage: 26.5 }, { type: 'Phishing', cases: 70, percentage: 20.6 }],
      monthlyTrend: [{ month: 'Jan', cases: 15 }, { month: 'Feb', cases: 20 }, { month: 'Mar', cases: 25 }],
      recentCases: [{ id: 'SN001', type: 'Online Fraud', status: 'Under Investigation', date: '2024-01-23', amount: '₹95,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2362-228-1930', email: 'cybercrime.sindhudurg@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 7 hours' }
    },
    {
      name: 'Latur',
      cases: 310, resolved: 240, pending: 70, trend: 'down',
      crimeDistribution: [{ type: 'Identity Theft', cases: 110, percentage: 35.5 }, { type: 'Online Fraud', cases: 80, percentage: 25.8 }, { type: 'Cyberstalking', cases: 60, percentage: 19.4 }],
      monthlyTrend: [{ month: 'Jan', cases: 10 }, { month: 'Feb', cases: 15 }, { month: 'Mar', cases: 20 }],
      recentCases: [{ id: 'LT001', type: 'Identity Theft', status: 'Resolved', date: '2024-01-10', amount: '₹55,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2382-242-1930', email: 'cybercrime.latur@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 6 hours' }
    },
    {
      name: 'Osmanabad',
      cases: 280, resolved: 210, pending: 70, trend: 'up',
      crimeDistribution: [{ type: 'Phishing', cases: 100, percentage: 35.7 }, { type: 'Data Breach', cases: 70, percentage: 25.0 }, { type: 'Online Fraud', cases: 60, percentage: 21.4 }],
      monthlyTrend: [{ month: 'Jan', cases: 10 }, { month: 'Feb', cases: 12 }, { month: 'Mar', cases: 15 }],
      recentCases: [{ id: 'OS001', type: 'Phishing', status: 'Under Investigation', date: '2024-01-24', amount: '₹30,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2472-222-1930', email: 'cybercrime.osmanabad@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 7.5 hours' }
    },
    {
      name: 'Beed',
      cases: 250, resolved: 190, pending: 60, trend: 'down',
      crimeDistribution: [{ type: 'Cyberbullying', cases: 90, percentage: 36.0 }, { type: 'Identity Theft', cases: 70, percentage: 28.0 }, { type: 'Phishing', cases: 50, percentage: 20.0 }],
      monthlyTrend: [{ month: 'Jan', cases: 8 }, { month: 'Feb', cases: 10 }, { month: 'Mar', cases: 12 }],
      recentCases: [{ id: 'BD001', type: 'Cyberbullying', status: 'Resolved', date: '2024-01-09', amount: 'N/A' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2442-222-1930', email: 'cybercrime.beed@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 8 hours' }
    },
    {
      name: 'Jalna',
      cases: 220, resolved: 170, pending: 50, trend: 'up',
      crimeDistribution: [{ type: 'Online Fraud', cases: 80, percentage: 36.4 }, { type: 'Phishing', cases: 60, percentage: 27.3 }, { type: 'Data Breach', cases: 40, percentage: 18.2 }],
      monthlyTrend: [{ month: 'Jan', cases: 5 }, { month: 'Feb', cases: 8 }, { month: 'Mar', cases: 10 }],
      recentCases: [{ id: 'JN001', type: 'Online Fraud', status: 'Resolved', date: '2024-01-08', amount: '₹40,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2482-232-1930', email: 'cybercrime.jalna@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 7 hours' }
    },
    {
      name: 'Parbhani',
      cases: 200, resolved: 150, pending: 50, trend: 'down',
      crimeDistribution: [{ type: 'Identity Theft', cases: 70, percentage: 35.0 }, { type: 'Cyberstalking', cases: 50, percentage: 25.0 }, { type: 'Online Fraud', cases: 40, percentage: 20.0 }],
      monthlyTrend: [{ month: 'Jan', cases: 4 }, { month: 'Feb', cases: 6 }, { month: 'Mar', cases: 8 }],
      recentCases: [{ id: 'PB001', type: 'Identity Theft', status: 'Under Investigation', date: '2024-01-25', amount: '₹25,000' }],
      contactInfo: { officer: 'Inspector Cyber Crime', phone: '+91 2452-222-1930', email: 'cybercrime.parbhani@maharashtrapolice.gov.in', helpline: '1930', hours: '24/7', responseTime: 'Within 8.5 hours' }
    }
  ];

  const filteredData = districtData
    .filter(district => 
      district.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedDistrictLocal === '' || district.name === selectedDistrictLocal)
    )
    .sort((a, b) => {
      if (sortBy === 'cases') return b.cases - a.cases;
      if (sortBy === 'resolved') return b.resolved - a.resolved;
      if (sortBy === 'pending') return b.pending - a.pending;
      return a.name.localeCompare(b.name);
    });

  const getResolutionRate = (resolved: number, total: number) => {
    if (total === 0) return '0.0';
    return ((resolved / total) * 100).toFixed(1);
  };

  const handleGoBack = () => {
    setActiveDistrict(null);
    setSelectedDistrictLocal('');
    // When we go back, we update the ref to the district we just viewed.
    // This prevents the useEffect from re-triggering the detail view for the same district.
    lastViewedDistrict.current = activeDistrict;
  };

  const handleExport = () => {
    const headers = ["District", "Total Cases", "Resolved", "Pending", "Resolution Rate (%)", "Trend"];
    const rows = filteredData.map(d => [
      d.name,
      d.cases,
      d.resolved,
      d.pending,
      getResolutionRate(d.resolved, d.cases),
      d.trend
    ].join(','));

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "district_crime_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // --- CONDITIONAL RENDERING LOGIC ---
  if (activeDistrict) {
    const districtDetails = districtData.find(d => d.name === activeDistrict);
    if (!districtDetails) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-xl text-red-600">District not found.</p> 
          <button onClick={handleGoBack} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Go Back</button>
        </div>
      );
    }
    return <DistrictDetailView district={districtDetails} onBack={handleGoBack} />;
  }
  
  // --- MAIN VIEW (GRID AND FILTERS) ---
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Districts Wise Crime Reports</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">Comprehensive analysis of cyber crime statistics across all districts of Maharashtra</p>
        </div>
      </section>

      <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Search districts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
              </div>
              <select value={selectedDistrictLocal} onChange={(e) => setSelectedDistrictLocal(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Districts</option>
                {districtData.map(district => (<option key={district.name} value={district.name}>{district.name}</option>))}
              </select>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="cases">Sort by Total Cases</option>
                <option value="resolved">Sort by Resolved</option>
                <option value="pending">Sort by Pending</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
            <button onClick={handleExport} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((district) => (
              <div key={district.name} onClick={() => {
                setActiveDistrict(district.name);
                lastViewedDistrict.current = district.name; // Update ref on new click
              }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{district.name}</h3>
                    <div className="flex items-center">
                      {district.trend === 'up' ? <TrendingUp className="h-5 w-5 text-red-500 mr-1" /> : <TrendingDown className="h-5 w-5 text-green-500 mr-1" />}
                      <span className={`text-sm font-semibold ${district.trend === 'up' ? 'text-red-600' : 'text-green-600'}`}>{district.trend === 'up' ? 'Rising' : 'Declining'}</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Total Cases</span><span className="font-medium text-gray-900">{district.cases.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Resolved</span><span className="font-medium text-green-600">{district.resolved.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Pending</span><span className="font-medium text-orange-600">{district.pending.toLocaleString()}</span></div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-1"><span className="text-sm font-medium text-gray-700">Resolution Rate</span><span className="text-sm font-bold text-blue-600">{getResolutionRate(district.resolved, district.cases)}%</span></div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${getResolutionRate(district.resolved, district.cases)}%` }}></div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
