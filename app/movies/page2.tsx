"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Movie } from "../types";
import { fetchAPI } from "../utils/fetch-api";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await fetchData(page);
      setMovies(data);
    };
    getData();
  }, [page]);

  const onNextPagehandler = () => {
    setPage((prevState) => ++prevState);
  };

  const onPreviousPagehandler = () => {
    if (page === 1) return;
    setPage((prevState) => --prevState);
  };

  return (
    <>
      <ol className="container box movies">
        {movies.map((movie: Movie) => {
          return <li key={movie.id}>{movie.attributes.title}</li>;
        })}
      </ol>
      <div className="buttons">
        <button onClick={onPreviousPagehandler}>Previous</button>
        <button onClick={onNextPagehandler}>Next</button>
      </div>
    </>
  );
};

export default Movies;

async function fetchData(page: number) {
  const startPage = page === 1 ? 0 : (page - 1) * 3;
  const response = await fetchAPI(
    `/movies?pagination[start]=${startPage}&pagination[limit]=3`,
    {},
    { method: "GET" }
  );
  return response;
}
