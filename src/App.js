import "./App.css";
import ResultsContextProvider from "./context/ResultsContext";
import SearchBar from "./components/SearchBar";
import Results from './components/Results';
import Nominations from './components/Nominations';

function App() {
  return (
    <ResultsContextProvider>
      <div className="App">
        <header className="App-header">The Shoppies</header>
        <SearchBar />
        <Results/>
        <Nominations/>
      </div>
    </ResultsContextProvider>
  );
}

export default App;
