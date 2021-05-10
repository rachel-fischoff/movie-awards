import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";
import NominationsCard from "./NominationCard";
import Typography from "@material-ui/core/Typography";
import Banner from "./Banner";
import ErrorBanner from './ErrorBanner';

export default function Nominations() {
  const { nominatedFilmList, errorBanner } = useContext(ResultsContext);

  return (
    <div>
      <Typography variant="h5">Nominations</Typography>
      {nominatedFilmList.length > 0 ? (
        <NominationsCard />
      ) : (
        <Typography>
          {" "}
          Please search for films to nominate for The Shoppies Movie Awards!{" "}
        </Typography>
      )}
      {nominatedFilmList.length === 5 ? <Banner /> : null}
      {errorBanner ? <ErrorBanner/> : null}
    </div>
  );
}
