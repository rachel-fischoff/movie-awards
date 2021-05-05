import React, { useContext, useState, useEffect } from "react";
import { ResultsContext } from "../context/ResultsContext";

export default function Results() {
  const { searchList, setNominatedFilmList, nominatedFilmList } = useContext(
    ResultsContext
  );

  const handleNomination = (e) => {
    e.preventDefault();
    nominatedFilmList.push({ title: e.target.name, year: e.target.value });
    console.log(nominatedFilmList);
  };

  return (
    <div>
      Results
      <ul>
        {searchList &&
          searchList.map((item) => (
            <div>
              <img src = {item.Poster} alt="movie-poster"/>
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
              </li>
              <button
                onClick={handleNomination}
                name={item.Title}
                value={item.Year}
                //TODO: create logic to disable only one button at a time
                // disabled={}
              >
                Nominate
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
}
