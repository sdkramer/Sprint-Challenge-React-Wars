import React, { useEffect } from 'react';
import './App.css';
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/?")
    .then((res) => {
      console.log(res.data.results[3].homeworld);
    })
    .catch((err) => {

    })
  }


  )

  return (
    <div className="App">
      <h1 className="Header">Characters from Star Wars</h1>
    </div>
  );
}

export default App;
