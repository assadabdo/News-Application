import { useState, useContext, createContext } from "react";
export const StateContext = createContext();

import React from "react";
const baseUrl = "https://newsapi.org/v2/top-headlines?";

export const StateContextProvider = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  // I want to pass closeMenu function which is declared in NavBar to be used in NewsCrad.jsx
  const [results, setResults] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "X-Api-Key": "056440289f67420182b718787d67a819",
      },
    });

    const data = await res.json();
    setResults(data);
    setLoading(false);
    console.log(data, "RES");
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
