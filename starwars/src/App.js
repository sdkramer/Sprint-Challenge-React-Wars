import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import SonnetsList from "./components/SonnetsList";
import Character from './components/Character';
import Search from './components/Search';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [sonnetsList, setSonnetsList] = useState(null)

  const [searchTerm, setSearchTerm] = useState('')

  // Fetch sonnetsList from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("http://poetrydb.org/author,title/Shakespeare;Sonnet")
    .then((res) => {
      
      setSonnetsList(res.data);
      console.log(res.data);
    })
    .catch((err) => {

    })
  }, []);

  // {sonnetsList && sonnetsList.map(item => console.log(item.title))};

  return (
    <React.Fragment>

    <div className="App">
      <h1 className="Header">Sonnets of Shakespeare</h1>
  {/* <h2>{sonnetsList && `${(sonnetsList[0]).name}`}</h2> */}
    </div>
    <div>
      <Search setSearchTerm={setSearchTerm} />
      <SonnetsList sonnetsList={sonnetsList} />
     <Character sonnetsList={sonnetsList}/>

    </div>
    </React.Fragment>

  );
}

export default App;
