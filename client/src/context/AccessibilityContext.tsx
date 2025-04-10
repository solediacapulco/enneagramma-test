import React, { createContext, useState, useContext, ReactNode } from "react";

type FontSizeType = "normal" | "large" | "xlarge";
type ContrastType = "normal" | "high";

interface AccessibilityContextType {
  fontSize: FontSizeType;
  setFontSize: (size: FontSizeType) => void;
  contrast: ContrastType;
  setContrast: (contrast: ContrastType) => void;
  readAloud: boolean;
  setReadAloud: (readAloud: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSizeType>("normal");
  const [contrast, setContrast] = useState<ContrastType>("normal");
  const [readAloud, setReadAloud] = useState<boolean>(false);

  return (
    <AccessibilityContext.Provider 
      value={{ 
        fontSize, 
        setFontSize, 
        contrast, 
        setContrast, 
        readAloud, 
        setReadAloud 
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  
  return context;
}
