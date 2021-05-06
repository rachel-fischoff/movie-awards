import React, { useContext, useRef } from "react";
import { ResultsContext } from "../context/ResultsContext";
import Divider from "@material-ui/core/Divider";
import Banner from "./Banner";

export default function SearchBar() {
  const { setTitle, nominatedFilmList } = useContext(ResultsContext);

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(inputRef.current.value);
  };

  return (
    <div>
{/* //TODO: chnage to material ui  */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-search"> Movie Title </label>
        <input
          type="search"
          name="search-bar"
          aria-label="Search for Movie Title"
          ref={inputRef}
        />
        <button type="submit" aria-label="search button">
          Search
        </button>
      </form>
      <Divider/>
      {nominatedFilmList.length === 5 ? <Banner /> : null}
    </div>
  );
}
