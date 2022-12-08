import React from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <MovieList />
    </div>
  );
};

export default Home;
