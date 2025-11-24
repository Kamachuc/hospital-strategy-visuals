import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const HospitalStrategyVisuals = () => {
  const [activeTab, setActiveTab] = useState('canvas');

  // ------------------ Strategy Canvas Data ------------------
  const strategyCanvasData = [
    { factor: 'Price', 'Your Hospital': 6, 'Budget Clinics': 9, 'Premium Hospitals': 3, 'Blue Ocean Target': 7 },
    { factor: 'Specialist Expertise', 'Your Hospital': 3, 'Budget Clinics': 2, 'Premium Hospitals': 9, 'Blue Ocean Target': 8 },
    { factor: 'Patient Experience', 'Your Hospital': 4, 'Budget Clinics': 2, 'Premium Hospitals': 9, 'Blue Ocean Target': 9 },
    { factor: 'Service Range', 'Your Hospital': 5, 'Budget Clinics': 3, 'Premium Hospitals': 9, 'Blue Ocean Target': 6 },
    { factor: 'Technology', 'Your Hospital': 4, 'Budget Clinics': 2, 'Premium Hospitals': 8, 'Blue Ocean Target': 7 },
    { factor: 'Brand Trust', 'Your Hospital': 4, 'Budget Clinics': 3, 'Premium Hospitals': 9, 'Blue Ocean Target': 8 },
    { factor: 'Personalization', 'Your Hospital': 3, 'Budget Clinics': 1, 'Premium Hospitals': 7, 'Blue Ocean Target': 9 },
    { factor: 'Transparency', 'Your Hospital': 4, 'Budget Clinics': 3, 'Premium Hospitals': 6, 'Blue Ocean Target': 10 },
    { factor: 'Community Building', 'Your Hospital': 2, 'Budget Clinics': 1, 'Premium Hospitals': 4, 'Blue Ocean Target': 9 },
    { factor: 'Wellness Focus', 'Your Hospital': 2, 'Budget Clinics': 1, 'Premium Hospitals': 5, 'Blue Ocean Target': 9 }
  ];

  // ------------------ Revenue Projection Data ------------------
  const revenueProjectionData = [
    { month: 'Current', 'Existing Model': 400, 'New Maternity Focus': 400 },
    { month: 'Month 1', 'Existing Model': 420, 'New Maternity Focus': 900 },
    { month: 'Month 2', 'Existing Model': 430, 'New Maternity Focus': 1200 },
    { month: 'Month 3', 'Existing Model': 450, 'New Maternity Focus': 1700 },
    { month: 'Month 4', 'Existing Model': 460, 'New Maternity Focus': 2300 },
    { month: 'Month 5', 'Existing Model': 480, 'New Maternity Focus': 2800 },
    { month: 'Month 6', 'Existing Model': 500, 'New Maternity Focus': 3400 },
    { month: 'Month 9', 'Existing Model': 550, 'New Maternity Focus': 4500 },
    { month: 'Month 12', 'Existing Model': 600, 'New Maternity Focus': 5500 }
  ];

  // ------------------ Revenue Stream Comparison ------------------
  const revenueStreamData = [
    { stream: 'Current State', Outpatient: 384, Inpatient: 8, Dental: 8, Other: 0 },
    { stream: 'Month 6 Target', Outpatient: 400, Maternity: 2500, "Women's Wellness": 400, Corporate: 300 },
    { stream: 'Month 12 Target', Outpatient: 500, Maternity: 4000, "Women's Wellness": 700, Corporate: 500 }
  ];

  // ------------------ Customer Value Map ------------------
  const customerValueData = [
    { segment: 'Transparency', importance: 9, satisfaction: 4, opportunity: 9 },
    { segment: 'Comfort', importance: 8, satisfaction: 4, opportunity: 8 },
    { segment: 'Personalization', importance: 9, satisfaction: 3, opportunity: 9 },
    { segment: 'Clinical Excellence', importance: 10, satisfaction: 5, opportunity: 9 },
    { segment: 'Affordability', importance: 9, satisfaction: 6, opportunity: 7 },
    { segment: 'Community', importance: 7, satisfaction: 2, opportunity: 8 },
    { segment: 'Follow-up Care', importance: 8, satisfaction: 3, opportunity: 9 }
  ];

  // ------------------ Render ------------------
  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hospital Turnaround Strategy</h1>
        <p className="text-xl text-gray-600">Visual Models for Breakthrough Growth</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="flex border-b">
          {['canvas', 'revenue', 'streams', 'value'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === tab ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab === 'canvas' ? 'Strategy Canvas' :
               tab === 'revenue' ? 'Revenue Projections' :
               tab === 'streams' ? 'Revenue Streams' : 'Customer Value'}
            </button>
          ))}
        </div>
      </div>

      {/* Strategy Canvas */}
      {activeTab === 'canvas' && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Strategy Canvas</h2>
          <p className="text-gray-600 mb-6">Your current position vs. competitors vs. Blue Ocean opportunity</p>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={strategyCanvasData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="factor" angle={-45} textAnchor="end" height={120} />
              <YAxis label={{ value: 'Investment/Emphasis Level', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Your Hospital" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="Budget Clinics" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Premium Hospitals" stroke="#6366f1" strokeWidth={2} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Blue Ocean Target" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Revenue Projections */}
      {activeTab === 'revenue' && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Revenue Projection: 12-Month Outlook</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={revenueProjectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Revenue (KES \'000)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `KES ${value}K`} />
              <Legend />
              <Line type="monotone" dataKey="Existing Model" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="New Maternity Focus" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Revenue Streams */}
      {activeTab === 'streams' && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Revenue Stream Transformation</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueStreamData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stream" />
              <YAxis label={{ value: 'Revenue (KES \'000)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `KES ${value}K`} />
              <Legend />
              <Bar dataKey="Outpatient" stackId="a" fill="#60a5fa" />
              <Bar dataKey="Inpatient" stackId="a" fill="#f87171" />
              <Bar dataKey="Dental" stackId="a" fill="#fbbf24" />
              <Bar dataKey="Maternity" stackId="a" fill="#34d399" />
              <Bar dataKey="Women's Wellness" stackId="a" fill="#a78bfa" />
              <Bar dataKey="Corporate" stackId="a" fill="#fb923c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Customer Value */}
      {activeTab === 'value' && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer Value Map</h2>
          <ResponsiveContainer width="100%" height={500}>
            <RadarChart data={customerValueData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="segment" />
              <PolarRadiusAxis angle={90} domain={[0, 10]} />
              <Radar name="Importance to Customers" dataKey="importance" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
              <Radar name="Your Current Satisfaction" dataKey="satisfaction" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
              <Radar name="Blue Ocean Opportunity" dataKey="opportunity" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default HospitalStrategyVisuals;
