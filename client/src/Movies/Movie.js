import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
const Movie = (props) => {
  const [movie, setMovie] = useState([]);
  
  const id = props.match.params.id;
 
  useEffect(() => {
    
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
         
         
          
        })
        .catch(error => {
          console.error(error);
        });
       
  }, [id] );
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  
  }
  

  if (!movie || movie.length === 0) {
    return <div>Loading movie information...</div>;
  }
 
  
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <MovieCard movie = {movie} />        
      </div>
      <div className="save-button"onClick={()=>saveMovie()}>Save</div>
    </div>
  );
}

export default Movie;