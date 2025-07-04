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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-4xl max-h-[80vh] m-4 bg-white border-4 border-black overflow-hidden" style={{
        borderRadius: '0px',
        boxShadow: '8px 8px 0px #000'
      }}>
        <div className="flex items-center justify-between p-4 border-b-2 border-black">
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'save' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('save')}
              className={`text-black font-bold border-2 border-black ${activeTab === 'save' ? 'bg-blue-300' : 'bg-white hover:bg-gray-100'}`}
              style={{ borderRadius: '0px', fontFamily: 'monospace' }}
            >
              <Save className="w-4 h-4 mr-2" />
              💾 SAVE
            </Button>
            <Button
              variant={activeTab === 'load' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('load')}
              className={`text-black font-bold border-2 border-black ${activeTab === 'load' ? 'bg-pink-300' : 'bg-white hover:bg-gray-100'}`}
              style={{ borderRadius: '0px', fontFamily: 'monospace' }}
            >
              <FolderOpen className="w-4 h-4 mr-2" />
              📂 LOAD
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-black hover:bg-gray-100 border-2 border-black"
            style={{ borderRadius: '0px' }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-4 overflow-y-auto max-h-96">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {saveSlots.map((slot) => (
              <Card key={slot.id} className="bg-gray-100 border-2 border-black hover:bg-gray-200 transition-colors" style={{
                borderRadius: '0px'
              }}>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-black font-bold" style={{ fontFamily: 'monospace' }}>
                      💾 SLOT {slot.id}
                    </h3>
                    {!slot.empty && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(slot.id)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-100 border-2 border-red-600"
                        style={{ borderRadius: '0px' }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  {slot.empty ? (
                    <div className="text-gray-500 text-sm mb-4" style={{ fontFamily: 'monospace' }}>
                      📭 Empty slot
                    </div>
                  ) : (
                    <div className="text-gray-700 text-sm mb-4" style={{ fontFamily: 'monospace' }}>
                      <div>📖 Scene: {slot.currentSceneId}</div>
                      <div>📍 Location: {slot.currentLocation}</div>
                      <div>💕 Love: {slot.gameState.relationshipPoints}</div>
                      <div>📅 Date: {slot.formattedDate}</div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {activeTab === 'save' && (
                      <Button
                        onClick={() => onSave(slot.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-green-200 border-2 border-green-600 text-green-800 hover:bg-green-300 font-bold"
                        style={{ borderRadius: '0px', fontFamily: 'monospace' }}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        💾 SAVE
                      </Button>
                    )}
                    {activeTab === 'load' && !slot.empty && (
                      <Button
                        onClick={() => onLoad(slot.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-blue-200 border-2 border-blue-600 text-blue-800 hover:bg-blue-300 font-bold"
                        style={{ borderRadius: '0px', fontFamily: 'monospace' }}
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        📂 LOAD
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SaveLoadMenu;