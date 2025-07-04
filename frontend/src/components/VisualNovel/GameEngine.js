import React, { useState, useEffect } from 'react';
import DialogueBox from './DialogueBox';
import ChoiceButtons from './ChoiceButtons';
import SaveLoadMenu from './SaveLoadMenu';
import { gameStory, backgrounds } from '../../data/mockStory';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Pause, Play, Save, FolderOpen, Volume2, VolumeX, RotateCcw } from 'lucide-react';

const GameEngine = () => {
  const [currentSceneId, setCurrentSceneId] = useState('intro');
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [gameState, setGameState] = useState({
    relationshipPoints: 0,
    choicesMade: {},
    flags: {}
  });
  const [showSaveLoadMenu, setShowSaveLoadMenu] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentScene = gameStory[currentSceneId];
  const currentDialogue = currentScene?.dialogue[currentDialogueIndex];

  useEffect(() => {
    if (isAutoPlay && currentDialogue && !currentDialogue.choices && !isPaused) {
      const delay = currentDialogue.pause || 2000;
      const timer = setTimeout(() => {
        handleNext();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentDialogueIndex, isAutoPlay, currentDialogue, isPaused]);

  const handleNext = () => {
    if (currentDialogueIndex < currentScene.dialogue.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    } else {
      // Scene completed - story is linear so no branching
      const nextScenes = {
        'intro': 'helping_moment',
        'helping_moment': 'poetry_moment', 
        'poetry_moment': 'growing_closer',
        'growing_closer': 'clumsy_confession',
        'clumsy_confession': null
      };
      
      const nextScene = nextScenes[currentSceneId];
      if (nextScene) {
        setCurrentSceneId(nextScene);
        setCurrentDialogueIndex(0);
      }
    }
  };

  const handleChoice = (choice) => {
    // All choices lead to the same progression (linear story)
    setGameState(prev => ({
      ...prev,
      relationshipPoints: prev.relationshipPoints + (choice.points || 0),
      choicesMade: { ...prev.choicesMade, [currentSceneId]: choice.id },
      flags: { ...prev.flags, ...choice.flags }
    }));

    if (choice.nextScene) {
      setCurrentSceneId(choice.nextScene);
      setCurrentDialogueIndex(0);
    } else {
      handleNext();
    }
  };

  const handleSave = (slot) => {
    const saveData = {
      currentSceneId,
      currentDialogueIndex,
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
      setGameState(data.gameState);
      setShowSaveLoadMenu(false);
    }
  };

  const handleRestart = () => {
    setCurrentSceneId('intro');
    setCurrentDialogueIndex(0);
    setGameState({
      relationshipPoints: 0,
      choicesMade: {},
      flags: {}
    });
    setIsPaused(false);
  };

  const getBackgroundColor = () => {
    const character = currentDialogue?.character;
    if (character === 'Mobi') {
      return 'bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950';
    } else if (character === 'Roshi') {
      return 'bg-gradient-to-br from-pink-800 via-pink-900 to-pink-950';
    } else if (character === 'Narrator') {
      return 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900';
    }
    return 'bg-gradient-to-br from-gray-800 via-gray-900 to-black';
  };

  const getPixelBackground = () => {
    const sceneBackground = backgrounds[currentScene?.background];
    if (sceneBackground) {
      return {
        ...sceneBackground.style,
        opacity: 0.1
      };
    }
    
    return {
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 10px 10px'
    };
  };

  if (!currentScene) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-4" style={getPixelBackground()}>
        <Card className="p-6 sm:p-8 text-center bg-gray-900 border-4 border-white animate-bounce" style={{
          borderRadius: '0px',
          boxShadow: '8px 8px 0px #fff'
        }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'monospace' }}>
            💕 THE END 💕
          </h2>
          <p className="text-gray-300 mb-4 text-sm sm:text-base" style={{ fontFamily: 'monospace' }}>
            Thank you for experiencing Mobi and Roshi's love story!
          </p>
          <Button 
            onClick={handleRestart}
            className="bg-pink-600 hover:bg-pink-500 text-white border-2 border-white transform hover:scale-105 transition-all duration-200"
            style={{ borderRadius: '0px', fontFamily: 'monospace' }}
          >
            🔄 Play Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${getBackgroundColor()} relative overflow-hidden transition-all duration-500`}>
      
      {/* Pixel Background Layer */}
      <div 
        className="absolute inset-0 z-10"
        style={getPixelBackground()}
      />
      
      {/* Game UI Controls */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-wrap gap-1 sm:gap-2 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={handleRestart}
          className="bg-gray-800 border-2 border-white text-white hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
          style={{ borderRadius: '0px', fontFamily: 'monospace' }}
        >
          <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
          <span className="hidden sm:inline">Restart</span>
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
          onClick={() => {
            setIsAutoPlay(!isAutoPlay);
            setIsPaused(false);
          }}
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
            <div>📖 {currentScene.title}</div>
          </div>
        </Card>
      </div>

      {/* Simple Pixel Art Location Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse">
        <div className="text-4xl sm:text-6xl transform hover:scale-110 transition-transform duration-300">
          📚
        </div>
      </div>

      {/* Dialogue Box */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <DialogueBox
          character={currentDialogue?.character}
          text={currentDialogue?.text}
          onNext={handleNext}
          isVisible={!!currentDialogue}
          pause={currentDialogue?.pause}
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