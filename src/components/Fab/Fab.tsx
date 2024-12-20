"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./Fab.module.scss";

const cx = cn.bind(styles);

const Fab = () => {
    return (
        <div className={cx("fabWrapper")}>
            <div className={cx("fabButton")}>
                <img
                    src="/images/reservation.png"
                    alt="검진예약"
                    className={cx("reservation")}
                />
                <span>검진예약</span>
            </div>
            <div className={cx("fabButton")}>
                <img
                    src="/images/check.png"
                    alt="예약조회"
                    className={cx("check")}
                />
                <span>예약조회</span>
            </div>
            <div className={cx("fabButton")}>
                <img
                    src="/images/share.png"
                    alt="공유하기"
                    className={cx("share")}
                />
                <span>공유하기</span>
            </div>
            <div className={cx("fabButton")}>
                <img
                    src="/images/location.png"
                    alt="오시는길"
                    className={cx("location")}
                />
                <span>오시는길</span>
            </div>
        </div>
    );
};

export default Fab;
