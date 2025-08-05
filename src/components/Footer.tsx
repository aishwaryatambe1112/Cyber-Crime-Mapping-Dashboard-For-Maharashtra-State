import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold">Maharashtra Police</h3>
                <p className="text-gray-400 text-sm">Cyber Crime Mapping Dashboard</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Dedicated to creating a safer digital environment for the citizens of Maharashtra 
              through advanced cyber crime monitoring and prevention technologies.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <Shield className="h-4 w-4" />
              </div>
              <div className="bg-blue-800 p-2 rounded-full">
                <Mail className="h-4 w-4" />
              </div>
              <div className="bg-blue-800 p-2 rounded-full">
                <Phone className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">District Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Contacts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">Maharashtra Police Headquarters</p>
                  <p className="text-sm">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="text-sm">Emergency: 100</p>
                  <p className="text-sm">Cyber Crime: 1930</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm">cybercrime@maharashtrapolice.gov.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Maharashtra Police. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Data Protection
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}