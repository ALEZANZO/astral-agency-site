import React, { useState } from 'react';
import { BrainCircuit, Send, Loader2 } from 'lucide-react';
import { analyzeMarketingContent } from '../../services/geminiService';
import GlassCard from '../GlassCard';

const ContentAnalyzer: React.FC = () => {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const result = await analyzeMarketingContent(input);
      setAnalysis(result);
    } catch (e) {
      setAnalysis("Error communicating with Mission Control.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="h-full flex flex-col">
       <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400">
          <BrainCircuit className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Strategic AI Core</h3>
          <p className="text-xs text-gray-400">Analyze & Optimize Copy</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <textarea
            className="w-full bg-black/40 border border-gray-700 rounded-lg p-4 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 resize-none h-32"
            placeholder="Paste your ad copy or social post here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        
        <button 
            onClick={handleAnalyze}
            disabled={loading || !input}
            className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-black font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
        >
             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
             Run Analysis
        </button>

        {analysis && (
            <div className="flex-1 bg-cyan-900/10 border border-cyan-500/20 rounded-lg p-4 overflow-y-auto max-h-[200px] custom-scrollbar">
                <p className="text-sm text-cyan-100 whitespace-pre-wrap">{analysis}</p>
            </div>
        )}
      </div>
    </GlassCard>
  );
};

export default ContentAnalyzer;