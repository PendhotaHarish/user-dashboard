import styles from "./SideBar.module.css";
import {
  TbBoxModel,
  TbCoins,
  TbDashboard,
  TbHelp,
  TbHome,
  TbPercentage,
  TbUser,
} from "react-icons/tb";
import { FaGreaterThan } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
function SideBar({ openSidebarToggle, OpenSidebar }) {
  const sideBarData = [
    {
      icon: <TbHome />,
      heading: "Dashboard",
      icons: <FaGreaterThan />,
    },
    {
      icon: <TbBoxModel />,
      heading: "Product",
      icons: <FaGreaterThan />,
    },
    {
      icon: <TbUser />,
      heading: "Customers",
      icons: <FaGreaterThan />,
    },
    {
      icon: <TbCoins />,
      heading: "Income",
      icons: <FaGreaterThan />,
    },
    {
      icon: <TbPercentage />,
      heading: "Promote",
      icons: <FaGreaterThan />,
    },
    {
      icon: <TbHelp />,
      heading: "Help",
      icons: <FaGreaterThan />,
    },
  ];
  return (
    <div
      className={`${styles.side} ${
        openSidebarToggle ? styles.sidebarResponsive : ""
      }`}
    >
      <div className={styles.sideMenu}>
        <TbDashboard className={styles.sideIcon} />
        <h2>Dashboard</h2>
        <IoMdClose className={styles.closeIcon} onClick={OpenSidebar} />
      </div>
      <div className={styles.sideList}>
        {sideBarData.map((item, index) => (
          <a
            href="#"
            className={`${styles.sideItem} ${
              index === 0 ? styles.sideDash : ""
            }`}
            key={index}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.sideHeading}>{item.heading}</span>
            {index !== 0 && <span className={styles.icons}>{item.icons}</span>}
          </a>
        ))}
      </div>
      <div className={styles.user}>
        <img src="/img-1.jpg" alt="hello user" className={styles.userImage} />
        <h3 className={styles.userName}>
          <span>Harish</span> <br></br>Software Engineer
        </h3>

        <RiArrowDropDownLine className={styles.userIcon} />
      </div>
    </div>
  );
}
export default SideBar;
