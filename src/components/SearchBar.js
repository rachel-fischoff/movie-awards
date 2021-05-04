import React, { useContext, useRef } from "react";
import { ResultsContext } from "../context/ResultsContext";

export default function SearchBar() {
  const { setTitle } = useContext(ResultsContext);

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(inputRef.current.value);
  };

  return (
    <div>
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
    </div>
  );
}
