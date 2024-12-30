import React from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./Header.module.scss";
import headerLogo from "../../../public/images/easycare2.png";
// import TextInput from "../TextInput/TextInput";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

const cx = cn.bind(styles);

const Header = () => {
    return (
        <div className={cx("HeaderWrapper")}>
            <div className={cx("HeaderInn")}>
                <Link href={"http://localhost:3000"}>
                    <p className={cx("imageBox")}>
                        <Image
                            src={headerLogo}
                            alt="EasyCare Logo"
                            className={cx("logoIcon")}
                        />
                    </p>
                </Link>

                <div className={cx("searchBar")}>
                    {/* <TextInput.Input
            type="text"
            name="search"
            className={cx("searchInput")}
          /> */}
                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default Header;
