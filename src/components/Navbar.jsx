import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ totalItems, onCartClick }) {
  // Navigation active links design styling controller
  const linkStyles = ({ isActive }) => 
    `text-lg font-bold transition-colors duration-200 ${
      isActive ? 'text-[#e3357a]' : 'text-[#3d251e] hover:text-[#e3357a]'
    }`;

  // Layout Toggle State Hooks
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  // User Authentication mock state tracking
  const [userSession, setUserSession] = useState(null);

  // Form Management variables
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [formErrors, setFormErrors] = useState({});

  // Real-time controlled inputs update handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Client-Side Input Fields Validation Logic
  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (authMode === 'register' && !formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (authMode === 'register' && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Authentication Submission handling dispatch
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (authMode === 'register') {
      alert('Registration successful! Logging you in now...');
      setUserSession({ name: formData.name, email: formData.email });
    } else {
      setUserSession({ name: formData.email.split('@')[0], email: formData.email });
    }

    // Reset components environment parameters
    setIsAuthOpen(false);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const handleLogout = () => {
    setUserSession(null);
  };

  return (
    <>
      {/* MAIN DESKTOP STICKY NAVBAR BARROW */}
      <header className="w-full bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm sticky top-0 z-40">
        
        {/* BRAND ENTITY IDENTITY */}
        <NavLink to="/" className="flex items-center space-x-2 text-2xl md:text-3xl font-extrabold text-[#e3357a]">
          <span role="img" aria-label="cake logo">🍰</span>
          <span>Sweet Delights</span>
        </NavLink>

        {/* INLINE CORE LINKS (Hidden on smaller viewports) */}
        <nav className="hidden md:flex items-center space-x-12">
          <NavLink to="/" className={linkStyles}>Home</NavLink>
          <NavLink to="/cake" className={linkStyles}>Cake</NavLink>
          <NavLink to="/pastries" className={linkStyles}>Pastries</NavLink>
          <NavLink to="/about" className={linkStyles}>About</NavLink>
        </nav>

        {/* USER CONSOLE ACTION TRIGGERS CONTROLS */}
        <div className="flex items-center space-x-4 md:space-x-6">
          
          {/* USER SYSTEM SESSION RENDERING SWITCH */}
          {userSession ? (
            <div className="flex items-center space-x-3 text-sm font-bold text-[#3d251e]">
              <span className="bg-[#FFF7F6] border border-[#F2E5E2] px-3 py-1.5 rounded-full text-xs">
                Hi, <span className="capitalize text-[#e3357a]">{userSession.name}</span>
              </span>
              <button 
                onClick={handleLogout}
                className="text-xs font-bold text-zinc-400 hover:text-[#e3357a] transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => { setAuthMode('login'); setIsAuthOpen(true); }}
              className="text-2xl p-2 hover:scale-105 transition-all text-[#3d251e] hover:text-[#e3357a]"
              aria-label="User Account Entry"
            >
              👤
            </button>
          )}

          {/* BASKET SHOPPING TRIGGERS */}
          <button 
            onClick={onCartClick}
            className="relative p-2 text-2xl hover:scale-105 transition-transform text-[#3d251e] hover:text-[#e3357a]"
            aria-label="View Shopping Basket"
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-1 bg-[#e3357a] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {totalItems}
              </span>
            )}
          </button>

          {/* RESPONSIVE MOBILE ACCENT MENU CONTROLLER HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl p-2 text-[#3d251e] focus:outline-none"
            aria-label="Toggle Mobile Layout navigation stream"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* FIXED LAYERED OVERLAY MOBILE NAVIGATION MENU BAR (Floats cleanly over banners/content rows) */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop Blur Layer */}
          <div 
            className="fixed inset-0 top-[68px] bg-black/20 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Floating Dropdown Frame Container */}
          <div className="w-full bg-white border-b border-[#F2E5E2] px-6 py-8 flex flex-col space-y-5 md:hidden absolute top-[68px] left-0 z-50 shadow-xl animate-fadeIn text-left">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={linkStyles}>Home</NavLink>
            <NavLink to="/cake" onClick={() => setIsMobileMenuOpen(false)} className={linkStyles}>Cake</NavLink>
            <NavLink to="/pastries" onClick={() => setIsMobileMenuOpen(false)} className={linkStyles}>Pastries</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={linkStyles}>About</NavLink>
          </div>
        </>
      )}


      {/* USER AUTHENTICATION GATEWAY CONTROL MODAL OVERLAY */}
      {isAuthOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#FFF7F6] w-full max-w-md rounded-[28px] p-8 relative shadow-2xl border border-[#F2E5E2] text-left">
            
            {/* Modal Exit crosshair */}
            <button 
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-[#3d251e] text-lg font-bold"
            >
              ✕
            </button>

            {/* Toggle Configuration Headers */}
            <div className="flex border-b border-[#EFE3E1] mb-6">
              <button 
                type="button"
                onClick={() => { setAuthMode('login'); setFormErrors({}); }}
                className={`w-1/2 pb-3 text-base font-bold text-center transition-all ${
                  authMode === 'login' ? 'text-[#e3357a] border-b-2 border-[#e3357a]' : 'text-zinc-400'
                }`}
              >
                Sign In
              </button>
              <button 
                type="button"
                onClick={() => { setAuthMode('register'); setFormErrors({}); }}
                className={`w-1/2 pb-3 text-base font-bold text-center transition-all ${
                  authMode === 'register' ? 'text-[#e3357a] border-b-2 border-[#e3357a]' : 'text-zinc-400'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Content Interactive fields submission forms panel */}
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              
              {/* Optional Field: Name (Only visible during account construction) */}
              {authMode === 'register' && (
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-semibold text-[#3d251e]">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-[#EFE3E1] rounded-xl p-3 text-sm focus:outline-none focus:border-[#e3357a]"
                  />
                  {formErrors.name && <p className="text-[#e3357a] text-xs font-medium">{formErrors.name}</p>}
                </div>
              )}

              {/* Email Fields */}
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-semibold text-[#3d251e]">Email Address</label>
                <input 
                  type="text" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full bg-white border border-[#EFE3E1] rounded-xl p-3 text-sm focus:outline-none focus:border-[#e3357a]"
                />
                {formErrors.email && <p className="text-[#e3357a] text-xs font-medium">{formErrors.email}</p>}
              </div>

              {/* Password Input Row */}
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-semibold text-[#3d251e]">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full bg-white border border-[#EFE3E1] rounded-xl p-3 text-sm focus:outline-none focus:border-[#e3357a]"
                />
                {formErrors.password && <p className="text-[#e3357a] text-xs font-medium">{formErrors.password}</p>}
              </div>

              {/* Confirm Pass Verification (Only visible during account construction) */}
              {authMode === 'register' && (
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-semibold text-[#3d251e]">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full bg-white border border-[#EFE3E1] rounded-xl p-3 text-sm focus:outline-none focus:border-[#e3357a]"
                  />
                  {formErrors.confirmPassword && <p className="text-[#e3357a] text-xs font-medium">{formErrors.confirmPassword}</p>}
                </div>
              )}

              {/* Validation Submission Dispatchers hooks button */}
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-[#e3357a] hover:bg-[#c92a68] text-white font-bold py-3 px-4 rounded-xl text-sm uppercase tracking-wider transition-colors shadow-sm"
                >
                  {authMode === 'login' ? 'Sign In Securely' : 'Complete Registration'}
                </button>
              </div>

              {/* Alternate action toggle switch prompts */}
              <div className="text-center pt-2">
                <p className="text-xs text-zinc-400">
                  {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                  <span 
                    onClick={() => { setAuthMode(authMode === 'login' ? 'register' : 'login'); setFormErrors({}); }}
                    className="text-[#e3357a] font-bold hover:underline cursor-pointer"
                  >
                    {authMode === 'login' ? 'Register here' : 'Login here'}
                  </span>
                </p>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}