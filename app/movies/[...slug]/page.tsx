import { Movie } from "@/app/types";
import { fetchAPI } from "@/app/utils/fetch-api";
import React from "react";

type MovieProps = {
  params: {
    slug: Array<"genre" | "slug">;
  };
};

const Movie = async ({ params }: MovieProps) => {
  const [genre, slug] = params.slug;
  const data = await fetchData(slug);

  const { title, description } = data as Movie["attributes"];
  return (
    <div className="container">
      <h2>{title}</h2>
      <div>{description}</div>
    </div>
  );
};

export default Movie;

export async function fetchData(slug: string) {
  const response = await fetchAPI(`/movies/${slug}`, {}, { method: "GET" });
  return response;
}
