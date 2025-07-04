import React, { useState, useEffect } from 'react';
import DialogueBox from './DialogueBox';
import ChoiceButtons from './ChoiceButtons';
import CharacterSprite from './CharacterSprite';
import BackgroundImage from './BackgroundImage';
import SaveLoadMenu from './SaveLoadMenu';
import { gameStory } from '../../data/mockStory';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Pause, Play, Save, FolderOpen, Volume2, VolumeX } from 'lucide-react';

const GameEngine = () => {
  const [currentSceneId, setCurrentSceneId] = useState('intro');
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [gameState, setGameState] = useState({
    playerName: '',
    relationshipPoints: 0,
    choicesMade: {},
    unlockedScenes: ['intro'],
    flags: {}
  });
  const [showSaveLoadMenu, setShowSaveLoadMenu] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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
      // Scene completed, check for next scene
      if (currentScene.nextScene) {
        setCurrentSceneId(currentScene.nextScene);
        setCurrentDialogueIndex(0);
        setGameState(prev => ({
          ...prev,
          unlockedScenes: [...prev.unlockedScenes, currentScene.nextScene]
        }));
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
        unlockedScenes: [...prev.unlockedScenes, choice.nextScene]
      }));
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

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!currentScene) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Game Complete!</h2>
          <p className="text-gray-600 mb-4">Thank you for playing our romantic visual novel.</p>
          <Button onClick={() => {
            setCurrentSceneId('intro');
            setCurrentDialogueIndex(0);
            setGameState({
              playerName: '',
              relationshipPoints: 0,
              choicesMade: {},
              unlockedScenes: ['intro'],
              flags: {}
            });
          }}>
            Play Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Image */}
      <BackgroundImage 
        src={currentScene.background} 
        alt="Scene background"
      />
      
      {/* Game UI Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSaveLoadMenu(true)}
          className="bg-black/20 border-white/20 text-white hover:bg-black/40"
        >
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSaveLoadMenu(true)}
          className="bg-black/20 border-white/20 text-white hover:bg-black/40"
        >
          <FolderOpen className="w-4 h-4 mr-2" />
          Load
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleAutoPlay}
          className={`bg-black/20 border-white/20 text-white hover:bg-black/40 ${isAutoPlay ? 'bg-purple-600/40' : ''}`}
        >
          {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMute}
          className="bg-black/20 border-white/20 text-white hover:bg-black/40"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Game Stats */}
      <div className="absolute top-4 left-4 z-50">
        <Card className="bg-black/20 border-white/20 text-white p-3">
          <div className="text-sm">
            <div>💕 Relationship: {gameState.relationshipPoints}</div>
            <div>📖 Scene: {currentScene.title}</div>
          </div>
        </Card>
      </div>

      {/* Character Sprites */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center items-end z-30">
        {currentDialogue?.character && (
          <CharacterSprite
            character={currentDialogue.character}
            emotion={currentDialogue.emotion || 'neutral'}
            position={currentDialogue.position || 'center'}
          />
        )}
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