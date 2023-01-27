import React, { useState } from "react";
import styles from "./Calendar.module.scss";
import DatePicker from "react-datepicker";

function Calendar(props) {
  let [date, setDate] = useState(new Date());

  return (
    <DatePicker
      className={styles.DatePicker}
      dateFormat="yyyy/MM/dd"
      selected={date}
      onChange={(date) => setDate(date)}
    />
  );
}

export default Calendar;
