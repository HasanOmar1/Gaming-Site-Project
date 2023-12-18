import { createContext, useContext, useState } from "react";

export const LibraryCounterContext = createContext();

export default function LibraryCounterProvider({ children }) {
  const [libraryCounter, setLibraryCounter] = useState(0);

  return (
    <LibraryCounterContext.Provider
      value={{ libraryCounter, setLibraryCounter }}
    >
      {children}
    </LibraryCounterContext.Provider>
  );
}

export const useLibraryCounter = () => useContext(LibraryCounterContext);
