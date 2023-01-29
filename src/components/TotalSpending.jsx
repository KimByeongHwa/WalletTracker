import React from "react";
import styles from "./ToTalSpending.module.scss";

function TotalSpending() {
  return (
    <div className={styles.TotalSpending}>
      <div className={styles.label}>
        이번 달에만
        <br />
        <div className={styles.strong}>100원</div>
        <br />
        이나 쓰셨습니다.
      </div>
    </div>
  );
}

export default TotalSpending;
