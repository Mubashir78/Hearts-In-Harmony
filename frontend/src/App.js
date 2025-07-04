import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import GameEngine from "./components/VisualNovel/GameEngine";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Heart, BookOpen, Music } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full bg-black/40 backdrop-blur-md border-white/20 text-white overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="relative p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Heart className="w-24 h-24 text-pink-400 animate-pulse" />
                <div className="absolute -top-2 -right-2">
                  <Music className="w-8 h-8 text-purple-400" />
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Hearts in Harmony
            </h1>
            
            <p className="text-xl text-gray-300 mb-2">
              A Romantic Visual Novel
            </p>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience the beautiful love story between Kai, a thoughtful 21-year-old INFJ, and Luna, a creative 18-year-old INFP. 
              Navigate through meaningful choices that shape their romantic journey through music, literature, and deep connections.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Romantic Choices</h3>
                <p className="text-sm text-gray-300">Make decisions that affect your relationship and unlock different story paths</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Rich Storytelling</h3>
                <p className="text-sm text-gray-300">Immerse yourself in deep character development and meaningful dialogue</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Music className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Save & Load</h3>
                <p className="text-sm text-gray-300">Save your progress and explore different story branches</p>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.location.href = '/game'}
              >
                <Heart className="w-5 h-5 mr-2" />
                Start Your Story
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
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
