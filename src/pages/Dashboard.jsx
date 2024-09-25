// src/pages/Dashboard.js
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
        {/* Add dynamic content based on user role */}
      </div>
    </div>
  );
};

export default Dashboard;
