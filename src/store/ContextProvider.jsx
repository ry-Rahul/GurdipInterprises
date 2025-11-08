import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Context.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
