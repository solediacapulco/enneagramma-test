import React, { createContext, useState, useContext, ReactNode, useCallback } from "react";
import { questions, calculateEnneagramType, determineWingType } from "../lib/enneagramData";

interface EnneagramResults {
  answers: number[];
  typeScores: Record<string, number>;
  primaryType: number;
  wingType: number | null;
}

interface EnneagramContextType {
  currentQuestion: number;
  setCurrentQuestion: (index: number) => void;
  answers: number[];
  setAnswer: (questionIndex: number, value: number) => void;
  results: EnneagramResults | null;
  calculateResults: () => void;
  resetTest: () => void;
}

const EnneagramContext = createContext<EnneagramContextType | undefined>(undefined);

export function EnneagramProvider({ children }: { children: ReactNode }) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(null));
  const [results, setResults] = useState<EnneagramResults | null>(null);

  const setAnswer = useCallback((questionIndex: number, value: number) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = value;
      return newAnswers;
    });
  }, []);

  const calculateResults = useCallback(() => {
    // Calculate type scores
    const typeScores = calculateEnneagramType(answers);
    
    // Find primary type (type with highest score)
    let primaryType = 1;
    let highestScore = 0;
    
    Object.entries(typeScores).forEach(([type, score]) => {
      if (score > highestScore) {
        highestScore = score;
        primaryType = parseInt(type);
      }
    });
    
    // Determine wing type
    const wingType = determineWingType(primaryType, typeScores);
    
    // Set results
    setResults({
      answers,
      typeScores,
      primaryType,
      wingType
    });
  }, [answers]);

  const resetTest = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setResults(null);
  }, []);

  return (
    <EnneagramContext.Provider 
      value={{ 
        currentQuestion, 
        setCurrentQuestion, 
        answers, 
        setAnswer, 
        results, 
        calculateResults,
        resetTest
      }}
    >
      {children}
    </EnneagramContext.Provider>
  );
}

export function useEnneagram() {
  const context = useContext(EnneagramContext);
  
  if (context === undefined) {
    throw new Error("useEnneagram must be used within an EnneagramProvider");
  }
  
  return context;
}
