import React from "react";
import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={styles.benefitsContainer}>
      <div className={styles.benefitsWrapper}>
        <h2>
          Apply{" "}
          <span className={styles.benefitsTitle}>
            Cognit Affiliate Program{" "}
          </span>
          to get more benefits!
        </h2>
        <a className={styles.contactLink}>Contact us</a>
      </div>
    </div>
  );
};

export default Benefits;
