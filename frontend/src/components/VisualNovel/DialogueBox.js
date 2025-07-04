import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

const DialogueBox = ({ character, text, onNext, isVisible }) => {
  if (!isVisible) return null;

  return (
    <Card className="mx-4 mb-4 bg-black/80 border-white/20 text-white backdrop-blur-sm">
      <div className="p-6">
        {character && (
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg mr-3">
              {character.charAt(0).toUpperCase()}
            </div>
            <h3 className="text-lg font-semibold text-purple-300">{character}</h3>
          </div>
        )}
        <p className="text-white leading-relaxed mb-4 text-base">
          {text}
        </p>
        <div className="flex justify-end">
          <Button
            onClick={onNext}
            variant="outline"
            className="bg-purple-600/20 border-purple-400/30 text-purple-300 hover:bg-purple-600/40 hover:text-white transition-all duration-200"
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