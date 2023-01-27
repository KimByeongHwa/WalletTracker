import React from "react";
import styles from "./CustomButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CustomButton({ children, size, color }) {
    return <button className={cx("CustomButton", size, color)}>{children}</button>;
}

CustomButton.defaultProps = {
    color: "green",
};

export default CustomButton;
