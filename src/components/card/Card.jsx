import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import styles from "./Card.module.css";

export default function Card() {
  const cardData = [
    {
      cardIcon: <AiOutlineDollar />,
      title: "Earning",
      amount: "$198k",
      icon: <BiUpArrowAlt />,
      percentage: "37.8%",
      message: "this month",
    },
    {
      cardIcon: <TiDocumentText />,
      title: "Orders",
      amount: "$2.4k",
      icon: <BiDownArrowAlt />,
      percentage: "2%",
      message: "this month",
    },
    {
      cardIcon: <MdOutlineAccountBalanceWallet />,
      title: "Balance",
      amount: "$2.4k",
      icon: <BiDownArrowAlt />,
      percentage: "2%",
      message: "this month",
    },
    {
      cardIcon: <IoBagOutline />,
      title: "Total Sales",
      amount: "$89k",
      icon: <BiUpArrowAlt />,
      percentage: "11%",
      message: "this month",
    },
  ];
  return (
    <div className={styles.cardContainer}>
      {cardData.map((cardItem, index) => (
        <div className={styles.card} key={index}>
          <div
            className={` ${styles.cardIcon} ${
              index === 1
                ? styles.cardIconTwo
                : index === 2
                ? styles.cardIconThree
                : index === 3
                ? styles.cardIconFour
                : ""
            }`}
          >
            {cardItem.cardIcon}
          </div>
          <div className={styles.cardDetails}>
            <h4 className={styles.title}>{cardItem.title}</h4>
            <h4 className={styles.amount}>{cardItem.amount}</h4>
            <div className={styles.cardPercentage}>
              <h4
                className={`${styles.icon} ${
                  index === 1 || index === 2 ? styles.redIcon : ""
                }`}
              >
                {cardItem.icon}
              </h4>
              <h4
                className={`${styles.percentage} ${
                  index === 1 || index === 2 ? styles.redPercentage : ""
                }`}
              >
                {cardItem.percentage}
              </h4>
              <h4 className={styles.message}>{cardItem.message}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
