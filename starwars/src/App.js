import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import NameList from "./components/NameList"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null)

  const [searchTerm, setSearchTerm] = useState('')

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/?")
    .then((res) => {
      
      setCharacters(res.data.results);
      console.log((res.data.results[0]).name);
    })
    .catch((err) => {

    })
  }, []);

  return (
    <React.Fragment>

    <div className="App">
      <h1 className="Header">Characters from Star Wars</h1>
  <h2>{`${(res.data.results[0]).name}`}</h2>
    </div>
    <div>
      {/* <NameList characters={characters} /> */}

    </div>
    </React.Fragment>

  );
}

export default App;
