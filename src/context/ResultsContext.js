import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ResultsContext = createContext();

const ResultsContextProvider = (props) => {
  const [noResults, setNoResults] = useState(false);
  const [errorBanner, setErrorBanner] = useState(false);
  const [title, setTitle] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominatedFilmList, setNominatedFilmList] = useState([]);

  //Removes Duplicates from the API search results
  const removeDuplicates = (array, key) => {
    let lookup = new Set();
    return array.filter((obj) => !lookup.has(obj[key]) && lookup.add(obj[key]));
  };

  //checks local storage for nominations
  const checkForNominations = () => {
    let i;
    for (i = 0; i < 5; i++) {
      if (localStorage.getItem(`nominatedFilm${i}`) !== null) {
        let localStorageObject = JSON.parse(
          localStorage.getItem(`nominatedFilm${i}`)
        );
        //this is wrong
        setNominatedFilmList([...nominatedFilmList, localStorageObject]);
      }
      console.log(nominatedFilmList);
    }
  };

  useEffect(() => {
    checkForNominations();
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${title}&type=movie&apikey=b7e174c6`)
      .then((response) => {
        if (response.data.Response === "True") {
          let movieData = response.data.Search;
          let uniqueMovies = removeDuplicates(movieData, "imdbID");
          setSearchList(uniqueMovies);
        } else if (response.data.Response === "False") {
          setNoResults(true);
        }
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
        errorBanner,
        setErrorBanner,
        noResults,
        setNoResults,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
