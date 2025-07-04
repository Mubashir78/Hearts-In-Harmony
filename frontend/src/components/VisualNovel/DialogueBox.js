import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

const DialogueBox = ({ character, text, onNext, isVisible }) => {
  if (!isVisible) return null;

  const getCharacterColor = () => {
    if (character === 'Mobi') return 'bg-blue-500';
    if (character === 'Roshi') return 'bg-pink-500';
    return 'bg-purple-500';
  };

  const getCharacterEmoji = () => {
    if (character === 'Mobi') return '🧑‍🎓';
    if (character === 'Roshi') return '👩‍🎨';
    return '💭';
  };

  return (
    <Card className="mx-4 mb-4 bg-white border-4 border-black text-black" style={{
      borderRadius: '0px',
      boxShadow: '6px 6px 0px #000'
    }}>
      <div className="p-6">
        {character && (
          <div className="flex items-center mb-3">
            <div className={`w-12 h-12 ${getCharacterColor()} border-2 border-black flex items-center justify-center text-white font-bold text-lg mr-3`}
                 style={{ borderRadius: '0px' }}>
              {getCharacterEmoji()}
            </div>
            <h3 className="text-lg font-bold text-black" style={{ fontFamily: 'monospace' }}>
              {character}
            </h3>
          </div>
        )}
        <p className="text-black leading-relaxed mb-4 text-base" style={{ fontFamily: 'monospace' }}>
          {text}
        </p>
        <div className="flex justify-end">
          <Button
            onClick={onNext}
            className="bg-gray-700 hover:bg-gray-800 text-white border-2 border-black"
            style={{ borderRadius: '0px' }}
          >
            Continue
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DialogueBox;