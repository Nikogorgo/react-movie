import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
  const [ state, setState ] = useState({
    s: " ",
    results: [],
    selected:{}
  });

  const apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=8f3d9bd7";
  
  const search = (e) => {
    if (e.key === "Enter" ){
      axios(`${apiURL}&s=${state.s}`).then(({data}) => {
        let results = data.Search;
        console.log(results);
        if(results == undefined){
          alert('We can\'t find a move with that title');
        }else{
          setState(prevState => {
            return {...prevState, results}
          })
        }
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s}
    });
  }

  const openPopup = id => {
    axios(`${apiURL}&s=${id}`).then(({data}) => {
      let result = data;
      
      setState(prevState => {
        return {...prevState, selected: result}
      })
    })
  }

  const closePopUp = () => {
    setState(prevState => {
      return { ...prevState, selected:{}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1> Movide DB </h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/>

        {
          (typeof state.selected.Title != "undefined") ? 
            <Popup selected={state.selected} closePopup={closePopUp}/>
            :
            false 
        }
        
      </main>
    </div>
  );
}

export default App;
