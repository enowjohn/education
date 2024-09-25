// src/pages/Login.js
import { useState } from 'react';
import { auth } from '../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <form onSubmit={handleLogin} className="bg-gray-100 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          className="block w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Log In</button>
      </form>
    </div>
  );
};

export default Login;
