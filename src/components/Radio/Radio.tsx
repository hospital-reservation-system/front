"use client";

import React, { useState } from "react";
import styles from "./Radio.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type RadioProps = {
    label?: React.ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    nonBorder?: boolean;
};

const Radio = (props: RadioProps) => {
    const {
        label,
        name,
        value,
        checked = false,
        onChange,
        className,
        nonBorder = true,
    } = props;

    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.target.checked;
        setIsChecked(newChecked);

        if (onChange) {
            onChange(e);
        }
    };

    return (
        <label
            className={cx(
                "Radio",
                {
                    check: isChecked,
                    nonBorder,
                },
                className
            )}
        >
            <div className={cx("RadioMark", { check: isChecked })} />
            <span className={cx("RadioLabel", { check: isChecked })}>
                <div className={cx("Label")}>{label}</div>
            </span>
            <input
                type="radio"
                name={name}
                value={value}
                checked={isChecked}
                onChange={handleChange}
                hidden
            />
        </label>
    );
};

export default Radio;
