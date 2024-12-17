"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./Common.module.scss";

const cx = cn.bind(styles);

type CommonProps = {
    label: string;
};

const Common = (props: CommonProps) => {
    const { label } = props;
    return (
        <div className={cx("inputWrapper")}>
            <div className={cx("inputTitle")}>
                {label}
                <span className={cx("requiredSymbol")}>*</span>
            </div>
            <input type="text" className={cx("inputContent")} />
        </div>
    );
};

export default Common;
