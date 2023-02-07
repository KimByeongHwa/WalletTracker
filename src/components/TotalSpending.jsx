import React from "react";
import { useRecoilValue } from "recoil";
import { monthlyTotalAmountState } from "../recoil/monthlyTotalAmountState";
import styles from "./ToTalSpending.module.scss";

function TotalSpending() {
    const monthlyTotalAmount = useRecoilValue(monthlyTotalAmountState);

    return (
        <div className={styles.TotalSpending}>
            <div className={styles.label}>
                이번 달에만
                <br />
                <div className={styles.strong}>{monthlyTotalAmount}원</div>
                <br />
                이나 쓰셨습니다.
            </div>
        </div>
    );
}

export default TotalSpending;
