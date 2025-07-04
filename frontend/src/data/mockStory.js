// Mock story data for the romantic visual novel
export const gameStory = {
  intro: {
    title: "A Chance Encounter",
    background: "https://images.unsplash.com/photo-1558790989-61a9108dc744?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzZXR0aW5nc3xlbnwwfHx8fDE3NTE2NDg1MTd8MA&ixlib=rb-4.1.0&q=85",
    dialogue: [
      {
        character: null,
        text: "Welcome to 'Hearts in Harmony' - a romantic visual novel about two souls who find each other through the magic of music and literature.",
        emotion: "neutral"
      },
      {
        character: null,
        text: "Our story begins at Sakura University, where a 21-year-old INFJ named Kai and an 18-year-old INFP named Luna are about to cross paths...",
        emotion: "neutral"
      },
      {
        character: "Kai",
        text: "Another quiet day at the university library. I prefer these peaceful moments when I can organize my thoughts and dive into my philosophy books.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Kai",
        text: "As an INFJ, I often find myself planning ahead, thinking about the deeper meanings behind everything. Today feels different though... like something significant is about to happen.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: null,
        text: "Suddenly, a soft melody drifts through the library. Someone is humming a beautiful tune near the poetry section.",
        emotion: "neutral"
      },
      {
        character: "Luna",
        text: "♪ La la la... ♪ Oh! I didn't realize anyone was here. Sorry, I tend to hum when I'm browsing through poetry collections. It just... feels right, you know?",
        emotion: "shy",
        position: "center"
      },
      {
        character: "Luna",
        text: "I'm Luna, by the way. I'm new here - just started this semester. I was looking for some inspiration for my creative writing class.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "I'm Kai. Your humming was actually quite beautiful - it reminded me of a piece by Debussy. Are you a music student?",
        emotion: "neutral",
        position: "center"
      },
      {
        character: "Luna",
        text: "Oh, you know Debussy? That's amazing! I'm actually studying literature, but music is my passion. I find that melodies help me understand emotions better than words sometimes.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "That's fascinating. As someone who thinks deeply about human nature and emotions, I find that music often captures what philosophy tries to explain.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: null,
        text: "Luna's eyes light up with genuine interest. There's something special about this connection...",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Ask Luna about her favorite poets and writers",
            type: "logical",
            points: 2,
            nextScene: "library_talk"
          },
          {
            id: 2,
            text: "Suggest you both explore the music section together",
            type: "romantic",
            points: 3,
            nextScene: "music_discovery"
          },
          {
            id: 3,
            text: "Share a personal insight about the connection between music and emotions",
            type: "thoughtful",
            points: 1,
            nextScene: "deep_conversation"
          }
        ]
      }
    ]
  },

  library_talk: {
    title: "Literary Souls",
    background: "https://images.unsplash.com/photo-1567480849447-0ec63ac72a22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxzY2hvb2wlMjBzZXR0aW5nc3xlbnwwfHx8fDE3NTE2NDg1MTd8MA&ixlib=rb-4.1.0&q=85",
    dialogue: [
      {
        character: "Kai",
        text: "I'd love to hear about your favorite poets. As someone who appreciates the depth of human expression, I'm always curious about what resonates with others.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "Oh, that's a wonderful question! I absolutely adore Rainer Maria Rilke. His way of capturing the beauty in solitude and the complexity of emotions speaks to my soul.",
        emotion: "dreamy",
        position: "center"
      },
      {
        character: "Luna",
        text: "There's this line from his Letters to a Young Poet: 'The only journey is the one within.' It perfectly captures how I feel about self-discovery and creativity.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "Rilke... yes, he understood the INFJ struggle of finding meaning in introspection. That quote resonates with me deeply. I often feel that external achievements mean little if we haven't understood ourselves first.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "Exactly! You really understand. Most people think I'm too dreamy or impractical, but you seem to appreciate the importance of inner reflection.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "I think dreamers are the ones who see possibilities others miss. Your INFP perspective probably brings a unique authenticity to your writing.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Luna",
        text: "How did you... wait, do you know about personality types? I'm indeed an INFP! Are you perhaps...?",
        emotion: "neutral",
        position: "center"
      },
      {
        character: "Kai",
        text: "INFJ, actually. I've always been fascinated by the way different personalities perceive and interact with the world. It's like we're both introverted idealists, but with different approaches.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "That's incredible! I've read that INFJs and INFPs often have this natural understanding of each other. We both value authenticity and meaningful connections.",
        emotion: "happy",
        position: "center"
      },
      {
        character: null,
        text: "The afternoon sun streams through the library windows, casting a warm glow over this unexpected but meaningful conversation.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Suggest meeting for coffee to continue this conversation",
            type: "romantic",
            points: 3,
            nextScene: "coffee_date"
          },
          {
            id: 2,
            text: "Ask if she'd like to study together sometime",
            type: "logical",
            points: 2,
            nextScene: "study_partners"
          },
          {
            id: 3,
            text: "Share more about your own writing and philosophical interests",
            type: "thoughtful",
            points: 2,
            nextScene: "intellectual_bond"
          }
        ]
      }
    ]
  },

  music_discovery: {
    title: "Harmonious Hearts",
    background: "https://images.unsplash.com/photo-1567480849447-0ec63ac72a22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxzY2hvb2wlMjBzZXR0aW5nc3xlbnwwfHx8fDE3NTE2NDg1MTd8MA&ixlib=rb-4.1.0&q=85",
    dialogue: [
      {
        character: "Kai",
        text: "Would you like to explore the music section together? I'd love to discover what other pieces inspire you.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Luna",
        text: "That sounds wonderful! I love how music can transport us to different emotional landscapes. It's like each piece tells a story without words.",
        emotion: "happy",
        position: "center"
      },
      {
        character: null,
        text: "You both move to the music section, where classical compositions and modern pieces line the shelves.",
        emotion: "neutral"
      },
      {
        character: "Luna",
        text: "Look at this! A collection of Chopin's nocturnes. His music always feels like he's painting emotions with sound. As an INFP, I find his romantic expressiveness deeply moving.",
        emotion: "dreamy",
        position: "center"
      },
      {
        character: "Kai",
        text: "Chopin's nocturnes... they're perfect for contemplation. I often listen to them when I'm journaling or planning my future. There's something about the way he balances melancholy with hope.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "You journal too? That's amazing! I keep a creative journal where I write down fragments of stories, song lyrics, and random thoughts. It's like my personal sanctuary.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "My journal is more structured - I use it to understand patterns in my thoughts and plan meaningful goals. But I love that we both see writing as a way to process our inner worlds.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "It's like we're both artists of the soul, just using different mediums. Your structured approach probably helps you achieve your vision, while my free-flowing style helps me stay true to my authentic self.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "That's beautifully put. I admire how you embrace spontaneity and authenticity. Sometimes I get so caught up in planning that I forget to simply... be.",
        emotion: "concerned",
        position: "center"
      },
      {
        character: "Luna",
        text: "And I admire your ability to create structure and meaning from chaos. Maybe we could learn from each other? I could use some of your organizational skills, and maybe you could use some of my... spontaneous creativity?",
        emotion: "shy",
        position: "center"
      },
      {
        character: null,
        text: "There's a beautiful moment of understanding between you both. The connection feels natural and profound.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Suggest listening to music together sometime",
            type: "romantic",
            points: 4,
            nextScene: "musical_bond"
          },
          {
            id: 2,
            text: "Propose a creative collaboration between your different styles",
            type: "thoughtful",
            points: 3,
            nextScene: "creative_partnership"
          },
          {
            id: 3,
            text: "Ask if she'd like to share her journal writings with you",
            type: "logical",
            points: 2,
            nextScene: "vulnerable_sharing"
          }
        ]
      }
    ]
  },

  coffee_date: {
    title: "Café Conversations",
    background: "https://images.pexels.com/photos/32824085/pexels-photo-32824085.jpeg",
    dialogue: [
      {
        character: null,
        text: "A few days later, you meet Luna at the cozy campus café. The evening sun casts a warm golden glow through the windows.",
        emotion: "neutral"
      },
      {
        character: "Luna",
        text: "This place is perfect! I love how the warm lighting makes everything feel like a painting. It's exactly the kind of atmosphere that sparks my creativity.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "I chose this spot because I thought you'd appreciate the aesthetic. I've been coming here for months to read and think, but it feels completely different with you here.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "Different how? I hope it's a good different! I sometimes worry that my enthusiasm might be overwhelming for more introspective people.",
        emotion: "shy",
        position: "center"
      },
      {
        character: "Kai",
        text: "It's wonderful different. Your energy brings life to spaces I usually experience in solitude. It's like you've added color to my black and white world.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Luna",
        text: "That's... that's one of the most beautiful things anyone has ever said to me. You have this way of making me feel seen and appreciated for who I truly am.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "I've been thinking about our conversation in the library. The way you described the connection between music and emotions - it's given me a new perspective on my own emotional processing.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "Really? How so? I'd love to hear your thoughts. Your analytical mind probably found patterns I never noticed.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "I realized I've been approaching emotions too intellectually. Your intuitive understanding has shown me that sometimes we need to feel first, then understand. It's quite revolutionary for an INFJ like me.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "And you've shown me that my scattered creative thoughts could benefit from some structure. Maybe that's why we connected so naturally - we complete each other's perspectives.",
        emotion: "dreamy",
        position: "center"
      },
      {
        character: null,
        text: "The conversation flows naturally as the evening deepens. You both realize this connection is becoming something special.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "Tell her you'd like to see her again soon",
            type: "romantic",
            points: 5,
            nextScene: "romantic_confession"
          },
          {
            id: 2,
            text: "Suggest exploring the city together to find more inspiring places",
            type: "thoughtful",
            points: 3,
            nextScene: "adventure_together"
          },
          {
            id: 3,
            text: "Ask about her dreams and future aspirations",
            type: "logical",
            points: 2,
            nextScene: "future_dreams"
          }
        ]
      }
    ]
  },

  romantic_confession: {
    title: "Hearts Unveiled",
    background: "https://images.pexels.com/photos/32829933/pexels-photo-32829933.jpeg",
    dialogue: [
      {
        character: "Kai",
        text: "Luna, I need to be honest with you. These past few days since we met... they've been the most meaningful I've had in a long time.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "Kai... I feel the same way. It's like I've been waiting my whole life for someone who understands both my dreams and my depth.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "I've always been cautious about opening my heart. As an INFJ, I tend to overthink and protect myself from potential disappointment. But with you... it feels safe to be vulnerable.",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "I know exactly what you mean. INFPs guard their hearts carefully too, but there's something about you that feels... right. Like coming home to a place I've never been before.",
        emotion: "dreamy",
        position: "center"
      },
      {
        character: "Kai",
        text: "I think... I think I'm falling in love with you, Luna. Not just with your beauty or your creativity, but with the way you see the world, the way you make me want to be a better version of myself.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Luna",
        text: "Kai... I love you too. I love your thoughtfulness, your depth, the way you make me feel like my dreams are valid and important. You see me for who I really am.",
        emotion: "happy",
        position: "center"
      },
      {
        character: null,
        text: "Under the soft glow of the evening light, you both step closer to each other. The world seems to fade away, leaving only this perfect moment.",
        emotion: "neutral"
      },
      {
        character: "Kai",
        text: "May I... may I kiss you?",
        emotion: "thoughtful",
        position: "center"
      },
      {
        character: "Luna",
        text: "I've been hoping you would ask...",
        emotion: "happy",
        position: "center"
      },
      {
        character: null,
        text: "Your first kiss is gentle, sweet, and filled with the promise of a beautiful love story that's just beginning. As you pull apart, both of you are smiling with tears of joy in your eyes.",
        emotion: "neutral"
      },
      {
        character: "Luna",
        text: "This feels like the beginning of our greatest adventure together.",
        emotion: "happy",
        position: "center"
      },
      {
        character: "Kai",
        text: "Indeed it does. With you by my side, I feel like I can face anything and become the person I've always dreamed of being.",
        emotion: "happy",
        position: "center"
      },
      {
        character: null,
        text: "Congratulations! You've unlocked the 'Perfect Love' ending. Kai and Luna's deep understanding and mutual respect have blossomed into a beautiful, lasting romance. Their complementary personalities - his planning and her spontaneity, his structure and her creativity - create a perfect balance that will carry them through life's adventures together.",
        emotion: "neutral"
      }
    ]
  }
};

export default gameStory;