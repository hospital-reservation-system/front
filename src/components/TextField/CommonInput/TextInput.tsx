"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./TextInput.module.scss";

const cx = cn.bind(styles);

type TextInputProps = {
    label: string;
    requiredSymbol?: React.ReactNode;
    width: string | number;
    height: string | number;
};

const TextInput = (props: TextInputProps) => {
    const { label, requiredSymbol, width, height } = props;

    return (
        <div className={cx("inputWrapper")}>
            <div className={cx("inputTitle")}>
                {label}
                {requiredSymbol && (
                    <span className={cx("requiredSymbol")}>
                        {requiredSymbol}
                    </span>
                )}
            </div>
            <input
                type="text"
                className={cx("inputContent")}
                style={{
                    width: typeof width === "number" ? `${width}px` : width,
                    height: typeof height === "number" ? `${height}px` : height,
                }}
            />
        </div>
    );
};

export default TextInput;
