"use client";

import type { SectionName } from "@/lib/Types";
import React, { useState, createContext, useContext } from "react";

// type SectionName = (typeof links)[number]["name"];

type ActiveSectionProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeLastClick: number;
  setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionCon = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContext({ children }: ActiveSectionProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeLastClick, setTimeLastClick] = useState(0);

  return (
    <ActiveSectionCon.Provider
      value={{
        activeSection,
        setActiveSection,
        timeLastClick,
        setTimeLastClick,
      }}
    >
      {children}
    </ActiveSectionCon.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionCon);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
