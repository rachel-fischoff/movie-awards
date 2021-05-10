import React, { useContext, useRef } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  label: {
    margin: "10px",
  },
  button: {
    margin: "10px",
  },
});

export default function SearchBar() {
  const classes = useStyles();

  const { title, setTitle, noResults } = useContext(ResultsContext);

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputLabel className={classes.label} htmlFor="title-search">
          {" "}
          Search Movie Titles{" "}
        </InputLabel>
        <input
          type="search"
          name="search-bar"
          aria-label="Search for Movie Title"
          ref={inputRef}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          aria-label="search button"
        >
          Search
        </Button>
      </form>
      <Divider />
      {/* why are you always true? */}
      {/* {noResults ? (
        <Typography variant="h6">
          No Results for {title}! Please try another Search.
        </Typography>
      ) : null} */}
    </div>
  );
}
