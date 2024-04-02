import React from "react";
import { TbSearch } from "react-icons/tb";
import styles from "./NavBar.module.css";
import { IoMdMenu } from "react-icons/io";

export default function NavBar({ OpenSidebar }) {
  return (
    <div className={styles.navHeader}>
      <h1 className={styles.navTitle}>
        <IoMdMenu className={styles.menuIcon} onClick={OpenSidebar} /> Hello
        Harish 👋,
      </h1>
      <div className={styles.navSearch}>
        <TbSearch className={styles.navIcon} />
        <input
          type="text"
          placeholder="search"
          className={styles.navInput}
        ></input>
      </div>
    </div>
  );
}
