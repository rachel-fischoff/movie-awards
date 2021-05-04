import "./App.css";
import ResultsContextProvider from "./context/ResultsContext";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <ResultsContextProvider>
      <div className="App">
        <header className="App-header">The Shoppies</header>
        <SearchBar />
      </div>
    </ResultsContextProvider>
  );
}

export default App;
