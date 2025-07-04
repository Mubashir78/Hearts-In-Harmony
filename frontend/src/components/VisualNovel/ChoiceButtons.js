import React from 'react';
import { Button } from '../ui/button';
import { Heart, Brain, Sparkles, Users } from 'lucide-react';

const ChoiceButtons = ({ choices, onChoice }) => {
  const getChoiceIcon = (choice) => {
    if (choice.type === 'romantic') return <Heart className="w-3 h-3 sm:w-4 sm:h-4" />;
    if (choice.type === 'helpful') return <Users className="w-3 h-3 sm:w-4 sm:h-4" />;
    if (choice.type === 'shy') return <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />;
    if (choice.type === 'curious') return <Brain className="w-3 h-3 sm:w-4 sm:h-4" />;
    return <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />;
  };

  const getChoiceColor = (choice) => {
    if (choice.type === 'romantic') return 'bg-pink-600 hover:bg-pink-500 border-pink-400';
    if (choice.type === 'helpful') return 'bg-green-600 hover:bg-green-500 border-green-400';
    if (choice.type === 'shy') return 'bg-purple-600 hover:bg-purple-500 border-purple-400';
    if (choice.type === 'curious') return 'bg-blue-600 hover:bg-blue-500 border-blue-400';
    return 'bg-gray-600 hover:bg-gray-500 border-gray-400';
  };

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 mx-2 sm:mx-4">
      <div className="text-center text-xs sm:text-sm text-gray-300 mb-2" style={{ fontFamily: 'monospace' }}>
        💭 All paths lead to the same beautiful ending 💭
      </div>
      {choices.map((choice, index) => (
        <Button
          key={index}
          onClick={() => onChoice(choice)}
          className={`w-full max-w-xl sm:max-w-2xl ${getChoiceColor(choice)} border-2 text-white font-bold py-2 sm:py-3 px-3 sm:px-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform animate-fadeIn`}
          style={{ 
            borderRadius: '0px', 
            fontFamily: 'monospace',
            animationDelay: `${index * 0.2}s`,
            animationFillMode: 'both'
          }}
        >
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            {getChoiceIcon(choice)}
            <span className="text-left text-xs sm:text-sm">{choice.text}</span>
            {choice.points && (
              <span className="ml-auto text-xs opacity-80">
                +{choice.points} 💕
              </span>
            )}
          </div>
        </Button>
      ))}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChoiceButtons;