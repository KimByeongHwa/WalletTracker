import React, { useState } from "react";
import styles from "./SpendingListAdder.module.scss";
import CustomButton from "./CustomButton";
import DatePicker from "react-datepicker";
import Calendar from "./Calendar";

function SpendingListAdder() {
  let [visible, setVisible] = useState(true); // togglelabel과 inputForm을 토글하기 위해

  function handleToggle() {
    setVisible((prev) => !prev);
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
            {/* <input className={styles.inputContents} placeholder="YYYY/MM/DD"> */}
            <Calendar />
            {/* </input> */}
          </div>

          <div className={styles.line}>
            <span className={styles.inputTitle}>소비 항목</span>
            <input
              className={styles.inputContents}
              placeholder="Description"
            ></input>
          </div>

          <div className={styles.line}>
            <span className={styles.inputTitle}>소비 금액</span>
            <input
              className={styles.inputContents}
              placeholder="Amount"
            ></input>
          </div>

          <div className={styles.buttons}>
            <div className={styles.label}>
              <CustomButton size="big">확인</CustomButton>
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
