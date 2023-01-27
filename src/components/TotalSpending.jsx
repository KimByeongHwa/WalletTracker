import React from "react";
import styles from "./ToTalSpending.module.scss";

function TotalSpending() {
    return (
        <div className={styles.TotalSpending}>
            <div className={styles.label}>
                이번 달 총 지출 금액은
                <br />
                <div className={styles.strong}>100원</div>
                <br />
                입니다.
            </div>
        </div>
    );
}

export default TotalSpending;
