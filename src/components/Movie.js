import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../context";
import { Link } from "react-router-dom";
import "./Movie.css";

import axios from "axios";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({ show: false, msg: "" });

  const getMovie = async (url) => {
    try {
      const response = await axios.get(url);
      if (response.data.Response === "True") {
        setMovie(response.data);
      } else {
        setError({ show: true, msg: response.data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link className='btn-back' to='/'>
          back
        </Link>
      </div>
    );
  }
  return (
    <div className='single-movie-cont'>
      <section className='single-movie'>
        <div className='img-container'>
          <img src={movie.Poster} alt={movie.Title} className='details-img' />
        </div>
        <div className='movie-details'>
          <h2>
            {movie.Title}({movie.Year})
          </h2>
          <p>{movie.Plot}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Writer: {movie.Writer}</p>
          <p>IMDB rating: {movie.imdbRating}</p>
          <Link className='btn-back' to='/'>
            Back
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Movie;
