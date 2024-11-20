import React, { useState } from 'react';
import './Login.css'; // Halloween-themed CSS

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center halloween-bg">
      <div className="border border-orange-800 rounded-2xl shadow-2xl halloween-card p-10 sm:p-16">
        {/* Spooky Welcome Text */}
        <h1 className="text-4xl font-extrabold text-orange-400 halloween-text mb-6 text-center">
          🕸️ Welcome Back!
        </h1>
        <p className="text-purple-300 text-center text-sm mb-8 halloween-subtext">
        What’s up, legend? Drop your details here!
        </p>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="w-full outline-none bg-gray-900 border border-orange-700 text-white font-medium text-lg py-3 px-5 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-orange-600 transition-all"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="w-full outline-none bg-gray-900 border border-orange-700 text-white font-medium text-lg py-3 px-5 rounded-lg mt-4 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-orange-600 transition-all"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="mt-6 w-full text-lg py-3 px-5 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-purple-700 hover:from-purple-700 hover:to-orange-600 transition-all shadow-lg halloween-button"
          >
            Let's Go!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
