import React, { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { X, Save, FolderOpen, Trash2 } from 'lucide-react';

const SaveLoadMenu = ({ onSave, onLoad, onClose }) => {
  const [saveSlots, setSaveSlots] = useState([]);
  const [activeTab, setActiveTab] = useState('save');

  useEffect(() => {
    loadSaveSlots();
  }, []);

  const loadSaveSlots = () => {
    const slots = [];
    for (let i = 1; i <= 6; i++) {
      const saveData = localStorage.getItem(`vnSave_${i}`);
      if (saveData) {
        const data = JSON.parse(saveData);
        slots.push({
          id: i,
          ...data,
          formattedDate: new Date(data.timestamp).toLocaleDateString()
        });
      } else {
        slots.push({ id: i, empty: true });
      }
    }
    setSaveSlots(slots);
  };

  const handleDelete = (slotId) => {
    localStorage.removeItem(`vnSave_${slotId}`);
    loadSaveSlots();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] bg-gray-900 border-4 border-white overflow-hidden animate-slideDown" style={{
        borderRadius: '0px',
        boxShadow: '8px 8px 0px #fff'
      }}>
        <div className="flex items-center justify-between p-3 sm:p-4 border-b-2 border-white">
          <div className="flex gap-1 sm:gap-2">
            <Button
              variant={activeTab === 'save' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('save')}
              className={`text-white font-bold border-2 border-white transition-all duration-200 hover:scale-105 text-xs sm:text-sm ${activeTab === 'save' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              style={{ borderRadius: '0px', fontFamily: 'monospace' }}
            >
              <Save className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">💾 SAVE</span>
            </Button>
            <Button
              variant={activeTab === 'load' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('load')}
              className={`text-white font-bold border-2 border-white transition-all duration-200 hover:scale-105 text-xs sm:text-sm ${activeTab === 'load' ? 'bg-pink-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              style={{ borderRadius: '0px', fontFamily: 'monospace' }}
            >
              <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">📂 LOAD</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-gray-700 border-2 border-white transform hover:scale-105 transition-all duration-200"
            style={{ borderRadius: '0px' }}
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>

        <div className="p-2 sm:p-4 overflow-y-auto max-h-96">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {saveSlots.map((slot, index) => (
              <Card key={slot.id} className="bg-gray-800 border-2 border-white hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 animate-fadeIn" style={{
                borderRadius: '0px',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold text-xs sm:text-base" style={{ fontFamily: 'monospace' }}>
                      💾 SLOT {slot.id}
                    </h3>
                    {!slot.empty && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(slot.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20 border-2 border-red-600 transform hover:scale-105 transition-all duration-200"
                        style={{ borderRadius: '0px' }}
                      >
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    )}
                  </div>
                  
                  {slot.empty ? (
                    <div className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4" style={{ fontFamily: 'monospace' }}>
                      📭 Empty slot
                    </div>
                  ) : (
                    <div className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4" style={{ fontFamily: 'monospace' }}>
                      <div>📖 {slot.currentSceneId}</div>
                      <div className="hidden sm:block">📍 {slot.currentLocation}</div>
                      <div>💕 {slot.gameState.relationshipPoints}</div>
                      <div className="hidden sm:block">📅 {slot.formattedDate}</div>
                    </div>
                  )}

                  <div className="flex gap-1 sm:gap-2">
                    {activeTab === 'save' && (
                      <Button
                        onClick={() => onSave(slot.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-green-600 border-2 border-green-400 text-white hover:bg-green-500 font-bold transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
                        style={{ borderRadius: '0px', fontFamily: 'monospace' }}
                      >
                        <Save className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                        <span className="hidden sm:inline">💾</span>
                      </Button>
                    )}
                    {activeTab === 'load' && !slot.empty && (
                      <Button
                        onClick={() => onLoad(slot.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-blue-600 border-2 border-blue-400 text-white hover:bg-blue-500 font-bold transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
                        style={{ borderRadius: '0px', fontFamily: 'monospace' }}
                      >
                        <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                        <span className="hidden sm:inline">📂</span>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SaveLoadMenu;