import ttuLogo from "./assets/ttuLogo.png";
// import './css/App.css';
import './css/dmfr.css';
import SearchBar from './components/searchBar.js';
import Instructions from "./components/instructions";
import FundSelection from "./components/fundSelection.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={ttuLogo} alt="Double T Small" />
        <h4>Fund Group Query</h4>
      </header>
      <Instructions></Instructions>
      <SearchBar></SearchBar>
      <FundSelection></FundSelection>
    </div>
  );
}

export default App;
