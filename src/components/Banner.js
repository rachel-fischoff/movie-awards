import React from "react";
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

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="success">
        <AlertTitle>Award Nomination Complete</AlertTitle>
        Thank you for your 5 nominations this awards season!
      </Alert>
    </div>
  );
}
