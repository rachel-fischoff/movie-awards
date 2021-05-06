import React, { createContext, useEffect, useState } from "react";

export const ResultsContext = createContext();

const ResultsContextProvider = (props) => {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominatedFilmList, setNominatedFilmList] = useState([]);

  useEffect(() => {
    //switch to axios ? for chrome
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=b7e174c6`)
      .then((res) => res.json())
      .then(
        (result) => {
          //TODO: not return duplicates
          // pagination ?
          setSearchList(result.Search);
        },
        (error) => {
          //TODO - use error messaging somewhere
          setError(error);
        }
      );
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
