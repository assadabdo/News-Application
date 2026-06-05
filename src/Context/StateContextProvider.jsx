import React from "react";

import { Select } from "@mui/material";
import { useState, useContext, createContext } from "react";
export const StateContext = createContext();

// const baseUrl = "https://newsapi.org/v2/top-headlines?";

export const StateContextProvider = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  // I want to pass closeMenu function which is declared in NavBar to be used in NewsCrad.jsx
  const [results, setResults] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async ({ selected }) => {
    setLoading(true);

    const response = await fetch(
      `/.netlify/functions/call?selected=${selected}`,
    );

    const message = await response.json();

    setResults(message);
    setLoading(false);
    console.log(message, "RES");
    console.log(selected, "se");
  };
  return (
    <StateContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        setLoading,
        Loading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
