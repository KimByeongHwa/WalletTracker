import React from "react";
import styles from "./Calendar.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useRecoilState } from "recoil";
import { spendingDateState } from "../recoil/spendingDateState";

function Calendar() {
    const [spendingDate, setSpendingDate] = useRecoilState(spendingDateState);

    return (
        <div className={styles.Calendar}>
            <DatePicker
                className={styles.calendar}
                locale={ko}
                dateFormat="yy.MM.dd (eee)"
                disabledKeyboardNavigation
                selected={spendingDate}
                onChange={(date) => setSpendingDate(date)}
            />
        </div>
    );
}

export default Calendar;
