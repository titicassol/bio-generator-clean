import React, { useState } from 'react';

const BioCard = ({ bio, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bio);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="magic-card p-6 floating" style={{ animationDelay: `${index * 0.3}s` }}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center glow-border">
            <span className="text-white text-sm font-bold">{index + 1}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 glow-text">Bio {index + 1}</h3>
        </div>
        <button
          onClick={handleCopy}
          className="px-5 py-3 bg-gradient-to-r from-pastel-mint to-pastel-blue text-gray-700 rounded-2xl text-sm font-medium transition-all duration-500 hover:shadow-lg hover:scale-105 active:scale-95 hover:bg-white/80"
        >
          {copied ? (
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Copié!</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copier</span>
            </span>
          )}
        </button>
      </div>
      <p className="text-gray-700 leading-relaxed text-base font-medium">{bio}</p>
    </div>
  );
};

export default BioCard;
