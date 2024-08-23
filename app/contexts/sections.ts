import React, { createContext, useContext, useState } from 'react';

export interface SectionType {
    currentSection: string;
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

export const SectionContext = createContext<SectionType | undefined>(undefined);

export const useSection = () => {
    const context = useContext(SectionContext);
    if (context === undefined) {
        throw new Error('context not found');
    }
    return context;
};
