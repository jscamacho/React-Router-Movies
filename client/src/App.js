import React, {  Component } from 'react';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import MovieList from "./Movies/MovieList";

import {Route} from 'react-router-dom'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      movieInList: null
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    const find = savedList.find(el => movie.id === el.id);
    if (find) {
      this.setState({ movieInList: `You've  saved  movie!` });
      setTimeout(() => this.setState({ movieInList: null }), 2000);
    } else {
      savedList.push(movie);
    }

    this.setState({ savedList });
  };

render() {
    const { InList } = this.state;
    return (
      <div>
        {InList !== null ? (
          <h3 className="movie-warning">{InList}</h3>
        ) : null}
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
