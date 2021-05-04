import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";

export default function Results() {
  const { searchList } = useContext(ResultsContext);

  return (
    <div>
        Results
      <ul>
        {searchList && searchList.map((item) => (
          <li key={item.imdbID}>
            {item.Title} {item.Year} 
            <button>
                Nominate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
