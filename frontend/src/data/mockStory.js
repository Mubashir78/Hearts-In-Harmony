// Mock story data for the pixel-art romantic visual novel with narrator
export const gameStory = {
  intro: {
    title: "New Beginnings",
    location: "dorm_room",
    dialogue: [
      {
        character: "Narrator",
        text: "Welcome to Sakura University, where hearts find their rhythm and souls discover harmony...",
        emotion: "neutral"
      },
      {
        character: "Narrator", 
        text: "Our story follows Mobi, a thoughtful 21-year-old INFJ who believes in planning every detail of life, and the universe's plan to introduce him to someone unexpected...",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "First day at this new university. I should probably explore the campus systematically and get familiar with the different locations.",
        emotion: "thoughtful"
      },
      {
        character: "Narrator",
        text: "As Mobi stands in his neatly organized dorm room, little does he know that today will challenge everything he thinks he knows about spontaneity and love.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "Let me check the campus map and decide where to go first. A structured approach always works best.",
        emotion: "thoughtful"
      },
      {
        character: "Narrator",
        text: "The campus map gleams before him, each location holding the potential for a life-changing encounter. Where will fate guide our analytical hero first?",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "📚 Visit the Library",
            type: "logical",
            points: 1,
            nextLocation: "library"
          },
          {
            id: 2,
            text: "☕ Go to the Café", 
            type: "social",
            points: 1,
            nextLocation: "cafe"
          },
          {
            id: 3,
            text: "🌸 Explore the Garden",
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
        character: "Narrator",
        text: "The library welcomes Mobi with its familiar scent of aged paper and whispered knowledge. Sunlight filters through tall windows, casting geometric patterns on the floor.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "Perfect. This peaceful atmosphere is exactly what I need for deep thinking and reflection.",
        emotion: "thoughtful"
      },
      {
        character: "Narrator",
        text: "But as Mobi browses through the philosophy section, a gentle melody drifts through the silence—someone is humming near the poetry aisle, their voice like a musical secret waiting to be discovered.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "♪ La la la... ♪ Oh! I'm so sorry! I didn't realize anyone else was here. I always hum when I'm reading poetry—it just feels... right, you know?",
        emotion: "shy"
      },
      {
        character: "Narrator",
        text: "And there she stands—Roshi, an 18-year-old INFP with eyes that seem to hold entire universes of creativity. Her genuine embarrassment only makes her more endearing.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "I'm Roshi, by the way. I'm new here too—just started this semester. Are you also a literature student? You have that thoughtful aura about you.",
        emotion: "happy"
      },
      {
        character: "Mobi",
        text: "I'm Mobi. Actually, I study philosophy, but I deeply appreciate good literature. Your humming was quite beautiful—it reminded me of Debussy's gentle compositions.",
        emotion: "neutral"
      },
      {
        character: "Narrator",
        text: "A spark of recognition passes between them—two souls who understand that beauty exists in unexpected moments and that deep thoughts deserve musical accompaniment.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "You know Debussy? That's amazing! I love how music and literature connect on such a profound level. They both express what words alone sometimes cannot.",
        emotion: "happy"
      },
      {
        character: "Narrator",
        text: "The air between them shimmers with possibility. What path will Mobi choose to deepen this unexpected connection?",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "💭 Ask about her favorite poets and writers",
            type: "logical",
            points: 2,
            nextScene: "library_talk"
          },
          {
            id: 2,
            text: "🗺️ Suggest exploring campus together",
            type: "romantic",
            points: 3,
            nextScene: "together_exploration"
          },
          {
            id: 3,
            text: "🧠 Share your philosophical insights",
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
        character: "Narrator",
        text: "The campus café wraps around Mobi like a warm embrace, filled with the rich aroma of coffee and the gentle murmur of student conversations.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "This atmosphere is perfect for contemplation. The soft lighting and comfortable seating create an ideal environment for both studying and meaningful conversations.",
        emotion: "thoughtful"
      },
      {
        character: "Narrator",
        text: "As Mobi surveys the space, his analytical gaze falls upon a girl sitting alone at a corner table. She's writing in what appears to be a journal, her expression dreamy and focused, as if channeling inspiration from another realm.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "She seems completely absorbed in her creative world. I wonder if I should approach her or respect her artistic solitude?",
        emotion: "thoughtful"
      },
      {
        character: "Narrator",
        text: "At that moment, the girl—Roshi—looks up from her writing. Their eyes meet across the café, and she offers a shy smile that seems to light up the entire room before returning to her journal.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "😊 Approach and introduce yourself",
            type: "social",
            points: 2,
            nextScene: "cafe_meeting"
          },
          {
            id: 2,
            text: "⏰ Order a drink and wait patiently",
            type: "thoughtful",
            points: 1,
            nextScene: "patient_approach"
          },
          {
            id: 3,
            text: "🚪 Give her space and explore elsewhere",
            type: "logical",
            points: 0,
            nextLocation: "map"
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
        character: "Narrator",
        text: "Something magical happens when two compatible souls decide to explore the world together—the ordinary becomes extraordinary, and every path holds new possibilities.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "Would you like to explore the campus together? I'm still getting familiar with all the locations myself, and I'd appreciate the company.",
        emotion: "happy"
      },
      {
        character: "Roshi",
        text: "That sounds absolutely wonderful! I love discovering new places, especially with someone who appreciates both planning and spontaneity.",
        emotion: "happy"
      },
      {
        character: "Narrator",
        text: "As they stand together looking at the campus map, Mobi marvels at how natural it feels to be spontaneous with Roshi, while she finds comfort in his thoughtful approach to exploration.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "I appreciate how open you are to new experiences. As an INFJ, I usually prefer planned activities, but exploring with you feels... right.",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "And I love that you're willing to be spontaneous with me! Having someone thoughtful like you makes me feel more confident about following my heart.",
        emotion: "happy"
      },
      {
        character: "Narrator",
        text: "The campus map spreads before them like a canvas of possibilities. Each location promises new discoveries about themselves and each other. Where will their journey take them next?",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "☕ Visit the Café for intimate conversation",
            type: "romantic",
            points: 3,
            nextLocation: "cafe"
          },
          {
            id: 2,
            text: "🌸 Explore the Garden's natural beauty",
            type: "thoughtful",
            points: 2,
            nextLocation: "garden"
          },
          {
            id: 3,
            text: "🎵 Discover the Music Room together",
            type: "creative",
            points: 4,
            nextLocation: "music_room"
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
        character: "Narrator",
        text: "The music room welcomes them with instruments that seem to hum with potential melodies. Sunlight streams through windows, creating a natural spotlight on the grand piano.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "Oh wow, they have a beautiful piano! I've been longing to play again. Would you mind if I played something? Music always helps me express what words cannot.",
        emotion: "happy"
      },
      {
        character: "Mobi",
        text: "Please do! I'd be honored to hear you play. Music has always helped me think more clearly and feel more deeply.",
        emotion: "happy"
      },
      {
        character: "Narrator",
        text: "Roshi's fingers dance across the keys like they're painting emotions in sound. The melody that emerges is gentle yet profound—a musical embodiment of finding someone special.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "♪ *plays a gentle, romantic melody* ♪ This piece always reminds me of the moment when two souls recognize each other...",
        emotion: "dreamy"
      },
      {
        character: "Narrator",
        text: "The music fills the room with a warmth that seems to wrap around both their hearts, creating a perfect moment where time seems to pause just for them.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "That was absolutely beautiful, Roshi. The way you express emotion through music is incredible—it's like you're speaking directly to the soul.",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "Thank you, Mobi. You know, I think I understand now why I chose that particular piece... it's because of how I feel when I'm with you.",
        emotion: "shy"
      },
      {
        character: "Narrator",
        text: "In this moment, surrounded by instruments that create harmony, their hearts begin to recognize the perfect harmony they create together—different notes that form a beautiful chord.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "💕 Tell her how you truly feel",
            type: "romantic",
            points: 5,
            nextScene: "romantic_confession"
          },
          {
            id: 2,
            text: "🎼 Suggest creating music together regularly",
            type: "thoughtful",
            points: 3,
            nextScene: "musical_partnership"
          },
          {
            id: 3,
            text: "🎹 Ask about her musical journey",
            type: "logical",
            points: 2,
            nextScene: "musical_discussion"
          }
        ]
      }
    ]
  },

  romantic_confession: {
    title: "Hearts in Perfect Harmony",
    location: "music_room",
    dialogue: [
      {
        character: "Narrator",
        text: "Some moments in life feel like they've been orchestrated by the universe itself—this is one of those moments, where honesty and vulnerability create the most beautiful music of all.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "Roshi, I need to tell you something important. Since we met, you've brought color and spontaneous joy into my carefully planned world in the most wonderful way.",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "Mobi... I feel the same way. You've given me the stability and understanding I never knew I needed. You make me feel like my dreams are not just valid, but beautiful.",
        emotion: "happy"
      },
      {
        character: "Narrator",
        text: "The piano seems to hum softly in the background, as if the entire room is holding its breath for this perfect moment of mutual recognition.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "I think... I think I'm falling in love with you. Not just with your creativity and your music, but with how you see the world, how you make me want to embrace spontaneity.",
        emotion: "happy"
      },
      {
        character: "Roshi",
        text: "I love you too, Mobi. You've shown me that having structure doesn't mean losing authenticity. You see the real me and help me believe in myself.",
        emotion: "happy"
      },
      {
        character: "Narrator",
        text: "In the quiet music room, surrounded by instruments that create harmony from different notes, they realize they've found their perfect harmony—two different melodies that create something more beautiful together than either could alone.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "We're like two different musical notes that create a beautiful chord when played together—complementary, not identical.",
        emotion: "happy"
      },
      {
        character: "Roshi",
        text: "That's the most beautiful metaphor ever! Yes, we're like a perfect harmony—different but complementary, creating something magical together.",
        emotion: "dreamy"
      },
      {
        character: "Narrator",
        text: "And so begins a love story written in the language of understanding, painted in the colors of complementary differences, and set to the music of two hearts beating in perfect harmony. Congratulations on discovering that the most beautiful relationships are built not on sameness, but on the magical balance of different strengths coming together.",
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
    description: "Quiet sanctuary of knowledge",
    available: true,
    pixelColor: "#5B7EC8"
  },
  cafe: {
    name: "Café",
    description: "Warm space for conversation",
    available: true,
    pixelColor: "#7B68EE"
  },
  garden: {
    name: "Garden",
    description: "Peaceful natural retreat",
    available: true,
    pixelColor: "#9370DB"
  },
  music_room: {
    name: "Music Room",
    description: "Where melodies come alive",
    available: false,
    pixelColor: "#FF69B4"
  }
};

export default gameStory;