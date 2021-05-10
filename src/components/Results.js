import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    height: "auto",
    width: "auto",
    maxWidth: 200,
    maxHeight: 400,
    display: "inline-block",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#E0E0E0",
    padding: "5px",
  },
  media: {
    height: 150,
    width: 75,
  },
  title: {
    padding: "10px",
    wordWrap: "break-word",
  },
  actions: {
    justifyContent: "center",
  },
});

export default function Results() {
  const classes = useStyles();
  const {
    title,
    searchList,
    nominatedFilmList,
    setNominatedFilmList,
    setErrorBanner,
  } = useContext(ResultsContext);

  const handleNomination = (movie) => {
    if (nominatedFilmList.length <= 4) {
      let nominatedObject = {
        title: movie.Title,
        year: movie.Year,
        id: movie.imdbID,
      };
      setNominatedFilmList([...nominatedFilmList, nominatedObject]);
      //set to local storage for persistent state
      localStorage.setItem(
        `nominatedFilm${movie.imdbID}`,
        JSON.stringify(nominatedObject)
      );
      //if you already have 5 movies nominated an error banner will appear
    } else if ((nominatedFilmList.length = 5)) {
      setErrorBanner(true);
    }
  };

  return (
    <div>
      <Typography variant="h5">Results for {title}</Typography>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item>
          {searchList &&
            searchList.map((movie) => (
              <Card className={classes.root} key={movie.imdbID}>
                <CardActionArea>
                  <CardContent>
                    {movie.Poster === "N/A" ? (
                      <Typography variant="h6">No Preview Available</Typography>
                    ) : (
                      <CardMedia
                        className={classes.media}
                        image={movie.Poster}
                        title="Movie Poster"
                      />
                    )}
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="body1"
                    >
                      {movie.Title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {movie.Year}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.actions}>
                  <Button
                    type="button"
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => handleNomination(movie)}
                    disabled={
                      nominatedFilmList &&
                      !!nominatedFilmList.find(
                        (nominated) => nominated.id === movie.imdbID
                      )
                    }
                  >
                    Nominate
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Grid>
      </Grid>
    </div>
  );
}
