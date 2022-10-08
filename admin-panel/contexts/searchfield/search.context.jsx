import { useState, createContext } from "react";

export const SearchContext = createContext({ searchfield: null });

export const SearchField = ({ children }) => {
  const [searchfield, Setsearchfield] = useState("");
  const value = { searchfield, Setsearchfield };
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
