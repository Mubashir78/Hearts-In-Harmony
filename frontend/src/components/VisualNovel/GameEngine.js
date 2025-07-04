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
      // Scene completed, check for next scene or show map
      if (currentScene.nextScene) {
        setCurrentSceneId(currentScene.nextScene);
        setCurrentDialogueIndex(0);
        setGameState(prev => ({
          ...prev,
          visitedScenes: [...prev.visitedScenes, currentScene.nextScene]
        }));
      } else {
        // No next scene defined, show map
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
      // Generate scene based on location and previous visits
      const locationSceneId = generateLocationScene(choice.nextLocation);
      setCurrentSceneId(locationSceneId);
      setCurrentDialogueIndex(0);
    } else {
      handleNext();
    }
  };

  const generateLocationScene = (location) => {
    // Generate scene IDs based on location and story progress
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
    
    // Default scene for locations
    return `${location}_visit`;
  };

  const handleLocationSelect = (locationId) => {
    setCurrentLocation(locationId);
    setShowMap(false);
    
    // Generate appropriate scene for the location
    const sceneId = generateLocationScene(locationId);
    
    // Check if scene exists in our story data
    if (gameStory[sceneId]) {
      setCurrentSceneId(sceneId);
      setCurrentDialogueIndex(0);
    } else {
      // Show map if no scene available
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
      return 'bg-gradient-to-br from-blue-400 to-blue-600';
    } else if (character === 'Roshi') {
      return 'bg-gradient-to-br from-pink-400 to-pink-600';
    }
    return 'bg-gradient-to-br from-purple-400 to-purple-600';
  };

  const getPixelBackground = () => {
    return {
      backgroundImage: `
        radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 10px 10px'
    };
  };

  // Show map system
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
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-400 flex items-center justify-center" style={getPixelBackground()}>
        <Card className="p-8 text-center bg-white border-4 border-black" style={{
          borderRadius: '0px',
          boxShadow: '8px 8px 0px #000'
        }}>
          <h2 className="text-2xl font-bold mb-4 text-black" style={{ fontFamily: 'monospace' }}>
            🎉 GAME COMPLETE! 🎉
          </h2>
          <p className="text-gray-700 mb-4" style={{ fontFamily: 'monospace' }}>
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
            className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-black"
            style={{ borderRadius: '0px' }}
          >
            Play Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${getBackgroundColor()} relative overflow-hidden`} style={getPixelBackground()}>
      
      {/* Game UI Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowMap(true)}
          className="bg-white border-2 border-black text-black hover:bg-gray-100"
          style={{ borderRadius: '0px' }}
        >
          <Map className="w-4 h-4 mr-2" />
          Map
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSaveLoadMenu(true)}
          className="bg-white border-2 border-black text-black hover:bg-gray-100"
          style={{ borderRadius: '0px' }}
        >
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSaveLoadMenu(true)}
          className="bg-white border-2 border-black text-black hover:bg-gray-100"
          style={{ borderRadius: '0px' }}
        >
          <FolderOpen className="w-4 h-4 mr-2" />
          Load
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`bg-white border-2 border-black text-black hover:bg-gray-100 ${isAutoPlay ? 'bg-yellow-300' : ''}`}
          style={{ borderRadius: '0px' }}
        >
          {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white border-2 border-black text-black hover:bg-gray-100"
          style={{ borderRadius: '0px' }}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Game Stats */}
      <div className="absolute top-4 left-4 z-50">
        <Card className="bg-white border-2 border-black text-black p-3" style={{ borderRadius: '0px' }}>
          <div className="text-sm" style={{ fontFamily: 'monospace' }}>
            <div>💕 Love Points: {gameState.relationshipPoints}</div>
            <div>📍 Location: {locations[currentLocation]?.name}</div>
            <div>📖 Scene: {currentScene.title}</div>
          </div>
        </Card>
      </div>

      {/* Simple Pixel Art Location Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="text-6xl">
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
        <div className="absolute bottom-32 left-0 right-0 z-50">
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