import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Lock } from 'lucide-react';
import { locations } from '../../data/mockStory';

const MapSystem = ({ currentLocation, onLocationSelect, unlockedLocations }) => {
  const getLocationIcon = (locationId) => {
    const iconStyle = {
      width: '24px',
      height: '24px',
      backgroundColor: locations[locationId].pixelColor,
      border: '2px solid #fff',
      borderRadius: '0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
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
      <div style={iconStyle} className="sm:w-8 sm:h-8 sm:text-base">
        {icons[locationId] || '📍'}
      </div>
    );
  };

  const isLocationUnlocked = (locationId) => {
    return unlockedLocations.includes(locationId) || locationId === 'dorm_room';
  };

  const pixelBackground = {
    backgroundImage: `
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '30px 30px',
    backgroundPosition: '0 0, 15px 15px'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-2 sm:p-4 transition-all duration-500" style={pixelBackground}>
      <Card className="max-w-6xl mx-auto bg-gray-900 border-4 border-white shadow-lg animate-pulse" style={{
        borderRadius: '0px',
        boxShadow: '8px 8px 0px #fff'
      }}>
        <div className="p-3 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-white hover:text-blue-300 transition-colors duration-300" style={{
            fontFamily: 'monospace',
            textShadow: '2px 2px 0px #000'
          }}>
            🗺️ CAMPUS MAP 🗺️
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
            {Object.entries(locations).map(([locationId, location]) => (
              <Card
                key={locationId}
                className={`p-3 sm:p-4 border-4 border-white transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1 ${
                  currentLocation === locationId 
                    ? 'bg-yellow-600 animate-bounce' 
                    : isLocationUnlocked(locationId)
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                }`}
                style={{
                  borderRadius: '0px',
                  boxShadow: currentLocation === locationId 
                    ? '6px 6px 0px #000' 
                    : '4px 4px 0px #000'
                }}
                onClick={() => isLocationUnlocked(locationId) && onLocationSelect(locationId)}
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  {getLocationIcon(locationId)}
                  <div className="ml-2 sm:ml-3 flex-1">
                    <h3 className="font-bold text-white text-xs sm:text-base" style={{ fontFamily: 'monospace' }}>
                      {location.name}
                    </h3>
                    {!isLocationUnlocked(locationId) && (
                      <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 inline-block ml-1 sm:ml-2" />
                    )}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300" style={{ fontFamily: 'monospace' }}>
                  {location.description}
                </p>
                {currentLocation === locationId && (
                  <div className="mt-1 sm:mt-2 text-xs font-bold text-black animate-pulse" style={{ fontFamily: 'monospace' }}>
                    ► YOU ARE HERE
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4" style={{ fontFamily: 'monospace' }}>
              💡 Click on unlocked locations to travel!
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-600 border-2 border-white animate-pulse"></div>
                <span className="text-white" style={{ fontFamily: 'monospace' }}>Current</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 border-2 border-white"></div>
                <span className="text-white" style={{ fontFamily: 'monospace' }}>Available</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 border-2 border-white opacity-50"></div>
                <span className="text-white" style={{ fontFamily: 'monospace' }}>Locked</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MapSystem;