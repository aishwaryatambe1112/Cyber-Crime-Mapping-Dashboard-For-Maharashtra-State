import React from 'react';
import { Shield, Target, Users, Award, Eye, Lock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance of cyber crime activities across all districts of Maharashtra with instant updates and alerts.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Secure handling of sensitive crime data with advanced encryption and access control mechanisms.'
    },
    {
      icon: Target,
      title: 'Precision Mapping',
      description: 'Accurate geographical mapping of cyber crime incidents with detailed location-based analytics.'
    },
    {
      icon: Users,
      title: 'Multi-user Access',
      description: 'Role-based access control for different levels of law enforcement personnel and administrators.'
    }
  ];

  const objectives = [
    'Enhance cyber crime awareness and prevention across Maharashtra',
    'Provide real-time data visualization for law enforcement agencies',
    'Facilitate quick response and resource allocation for cyber incidents',
    'Generate comprehensive reports for policy making and strategic planning',
    'Improve inter-district coordination in cyber crime investigations'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Maharashtra Cyber Crime Mapping Dashboard
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A comprehensive digital platform designed to monitor, track, and analyze cyber crime activities 
              across the state of Maharashtra, empowering law enforcement agencies and <b>Public Awarness</b> with real-time intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a safer digital environment for the citizens of Maharashtra by providing law enforcement 
                agencies with cutting-edge technology and real-time data analytics for effective cyber crime prevention, 
                investigation, and prosecution. Our platform serves as a central hub for cyber security intelligence, 
                enabling proactive measures against digital threats providing Public Awarness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Features & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Strategic Objectives
            </h2>
            <div className="space-y-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold mb-2">36</div>
              <p className="text-blue-200">Districts Covered</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-blue-200">Detection Accuracy</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-blue-200">Active Officers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-blue-200">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              How to Report Cyber Crime
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Emergency Contact</h3>
                <div className="space-y-3">
                  <p><strong>Cyber Crime Helpline:</strong> 1930</p>
                  <p><strong>Email:</strong> cybercrime@maharashtra.gov.in</p>
                  <p><strong>Online Portal:</strong> www.cybercrime.gov.in</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Reporting Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Gather all evidence (screenshots, emails, messages)</li>
                  <li>Call 1930 or visit online portal</li>
                  <li>File detailed complaint with evidence</li>
                  <li>Note down complaint number for follow-up</li>
                  <li>Cooperate with investigation team</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
