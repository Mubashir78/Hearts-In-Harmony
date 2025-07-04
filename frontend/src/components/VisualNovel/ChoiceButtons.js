import React from 'react';
import { Button } from '../ui/button';
import { Heart, Brain, Sparkles } from 'lucide-react';

const ChoiceButtons = ({ choices, onChoice }) => {
  const getChoiceIcon = (choice) => {
    if (choice.type === 'romantic') return <Heart className="w-4 h-4" />;
    if (choice.type === 'logical') return <Brain className="w-4 h-4" />;
    return <Sparkles className="w-4 h-4" />;
  };

  const getChoiceColor = (choice) => {
    if (choice.type === 'romantic') return 'from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500';
    if (choice.type === 'logical') return 'from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500';
    return 'from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500';
  };

  return (
    <div className="flex flex-col items-center gap-3 mx-4">
      {choices.map((choice, index) => (
        <Button
          key={index}
          onClick={() => onChoice(choice)}
          className={`w-full max-w-2xl bg-gradient-to-r ${getChoiceColor(choice)} border-none text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform`}
        >
          <div className="flex items-center justify-center gap-2">
            {getChoiceIcon(choice)}
            <span className="text-left">{choice.text}</span>
            {choice.points && (
              <span className="ml-auto text-sm opacity-80">
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