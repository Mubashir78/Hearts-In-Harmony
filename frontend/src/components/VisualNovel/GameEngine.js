import React, { useState, useEffect } from 'react';
import DialogueBox from './DialogueBox';
import ChoiceButtons from './ChoiceButtons';
import MapSystem from './MapSystem';
import SaveLoadMenu from './SaveLoadMenu';
import { gameStory, locations } from '../../data/mockStory';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Pause, Play, Save, FolderOpen, Volume2, VolumeX, Map } from 'lucide-react';

const GameEngine = () => {
  const [currentSceneId, setCurrentSceneId] = useState('intro');
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState('dorm_room');
  const [showMap, setShowMap] = useState(false);
  const [gameState, setGameState] = useState({
    playerName: 'Mobi',
    relationshipPoints: 0,
    choicesMade: {},
    unlockedLocations: ['dorm_room', 'library', 'cafe', 'garden'],
    flags: {},
    visitedScenes: []
  });
  const [showSaveLoadMenu, setShowSaveLoadMenu] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const currentScene = gameStory[currentSceneId];
  const currentDialogue = currentScene?.dialogue[currentDialogueIndex];

  useEffect(() => {
    if (isAutoPlay && currentDialogue && !currentDialogue.choices) {
      const timer = setTimeout(() => {
        handleNext();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentDialogueIndex, isAutoPlay, currentDialogue]);

  const handleNext = () => {
    if (currentDialogueIndex < currentScene.dialogue.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    } else {
      if (currentScene.nextScene) {
        setCurrentSceneId(currentScene.nextScene);
        setCurrentDialogueIndex(0);
        setGameState(prev => ({
          ...prev,
          visitedScenes: [...prev.visitedScenes, currentScene.nextScene]
        }));
      } else {
        setShowMap(true);
      }
    }
  };

  const handleChoice = (choice) => {
    setGameState(prev => ({
      ...prev,
      relationshipPoints: prev.relationshipPoints + (choice.points || 0),
      choicesMade: { ...prev.choicesMade, [currentSceneId]: choice.id },
      flags: { ...prev.flags, ...choice.flags }
    }));

    if (choice.nextScene) {
      setCurrentSceneId(choice.nextScene);
      setCurrentDialogueIndex(0);
      setGameState(prev => ({
        ...prev,
        visitedScenes: [...prev.visitedScenes, choice.nextScene]
      }));
    } else if (choice.nextLocation) {
      setCurrentLocation(choice.nextLocation);
      setShowMap(false);
      const locationSceneId = generateLocationScene(choice.nextLocation);
      setCurrentSceneId(locationSceneId);
      setCurrentDialogueIndex(0);
    } else {
      handleNext();
    }
  };

  const generateLocationScene = (location) => {
    const hasMetRoshi = gameState.flags.metRoshi || gameState.relationshipPoints > 0;
    
    if (location === 'library' && !hasMetRoshi) {
      return 'library_first_visit';
    } else if (location === 'cafe' && !hasMetRoshi) {
      return 'cafe_first_visit';
    } else if (location === 'garden' && !hasMetRoshi) {
      return 'garden_first_visit';
    } else if (location === 'music_room') {
      return 'music_room_visit';
    }
    
    return `${location}_visit`;
  };

  const handleLocationSelect = (locationId) => {
    setCurrentLocation(locationId);
    setShowMap(false);
    
    const sceneId = generateLocationScene(locationId);
    
    if (gameStory[sceneId]) {
      setCurrentSceneId(sceneId);
      setCurrentDialogueIndex(0);
    } else {
      setShowMap(true);
    }
  };

  const handleSave = (slot) => {
    const saveData = {
      currentSceneId,
      currentDialogueIndex,
      currentLocation,
      gameState,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(`vnSave_${slot}`, JSON.stringify(saveData));
    setShowSaveLoadMenu(false);
  };

  const handleLoad = (slot) => {
    const saveData = localStorage.getItem(`vnSave_${slot}`);
    if (saveData) {
      const data = JSON.parse(saveData);
      setCurrentSceneId(data.currentSceneId);
      setCurrentDialogueIndex(data.currentDialogueIndex);
      setCurrentLocation(data.currentLocation || 'dorm_room');
      setGameState(data.gameState);
      setShowSaveLoadMenu(false);
      setShowMap(false);
    }
  };

  const getBackgroundColor = () => {
    if (showMap) return '';
    
    const character = currentDialogue?.character;
    if (character === 'Mobi') {
      return 'bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950';
    } else if (character === 'Roshi') {
      return 'bg-gradient-to-br from-pink-800 via-pink-900 to-pink-950';
    } else if (character === 'Narrator') {
      return 'bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950';
    }
    return 'bg-gradient-to-br from-gray-800 via-gray-900 to-black';
  };

  const getPixelBackground = () => {
    return {
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 10px 10px'
    };
  };

  if (showMap) {
    return (
      <MapSystem
        currentLocation={currentLocation}
        onLocationSelect={handleLocationSelect}
        unlockedLocations={gameState.unlockedLocations}
      />
    );
  }

  if (!currentScene) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-4" style={getPixelBackground()}>
        <Card className="p-6 sm:p-8 text-center bg-gray-900 border-4 border-white animate-bounce" style={{
          borderRadius: '0px',
          boxShadow: '8px 8px 0px #fff'
        }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'monospace' }}>
            🎉 GAME COMPLETE! 🎉
          </h2>
          <p className="text-gray-300 mb-4 text-sm sm:text-base" style={{ fontFamily: 'monospace' }}>
            Thank you for playing Hearts in Harmony!
          </p>
          <Button 
            onClick={() => {
              setCurrentSceneId('intro');
              setCurrentDialogueIndex(0);
              setCurrentLocation('dorm_room');
              setGameState({
                playerName: 'Mobi',
                relationshipPoints: 0,
                choicesMade: {},
                unlockedLocations: ['dorm_room', 'library', 'cafe', 'garden'],
                flags: {},
                visitedScenes: []
              });
              setShowMap(false);
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white border-2 border-white transform hover:scale-105 transition-all duration-200"
            style={{ borderRadius: '0px', fontFamily: 'monospace' }}
          >
            🔄 Play Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${getBackgroundColor()} relative overflow-hidden transition-all duration-500`} style={getPixelBackground()}>
      
      {/* Game UI Controls */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-wrap gap-1 sm:gap-2 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowMap(true)}
          className="bg-gray-800 border-2 border-white text-white hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
          style={{ borderRadius: '0px', fontFamily: 'monospace' }}
        >
          <Map className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
          <span className="hidden sm:inline">Map</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSaveLoadMenu(true)}
          className="bg-gray-800 border-2 border-white text-white hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
          style={{ borderRadius: '0px', fontFamily: 'monospace' }}
        >
          <Save className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
          <span className="hidden sm:inline">Save</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSaveLoadMenu(true)}
          className="bg-gray-800 border-2 border-white text-white hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
          style={{ borderRadius: '0px', fontFamily: 'monospace' }}
        >
          <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
          <span className="hidden sm:inline">Load</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`bg-gray-800 border-2 border-white text-white hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm ${isAutoPlay ? 'bg-yellow-600' : ''}`}
          style={{ borderRadius: '0px', fontFamily: 'monospace' }}
        >
          {isAutoPlay ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMuted(!isMuted)}
          className="bg-gray-800 border-2 border-white text-white hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
          style={{ borderRadius: '0px', fontFamily: 'monospace' }}
        >
          {isMuted ? <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" /> : <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />}
        </Button>
      </div>

      {/* Game Stats */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-50">
        <Card className="bg-gray-900 border-2 border-white text-white p-2 sm:p-3 transform hover:scale-105 transition-all duration-200" style={{ borderRadius: '0px' }}>
          <div className="text-xs sm:text-sm" style={{ fontFamily: 'monospace' }}>
            <div>💕 Love: {gameState.relationshipPoints}</div>
            <div>📍 {locations[currentLocation]?.name}</div>
            <div className="hidden sm:block">📖 {currentScene.title}</div>
          </div>
        </Card>
      </div>

      {/* Simple Pixel Art Location Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse">
        <div className="text-4xl sm:text-6xl transform hover:scale-110 transition-transform duration-300">
          {currentLocation === 'dorm_room' && '🏠'}
          {currentLocation === 'library' && '📚'}
          {currentLocation === 'cafe' && '☕'}
          {currentLocation === 'garden' && '🌸'}
          {currentLocation === 'music_room' && '🎵'}
        </div>
      </div>

      {/* Dialogue Box */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <DialogueBox
          character={currentDialogue?.character}
          text={currentDialogue?.text}
          onNext={handleNext}
          isVisible={!!currentDialogue}
        />
      </div>

      {/* Choice Buttons */}
      {currentDialogue?.choices && (
        <div className="absolute bottom-24 sm:bottom-32 left-0 right-0 z-50">
          <ChoiceButtons
            choices={currentDialogue.choices}
            onChoice={handleChoice}
          />
        </div>
      )}

      {/* Save/Load Menu */}
      {showSaveLoadMenu && (
        <SaveLoadMenu
          onSave={handleSave}
          onLoad={handleLoad}
          onClose={() => setShowSaveLoadMenu(false)}
        />
      )}
    </div>
  );
};

export default GameEngine;