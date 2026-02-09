import React, { useState } from 'react';
import BioCard from './BioCard';

const BioGenerator = () => {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('Magique');
  const [bios, setBios] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const bioTemplates = {
    Magique: [
      `✨ ${name} • Créateur de rêves et d'idées lumineuses • Transformant l'ordinaire en extraordinaire • Chaque jour est une nouvelle aventure magique 🌟`,
      `🦄 ${name} • Âme d'artiste, cœur de magicien • Peignant le monde avec les couleurs de l'imagination • Laissez la magie opérer ✨`,
      `🌙 ${name} • Gardien des étoiles et des secrets • Naviguant entre rêve et réalité • Où la magie devient possible 🪄`
    ],
    Minimaliste: [
      `${name} • Simple • Essentiel • Authentique`,
      `${name} • Moins, c'est mieux • Qualité sur quantité • L'essence avant tout`,
      `${name} • Épuré • Précis • Intentionnel`
    ],
    Pro: [
      `${name} • Expert stratégique • Transformant les défis en opportunités • Résultats orientés • Excellence garantie`,
      `${name} • Leader visionnaire • Innovation et performance • Construisant l'avenir aujourd'hui • Impact durable`,
      `${name} • Spécialiste reconnu • Solutions créatives • Engagement total • Succès mesurable`
    ],
    Cute: [
      `🌸 ${name} • Petite boule de soleil • Rendant le monde plus doux • Un sourire par jour • Kawaii attitude 🍭`,
      `🐰 ${name} • Cute & Cozy • Amoureux des petites choses • Créateur de bonheur • Positive vibes only ✨`,
      `🌈 ${name} • Arc-en-ciel ambulant • Diffusant de l'amour • Toujours là pour un câlin • Sweet dreams 🍬`
    ]
  };

  const generateBios = () => {
    if (!name.trim()) {
      alert('Veuillez entrer votre prénom !');
      return;
    }

    setIsGenerating(true);
    
    setTimeout(() => {
      const selectedBios = bioTemplates[style] || bioTemplates['Magique'];
      setBios(selectedBios);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 floating">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 glow-text">
            ✨ Bio Generator ✨
          </h1>
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl font-medium">
            Crée ta bio parfaite en un clic
          </p>
        </div>

        {/* Input Section */}
        <div className="magic-card p-8 sm:p-10 mb-8 glow-border">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                Ton prénom
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Entrez ton prénom..."
                className="input-field w-full text-lg"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                Style de bio
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="input-field w-full cursor-pointer text-lg"
              >
                <option value="Magique">🪄 Magique</option>
                <option value="Minimaliste">⚪ Minimaliste</option>
                <option value="Pro">💼 Pro</option>
                <option value="Cute">🌸 Cute</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateBios}
            disabled={isGenerating}
            className="pastel-button w-full md:w-auto mx-auto block text-lg sm:text-xl font-bold"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center space-x-3">
                <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Génération magique...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Générer</span>
              </span>
            )}
          </button>
        </div>

        {/* Results Section */}
        {bios.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 glow-text floating">
              Tes bios {style.toLowerCase()}s ✨
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {bios.map((bio, index) => (
                <BioCard key={index} bio={bio} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BioGenerator;
