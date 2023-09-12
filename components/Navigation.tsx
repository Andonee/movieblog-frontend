import React from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { fetchAPI } from "@/app/utils/fetch-api";
import type { Nav } from "@/app/types";

export default async function Navigation() {
  const { data } = await fetchData();
  return (
    <ul className={styles.nav}>
      {data.map((nav: Nav) => {
        return (
          <Link key={nav.id} href={nav.attributes.slug}>
            {nav.attributes.title}
          </Link>
        );
      })}
    </ul>
  );
}

async function fetchData() {
  const response = await fetchAPI("/navigations", {}, { method: "GET" });
  return response;
}
