import React, { useState } from 'react';
import { Video, Upload, Loader2, Play } from 'lucide-react';
import { generateVeoVideo, fileToBase64 } from '../../services/geminiService';
import GlassCard from '../GlassCard';

const VideoGenerator: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const base64 = await fileToBase64(file);
      setPreview(`data:${file.type};base64,${base64}`);
      setVideoUrl(null);
    }
  };

  const handleGenerate = async () => {
    if (!selectedFile) return;
    setLoading(true);
    try {
      const base64 = await fileToBase64(selectedFile);
      const url = await generateVeoVideo(base64, "Cinematic camera movement, high quality, 4k", selectedFile.type);
      setVideoUrl(url);
    } catch (e) {
        console.error(e);
      alert("Failed to generate video. Ensure you have selected a paid API key via the popup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="h-full flex flex-col">
       <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
          <Video className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Veo Kinetic Engine</h3>
          <p className="text-xs text-gray-400">Bring static images to life</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
         <div className="relative border-2 border-dashed border-gray-700 rounded-xl flex-1 min-h-[200px] flex items-center justify-center bg-black/40 overflow-hidden hover:border-purple-500/50 transition-colors">
            {videoUrl ? (
                <video src={videoUrl} autoPlay loop controls className="w-full h-full object-contain" />
            ) : preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-contain opacity-80" />
            ) : (
                <div className="text-center p-6">
                    <Upload className="w-10 h-10 mx-auto mb-2 text-gray-500" />
                    <p className="text-sm text-gray-400">Upload source image</p>
                </div>
            )}
             {!videoUrl && (
                 <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                />
             )}
         </div>

         <div className="text-xs text-gray-500 text-center">
            Requires Paid API Key (Veo)
         </div>

         <button 
            onClick={handleGenerate}
            disabled={loading || !selectedFile}
            className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white py-3 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
        >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
            {loading ? 'Synthesizing...' : 'Launch Sequence'}
        </button>
      </div>
    </GlassCard>
  );
};

export default VideoGenerator;