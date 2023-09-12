"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Movie } from "../types";
import { fetchAPI } from "../utils/fetch-api";
import Link from "next/link";

const Movies = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log("searchParams", searchParams);
  const page =
    typeof searchParams["pagination[start]"] === "string"
      ? Number(searchParams["pagination[start]"])
      : 1;

  const limit =
    typeof searchParams["pagination[limit]"] === "string"
      ? Number(searchParams["pagination[limit]"])
      : 3;

  const { data } = await fetchData(page, limit);

  return (
    <>
      <ol className="container box movies">
        {data.map((movie: Movie) => {
          return <li key={movie.id}>{movie.attributes.title}</li>;
        })}
      </ol>
      <div className="buttons">
        <Link
          href={`/movies?pagination[start]=${
            page > 1 ? page - 1 : 1
          }&pagination[limit]=${limit}`}
        >
          Previous
        </Link>
        <Link
          href={`/movies?pagination[start]=${
            +page + 1
          }&pagination[limit]=${limit}`}
        >
          Next
        </Link>
        <Link href={`/movies?pagination[start]=${page}&pagination[limit]=3`}>
          LIMIT 3
        </Link>
        <Link href={`/movies?pagination[start]=${page}&pagination[limit]=6`}>
          LIMIT 6
        </Link>
      </div>
    </>
  );
};

export default Movies;

async function fetchData(page: number, limit: number) {
  console.log("paaage", page);
  const startPage = page === 1 ? 0 : (page - 1) * limit;
  const response = await fetchAPI(
    `/movies?pagination[start]=${startPage}&pagination[limit]=${limit}`,
    {},
    { method: "GET" }
  );
  return response;
}
