import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ResultsContext = createContext();

const ResultsContextProvider = (props) => {
  const [title, setTitle] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominatedFilmList, setNominatedFilmList] = useState([]);


  const removeDuplicates = (array, key) =>{
    let lookup = new Set();
    return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
  }

  /*TODO: total number of results , is response true or false, error messages*/
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${title}&type=movie&apikey=b7e174c6`)
      .then((response) => {
        setSearchList(removeDuplicates(response.data.Search, 'imdbID'));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title]);

  return (
    <ResultsContext.Provider
      value={{
        searchList,
        title,
        setTitle,
        nominatedFilmList,
        setNominatedFilmList,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
