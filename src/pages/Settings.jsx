// src/pages/Settings.jsx
import { useState } from 'react';
import { auth } from '../services/firebase';
import { updatePassword } from 'firebase/auth';

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      await updatePassword(user, newPassword);
      alert('Password updated successfully!');
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white h-screen">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form onSubmit={handlePasswordChange} className="w-full max-w-md p-4 bg-gray-100 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Current Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">New Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Settings;
