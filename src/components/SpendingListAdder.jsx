import React, { useState } from "react";
import styles from "./SpendingListAdder.module.scss";
import CustomButton from "./CustomButton";

function SpendingListAdder() {
    return (
        <div className={styles.SpendingListAdder}>
            <div className={styles.toggleLabel}>
                <div className={styles.toggle}>소비항목 추가하기</div>
            </div>
            <div className={styles.inputForm}>
                <div className={styles.line}>
                    <span className={styles.inputTitle}>소비 날짜</span>
                    <input className={styles.inputContents} placeholder="YYYY/MM/DD"></input>
                </div>
            </div>
            <div className={styles.inputForm}>
                <div className={styles.line}>
                    <span className={styles.inputTitle}>소비 항목</span>
                    <input className={styles.inputContents} placeholder="Description"></input>
                </div>
            </div>
            <div className={styles.inputForm}>
                <div className={styles.line}>
                    <span className={styles.inputTitle}>소비 금액</span>
                    <input className={styles.inputContents} placeholder="Amount"></input>
                </div>
            </div>
            <div className={styles.buttons}>
                <CustomButton size="big">확인</CustomButton>
                <CustomButton size="big" color="gray">
                    취소
                </CustomButton>
            </div>
        </div>
    );
}

export default SpendingListAdder;
