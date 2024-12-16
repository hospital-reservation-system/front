"use client";

import React from "react";
import styles from "./SearchBar.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const searchbar = () => {
    return (
        <div className={cx("searchBarWrapper")}>
            <div className={cx("searchInput")}></div>
            <button className={cx("searchBtn")}>검색</button>
        </div>
    );
};

export default searchbar;
