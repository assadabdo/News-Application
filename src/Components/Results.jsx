import { useState } from "react";
import { NewsCard } from "./NewsCard";

import React from "react";
import { StateContext } from "../Context/StateContextProvider";
import { useContext } from "react";
import { data } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useStateContext } from "../Context/StateContextProvider";
import { Wait } from "./Wait";

export const Results = ({ selected }) => {
  const {
    getResults,
    results,
    searchTerm,
    setSearchTerm,
    setLoading,
    Loading,
  } = useStateContext();

  const location = useLocation();
  useEffect(() => {
    getResults({ selected });
  }, [selected]);

  console.log(location.pathname, "path");
  console.log(results?.articles);
  return (
    <div>
      <span>
        Latest In
        <span className="selected"> {selected}</span>
      </span>
      {Loading ? <Wait></Wait> : <NewsCard results={results}></NewsCard>}
    </div>
  );
};
