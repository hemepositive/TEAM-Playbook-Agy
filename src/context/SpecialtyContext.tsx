import React, { createContext, useContext, useState } from 'react';

export type Specialty = 'all' | 'ortho' | 'spine' | 'cardiac' | 'general';

interface SpecialtyContextType {
  specialty: Specialty;
  setSpecialty: (specialty: Specialty) => void;
}

const SpecialtyContext = createContext<SpecialtyContextType | undefined>(undefined);

export const SpecialtyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [specialty, setSpecialty] = useState<Specialty>('all');

  return (
    <SpecialtyContext.Provider value={{ specialty, setSpecialty }}>
      {children}
    </SpecialtyContext.Provider>
  );
};

export const useSpecialty = () => {
  const context = useContext(SpecialtyContext);
  if (!context) throw new Error('useSpecialty must be used within SpecialtyProvider');
  return context;
};
