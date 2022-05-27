import React, { createContext, useState } from 'react';

type LoadContextProps = {
  children: React.ReactNode;
};

type LoadContextType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const initialValues = {
  isLoading: false,
  setIsLoading: () => undefined
};

export const LoadContext = createContext<LoadContextType>(initialValues);

export default function LoadContextProvider({ children }: LoadContextProps) {
  const [isLoading, setIsLoading] = useState(initialValues.isLoading);

  return (
    <LoadContext.Provider
      value={{
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </LoadContext.Provider>
  );
}
