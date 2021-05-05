import React, { useContext, useState, useEffect } from "react";
import { ResultsContext } from "../context/ResultsContext";

export default function Results() {
  const { searchList, setNominatedFilmList, nominatedFilmList } = useContext(ResultsContext);

  const [nominatedFilm, setNominatedFilm] = useState()
  
  const handleNomination = (e) => {
    e.preventDefault();
    setNominatedFilm({title: e.target.name, year: e.target.value});
    nominatedFilmList.push(nominatedFilm);
    console.log(nominatedFilmList)
  }

  return (
    <div>
        Results
      <ul>
        {searchList && searchList.map((item) => (
          <li key={item.imdbID}>
            {item.Title} ({item.Year})
            <button onClick={handleNomination} name={item.Title} value={item.Year}>
                Nominate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
