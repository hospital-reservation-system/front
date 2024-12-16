"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./Phone.module.scss";

const cx = cn.bind(styles);

type PhoneProps = {
    options?: string[];
};

const Phone = ({
    options = ["010", "011", "016", "017", "018", "019"],
}: PhoneProps) => {
    const [prefix, setPrefix] = useState(options[0]);
    const [middle, setMiddle] = useState("");
    const [last, setLast] = useState("");

    const handleNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<React.SetStateAction<string>>,
        maxLength: number
    ) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        if (value.length <= maxLength) {
            setter(value);
        }
    };

    return (
        <div className={cx("inputWrapper")}>
            <div className={cx("inputTitle")}>
                휴대폰 번호 <span className={cx("requiredSymbol")}>*</span>
            </div>
            <div className={cx("inputNumber")}>
                <select
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    className={cx("dropDown")}
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    value={middle}
                    onChange={(e) => handleNumberChange(e, setMiddle, 4)}
                    maxLength={4}
                    className={cx("phoneInput")}
                />
                <input
                    type="text"
                    value={last}
                    onChange={(e) => handleNumberChange(e, setLast, 4)}
                    maxLength={4}
                    className={cx("phoneInput")}
                />
            </div>
        </div>
    );
};

export default Phone;
