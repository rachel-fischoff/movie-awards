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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  actions: {
    justifyContent: "center",
  },
});

export default function Results() {
  const classes = useStyles();
  const { searchList, nominatedFilmList, setNominatedFilmList } = useContext(
    ResultsContext
  );

  const handleNomination = (movie) => {
    setNominatedFilmList([
      ...nominatedFilmList,
      {
        title: movie.Title,
        year: movie.Year,
        id: movie.imdbID,
      },
    ]);
  };

  return (
    <div>
      <Typography variant="h5">
        Results
      </Typography>
      {searchList &&
        searchList.map((movie) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={movie.Poster}
                title="Movie Poster"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
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
                //TODO: create logic to disable only one button at a time
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
