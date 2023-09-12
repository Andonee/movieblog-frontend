import React from "react";
import styles from "./Header.module.scss";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* @ts-expect-error Async Server Component */}
      <Navigation />
    </header>
  );
};

export default Header;
