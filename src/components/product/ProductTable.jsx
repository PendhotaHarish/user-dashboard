import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./ProductTable.module.css";

const rows = [
  {
    image: "/assets/imageOne.jpg",
    title: "Abstract 3D",
    subTitle: "It is a 3D Computer",
    stock: "32 in stock",
    price: "$ 45.99",
    totalSales: 20,
  },
  {
    image: "/assets/imageOne.jpg",
    title: "Every Day Hero",
    subTitle: "It is about our life",
    stock: "33 in stock",
    price: "$ 40.99",
    totalSales: 30,
  },
];

export default function ProductTable() {
  return (
    <TableContainer component={Paper} className={styles.tableHead}>
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h3 className={styles.mainHead}>Product Name</h3>
            </TableCell>
            <TableCell align="right">
              <h3 className={styles.rowHead}>Stock</h3>
            </TableCell>
            <TableCell align="right">
              <h3 className={styles.rowHead}>Price</h3>
            </TableCell>
            <TableCell align="right">
              <h3 className={styles.rowHead}>Total Sales</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles.tableBody}>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className={styles.tableContainers}>
                  <img
                    src={row.image}
                    alt={row.title}
                    className={styles.tableImg}
                  />
                  <div className={styles.tableSubContainer}>
                    <h4 className={styles.productName}>{row.title}</h4>
                    <h4 className={styles.productInfo}>{row.subTitle}</h4>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">
                <h5 className={styles.productStock}>{row.stock}</h5>
              </TableCell>
              <TableCell align="right">
                <h5 className={styles.productPrice}>{row.price}</h5>
              </TableCell>
              <TableCell align="right">
                <h5 className={styles.productSales}>{row.totalSales}</h5>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
