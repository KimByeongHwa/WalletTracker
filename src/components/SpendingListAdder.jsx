import React, { useState } from "react";
import styles from "./SpendingListAdder.module.scss";
import CustomButton from "./CustomButton";
import Calendar from "./Calendar";

function SpendingListAdder() {
    let [visible, setVisible] = useState(true); // togglelabel과 inputForm을 토글하기 위해
    let [spendingDate, setSpendingDate] = useState("");
    let [spendingItem, setSpendingItem] = useState("");
    let [spendingAmount, setSpendingAmount] = useState(0);

    function handleToggle() {
        setVisible((prev) => !prev);
    }

    function handleSpendingDate(e) {
        const userInput = e;
        console.log(userInput);
    }

    function handleSpendingItem(e) {
        const userInput = e.target.value;
        setSpendingItem(userInput);
        console.log(userInput);
        console.log(spendingDate);
    }

    function handleSpendingAmount(e) {
        const userInput = e.target.value;
        setSpendingAmount(userInput);
        console.log(userInput);
    }

    function addSpendingList() {
        console.log("소비 항목: ", spendingItem);
        console.log("소비 금액: ", spendingAmount);
    }

    return (
        <div className={styles.SpendingListAdder}>
            {visible && ( // visible === true일 때 보이게
                <div className={styles.toggleLabel}>
                    <div className={styles.toggle} onClick={handleToggle}>
                        소비항목 추가하기
                    </div>
                </div>
            )}
            {!visible && ( // visible === false일 때 보이게
                <div className={styles.inputForm}>
                    <div className={styles.line}>
                        <span className={styles.inputTitle}>소비 날짜</span>
                        <Calendar onChange={(date) => setSpendingDate(date)} onClick={handleSpendingDate} />
                    </div>

                    <div className={styles.line}>
                        <span className={styles.inputTitle}>소비 항목</span>
                        <input className={styles.inputContents} placeholder="뭐한다고 돈 쓰셨어요?" onChange={handleSpendingItem}></input>
                    </div>

                    <div className={styles.line}>
                        <span className={styles.inputTitle}>소비 금액</span>
                        <input className={styles.inputContents} placeholder="숫자만 입력해주세요." onChange={handleSpendingAmount}></input>
                    </div>

                    <div className={styles.buttons}>
                        <div className={styles.label}>
                            <CustomButton size="big" onClick={addSpendingList}>
                                확인
                            </CustomButton>
                        </div>
                        <div className={styles.label}>
                            <CustomButton size="big" color="gray" onClick={handleToggle}>
                                취소
                            </CustomButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SpendingListAdder;
