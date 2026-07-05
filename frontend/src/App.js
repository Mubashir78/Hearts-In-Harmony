import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import GameEngine from "./components/VisualNovel/GameEngine";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Play } from "lucide-react";

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
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-2 sm:p-4" style={pixelBackground}>
      <Card className="max-w-2xl w-full bg-gray-900 border-4 border-white overflow-hidden animate-pulse-slow" style={{
        borderRadius: '0px',
        boxShadow: '8px 8px 0px #fff',
        animation: 'pixelGlow 2s ease-in-out infinite alternate'
      }}>
        <div className="relative p-4 sm:p-8 text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative animate-bounce">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-pink-500 border-4 border-white flex items-center justify-center text-2xl sm:text-4xl transition-transform hover:scale-110" style={{
                borderRadius: '0px',
                boxShadow: '4px 4px 0px #fff'
              }}>
                💕
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 text-white hover:text-pink-300 transition-colors duration-300" style={{ 
            fontFamily: 'monospace',
            textShadow: '3px 3px 0px #000',
            animation: 'pixelFlicker 3s ease-in-out infinite'
          }}>
            Hearts in Harmony
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8" style={{ fontFamily: 'monospace' }}>
            🎮 A Pixel-Art Romance 🎮
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white font-bold border-4 border-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-200 text-sm sm:text-base"
              style={{ borderRadius: '0px', fontFamily: 'monospace', boxShadow: '4px 4px 0px #000' }}
              onClick={() => window.location.href = '/game'}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              ▶ START GAME ◀
            </Button>
          </div>

          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400" style={{ fontFamily: 'monospace' }}>
            💙 Mobi (INFJ) & 💖 Roshi (INFP) 💙
          </div>
        </div>
      </Card>

      <style jsx>{`
        @keyframes pixelGlow {
          0% { box-shadow: 8px 8px 0px #fff; }
          100% { box-shadow: 12px 12px 0px #fff, 0 0 20px rgba(255,255,255,0.3); }
        }
        
        @keyframes pixelFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pixelBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
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