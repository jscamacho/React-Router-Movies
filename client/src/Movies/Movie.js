import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    console.log(id);

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        console.log(response)
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }, [props.match.params.id]);


    const saveMovie = () => {
      const addToSavedList = props.addToSavedList;
      addToSavedList(movie)
    }
  
    if (!movie) {
      return <div>Loading movie information...</div>;
    }
    return (
    <MovieCard movie={movie} saveLink={true} saveMovie={saveMovie} />
    );
  }
  
  export default Movie;
  