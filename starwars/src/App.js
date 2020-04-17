import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import NameList from "./components/NameList";
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersList, setcharactersList] = useState(null)

  const [searchTerm, setSearchTerm] = useState('')

  // Fetch charactersList from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/?")
    .then((res) => {
      
      setcharactersList(res.data.results);
      console.log((res.data.results));
    })
    .catch((err) => {

    })
  }, []);

  {charactersList && charactersList.map(item => console.log(item.name))};

  return (
    <React.Fragment>

    <div className="App">
      <h1 className="Header">charactersList from Star Wars</h1>
  {/* <h2>{charactersList && `${(charactersList[0]).name}`}</h2> */}
    </div>
    <div>
      <NameList charactersList={charactersList} />
     <Character charactersList={charactersList}/>

    </div>
    </React.Fragment>

  );
}

export default App;
