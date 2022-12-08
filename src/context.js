import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=b4550413`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("stargate");
  const [error, setError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setError({ show: true, msg: response.data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, setMovies, query, setQuery, error }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
