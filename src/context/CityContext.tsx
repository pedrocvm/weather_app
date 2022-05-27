import React, { createContext, useState } from 'react';

type CityContextProps = {
  children: React.ReactNode;
};

type CityContextType = {
  city: string;
  setCity: (city: string) => void;
};

const initialValues = {
  city: 'Lisbon',
  setCity: () => undefined
};

export const CityContext = createContext<CityContextType>(initialValues);

export default function CityContextProvider({ children }: CityContextProps) {
  const [city, setCity] = useState(initialValues.city);

  return (
    <CityContext.Provider
      value={{
        city,
        setCity
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
