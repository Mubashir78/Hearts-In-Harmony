import React from 'react';

const CharacterSprite = ({ character, emotion, position }) => {
  const getCharacterImage = (character) => {
    const characters = {
      'Kai': {
        neutral: 'https://images.pexels.com/photos/32763798/pexels-photo-32763798.jpeg',
        happy: 'https://images.pexels.com/photos/32763798/pexels-photo-32763798.jpeg',
        thoughtful: 'https://images.pexels.com/photos/32763798/pexels-photo-32763798.jpeg',
        concerned: 'https://images.pexels.com/photos/32763798/pexels-photo-32763798.jpeg'
      },
      'Luna': {
        neutral: 'https://images.pexels.com/photos/29803009/pexels-photo-29803009.jpeg',
        happy: 'https://images.pexels.com/photos/29803009/pexels-photo-29803009.jpeg',
        shy: 'https://images.pexels.com/photos/29803009/pexels-photo-29803009.jpeg',
        dreamy: 'https://images.pexels.com/photos/32068676/pexels-photo-32068676.png'
      }
    };

    return characters[character]?.[emotion] || characters[character]?.neutral;
  };

  const getPositionClass = (position) => {
    switch (position) {
      case 'left':
        return 'transform -translate-x-1/4';
      case 'right':
        return 'transform translate-x-1/4';
      case 'center':
      default:
        return 'transform translate-x-0';
    }
  };

  const imageUrl = getCharacterImage(character);

  return (
    <div className={`transition-all duration-500 ${getPositionClass(position)}`}>
      <div className="relative">
        <img
          src={imageUrl}
          alt={`${character} - ${emotion}`}
          className="w-80 h-96 object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
            objectPosition: 'center top'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent rounded-lg" />
      </div>
    </div>
  );
};

export default CharacterSprite;