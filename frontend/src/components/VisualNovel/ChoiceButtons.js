import React from 'react';
import { Button } from '../ui/button';
import { Heart, Brain, Sparkles, MapPin } from 'lucide-react';

const ChoiceButtons = ({ choices, onChoice }) => {
  const getChoiceIcon = (choice) => {
    if (choice.type === 'romantic') return <Heart className="w-4 h-4" />;
    if (choice.type === 'logical') return <Brain className="w-4 h-4" />;
    if (choice.type === 'social') return <Sparkles className="w-4 h-4" />;
    if (choice.nextLocation) return <MapPin className="w-4 h-4" />;
    return <Sparkles className="w-4 h-4" />;
  };

  const getChoiceColor = (choice) => {
    if (choice.type === 'romantic') return 'bg-pink-500 hover:bg-pink-600';
    if (choice.type === 'logical') return 'bg-blue-500 hover:bg-blue-600';
    if (choice.type === 'social') return 'bg-purple-500 hover:bg-purple-600';
    if (choice.nextLocation) return 'bg-green-500 hover:bg-green-600';
    return 'bg-gray-500 hover:bg-gray-600';
  };

  return (
    <div className="flex flex-col items-center gap-3 mx-4">
      {choices.map((choice, index) => (
        <Button
          key={index}
          onClick={() => onChoice(choice)}
          className={`w-full max-w-2xl ${getChoiceColor(choice)} border-2 border-black text-white font-bold py-3 px-6 transition-all duration-300 hover:scale-105 transform`}
          style={{ borderRadius: '0px', fontFamily: 'monospace' }}
        >
          <div className="flex items-center justify-center gap-2">
            {getChoiceIcon(choice)}
            <span className="text-left">{choice.text}</span>
            {choice.points && (
              <span className="ml-auto text-sm">
                {choice.points > 0 ? `+${choice.points}` : choice.points} 💕
              </span>
            )}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default ChoiceButtons;