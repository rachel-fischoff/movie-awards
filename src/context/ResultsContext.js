import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ResultsContext = createContext();

const ResultsContextProvider = (props) => {
  const [title, setTitle] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominatedFilmList, setNominatedFilmList] = useState([]);


  /*TODO: pagination?, total number of results , is response true or false, error messages
  don't return duplicates*/
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${title}&type=movie&apikey=b7e174c6`)
      .then(response => {
          setSearchList(response.data.Search);
        }).catch(error=>{console.log(error)})
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
