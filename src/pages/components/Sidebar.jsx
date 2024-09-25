// src/components/Sidebar.js
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-500 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-4">LearnHub</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard" className="hover:bg-blue-600 p-2 rounded">Dashboard</Link>
        <Link to="/profile" className="hover:bg-blue-600 p-2 rounded">Profile</Link>
        <Link to="/settings" className="hover:bg-blue-600 p-2 rounded">Settings</Link>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;
