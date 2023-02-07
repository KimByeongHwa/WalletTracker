import React, { useEffect, useState } from "react";
import styles from "./SpendingListAdder.module.scss";
import CustomButton from "./CustomButton";
import Calendar from "./Calendar";
import { useRecoilState, useRecoilValue } from "recoil";
import { spendingDateState } from "../recoil/spendingDateState";
import { spendingListState } from "../recoil/spendingListState";
import { monthlyTotalAmountState } from "../recoil/monthlyTotalAmountState";

function SpendingListAdder() {
    const [visible, setVisible] = useState(true); // togglelabel과 inputForm을 토글하기 위해
    const spendingDate = useRecoilValue(spendingDateState);
    const [spendingItem, setSpendingItem] = useState("");
    const [spendingAmount, setSpendingAmount] = useState(0);
    const [spendingList, setSpendingList] = useRecoilState(spendingListState);
    const [monthlyTotalAmount, setMonthlyTotalAmount] = useRecoilState(monthlyTotalAmountState);

    useEffect(() => {
        fetch("http://localhost:3000/data/spendinglist.json", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setSpendingList(data);
            });
    }, []);

    function handleToggle() {
        setVisible((prev) => !prev);
    }

    let year = spendingDate.getFullYear().toString();
    let month = (spendingDate.getMonth() + 1).toString().padStart(2, "0");
    let day = spendingDate.getDate().toString().padStart(2, "0");
    let handledSpendingDate = year + month + day;

    function handleSpendingItem(e) {
        const userInput = e.target.value;
        setSpendingItem(userInput);
        // console.log(userInput);
    }

    function handleSpendingAmount(e) {
        const userInput = e.target.value;
        setSpendingAmount(userInput);
        // console.log(userInput);
    }

    function addSpendingList() {
        const spending = {
            date: handledSpendingDate,
            description: spendingItem,
            amount: Number(spendingAmount),
        };

        setSpendingList([...spendingList, spending]);

        // console.log(spending);
        console.log(spendingList);
    }

    function monthlyTotalAmountCounter() {
        let totalAmount = 0;

        const now = new Date();
        let nowMonth = (now.getMonth() + 1).toString().padStart(2, "0");

        console.log("List: ", spendingList);
        console.log("nowMonth: ", nowMonth);

        const found = spendingList.find((list) => list.date.slice(4, 6) === nowMonth);
        console.log(found);

        totalAmount += found.amount;

        setMonthlyTotalAmount(totalAmount.toLocaleString("ko-KR"));
        console.log(monthlyTotalAmount);
    }

    return (
        <div className={styles.SpendingListAdder}>
            {visible && ( // visible === true일 때 보이게
                <div className={styles.toggleLabel}>
                    <div className={styles.toggle} onClick={handleToggle}>
                        소비 항목 추가하기
                    </div>
                </div>
            )}
            {!visible && ( // visible === false일 때 보이게
                <div className={styles.inputForm}>
                    <div className={styles.line}>
                        <span className={styles.inputTitle}>소비 날짜</span>
                        <Calendar />
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
                            <CustomButton
                                size="big"
                                onClick={() => {
                                    addSpendingList();
                                    monthlyTotalAmountCounter();
                                }}
                            >
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
