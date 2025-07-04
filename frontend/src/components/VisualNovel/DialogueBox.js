import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

const DialogueBox = ({ character, text, onNext, isVisible, pause }) => {
  if (!isVisible) return null;

  const getCharacterColor = () => {
    if (character === 'Mobi') return 'bg-blue-600';
    if (character === 'Roshi') return 'bg-pink-600';
    if (character === 'Narrator') return 'bg-gray-500'; // Changed to grayish hue
    return 'bg-gray-600';
  };

  const getCharacterEmoji = () => {
    if (character === 'Mobi') return '🤓'; // More introverted emoji
    if (character === 'Roshi') return '🌸'; // Gentle, creative emoji
    if (character === 'Narrator') return '👁️'; // Observer emoji
    return '💭';
  };

  const getBoxColor = () => {
    if (character === 'Mobi') return 'border-blue-400';
    if (character === 'Roshi') return 'border-pink-400';
    if (character === 'Narrator') return 'border-gray-400'; // Changed to grayish
    return 'border-gray-400';
  };

  const getTextStyle = () => {
    if (character === 'Narrator') {
      return {
        fontStyle: 'italic',
        color: '#d1d5db', // Lighter gray for narrator text
        fontSize: '0.95em'
      };
    }
    return {};
  };

  return (
    <Card className={`mx-2 sm:mx-4 mb-2 sm:mb-4 bg-gray-900 border-4 ${getBoxColor()} text-white transform hover:scale-[1.02] transition-all duration-200 animate-slideUp`} style={{
      borderRadius: '0px',
      boxShadow: '6px 6px 0px rgba(0,0,0,0.5)',
      animation: 'slideUp 0.3s ease-out'
    }}>
      <div className="p-3 sm:p-6">
        {character && (
          <div className="flex items-center mb-2 sm:mb-3">
            <div className={`w-8 h-8 sm:w-12 sm:h-12 ${getCharacterColor()} border-2 border-white flex items-center justify-center text-white font-bold text-sm sm:text-lg mr-2 sm:mr-3 transform hover:rotate-6 transition-transform duration-200`}
                 style={{ borderRadius: '0px' }}>
              {getCharacterEmoji()}
            </div>
            <h3 className="text-sm sm:text-lg font-bold text-white" style={{ fontFamily: 'monospace' }}>
              {character}
            </h3>
          </div>
        )}
        <p className="text-white leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base" style={{ 
          fontFamily: 'monospace',
          ...getTextStyle(),
          animation: character === 'Narrator' ? 'typewriter 1.5s ease-in-out' : 'none'
        }}>
          {text}
        </p>
        <div className="flex justify-end">
          <Button
            onClick={onNext}
            className="bg-gray-700 hover:bg-gray-600 text-white border-2 border-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-200 text-xs sm:text-sm"
            style={{ borderRadius: '0px', fontFamily: 'monospace' }}
          >
            {pause && pause > 2000 ? '💭 Continue' : 'Continue'}
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes typewriter {
          from {
            opacity: 0;
            transform: translateX(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </Card>
  );
};

export default DialogueBox;