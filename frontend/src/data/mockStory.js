// Mock story data for the pixel-art romantic visual novel
export const gameStory = {
  intro: {
    title: "New Beginnings",
    location: "dorm_room",
    dialogue: [
      {
        character: null,
        text: "Welcome to 'Hearts in Harmony' - a pixel-art romantic adventure about two souls finding each other.",
        emotion: "neutral"
      },
      {
        character: null,
        text: "You are Mobi, a 21-year-old INFJ who just moved to Sakura University. Your journey begins in your dorm room...",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "First day at a new university. I should probably explore the campus and get familiar with the different locations.",
        emotion: "thoughtful"
      },
      {
        character: "Mobi",
        text: "As an INFJ, I tend to plan everything carefully. Let me check out the campus map and decide where to go first.",
        emotion: "thoughtful"
      },
      {
        character: null,
        text: "You can now explore different locations on campus. Each location might have different people and events!",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Visit the Library",
            type: "logical",
            points: 1,
            nextLocation: "library"
          },
          {
            id: 2,
            text: "Go to the Café",
            type: "social",
            points: 1,
            nextLocation: "cafe"
          },
          {
            id: 3,
            text: "Explore the Garden",
            type: "thoughtful",
            points: 1,
            nextLocation: "garden"
          }
        ]
      }
    ]
  },

  library_first_visit: {
    title: "The Quiet Library",
    location: "library",
    dialogue: [
      {
        character: "Mobi",
        text: "The library is peaceful and quiet. Perfect for someone like me who enjoys contemplation and deep thinking.",
        emotion: "thoughtful"
      },
      {
        character: null,
        text: "As you browse through the philosophy section, you hear a soft humming coming from the poetry aisle.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "♪ La la la... ♪ Oh! I didn't notice anyone else here. Sorry, I tend to hum when I'm reading poetry.",
        emotion: "shy"
      },
      {
        character: "Roshi",
        text: "I'm Roshi, by the way. I'm new here too - just started this semester. Are you also a literature student?",
        emotion: "happy"
      },
      {
        character: "Mobi",
        text: "I'm Mobi. Actually, I study philosophy, but I appreciate good literature. Your humming was quite beautiful - it reminded me of a classical piece.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "Really? That's so sweet! I love how music and literature connect. They both express emotions in their own unique ways.",
        emotion: "happy"
      },
      {
        character: null,
        text: "You feel a connection forming with this creative girl. What do you do next?",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Ask about her favorite poets",
            type: "logical",
            points: 2,
            nextScene: "library_talk"
          },
          {
            id: 2,
            text: "Suggest exploring other locations together",
            type: "romantic",
            points: 3,
            nextScene: "together_exploration"
          },
          {
            id: 3,
            text: "Share your philosophical interests",
            type: "thoughtful",
            points: 1,
            nextScene: "intellectual_bond"
          }
        ]
      }
    ]
  },

  cafe_first_visit: {
    title: "The Cozy Café",
    location: "cafe",
    dialogue: [
      {
        character: "Mobi",
        text: "This café has a warm, welcoming atmosphere. The soft lighting and comfortable seating make it perfect for studying or quiet conversations.",
        emotion: "thoughtful"
      },
      {
        character: null,
        text: "You notice a girl sitting alone at a corner table, writing in what appears to be a journal. She has a gentle, dreamy expression.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "She looks like she's in her own creative world. I wonder if I should approach her or give her space to write?",
        emotion: "thoughtful"
      },
      {
        character: null,
        text: "The girl looks up and catches your eye, smiling shyly before returning to her writing.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Approach and introduce yourself",
            type: "social",
            points: 2,
            nextScene: "cafe_meeting"
          },
          {
            id: 2,
            text: "Order a drink and wait to see if she initiates contact",
            type: "thoughtful",
            points: 1,
            nextScene: "patient_approach"
          },
          {
            id: 3,
            text: "Leave her to her writing and explore other locations",
            type: "logical",
            points: 0,
            nextLocation: "map"
          }
        ]
      }
    ]
  },

  garden_first_visit: {
    title: "The Peaceful Garden",
    location: "garden",
    dialogue: [
      {
        character: "Mobi",
        text: "This garden is beautiful and serene. The perfect place for reflection and finding inner peace.",
        emotion: "thoughtful"
      },
      {
        character: null,
        text: "You walk along the stone path, enjoying the quiet rustling of leaves and the gentle breeze.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "Sometimes solitude is exactly what an INFJ needs. But I should probably meet some people too, since I'm new here.",
        emotion: "thoughtful"
      },
      {
        character: null,
        text: "You can continue exploring or head back to choose another location.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Stay and meditate in the garden",
            type: "thoughtful",
            points: 1,
            nextScene: "garden_meditation"
          },
          {
            id: 2,
            text: "Visit the Library",
            type: "logical",
            points: 0,
            nextLocation: "library"
          },
          {
            id: 3,
            text: "Go to the Café",
            type: "social",
            points: 0,
            nextLocation: "cafe"
          }
        ]
      }
    ]
  },

  together_exploration: {
    title: "Exploring Together",
    location: "map",
    dialogue: [
      {
        character: "Mobi",
        text: "Would you like to explore the campus together? I'm still getting familiar with all the locations myself.",
        emotion: "happy"
      },
      {
        character: "Roshi",
        text: "That sounds wonderful! I love discovering new places. Where should we go first?",
        emotion: "happy"
      },
      {
        character: "Mobi",
        text: "I appreciate how open you are to new experiences. As an INFJ, I usually prefer planned activities, but spontaneous exploration with you sounds appealing.",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "And I love that you're willing to be spontaneous with me! As an INFP, I usually follow my heart, but having someone thoughtful like you makes me feel more confident.",
        emotion: "happy"
      },
      {
        character: null,
        text: "You both stand looking at the campus map together. Where would you like to go?",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Visit the Café for a cozy chat",
            type: "romantic",
            points: 3,
            nextLocation: "cafe"
          },
          {
            id: 2,
            text: "Explore the Garden together",
            type: "thoughtful",
            points: 2,
            nextLocation: "garden"
          },
          {
            id: 3,
            text: "Check out the Music Room",
            type: "creative",
            points: 4,
            nextLocation: "music_room"
          }
        ]
      }
    ]
  },

  cafe_meeting: {
    title: "A Chance Encounter",
    location: "cafe",
    dialogue: [
      {
        character: "Mobi",
        text: "Hi, I'm Mobi. I hope I'm not interrupting your writing. I'm new here and thought I'd introduce myself.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "Oh, not at all! I'm Roshi. I was just writing in my journal about first impressions of this place. Please, sit down!",
        emotion: "happy"
      },
      {
        character: "Mobi",
        text: "A journal? That's wonderful. I keep one too, though mine is more structured - I use it to understand my thoughts and plan my goals.",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "That's so organized! Mine is more free-flowing - random thoughts, poetry fragments, and dreams. I love that we both journal though!",
        emotion: "happy"
      },
      {
        character: "Mobi",
        text: "It's fascinating how we both process our inner worlds through writing, but in such different ways. Your creative approach complements my analytical one.",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "Exactly! You're so thoughtful about everything. I feel like I could learn a lot from your structured approach to life.",
        emotion: "happy"
      },
      {
        character: null,
        text: "The conversation flows naturally. You both realize you have a special connection.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Ask if she'd like to explore campus together",
            type: "romantic",
            points: 4,
            nextScene: "together_exploration"
          },
          {
            id: 2,
            text: "Suggest meeting here regularly to write together",
            type: "thoughtful",
            points: 2,
            nextScene: "study_partnership"
          },
          {
            id: 3,
            text: "Share more about your philosophical interests",
            type: "logical",
            points: 1,
            nextScene: "intellectual_bond"
          }
        ]
      }
    ]
  },

  music_room_visit: {
    title: "The Music Room",
    location: "music_room",
    dialogue: [
      {
        character: "Roshi",
        text: "Oh wow, they have a piano! I've been wanting to play again. Do you mind if I play something?",
        emotion: "happy"
      },
      {
        character: "Mobi",
        text: "Please do! I'd love to hear you play. Music has always helped me think more clearly.",
        emotion: "happy"
      },
      {
        character: "Roshi",
        text: "♪ *plays a gentle, romantic melody* ♪ This piece always reminds me of finding someone special...",
        emotion: "dreamy"
      },
      {
        character: "Mobi",
        text: "That was beautiful, Roshi. The way you express emotion through music is incredible. It's like you're speaking directly to the soul.",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "Thank you, Mobi. You know, I think I understand why I played that particular piece... it's because of how I feel when I'm with you.",
        emotion: "shy"
      },
      {
        character: "Mobi",
        text: "I feel the same way. There's something special about our connection - the way we complement each other's strengths.",
        emotion: "happy"
      },
      {
        character: null,
        text: "This moment feels perfect. The music room has become a place where your hearts truly connect.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Tell her how you feel about her",
            type: "romantic",
            points: 5,
            nextScene: "romantic_confession"
          },
          {
            id: 2,
            text: "Suggest making music together regularly",
            type: "thoughtful",
            points: 3,
            nextScene: "musical_partnership"
          },
          {
            id: 3,
            text: "Ask about her musical background",
            type: "logical",
            points: 2,
            nextScene: "musical_discussion"
          }
        ]
      }
    ]
  },

  romantic_confession: {
    title: "Hearts in Harmony",
    location: "music_room",
    dialogue: [
      {
        character: "Mobi",
        text: "Roshi, I need to tell you something. Since we met, you've brought color and music into my carefully planned world.",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "Mobi... you've given me the stability and understanding I never knew I needed. You make me feel like my dreams are valid.",
        emotion: "happy"
      },
      {
        character: "Mobi",
        text: "I think... I think I'm falling in love with you. Not just with your creativity, but with how you see the world, how you make me want to be more spontaneous.",
        emotion: "happy"
      },
      {
        character: "Roshi",
        text: "I love you too, Mobi. You've shown me that having structure doesn't mean losing authenticity. You see the real me and appreciate it.",
        emotion: "happy"
      },
      {
        character: null,
        text: "In the quiet music room, surrounded by instruments that create harmony, you both realize you've found your perfect harmony together.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "Like two different notes that create a beautiful chord when played together.",
        emotion: "happy"
      },
      {
        character: "Roshi",
        text: "That's the most beautiful metaphor ever. Yes, we're like a perfect harmony - different but complementary.",
        emotion: "dreamy"
      },
      {
        character: null,
        text: "Congratulations! You've unlocked the 'Perfect Harmony' ending. Mobi and Roshi's love story shows how two different personality types can create something beautiful together - his planning and her spontaneity, his structure and her creativity, combining to create a lasting and meaningful relationship.",
        emotion: "neutral"
      }
    ]
  }
};

// Location data for the map system
export const locations = {
  dorm_room: {
    name: "Dorm Room",
    description: "Your cozy personal space",
    available: true,
    pixelColor: "#4A90E2"
  },
  library: {
    name: "Library",
    description: "A quiet place for reading and study",
    available: true,
    pixelColor: "#5B7EC8"
  },
  cafe: {
    name: "Café",
    description: "Warm and welcoming with great coffee",
    available: true,
    pixelColor: "#7B68EE"
  },
  garden: {
    name: "Garden",
    description: "Peaceful outdoor space with beautiful flowers",
    available: true,
    pixelColor: "#9370DB"
  },
  music_room: {
    name: "Music Room",
    description: "Filled with instruments and musical inspiration",
    available: false,
    pixelColor: "#FF69B4"
  }
};

export default gameStory;