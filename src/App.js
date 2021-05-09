import "./App.css";
import ResultsContextProvider from "./context/ResultsContext";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

function App() {
  return (
    <ResultsContextProvider>
      <main className="App">
        <header className="App-header">The Shoppies</header>
        <Divider />
        <SearchBar />
        <Divider />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item  >
            <Results />
          </Grid>
          <Grid item >
            <Nominations />
          </Grid>
        </Grid>
      </main>
    </ResultsContextProvider>
  );
}

export default App;
