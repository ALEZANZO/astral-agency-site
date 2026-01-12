import React, { useState } from 'react';
import { Wand2, Image as ImageIcon, Loader2 } from 'lucide-react';
import { editImage, fileToBase64 } from '../../services/geminiService';
import GlassCard from '../GlassCard';

const ImageEditor: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const base64 = await fileToBase64(file);
      setPreview(`data:${file.type};base64,${base64}`);
      setResult(null);
    }
  };

  const handleGenerate = async () => {
    if (!selectedFile || !prompt) return;
    setLoading(true);
    setResult(null);
    try {
      const base64 = await fileToBase64(selectedFile);
      const output = await editImage(base64, prompt, selectedFile.type);
      setResult(output);
    } catch (e) {
      alert("Failed to edit image. See console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-pink-500/20 text-pink-400">
          <Wand2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Nano-Edit Lab</h3>
          <p className="text-xs text-gray-400">Powered by Gemini 2.5 Flash</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="relative border-2 border-dashed border-gray-700 rounded-xl min-h-[200px] flex items-center justify-center bg-black/40 overflow-hidden group hover:border-pink-500/50 transition-colors">
          {!preview ? (
            <div className="text-center p-6">
              <ImageIcon className="w-10 h-10 mx-auto mb-2 text-gray-500" />
              <p className="text-sm text-gray-400">Upload an image to modify</p>
            </div>
          ) : (
             <img src={result || preview} alt="Preview" className="w-full h-full object-contain" />
          )}
           <input 
            type="file" 
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        <div className="flex gap-2">
            <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., 'Make it cyberpunk style' or 'Add a neon moon'"
                className="flex-1 bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-pink-500 text-white"
            />
            <button 
                onClick={handleGenerate}
                disabled={loading || !selectedFile || !prompt}
                className="bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2"
            >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
            </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default ImageEditor;