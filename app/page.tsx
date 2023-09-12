import { Card } from "@/components/Card";
import Image from "next/image";
import styles from "./page.module.css";
import { fetchAPI } from "./utils/fetch-api";
import type { Movie } from "@/app/types";

// export const revalidate = 0;

export default async function Home() {
  const { data } = await fetchData();

  return (
    <main className="container box">
      {data.map((movie: Movie) => {
        return <Card key={movie.id} {...movie} />;
      })}
    </main>
  );
}

async function fetchData() {
  const response = await fetchAPI("/movies?populate=*", {}, { method: "GET" });
  return response;
}
