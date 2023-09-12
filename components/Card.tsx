import { Movie } from "@/app/types";
import React from "react";
import styles from "./Card.module.scss";
import Link from "next/link";

type CardProps = Movie;

export const Card = (props: CardProps) => {
  const { attributes } = props;
  const { title, poster, description, slug, genre } = attributes;
  const genreType = (genre as any).data.attributes.Slug;
  const API_URL = process.env.API_URL;

  return (
    <div className={styles.Card}>
      {poster?.data?.attributes.url && (
        <div className="poster">
          <img src={API_URL + poster.data.attributes.url} alt="" />
        </div>
      )}
      <div className="body">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <Link href={`/movies${genreType}/${slug}`}>More about this movie</Link>
      </div>
    </div>
  );
};
