import { createContext, useContext, useState } from "react";

export const AlreadyInLibraryContext = createContext();

export default function AlreadyInLibraryProvider({ children }) {
  const [isInLibrary, setIsInLibrary] = useState(false);
  return (
    <AlreadyInLibraryContext.Provider value={{ isInLibrary, setIsInLibrary }}>
      {children}
    </AlreadyInLibraryContext.Provider>
  );
}

export const useIsInLibrary = () => useContext(AlreadyInLibraryContext);
