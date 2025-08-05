import React, { useState } from 'react';

interface MaharashtraMapProps {
  onDistrictClick: (district: string) => void;
}

export default function MaharashtraMap({ onDistrictClick }: MaharashtraMapProps) {
  const [hoveredDistrict, setHoveredDistrict] = useState<string>('');

  // Corrected x,y coordinates for each district
  const districts = [
    { name: 'Mumbai', x: 60, y: 300, cases: 2450 },
    { name: 'Thane', x: 100, y: 290, cases: 90 },
    { name: 'Palghar', x: 70, y: 260, cases: 180 },
    { name: 'Raigad', x: 85, y: 350, cases: 95 },
    { name: 'Ratnagiri', x: 100, y: 450, cases: 85 },
    { name: 'Sindhudurg', x: 120, y: 530, cases: 70 },

    { name: 'Pune', x: 138, y: 350, cases: 1890 },
    { name: 'Satara', x: 160, y: 420, cases: 380 },
    { name: 'Sangli', x: 190, y: 460, cases: 420 },
    { name: 'Kolhapur', x: 150, y: 490, cases: 520 },
    { name: 'Solapur', x: 240, y: 410, cases: 650 },

    { name: 'Nashik', x: 150, y: 220, cases: 980 },
    { name: 'Ahmednagar', x: 190, y: 295, cases: 320 },
    { name: 'Dhule', x: 190, y: 170, cases: 290 },
    { name: 'Jalgaon', x: 250, y: 170, cases: 340 },
    { name: 'Nandurbar', x: 160, y: 110, cases: 65 },

    { name: 'Beed', x: 270, y: 320, cases: 180 },
    { name: 'Latur', x: 345, y: 360, cases: 280 },
    { name: 'Osmanabad', x: 310, y: 400, cases: 220 },
    { name: 'Parbhani', x: 330, y: 300, cases: 190 },
    { name: 'Nanded', x: 390, y: 320, cases: 210 },

    { name: 'Aurangabad', x: 230, y: 250, cases: 750 },
    { name: 'Jalna', x: 280, y: 270, cases: 170 },
    { name: 'Hingoli', x: 360, y: 270, cases: 150 },

    { name: 'Akola', x: 350, y: 190, cases: 450 },
    { name: 'Washim', x: 370, y: 230, cases: 1600},
    { name: 'Buldhana', x: 310, y: 210, cases: 250 },

    { name: 'Amravati', x: 400, y: 160, cases: 580 },
    { name: 'Wardha', x: 470, y: 190, cases: 130 },
    { name: 'Yavatmal', x: 440, y: 230, cases: 240 },
    { name: 'Nagpur', x: 500, y: 160, cases: 1250 },

    { name: 'Bhandara', x: 542, y: 140, cases: 100 },
    { name: 'Gondia', x: 580, y: 152, cases: 120 },
    { name: 'Chandrapur', x: 530, y: 230, cases: 360 },
    { name: 'Gadchiroli', x: 580, y: 280, cases: 110 }
  ];

  const getDistrictColor = (cases: number) => {
    if (cases > 1500) return '#dc2626'; // High - Red
    if (cases > 800) return '#ea580c'; // Medium-High - Orange
    if (cases > 400) return '#facc15'; // Medium - Yellow
    if (cases > 200) return '#65a30d'; // Low-Medium - Light Green
    return '#16a34a'; // Low - Green
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Crime Intensity Legend</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-600 rounded mr-2"></div>
            <span>Very High (1500+)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-600 rounded mr-2"></div>
            <span>High (800-1500)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
            <span>Medium (400-800)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-lime-600 rounded mr-2"></div>
            <span>Low-Medium (200-400)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-600 rounded mr-2"></div>
            <span>Low (&lt;200)</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox="0 0 800 650"
          className="w-full h-auto border-2 border-gray-200 rounded-lg bg-blue-50"
        >
          {/* Maharashtra State Outline */}
          <image 
            href="/src/map.svg" 
            x="0" 
            y="0" 
            width="800" 
            height="650"
          />

          {/* District Points */}
          {districts.map((district) => (
            <g key={district.name}>
              <circle
                cx={district.x}
                cy={district.y}
                r={hoveredDistrict === district.name ? 12 : 8}
                fill={getDistrictColor(district.cases)}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-200 hover:stroke-4"
                onMouseEnter={() => setHoveredDistrict(district.name)}
                onMouseLeave={() => setHoveredDistrict('')}
                onClick={() => onDistrictClick(district.name)}
              />
              <text
                x={district.x}
                y={district.y - 15}
                textAnchor="middle"
                className="text-xs font-medium fill-gray-700 pointer-events-none"
              >
                {district.name}
              </text>
              {hoveredDistrict === district.name && (
                <text
                  x={district.x}
                  y={district.y + 25}
                  textAnchor="middle"
                  className="text-xs font-bold fill-gray-800 pointer-events-none"
                >
                  {district.cases} cases
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* Hover Information */}
        {hoveredDistrict && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900">{hoveredDistrict} District</h4>
            <p className="text-blue-700">
              Total Cases: {districts.find(d => d.name === hoveredDistrict)?.cases}
            </p>
            <p className="text-sm text-blue-600 mt-1">
              Click to view detailed reports for this district
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
