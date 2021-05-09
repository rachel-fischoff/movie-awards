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

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    display: "inline-block",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#778899",
  },
  media: {
    height: 200,
    width: 100,
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
      setNominatedFilmList([
        ...nominatedFilmList,
        {
          title: movie.Title,
          year: movie.Year,
          id: movie.imdbID,
        },
      ]);
    } else if ((nominatedFilmList.length = 5)) {
      setErrorBanner(true);
    }
  };

  return (
    <div>
      <Typography variant="h5">Results for {title}</Typography>
      {searchList &&
        searchList.map((movie) => (
          <Card className={classes.root} key={movie.imdbID}>
            <CardActionArea>
              <CardContent>
                {/* //TODO: center image */}
                <CardMedia
                  className={classes.media}
                  image={movie.Poster}
                  title="Movie Poster"
                />
                <Typography gutterBottom variant="body1">
                  {movie.Title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
    </div>
  );
}
