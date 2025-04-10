import { useEffect } from "react";
import { useLocation } from "wouter";
import { useEnneagram } from "../context/EnneagramContext";
import { showToast } from "../components/Toast";
import { useAccessibility } from "../context/AccessibilityContext";
import { questions } from "../lib/enneagramData";

const QuestionsScreen = () => {
  const { 
    currentQuestion, 
    setCurrentQuestion, 
    answers, 
    setAnswer, 
    calculateResults 
  } = useEnneagram();
  
  const [_, navigate] = useLocation();
  const { fontSize, readAloud } = useAccessibility();

  // Text-to-speech for reading questions if enabled
  useEffect(() => {
    if (readAloud && 'speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(questions[currentQuestion]);
      speech.lang = "it-IT";
      window.speechSynthesis.speak(speech);
    }
  }, [currentQuestion, readAloud]);

  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNextQuestion = () => {
    const answer = answers[currentQuestion];
    
    if (answer === undefined || answer === null) {
      showToast("Attenzione", "Seleziona una risposta per continuare.", "warning");
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Final question completed, calculate results and navigate to results page
      calculateResults();
      navigate("/results");
    }
  };

  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
  const isLastQuestion = currentQuestion === questions.length - 1;

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

  const handleAnswerOptionClick = (value: number) => {
    setAnswer(currentQuestion, value);
  };

  return (
    <div id="questions-screen">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium text-gray-600">
            Domanda <span id="current-question">{currentQuestion + 1}</span> di <span id="total-questions">{questions.length}</span>
          </div>
          <div className="text-sm font-medium text-gray-600">
            <span id="progress-percentage">{progress}</span>% completato
          </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div id="progress-bar" className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6 question-card">
        <h2 
          id="question-text" 
          className={`text-xl font-semibold text-gray-800 mb-6 ${getFontSizeClass()}`}
        >
          {questions[currentQuestion]}
        </h2>
        
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((value) => (
            <div 
              key={`answer-${value}`}
              className="answer-option flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer"
              onClick={() => handleAnswerOptionClick(value)}
            >
              <input 
                type="radio" 
                id={`answer-${value}`} 
                name="answer" 
                value={value} 
                checked={answers[currentQuestion] === value}
                onChange={() => handleAnswerOptionClick(value)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
              />
              <label 
                htmlFor={`answer-${value}`} 
                className={`ml-3 block text-gray-700 cursor-pointer ${getFontSizeClass()}`}
              >
                {value === 1 && "Per niente d'accordo"}
                {value === 2 && "Poco d'accordo"}
                {value === 3 && "Parzialmente d'accordo"}
                {value === 4 && "Abbastanza d'accordo"}
                {value === 5 && "Completamente d'accordo"}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button 
          id="prev-question" 
          className="py-2 px-4 border border-gray-300 rounded-md text-gray-600 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={goToPrevQuestion}
          disabled={currentQuestion === 0}
        >
          <i className="fas fa-arrow-left mr-1"></i> Indietro
        </button>
        
        <button 
          id="next-question" 
          className="py-2 px-4 bg-primary text-white rounded-md font-medium hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={goToNextQuestion}
        >
          {isLastQuestion ? 'Vedi risultati' : 'Avanti'} {!isLastQuestion && <i className="fas fa-arrow-right ml-1"></i>}
        </button>
      </div>
    </div>
  );
};

export default QuestionsScreen;
