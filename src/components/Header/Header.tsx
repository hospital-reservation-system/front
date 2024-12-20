"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";

const cx = cn.bind(styles);

const Header = () => {
    return (
        <div className={cx("HeaderWrapper")}>
            <div className={cx("logoContainer")}>
                <img
                    src="/images/headerLogo1.png"
                    alt=""
                    className={cx("logoIcon")}
                />
                <img
                    src="/images/headerLogo2.png"
                    alt=""
                    className={cx("logoTitle")}
                />
            </div>
            <div className={cx("searchBar")}>
                <SearchBar />
            </div>
        </div>
    );
};

export default Header;
