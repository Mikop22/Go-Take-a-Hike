import React from 'react'; 
import { MapPin, Navigation2, RefreshCw } from 'lucide-react'; 

const HikeResults = ({ hikes, onBackClick, onViewMap, isLoading, onGenerateNew }) => {
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-green-300">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-lg">Finding hiking trails...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-green-300">Nearby Trails</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onGenerateNew}
              className="flex items-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors group"
            >
              <RefreshCw className="h-5 w-5 group-hover:rotate-180 transition-all duration-500" />
              Generate More Trails
            </button>
            <button
              onClick={onBackClick}
              className="py-2 px-4 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-400/10 transition-colors"
            >
              Search New Location
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hikes.map((hike, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-green-300 mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-400" />
                {hike.name}
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-green-300">Location:</strong> {hike.address}
                </p>
                <p className="text-gray-300">{hike.description}</p>
                
                <button
                  onClick={() => onViewMap(hike)}
                  className="flex items-center gap-2 py-2 px-4 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors mt-4 text-sm group"
                >
                  <Navigation2 className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View Trail Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HikeResults;