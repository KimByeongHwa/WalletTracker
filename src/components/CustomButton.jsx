import React from "react";
import styles from "./CustomButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CustomButton({ children, size, color, onClick }) {
    return (
        <button className={cx("CustomButton", size, color)} onClick={onClick}>
            {children}
        </button>
    );
}

CustomButton.defaultProps = {
    color: "green",
};

export default CustomButton;
