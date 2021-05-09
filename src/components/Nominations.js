import React, { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";
import NominationsCard from "./NominationCard";
import Typography from "@material-ui/core/Typography";

export default function Nominations() {
  const { nominatedFilmList } = useContext(ResultsContext);

  return (
    <div>
      <Typography variant="h5">Nominations</Typography>
      {nominatedFilmList.length < 6 ? (
        <NominationsCard />
      ) : (
        <div>
          <p>you've already entered 5</p>{" "}
          <NominationsCard /> 
          {/* TODO: ADD NominationsCard component & the logic for over 5 on the list   */}
       
        </div>
      )}
    </div>
  );
}
