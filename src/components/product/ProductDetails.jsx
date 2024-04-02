import React from "react";
import { TbSearch } from "react-icons/tb";
import styles from "./ProductDetails.module.css";
import ProductTable from "./ProductTable";

export default function ProductDetails() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productHeading}>
        <h4 className={styles.productTitle}>Product Sell</h4>
        <div className={styles.productSearch}>
          <TbSearch className={styles.productIcon} />
          <input
            type="text"
            placeholder="search"
            className={styles.productInput}
          />
        </div>
        <select className={styles.productSelect}>
          <option value="one">Last 30 days</option>
          <option value="two">Last 15 days</option>
          <option value="three">Last 10 days</option>
        </select>
      </div>
      <ProductTable />
    </div>
  );
}
