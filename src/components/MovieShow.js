import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movie_id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(movie_id));

  return (
    <div>
      <h3>Movie Details</h3>
      {movie ? (
        <div>
          <h4>Title: {movie.title}</h4>
          <p>ID: {movie.id}</p>
        </div>
      ) : (
        <div>Movie not found</div>
      )}
    </div>
  )
}

export default MovieShow
