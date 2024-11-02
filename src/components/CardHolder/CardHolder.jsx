import React from "react";
import styles from "./CardHolder.module.css";

const Card = ({ title, icon, details }) => {
  return (
    <div className={styles.cardHolder}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDetails}>{details}</p>
    </div>
  );
};

export default Card;
