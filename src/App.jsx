import React, { useState } from "react";
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
} from "recharts";

const App = () => {
  const [activeTab, setActiveTab] = useState("canvas");

  // Sample data (you can replace later)
  const revenueData = [
    { month: "Jan", revenue: 400 },
    { month: "Feb", revenue: 350 },
    { month: "Mar", revenue: 500 }
  ];

  const departmentMix = [
    { department: "OPD", value: 96 },
    { department: "Inpatient", value: 2 },
    { department: "Maternity", value: 2 },
    { department: "Dental", value: 2 }
  ];

  const radarData = [
    { metric: "Revenue", value: 90 },
    { metric: "Costs", value: 60 },
    { metric: "Utilization", value: 20 },
    { metric: "Profitability", value: 10 }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Hospital Strategy Dashboard (Demo)
      </h1>

      {/* TABS */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={() => setActiveTab("canvas")}
          style={{
            padding: "10px 20px",
            background: activeTab === "canvas" ? "black" : "#ddd",
            color: activeTab === "canvas" ? "white" : "black",
            borderRadius: "8px"
          }}
        >
          Canvas
        </button>
        <button
          onClick={() => setActiveTab("charts")}
          style={{
            padding: "10px 20px",
            background: activeTab === "charts" ? "black" : "#ddd",
            color: activeTab === "charts" ? "white" : "black",
            borderRadius: "8px"
          }}
        >
          Charts
        </button>
      </div>

      {/* CONTENT */}
      <div style={{ marginTop: "30px" }}>
        {activeTab === "canvas" && (
          <div>
            <h2 style={{ fontWeight: "600", fontSize: "20px" }}>
              Strategic Canvas
            </h2>
            <p>This is where your blue ocean strategy canvas will go.</p>
          </div>
        )}

        {activeTab === "charts" && (
          <div>
            <h2 style={{ fontWeight: "600", fontSize: "20px" }}>Charts</h2>

            {/* LINE CHART */}
            <div style={{ height: "300px", marginTop: "20px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* BAR CHART */}
            <div style={{ height: "300px", marginTop: "40px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentMix}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* RADAR CHART */}
            <div style={{ height: "350px", marginTop: "40px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Score"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
