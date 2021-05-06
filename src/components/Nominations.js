import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  actions: {
    justifyContent: "center",
  },
});

export default function Nominations() {
  const classes = useStyles();
  const { nominatedFilmList, setNominatedFilmList } = useContext(
    ResultsContext
  );

  const removeNomination = (movie) => {
    const filteredArray = nominatedFilmList.filter(
      (element) => element.id !== movie.id
    );
    setNominatedFilmList(filteredArray);
  };

  return (
    <div>
      <Typography variant="h5">
        Nominations
      </Typography>
      {/* //TODO: fix that when the user clicks over 5 nominations an error banner appears 
      nominatedFilmList.length <= 5 */}
      { (nominatedFilmList.length > 0)
        ? nominatedFilmList.map((movie) => (
            <Card className={classes.root} variant="outlined" key={movie.id}>
              <CardContent>
                <Typography className={classes.title}>{movie.year}</Typography>
                <Typography variant="h5" component="h2">
                  {movie.title}
                </Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => removeNomination(movie)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          ))
        : null}
    </div>
  );
}
