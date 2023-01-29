import React, { useState } from "react";
import styles from "./Calendar.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

function Calendar(props) {
  let [date, setDate] = useState(new Date());

  return (
    <div className={styles.Calendar}>
      <DatePicker
        className={styles.calendar}
        locale={ko}
        dateFormat="yy.MM.dd (eee)"
        disabledKeyboardNavigation
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
}

export default Calendar;
