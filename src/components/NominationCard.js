import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#E0E0E0",
  },
  actions: {
    justifyContent: "center",
  },
});

export default function NominationCard() {
  const classes = useStyles();
  const { nominatedFilmList, setNominatedFilmList } = useContext(
    ResultsContext
  );

  const removeNomination = (movie) => {
    const filteredArray = nominatedFilmList.filter(
      (element) => element.id !== movie.id
    );
    setNominatedFilmList(filteredArray);
    //remove from local storage
    localStorage.removeItem(
      //This is wrong
      `nominatedFilm${movie.id}`
    );
  };

  return (
    <div>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        {nominatedFilmList &&
          nominatedFilmList.map((movie) => (
            <Grid item xs={6} md={3} key={movie.id}>
              <Card className={classes.root} variant="outlined" >
                <CardContent>
                  <Typography className={classes.title}>
                    {movie.year}
                  </Typography>
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
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
