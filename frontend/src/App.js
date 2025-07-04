import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import GameEngine from "./components/VisualNovel/GameEngine";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Heart, BookOpen, Music, Map } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  const pixelBackground = {
    backgroundImage: `
      radial-gradient(circle at 25% 25%, #fff 2px, transparent 2px),
      radial-gradient(circle at 75% 75%, #fff 2px, transparent 2px)
    `,
    backgroundSize: '40px 40px',
    backgroundPosition: '0 0, 20px 20px'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-400 flex items-center justify-center p-4" style={pixelBackground}>
      <Card className="max-w-4xl w-full bg-white border-4 border-black overflow-hidden" style={{
        borderRadius: '0px',
        boxShadow: '12px 12px 0px #000'
      }}>
        <div className="relative">
          <div className="relative p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-pink-500 border-4 border-black flex items-center justify-center text-6xl" style={{
                  borderRadius: '0px',
                  boxShadow: '6px 6px 0px #000'
                }}>
                  💕
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-purple-500 border-2 border-black flex items-center justify-center text-2xl" style={{
                  borderRadius: '0px'
                }}>
                  🎵
                </div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-green-500 border-2 border-black flex items-center justify-center text-2xl" style={{
                  borderRadius: '0px'
                }}>
                  📚
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-4 text-black" style={{ 
              fontFamily: 'monospace',
              textShadow: '4px 4px 0px #ccc'
            }}>
              Hearts in Harmony
            </h1>
            
            <p className="text-2xl text-gray-700 mb-2" style={{ fontFamily: 'monospace' }}>
              A Pixel-Art Romantic Adventure
            </p>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'monospace' }}>
              Join Mobi (21, INFJ) and Roshi (18, INFP) on their romantic journey through Sakura University. 
              Explore different locations, make meaningful choices, and discover the power of complementary love!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-pink-300 border-2 border-black p-4" style={{ borderRadius: '0px' }}>
                <Heart className="w-8 h-8 text-pink-700 mx-auto mb-2" />
                <h3 className="font-bold mb-1 text-black" style={{ fontFamily: 'monospace' }}>Romance</h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'monospace' }}>Make choices that shape your love story</p>
              </div>
              <div className="bg-blue-300 border-2 border-black p-4" style={{ borderRadius: '0px' }}>
                <Map className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                <h3 className="font-bold mb-1 text-black" style={{ fontFamily: 'monospace' }}>Explore</h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'monospace' }}>Travel between campus locations</p>
              </div>
              <div className="bg-purple-300 border-2 border-black p-4" style={{ borderRadius: '0px' }}>
                <BookOpen className="w-8 h-8 text-purple-700 mx-auto mb-2" />
                <h3 className="font-bold mb-1 text-black" style={{ fontFamily: 'monospace' }}>Story</h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'monospace' }}>Rich character development</p>
              </div>
              <div className="bg-green-300 border-2 border-black p-4" style={{ borderRadius: '0px' }}>
                <Music className="w-8 h-8 text-green-700 mx-auto mb-2" />
                <h3 className="font-bold mb-1 text-black" style={{ fontFamily: 'monospace' }}>Save</h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'monospace' }}>Multiple save slots available</p>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-bold border-4 border-black transform hover:scale-105 transition-all duration-300"
                style={{ borderRadius: '0px', fontFamily: 'monospace' }}
                onClick={() => window.location.href = '/game'}
              >
                <Heart className="w-5 h-5 mr-2" />
                ▶ START ADVENTURE ◀
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-4 border-black text-black hover:bg-gray-200 font-bold"
                style={{ borderRadius: '0px', fontFamily: 'monospace' }}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                📖 ABOUT
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameEngine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
