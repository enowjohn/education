// src/pages/Profile.jsx
import { useState } from 'react';
import { auth } from '../services/firebase';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
  const [displayName, setDisplayName] = useState(auth.currentUser?.displayName || '');
  const [email, setEmail] = useState(auth.currentUser?.email || '');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: profilePicture,
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  setEmail(auth.currentUser?.email)

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white h-screen">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <form onSubmit={handleProfileUpdate} className="w-full max-w-md p-4 bg-gray-100 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Email</label>
          <input type="email" className="w-full p-2 border rounded" value={email} disabled />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Bio</label>
          <textarea
            className="w-full p-2 border rounded"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself..."
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Profile Picture</label>
          <input type="file" className="w-full p-2 border rounded" onChange={handleFileChange} />
          {profilePicture && <img src={profilePicture} alt="Profile Preview" className="mt-2 w-20 h-20 rounded-full" />}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
