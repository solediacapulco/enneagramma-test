import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useEnneagram } from "../context/EnneagramContext";
import { showToast } from "../components/Toast";
import { useAccessibility } from "../context/AccessibilityContext";
import { enneagramTypes } from "../lib/enneagramData";
import { Chart, registerables } from "chart.js";
import { saveResult } from "../lib/api";

// Register Chart.js components
Chart.register(...registerables);

// Colori per i 9 tipi dell'Enneagramma
const typeColors = {
  1: { bg: "rgba(236, 72, 153, 0.2)", border: "rgb(236, 72, 153)" }, // Rosa
  2: { bg: "rgba(239, 68, 68, 0.2)", border: "rgb(239, 68, 68)" },   // Rosso
  3: { bg: "rgba(249, 115, 22, 0.2)", border: "rgb(249, 115, 22)" }, // Arancione
  4: { bg: "rgba(234, 179, 8, 0.2)", border: "rgb(234, 179, 8)" },   // Giallo
  5: { bg: "rgba(34, 197, 94, 0.2)", border: "rgb(34, 197, 94)" },   // Verde
  6: { bg: "rgba(20, 184, 166, 0.2)", border: "rgb(20, 184, 166)" }, // Turchese
  7: { bg: "rgba(59, 130, 246, 0.2)", border: "rgb(59, 130, 246)" }, // Blu
  8: { bg: "rgba(139, 92, 246, 0.2)", border: "rgb(139, 92, 246)" }, // Viola
  9: { bg: "rgba(99, 102, 241, 0.2)", border: "rgb(99, 102, 241)" }, // Indaco
};

const ResultsScreen = () => {
  const { results, resetTest } = useEnneagram();
  const [_, navigate] = useLocation();
  const { fontSize, contrast } = useAccessibility();
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [expandedTypes, setExpandedTypes] = useState<number[]>([]);
  
  // Check if results exist, if not redirect to welcome screen
  useEffect(() => {
    if (!results) {
      navigate("/");
    }
  }, [results, navigate]);

  // Create chart once results are available
  useEffect(() => {
    if (results && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (!ctx) return;

      // Convert type scores to array format for chart
      const labels = Object.keys(results.typeScores).map(key => `Tipo ${key}`);
      const data = Object.values(results.typeScores);
      
      // Prepare colors for the chart
      const backgroundColors = [];
      const borderColors = [];
      const pointBackgroundColors = [];
      const pointBorderColors = [];
      const pointHoverBackgroundColors = [];
      const pointHoverBorderColors = [];
      
      for (let i = 1; i <= 9; i++) {
        const typeColor = typeColors[i as keyof typeof typeColors];
        backgroundColors.push(i === results.primaryType ? typeColor.bg : "rgba(220, 220, 220, 0.1)");
        borderColors.push(typeColor.border);
        pointBackgroundColors.push(typeColor.border);
        pointBorderColors.push("#fff");
        pointHoverBackgroundColors.push("#fff");
        pointHoverBorderColors.push(typeColor.border);
      }

      // Cleanup previous chart instance
      Chart.getChart(chartRef.current)?.destroy();

      // Create radar chart with multiple colors
      new Chart(ctx, {
        type: "radar",
        data: {
          labels,
          datasets: [{
            label: "Il tuo profilo",
            data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            pointBackgroundColor: pointBackgroundColors,
            pointBorderColor: pointBorderColors,
            pointHoverBackgroundColor: pointHoverBackgroundColors,
            pointHoverBorderColor: pointHoverBorderColors
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: {
                display: false
              },
              pointLabels: {
                font: {
                  size: 14,
                  weight: 'bold'
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 12,
              titleFont: {
                size: 14
              },
              bodyFont: {
                size: 13
              }
            }
          }
        }
      });
    }
  }, [results]);

  if (!results) {
    return <div>Caricamento in corso...</div>;
  }

  // Get font size class based on accessibility setting
  const getFontSizeClass = () => {
    switch (fontSize) {
      case "large":
        return "text-lg";
      case "xlarge":
        return "text-xl";
      default:
        return "text-base";
    }
  };

  // Apply high contrast if enabled
  const getContrastClass = () => {
    return contrast === "high" 
      ? "bg-black text-white border-yellow-400" 
      : "";
  }

  const toggleTypeExpansion = (typeId: number) => {
    setExpandedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId) 
        : [...prev, typeId]
    );
  };

  const getPrimaryType = () => {
    return enneagramTypes.find(type => type.id === results.primaryType);
  };

  const getWingType = () => {
    return enneagramTypes.find(type => type.id === results.wingType);
  };

  // Get secondary types (excluding primary and wing)
  const getSecondaryTypes = () => {
    // Sort by score descending
    const sortedTypeIds = Object.entries(results.typeScores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .map(([typeId]) => parseInt(typeId));
    
    // Filter out primary and wing types, and take top 2
    return sortedTypeIds
      .filter(id => id !== results.primaryType && id !== results.wingType)
      .slice(0, 2)
      .map(id => ({
        type: enneagramTypes.find(type => type.id === id),
        score: results.typeScores[id]
      }));
  };

  const handleSaveResults = async () => {
    try {
      // Save results to API
      await saveResult({
        userId: 1, // For demo purposes we're using a fixed userId
        answers: results.answers,
        typeScores: results.typeScores,
        primaryType: results.primaryType,
        wingType: results.wingType
      });
      
      showToast("Salvato", "I risultati sono stati salvati con successo.", "success");
    } catch (error) {
      showToast("Errore", "Si è verificato un errore durante il salvataggio.", "error");
    }
  };

  const handleExportPDF = () => {
    // In a real app, we would generate a PDF here
    // For this demo, we'll just show a toast
    showToast("Esportazione", "Il file PDF è stato generato e scaricato.", "success");
  };

  const handleRestartTest = () => {
    resetTest();
    navigate("/");
  };

  const primaryType = getPrimaryType();
  const wingType = getWingType();
  const secondaryTypes = getSecondaryTypes();

  return (
    <div id="results-screen">
      <div className={`bg-white rounded-lg shadow-sm p-6 mb-6 ${getContrastClass()}`}>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">I Tuoi Risultati dell'Enneagramma</h2>
          <p className={`text-gray-600 max-w-xl mx-auto ${getFontSizeClass()}`}>
            Ecco l'analisi dettagliata del tuo profilo di personalità secondo l'Enneagramma.
          </p>
        </div>
        
        {/* Chart */}
        <div className="mb-8">
          <div className="max-w-md mx-auto" style={{ height: "300px" }}>
            <canvas ref={chartRef} id="enneagram-chart"></canvas>
          </div>
        </div>
        
        {/* Primary Type */}
        <div className={`bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6 ${getContrastClass()}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Tipo Principale: <span className="text-primary">Tipo {primaryType?.id} ({primaryType?.name})</span>
          </h3>
          <p className={`text-gray-700 mb-4 ${getFontSizeClass()}`}>
            {primaryType?.description}
          </p>
          <h4 className="font-medium text-gray-800 mb-2">Caratteristiche principali:</h4>
          <ul className={`space-y-1 text-gray-700 ${getFontSizeClass()}`}>
            {primaryType?.characteristics.map((char, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                <span>{char}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Wing Type */}
        {wingType && (
          <div className={`bg-purple-50 border border-purple-100 rounded-lg p-4 mb-6 ${getContrastClass()}`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ala: <span className="text-secondary">Tipo {wingType.id} ({wingType.name})</span>
            </h3>
            <p className={`text-gray-700 ${getFontSizeClass()}`}>
              {wingType.wingDescription}
            </p>
          </div>
        )}
        
        {/* Partner Ideale */}
        <div className={`bg-pink-50 border border-pink-100 rounded-lg p-4 mb-6 ${getContrastClass()}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Compatibilità nelle relazioni
          </h3>
          <p className={`text-gray-700 ${getFontSizeClass()}`}>
            {primaryType?.idealPartners}
          </p>
        </div>
        
        {/* Secondary Types */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Altri tipi rilevanti nel tuo profilo</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {secondaryTypes.map(({ type, score }) => type && (
            <div key={type.id} className={`bg-gray-50 border border-gray-200 rounded-lg p-4 ${getContrastClass()}`}>
              <h4 className="font-medium text-gray-800 mb-1">
                Tipo {type.id} ({type.name}) - {Math.round(score)}%
              </h4>
              <p className={`text-sm text-gray-600 ${getFontSizeClass()}`}>
                {type.shortDescription}
              </p>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <button 
            id="save-results" 
            className="py-2 px-4 bg-primary text-white rounded-md font-medium hover:bg-accent shadow-sm hover:shadow-md transition-all"
            onClick={handleSaveResults}
          >
            <span className="mr-2">💾</span> Salva risultati
          </button>
          
          <button 
            id="export-results" 
            className="py-2 px-4 border border-primary text-primary rounded-md font-medium hover:bg-indigo-50 shadow-sm hover:shadow-md transition-all"
            onClick={handleExportPDF}
          >
            <span className="mr-2">📄</span> Esporta PDF
          </button>
          
          <button 
            id="restart-test" 
            className="py-2 px-4 border border-gray-300 text-gray-600 rounded-md font-medium hover:bg-gray-50 shadow-sm hover:shadow-md transition-all"
            onClick={handleRestartTest}
          >
            <span className="mr-2">🔄</span> Rifai il test
          </button>
        </div>
      </div>
      
      {/* All Types Info */}
      <div className={`bg-white rounded-lg shadow-sm p-6 ${getContrastClass()}`}>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">I Nove Tipi dell'Enneagramma</h2>
        
        <div className="space-y-4">
          {enneagramTypes.map(type => {
            const typeColor = typeColors[type.id as keyof typeof typeColors];
            
            return (
              <div key={type.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full px-4 py-3 text-left font-medium flex justify-between items-center"
                  style={{ backgroundColor: typeColor.bg, borderColor: typeColor.border }}
                  onClick={() => toggleTypeExpansion(type.id)}
                >
                  <span>Tipo {type.id}: {type.name}</span>
                  <span className={`${expandedTypes.includes(type.id) ? '▲' : '▼'} text-gray-600`}></span>
                </button>
                <div className={`p-4 ${expandedTypes.includes(type.id) ? '' : 'hidden'}`}>
                  <p className={`text-gray-700 mb-3 ${getFontSizeClass()}`}>
                    {type.description}
                  </p>
                  <h4 className="font-medium text-gray-800 mb-1">Caratteristiche principali:</h4>
                  <ul className={`space-y-1 text-gray-700 mb-3 ${getFontSizeClass()}`}>
                    {type.characteristics.map((char, index) => (
                      <li key={index} className="flex items-start">
                        <span style={{ color: typeColor.border }} className="text-xs mr-2 mt-1.5">●</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium text-gray-800 mb-1">Compatibilità nelle relazioni:</h4>
                  <p className={`text-gray-700 mb-3 ${getFontSizeClass()}`}>
                    {type.idealPartners}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
