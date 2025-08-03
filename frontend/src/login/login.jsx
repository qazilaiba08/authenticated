"use client";
import { useState } from 'react';

export default function login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const endpoint = isLogin ? '/api/login' : '/api/register';

    const body = isLogin
      ? { email: form.email, password: form.password }
      : {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      alert(isLogin ? 'Logged in successfully!' : 'Account created!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-inter">
      {/* Left Image */}
      <div className="auth-image w-full md:w-1/2 h-64 md:h-auto hidden md:block bg-[url('https://placehold.co/1200x800?text=Shopping+Experience&font=roboto')] bg-cover bg-center">
        <div className="h-full bg-black bg-opacity-30 flex items-center justify-center p-8">
          <div className="text-white max-w-md">
            <h2 className="text-4xl font-bold mb-4">Welcome to ShopSphere</h2>
            <p className="text-lg">Your premium e-commerce destination for fashion, electronics, and lifestyle products.</p>
          </div>
        </div>
      </div>

      {/* Auth Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md auth-container rounded-xl p-8 bg-white shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="ml-2 text-2xl font-semibold">ShopSphere</span>
            </div>
          </div>

          {/* Toggle */}
          <div className="flex mb-8 rounded-lg bg-gray-100 p-1">
            <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 px-4 rounded-md text-gray-600 ${isLogin ? 'bg-white font-semibold text-gray-900' : ''}`}>
              Sign In
            </button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 px-4 rounded-md text-gray-600 ${!isLogin ? 'bg-white font-semibold text-gray-900' : ''}`}>
              Create Account
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" value={form.firstName} onChange={handleChange} required className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" value={form.lastName} onChange={handleChange} required className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" id="email" value={form.email} onChange={handleChange} required className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" id="password" value={form.password} onChange={handleChange} required className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input type="password" id="confirmPassword" value={form.confirmPassword} onChange={handleChange} required className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            )}

            <div>
              <button type="submit" className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
