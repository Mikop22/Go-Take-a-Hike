import React, { useState } from 'react';
import HomePage from './components/HomePage';
import HikeResults from './components/HikeResults';
import MapView from './components/MapView';
import { getHikingTrails } from './utils/hikingAPI';

// Using a ref instead of a regular variable for generateNewTrails to maintain state
export const trailCache = new Map();
export let generateNewTrails = false;

function App() {
  const [userLocation, setUserLocation] = useState('');
  const [hikes, setHikes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedHike, setSelectedHike] = useState(null);

  const handleLocationSubmit = async (location) => {
    setIsLoading(true);
    setUserLocation(location);
    
    try {
      const { success, data } = await getHikingTrails(location);
      if (success) {
        setHikes(data);
      }
    } catch (error) {
      console.error('Error fetching hikes:', error);
    } finally {
      setIsLoading(false);
      // Reset generateNewTrails after fetching
      generateNewTrails = false;
    }
  };

  const handleViewMap = (hike) => {
    setSelectedHike(hike);
  };

  const handleBackToResults = () => {
    setSelectedHike(null);
  };

  const handleReset = () => {
    setUserLocation('');
    setHikes([]);
    setSelectedHike(null);
    trailCache.clear(); // Clear the cache when resetting
  };

  // New function to handle generating new trails
  const handleGenerateNewTrails = async () => {
    generateNewTrails = true;
    await handleLocationSubmit(userLocation);
  };

  // Determine which component to render
  const renderContent = () => {
    if (!userLocation) {
      return <HomePage onLocationSubmit={handleLocationSubmit} />;
    }
    
    if (selectedHike) {
      return (
        <MapView 
          hike={selectedHike}
          onBackClick={handleBackToResults}
        />
      );
    }

    return (
      <HikeResults
        hikes={hikes}
        onBackClick={handleReset}
        onViewMap={handleViewMap}
        isLoading={isLoading}
        onGenerateNew={handleGenerateNewTrails} // New prop for generate button
      />
    );
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
    </div>
  );
}

export default App;