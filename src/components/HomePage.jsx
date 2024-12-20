import React, { useState } from 'react';
import { MapPin, Navigation, Mountain } from 'lucide-react';

const HomePage = ({ onLocationSubmit }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    if (location.trim()) {
      onLocationSubmit(location);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
      
      {/* Content container */}
      <div className="relative text-center space-y-8 max-w-md w-full">
        {/* Logo/Icon */}
        <div className="mb-6">
          <Mountain className="h-20 w-20 text-green-400 mx-auto" />
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            Go Take a Hike!
          </h1>
          <p className="text-green-300 text-lg">
            Discover trails. Create memories.
          </p>
        </div>

        {/* Input card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-white/20">
          <div className="space-y-6">
            <label className="text-lg text-green-300 flex items-center justify-center gap-2 font-medium">
              <MapPin className="h-5 w-5 text-green-400" />
              Where's your starting point?
            </label>
            
            <input
              type="text"
              placeholder="Enter city and state/province"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-center text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm transition-all"
            />
            
            <button
              onClick={handleSubmit}
              disabled={!location.trim()}
              className="w-full py-4 px-6 bg-green-600 hover:bg-green-500 text-white rounded-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-green-500/20"
            >
              <Navigation className="h-5 w-5" />
              Find My Trails
            </button>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-green-300/60 text-sm">
          Join thousands of hikers finding their next adventure
        </p>
      </div>
    </div>
  );
};

export default HomePage;