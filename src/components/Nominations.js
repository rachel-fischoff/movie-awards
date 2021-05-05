import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";

export default function Nominations() {
  const { nominatedFilmList } = useContext(ResultsContext);

  return (
    <div>
      Nominations
      <ul>
        {nominatedFilmList ?
          nominatedFilmList.map((item) => (
            <div>
              <li>
                {" "}
                {item.title} {item.year}{" "}
              </li>
              <button> Remove </button>
            </div>
          )): null}
      </ul>
    </div>
  );
}
