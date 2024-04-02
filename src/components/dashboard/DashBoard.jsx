import styles from "./DashBoard.module.css";
import NavBar from "../navbar/NavBar";
import Card from "../card/Card";
import Charts from "../charts/Charts";
import ProductDetails from "../product/ProductDetails";

function DashBoard({ OpenSidebar }) {
  return (
    <div className={styles.dashboard}>
      <NavBar OpenSidebar={OpenSidebar} />
      <Card />
      <Charts />
      <ProductDetails />
    </div>
  );
}
export default DashBoard;
