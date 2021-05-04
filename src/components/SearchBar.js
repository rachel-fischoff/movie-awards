import React, { useEffect, useState } from "react";

export default function SearchBar() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState('ram');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=b7e174c6`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSearchList(result.Search);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
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
}
