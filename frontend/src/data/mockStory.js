// Linear romantic story for introverted INFJ and INFP characters
export const gameStory = {
  intro: {
    title: "A Shy Beginning",
    location: "library",
    background: "library",
    dialogue: [
      {
        character: "Narrator",
        text: "In the quiet corner of Sakura University's library, two introverted souls are about to cross paths...",
        emotion: "neutral",
        pause: 2000
      },
      {
        character: "Mobi",
        text: "*nervously adjusting his books* Okay Mobi, you can do this. Just find a quiet spot, organize your study schedule, and avoid... people.",
        emotion: "nervous"
      },
      {
        character: "Narrator",
        text: "Mobi, being the analytical INFJ he is, has mapped out the entire library's layout to find the most isolated study spot.",
        emotion: "neutral",
        pause: 1500
      },
      {
        character: "Roshi",
        text: "*humming softly while completely lost in a poetry book* ♪ hmm hmm ♪ Oh! *drops her book* No no no...",
        emotion: "flustered"
      },
      {
        character: "Narrator",
        text: "Roshi, lost in her creative world, accidentally knocked over a small stack of books. Numbers and organization aren't exactly her strong suit.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "*internally panicking but trying to help* Um... excuse me... you dropped... *voice gets quieter* ...your book.",
        emotion: "shy"
      },
      {
        character: "Roshi",
        text: "*blushing furiously* Oh gosh, I'm so sorry! I was just... the poetry was so beautiful I forgot where I was and... *rambling nervously*",
        emotion: "embarrassed"
      },
      {
        character: "Narrator",
        text: "Two introverts meeting for the first time - a recipe for adorable awkwardness.",
        emotion: "neutral",
        pause: 2000,
        choices: [
          {
            id: 1,
            text: "*Help her pick up the books*",
            type: "helpful",
            points: 1,
            nextScene: "helping_moment"
          },
          {
            id: 2,
            text: "*Compliment her humming*",
            type: "romantic",
            points: 1,
            nextScene: "helping_moment"
          },
          {
            id: 3,
            text: "*Awkwardly stand there*",
            type: "shy",
            points: 1,
            nextScene: "helping_moment"
          }
        ]
      }
    ]
  },

  helping_moment: {
    title: "Shared Awkwardness",
    location: "library",
    background: "library",
    dialogue: [
      {
        character: "Mobi",
        text: "*bending down to help* It's... it's okay. I drop things too. Well, not books usually, but... *trails off*",
        emotion: "helpful"
      },
      {
        character: "Roshi",
        text: "*trying to organize the books but clearly struggling* I'm terrible with... um... counting things. Is this 3 books or 4? Math and I don't get along.",
        emotion: "confused"
      },
      {
        character: "Narrator",
        text: "Mobi's INFJ brain immediately wants to organize everything properly, while Roshi's INFP mind is more focused on the emotional moment.",
        emotion: "neutral"
      },
      {
        character: "Mobi",
        text: "*gently* There are 4 books. Here, let me... *carefully arranges them* I'm Mobi, by the way. *barely audible*",
        emotion: "thoughtful"
      },
      {
        character: "Roshi",
        text: "Mobi... that's a lovely name. I'm Roshi. *pause* Thank you for helping me. Most people just stare when I mess up with numbers.",
        emotion: "grateful"
      },
      {
        character: "Narrator",
        text: "A moment of comfortable silence passes between them, both too shy to make the next move but not wanting to leave.",
        emotion: "neutral",
        pause: 3000
      },
      {
        character: "Mobi",
        text: "*gathering courage* Your humming earlier... it was really beautiful. Like... like a gentle melody that made the library feel less... overwhelming.",
        emotion: "shy"
      },
      {
        character: "Roshi",
        text: "*eyes lighting up* You... you noticed? I thought I was being too loud. I hum when I read poetry - it helps me feel the emotions better.",
        emotion: "happy"
      },
      {
        character: "Narrator",
        text: "Their conversation flows more naturally now, two kindred spirits recognizing something special in each other.",
        emotion: "neutral",
        choices: [
          {
            id: 1,
            text: "*Ask about her favorite poetry*",
            type: "curious",
            points: 1,
            nextScene: "poetry_moment"
          },
          {
            id: 2,
            text: "*Share your love for quiet spaces*",
            type: "thoughtful", 
            points: 1,
            nextScene: "poetry_moment"
          },
          {
            id: 3,
            text: "*Suggest moving to a quieter spot*",
            type: "practical",
            points: 1,
            nextScene: "poetry_moment"
          }
        ]
      }
    ]
  },

  poetry_moment: {
    title: "Finding Connection",
    location: "library_corner",
    background: "library_corner",
    dialogue: [
      {
        character: "Narrator",
        text: "They've found a cozy corner of the library, surrounded by warm lamplight and the gentle rustling of pages.",
        emotion: "neutral",
        pause: 2000
      },
      {
        character: "Roshi",
        text: "I love this poem by Rilke... *opens book nervously* 'The only journey is the one within.' It speaks to my INFP soul, you know?",
        emotion: "passionate"
      },
      {
        character: "Mobi",
        text: "*surprised* You know about personality types? I'm an INFJ myself. I've always felt like... like I see the world differently.",
        emotion: "excited"
      },
      {
        character: "Roshi",
        text: "*getting animated* Really?! That's amazing! We're like... like complementary puzzle pieces! INFJs and INFPs understand each other so well!",
        emotion: "enthusiastic"
      },
      {
        character: "Narrator",
        text: "In her excitement, Roshi accidentally knocks over Mobi's perfectly organized stack of philosophy books.",
        emotion: "neutral"
      },
      {
        character: "Roshi",
        text: "*mortified* Oh no! Your perfect stack! I'm so sorry, I get excited and forget about... spatial awareness... and gravity...",
        emotion: "apologetic"
      },
      {
        character: "Mobi",
        text: "*surprisingly calm* It's... it's actually okay. *small smile* Seeing your passion for poetry is worth a little chaos in my organization system.",
        emotion: "understanding"
      },
      {
        character: "Narrator",
        text: "This moment marks a shift - Mobi realizing that maybe spontaneity isn't so scary when it comes from someone genuine.",
        emotion: "neutral",
        pause: 2500
      },
      {
        character: "Roshi",
        text: "*touched* You're not... you're not annoyed? Most people get frustrated when I'm clumsy with their organized things.",
        emotion: "vulnerable"
      },
      {
        character: "Mobi",
        text: "*softly* Your authenticity is more beautiful than any perfect arrangement could ever be.",
        emotion: "sincere"
      },
      {
        character: "Narrator",
        text: "The air between them grows warm with unspoken feelings. Both hearts beating a little faster.",
        emotion: "neutral",
        pause: 3000,
        choices: [
          {
            id: 1,
            text: "*Move a little closer*",
            type: "romantic",
            points: 1,
            nextScene: "growing_closer"
          },
          {
            id: 2,
            text: "*Share a meaningful look*",
            type: "intimate",
            points: 1,
            nextScene: "growing_closer"
          },
          {
            id: 3,
            text: "*Blush and look away shyly*",
            type: "bashful",
            points: 1,
            nextScene: "growing_closer"
          }
        ]
      }
    ]
  },

  growing_closer: {
    title: "Hearts Synchronizing",
    location: "library_corner",
    background: "library_corner",
    dialogue: [
      {
        character: "Narrator",
        text: "Time seems to slow as two introverted hearts begin to open up to each other, creating their own little world.",
        emotion: "neutral",
        pause: 2000
      },
      {
        character: "Roshi",
        text: "*fidgeting with her book* Mobi... can I tell you something? I've always felt different, like I see colors in emotions that others don't see...",
        emotion: "vulnerable"
      },
      {
        character: "Mobi",
        text: "*leaning in slightly* I understand completely. I've always felt like I can see the deeper patterns in people, but it makes me feel... isolated sometimes.",
        emotion: "empathetic"
      },
      {
        character: "Narrator",
        text: "In this moment, both realize they've found someone who truly understands their inner world.",
        emotion: "neutral",
        pause: 2000
      },
      {
        character: "Roshi",
        text: "*attempting to be clever with numbers* You know what's funny? I can't count books properly, but I can count... um... *panicking* ...the ways you make me feel comfortable?",
        emotion: "flustered"
      },
      {
        character: "Mobi",
        text: "*charmed by her attempt* That's... that's actually really sweet. Even if the math doesn't quite work. *gentle laugh*",
        emotion: "amused"
      },
      {
        character: "Narrator",
        text: "Their laughter creates a bubble of warmth around them, two souls recognizing their perfect imperfections.",
        emotion: "neutral",
        pause: 2500
      },
      {
        character: "Roshi",
        text: "*suddenly brave* Mobi, I think... I think I'm developing feelings for you. But I don't know how to count them or organize them like you would.",
        emotion: "brave"
      },
      {
        character: "Mobi",
        text: "*heart racing* Roshi, I... *taking a deep breath* I've been planning what to say to you for the past 10 minutes, but now all my words are scattered like your books were.",
        emotion: "nervous"
      },
      {
        character: "Narrator",
        text: "The confession hangs in the air, imperfect and beautiful, just like both of them.",
        emotion: "neutral",
        pause: 3000,
        choices: [
          {
            id: 1,
            text: "*Try to express your feelings*",
            type: "romantic",
            points: 1,
            nextScene: "clumsy_confession"
          },
          {
            id: 2,
            text: "*Reach for her hand nervously*",
            type: "tender",
            points: 1,
            nextScene: "clumsy_confession"
          },
          {
            id: 3,
            text: "*Get overwhelmed by emotions*",
            type: "overwhelmed",
            points: 1,
            nextScene: "clumsy_confession"
          }
        ]
      }
    ]
  },

  clumsy_confession: {
    title: "Beautifully Imperfect Love",
    location: "library_corner",
    background: "library_corner",
    dialogue: [
      {
        character: "Mobi",
        text: "*nervously reaching for her hand but accidentally knocking over the water bottle* Oh no! I had this whole speech planned and... *flustered* This isn't going according to plan at all!",
        emotion: "panicking"
      },
      {
        character: "Roshi",
        text: "*laughing while trying to catch the rolling bottle* It's okay! I don't like plans anyway! *trips slightly* See? We're both disasters! Perfect disasters!",
        emotion: "laughing"
      },
      {
        character: "Narrator",
        text: "And in that moment of shared clumsiness, something magical happens - they realize that love doesn't need to be perfect.",
        emotion: "neutral",
        pause: 2000
      },
      {
        character: "Mobi",
        text: "*finally taking her hand properly* Roshi, I don't need a perfect speech. I just need you to know that you make my organized world beautifully chaotic.",
        emotion: "sincere"
      },
      {
        character: "Roshi",
        text: "*squeezing his hand* And you make my chaotic world feel safely grounded. Even if I can't count how much I care about you, I know it's infinite.",
        emotion: "loving"
      },
      {
        character: "Narrator",
        text: "Two introverted hearts, finally finding home in each other's understanding. Different melodies creating perfect harmony.",
        emotion: "neutral",
        pause: 3000
      },
      {
        character: "Mobi",
        text: "*softly* So... would you maybe want to be beautifully imperfect together?",
        emotion: "hopeful"
      },
      {
        character: "Roshi",
        text: "*beaming* Yes! Though I can't promise I won't knock over more of your organized things.",
        emotion: "joyful"
      },
      {
        character: "Mobi",
        text: "*smiling genuinely* And I can't promise I won't try to organize your creative chaos. But maybe that's what makes us perfect for each other.",
        emotion: "content"
      },
      {
        character: "Narrator",
        text: "And so, in a corner of the university library, two introverted souls found their forever - not through perfect words or flawless moments, but through authentic connection and shared understanding. Sometimes the most beautiful love stories are written in whispered conversations and gentle acceptance of each other's quirks.",
        emotion: "neutral",
        pause: 4000
      },
      {
        character: "Narrator",
        text: "The End. ❤️",
        emotion: "neutral"
      }
    ]
  }
};

// Simple pixel backgrounds for different scenes
export const backgrounds = {
  library: {
    className: "bg-library-pixel",
    style: {
      backgroundImage: `
        linear-gradient(90deg, #654321 50%, #543210 50%),
        linear-gradient(90deg, #654321 25%, #543210 25%, #765432 75%, #876543 75%)
      `,
      backgroundSize: '20px 20px, 40px 40px',
      backgroundPosition: '0 0, 0 10px'
    }
  },
  library_corner: {
    className: "bg-library-corner-pixel", 
    style: {
      backgroundImage: `
        radial-gradient(circle at 30% 30%, #ffd700 5px, transparent 5px),
        linear-gradient(45deg, #8b4513 25%, #a0522d 25%, #a0522d 50%, #8b4513 50%, #8b4513 75%, #a0522d 75%)
      `,
      backgroundSize: '60px 60px, 30px 30px',
      backgroundPosition: '0 0, 15px 15px'
    }
  }
};

// Location data simplified for linear story
export const locations = {
  library: {
    name: "Library",
    description: "Where hearts first meet",
    available: true,
    pixelColor: "#8b4513"
  }
};

export default gameStory;