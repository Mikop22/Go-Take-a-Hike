import React, { useEffect, useRef, useState } from 'react';
const GOOGLE_MAPS_API_KEY = import.meta.env.MAPS_API_KEY;
const MapView = ({ hike, onBackClick }) => {
  const mapContainerRef = useRef(null);
  const [mapCoordinates, setMapCoordinates] = useState(null);

  useEffect(() => {

    const geocodeAddress = async (address) => {
      if (!window.google?.maps) return { lat: 37.7905, lng: -122.3989, altitude: 500 };
      
      try {
        const geocoder = new window.google.maps.Geocoder();
        return new Promise((resolve) => {
          geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK' && results[0]) {
              const location = results[0].geometry.location;
              resolve({
                lat: location.lat(), 
                lng: location.lng(), 
                altitude: 500
              });
            } else {
              console.error('Geocoding failed:', status);
              resolve({ lat: 37.7905, lng: -122.3989, altitude: 500 });
            }
          });
        });
      } catch (error) {
        console.error('Geocoding error:', error);
        return { lat: 37.7905, lng: -122.3989, altitude: 500 };
      }
    };

    const initMap = async () => {
      try {
        // Ensure Google Maps is loaded
        if (!window.google?.maps) {
          await new Promise(resolve => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBW7xz78Cff2zjHyxFi_NLu4cm9uv0DL9o&libraries=maps3d,geocoding`;
            script.async = true;
            script.onload = resolve;
            document.head.appendChild(script);
          });
        }

        // Geocode address
        const coordinates = hike?.address 
          ? await geocodeAddress(hike.address) 
          : { lat: 37.7905, lng: -122.3989, altitude: 500 };
        
        setMapCoordinates(coordinates);

        // Load the maps3d library
        const { Map3DElement } = await window.google.maps.importLibrary("maps3d");

        // Create new map instance
        const map = new Map3DElement({
          center: coordinates,
          tilt: 67.5,
        });

        // Clear previous map if exists
        if (mapContainerRef.current) {
          mapContainerRef.current.innerHTML = '';
          mapContainerRef.current.appendChild(map);
        }

        // Add click event listener
        map.addEventListener('gmp-click', async (event) => {
          if (event.placeId) {
            const place = await event.fetchPlace();
            await place.fetchFields({fields: ['*']});
          }
        });

      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initMap();

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');
      scripts.forEach(script => script.remove());
    };
  }, [hike?.address]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-green-300 hover:text-green-400 transition-colors"
          >
            &larr; Back to Results
          </button>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-4 border border-white/20">
          <h2 className="text-2xl font-bold text-green-300 mb-4">
            {hike?.name || 'Hike Details'}
          </h2>
          
          <div
            ref={mapContainerRef}
            className="relative w-full rounded-lg overflow-hidden bg-white/5"
            style={{ height: '400px' }}
          />
               
          <div className="mt-2 p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
            <p className="text-yellow-300 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Areas with dense forest are more likely to lack cell service (don't get lost!)
            </p>
          </div> 
          <div className="mt-4 text-gray-300">
            <p>
              <strong className="text-green-300">Address:</strong> 
              {hike?.address || 'Address not available'}
            </p>
            <p className="mt-2">{hike?.description || 'No description provided'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;