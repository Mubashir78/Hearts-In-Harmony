import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Lock } from 'lucide-react';
import { locations } from '../../data/mockStory';

const MapSystem = ({ currentLocation, onLocationSelect, unlockedLocations }) => {
  const getLocationIcon = (locationId) => {
    const iconStyle = {
      width: '32px',
      height: '32px',
      backgroundColor: locations[locationId].pixelColor,
      border: '2px solid #000',
      borderRadius: '0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000',
      textShadow: '1px 1px 0px #fff',
      boxShadow: '2px 2px 0px #000'
    };

    const icons = {
      dorm_room: '🏠',
      library: '📚',
      cafe: '☕',
      garden: '🌸',
      music_room: '🎵'
    };

    return (
      <div style={iconStyle}>
        {icons[locationId] || '📍'}
      </div>
    );
  };

  const isLocationUnlocked = (locationId) => {
    return unlockedLocations.includes(locationId) || locationId === 'dorm_room';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-400 p-4" style={{
      backgroundImage: `
        radial-gradient(circle at 25% 25%, #fff 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, #fff 2px, transparent 2px)
      `,
      backgroundSize: '50px 50px',
      backgroundPosition: '0 0, 25px 25px'
    }}>
      <Card className="max-w-4xl mx-auto bg-white/90 border-4 border-black shadow-lg" style={{
        borderRadius: '0px',
        boxShadow: '8px 8px 0px #000'
      }}>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-black" style={{
            fontFamily: 'monospace',
            textShadow: '2px 2px 0px #ccc'
          }}>
            🗺️ CAMPUS MAP 🗺️
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Object.entries(locations).map(([locationId, location]) => (
              <Card
                key={locationId}
                className={`p-4 border-4 border-black transition-all duration-200 cursor-pointer ${
                  currentLocation === locationId 
                    ? 'bg-yellow-300 transform scale-105' 
                    : isLocationUnlocked(locationId)
                    ? 'bg-white hover:bg-gray-100 hover:transform hover:scale-105'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                style={{
                  borderRadius: '0px',
                  boxShadow: currentLocation === locationId 
                    ? '6px 6px 0px #000' 
                    : '4px 4px 0px #000'
                }}
                onClick={() => isLocationUnlocked(locationId) && onLocationSelect(locationId)}
              >
                <div className="flex items-center mb-3">
                  {getLocationIcon(locationId)}
                  <div className="ml-3 flex-1">
                    <h3 className="font-bold text-black" style={{ fontFamily: 'monospace' }}>
                      {location.name}
                    </h3>
                    {!isLocationUnlocked(locationId) && (
                      <Lock className="w-4 h-4 text-gray-600 inline-block ml-2" />
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'monospace' }}>
                  {location.description}
                </p>
                {currentLocation === locationId && (
                  <div className="mt-2 text-xs font-bold text-black" style={{ fontFamily: 'monospace' }}>
                    ► CURRENT LOCATION
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'monospace' }}>
              Click on an unlocked location to travel there!
            </div>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-300 border-2 border-black"></div>
                <span className="text-sm" style={{ fontFamily: 'monospace' }}>Current Location</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white border-2 border-black"></div>
                <span className="text-sm" style={{ fontFamily: 'monospace' }}>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 border-2 border-black"></div>
                <span className="text-sm" style={{ fontFamily: 'monospace' }}>Locked</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MapSystem;