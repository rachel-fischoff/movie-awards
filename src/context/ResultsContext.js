import React, { createContext, useEffect, useState } from 'react'

export const ResultsContext = createContext ();

const ResultsContextProvider = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [title, setTitle] = useState('');
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
      }, [title]);


      return (
          <ResultsContext.Provider value = {{ searchList, title, setTitle}}>
              {props.children}
            </ResultsContext.Provider>
      )

}

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