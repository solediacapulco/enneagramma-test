import { useLocation } from "wouter";
import { useAccessibility } from "../context/AccessibilityContext";

const WelcomeScreen = () => {
  const [_, navigate] = useLocation();
  const { fontSize } = useAccessibility();

  const startTest = () => {
    navigate("/questions");
  };

  // Apply font size class based on accessibility setting
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

  return (
    <div id="welcome-screen" className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="text-center mb-8">
        <i className="fas fa-brain text-5xl text-primary mb-4"></i>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Test dell'Enneagramma</h1>
        <p className={`text-gray-600 max-w-xl mx-auto ${getFontSizeClass()}`}>
          Scopri il tuo tipo di personalità con il nostro test dell'Enneagramma. Solo 5 minuti al giorno per conoscere meglio te stesso.
        </p>
      </div>
      
      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
        <h2 className="text-lg font-medium text-indigo-800 mb-2">Come funziona</h2>
        <ul className={`space-y-2 text-indigo-700 ${getFontSizeClass()}`}>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
            <span>Rispondi a 30 domande, una alla volta</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
            <span>Ricevi un'analisi dettagliata del tuo profilo Enneagramma</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
            <span>Visualizza i tuoi risultati con grafici interattivi</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
            <span>Scopri i tuoi tipi primari e secondari con spiegazioni approfondite</span>
          </li>
        </ul>
      </div>
      
      <div className="text-center">
        <button 
          id="start-test-btn" 
          className="bg-primary hover:bg-accent text-white font-medium py-3 px-6 rounded-md transition duration-200 shadow-sm"
          onClick={startTest}
        >
          Inizia il test
        </button>
        <p className={`mt-3 text-sm text-gray-500 ${getFontSizeClass()}`}>Tempo stimato: 5-10 minuti</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
