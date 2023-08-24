import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  return (
    <div>
      <h3>List of Movies</h3>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesList



