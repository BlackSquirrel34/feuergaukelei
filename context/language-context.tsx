"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Language = "en" | "de";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  currentlanguage: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [currentlanguage, setCurrentLanguage] = useState<Language>("de");

  const toggleLanguage = () => {
    setCurrentLanguage(currentlanguage === 'en' ? 'de' : 'en');
    };

  return (
    <LanguageContext.Provider value={{ currentlanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}