import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type BtnProps = {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    backgroundColor: "#FFEA3C" | "#FFFFFF";
    borderColor: "#BFC662" | "#CCCCCC";
    className?: string;
    disabled?: boolean;
};

const Button = (props: BtnProps) => {
    const { 
        label, 
        type = "button", 
        onClick, 
        backgroundColor, 
        borderColor,
        className,
        disabled
    } = props;

    const buttonStyle = {
        backgroundColor,
        border: `1px solid ${borderColor}`,
    };

    return (
        <button 
            type={type}
            className={cx("btn", className)} 
            onClick={onClick} 
            style={buttonStyle}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;