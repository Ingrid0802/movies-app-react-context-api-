import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ Poster, Title, imdbID }) => {
  return (
    <div className='movie-card'>
      <Link to={`/movies/${imdbID}`} className='link'>
        <img className='img' src={Poster} alt={Title} />
      </Link>
      <Link to={`/movies/${imdbID}`} className='link'>
        <h4>{Title}</h4>
      </Link>
    </div>
  );
};

export default MovieCard;
