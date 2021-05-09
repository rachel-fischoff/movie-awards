import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorBanner() {
  const classes = useStyles();
  const { setErrorBanner} = useContext(ResultsContext);

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="error" onClose={() => {setErrorBanner(false)}}>
        <AlertTitle>You've Already Selected 5 Nominations!</AlertTitle>
        If you want to nominate this film, remove a current nomination. You can
        only nominate 5 films!
      </Alert>
    </div>
  );
}
