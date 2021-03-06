import "./App.css";
import ResultsContextProvider from "./context/ResultsContext";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
import Divider from "@material-ui/core/Divider";
import Container from '@material-ui/core/Container';

function App() {
  return (
    <ResultsContextProvider>
      <main className="App">
        <header className="App-header">The Shoppies</header>
        <Divider />
        <SearchBar />
        <Divider />
        <Container>
        <Nominations />
        <Results />
        </Container>
      </main>
    </ResultsContextProvider>
  );
}

export default App;
