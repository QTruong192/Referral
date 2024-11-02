import React from "react";
import CardHolder from "../CardHolder/CardHolder";
import CardData from "../../data/CardTest";
import styles from "./CardList.module.css";
import { FaLightbulb } from "react-icons/fa";

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <h2 className={styles.cardTitle}>
        <span className={styles.logo}>
          <FaLightbulb />
        </span>
        How It Works?
      </h2>
      <div className={styles.cardWrapper}>
        {CardData.map((card, index) => (
          <CardHolder key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
