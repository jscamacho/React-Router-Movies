import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import {Route} from 'react-router-dom'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='\' components = {Movielist} />
      <Route path ='/movies/:id' render = {props => (
        <Movie {...props} addToSavedList= {this.addToSavedList} />
      )} />
    </div>
  );
};

export default App;
