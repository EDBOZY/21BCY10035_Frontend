import Navbar from "./Pages/Navbar/Navbar";
import "./App.css";
// import Line from "./Pages/Line";
// import Home from "./Pages/Home";
import Line from "./Components/Line";
import Home from "./Pages/Home/Home";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTotals, setSearchTotals] = useState();
  const [searchName, setSearchName] = useState("");


  const handleSearchResults = (results) => {
    setSearchResults(results);
  };
  const handleSearchTotals = (results) => {
    setSearchTotals(results);
  };
  const handleSearchName = (results) => {
    setSearchName(results);
  };
  return (
    <div>
    <Navbar onSearchResults={handleSearchResults} onSearchTotals={handleSearchTotals} onSearchName={handleSearchName} />
    <Line/>
    <Home results={searchResults} total={searchTotals} name={searchName}/>
    
    </div>
  );
}

export default App;
