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
      <Card className="w-full max-w-4xl max-h-[80vh] m-4 bg-gray-900 border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'save' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('save')}
              className="text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Game
            </Button>
            <Button
              variant={activeTab === 'load' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('load')}
              className="text-white"
            >
              <FolderOpen className="w-4 h-4 mr-2" />
              Load Game
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-gray-800"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-4 overflow-y-auto max-h-96">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {saveSlots.map((slot) => (
              <Card key={slot.id} className="bg-gray-800 border-gray-600 hover:bg-gray-700 transition-colors">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">Slot {slot.id}</h3>
                    {!slot.empty && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(slot.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  {slot.empty ? (
                    <div className="text-gray-400 text-sm mb-4">Empty slot</div>
                  ) : (
                    <div className="text-gray-300 text-sm mb-4">
                      <div>Scene: {slot.currentSceneId}</div>
                      <div>Relationship: {slot.gameState.relationshipPoints} 💕</div>
                      <div>Date: {slot.formattedDate}</div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {activeTab === 'save' && (
                      <Button
                        onClick={() => onSave(slot.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-green-600/20 border-green-500 text-green-300 hover:bg-green-600/40"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Here
                      </Button>
                    )}
                    {activeTab === 'load' && !slot.empty && (
                      <Button
                        onClick={() => onLoad(slot.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-blue-600/20 border-blue-500 text-blue-300 hover:bg-blue-600/40"
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        Load Game
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