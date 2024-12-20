import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type BtnProps = {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    backgroundColor: "#FFEA3C" | "#FFFFFF";
    borderColor: "#BFC662" | "#CCCCCC";
};

const Button = (props: BtnProps) => {
    const { label, onClick, backgroundColor, borderColor } = props;
    const buttonStyle = {
        backgroundColor,
        border: `1px solid ${borderColor}`,
    };

    return (
        <button className={cx("btn")} onClick={onClick} style={buttonStyle}>
            {label}
        </button>
    );
};

export default Button;
