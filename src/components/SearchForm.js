import React from "react";
import "./SearchForm.css";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <section className='form'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Movie Search'
          className='search'
          value={query}
          onChange={changeHandler}
        />
        {error.show && <div className='error'>{error.msg}</div>}
      </form>
    </section>
  );
};

export default SearchForm;
