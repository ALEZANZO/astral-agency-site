import React from 'react';
import ImageEditor from './Tools/ImageEditor';
import VideoGenerator from './Tools/VideoGenerator';
import ContentAnalyzer from './Tools/ContentAnalyzer';

const ToolsSection: React.FC = () => {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Mission Control</h2>
            <p className="text-gray-400">Experimental AI tools powered by Gemini.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">
            <ImageEditor />
            <VideoGenerator />
            <ContentAnalyzer />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;