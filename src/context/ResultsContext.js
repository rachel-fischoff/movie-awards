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
          setSearchList(result.Search);
        },
        (error) => {
          setError(error);
        }
      );
  }, [title]);

  useEffect(() => {
    if (nominatedFilmList.length > 0) {
      //do something
    }
  }, [nominatedFilmList]);

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

/*   if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {searchList.map((item) => (
          <li key={item.imdbID}>{item.Title} {item.Year}</li>
        ))}
      </ul>
    );
  }
  */
