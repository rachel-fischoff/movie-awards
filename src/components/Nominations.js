import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";
import NominationsCard from "./NominationCard";
import Typography from "@material-ui/core/Typography";

export default function Nominations() {
  const { nominatedFilmList } = useContext(ResultsContext);

  return (
    <div>
      <Typography variant="h5">Nominations</Typography>
      {nominatedFilmList.length > 0 ? (
        <NominationsCard />
      ) : (
        <Typography>
          {" "}
          Please search for film to nominate for The Shoppies Movie Awards!{" "}
        </Typography>
      )}
    </div>
  );
}
