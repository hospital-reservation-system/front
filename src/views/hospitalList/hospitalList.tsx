"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./hospitalList.module.scss";

import SearchBar from "@/components/SearchBar/SearchBar";
import Button from "@/components/Button/Button";

const cx = cn.bind(styles);

const hospitalList = () => {
    return (
        <div className={cx("hospitalListWrapper")}>
            <section className={cx("hospitalListSection")}>
                <h1 className={cx("hospitalListTitle")}>병원 리스트</h1>
                <div className={cx("hospitalListContainer")}>
                    <div className={cx("searchContainer")}>
                        <select className={cx("citySelect")}>
                            <option value="">시/도</option>
                            <option value="Seoul">서울</option>
                            <option value="Busan">부산</option>
                            <option value="Incheon">인천</option>
                        </select>
                        <select className={cx("districtSelect")}>
                            <option value="">군/구</option>
                            <option value="Gangnam">강남구</option>
                            <option value="Seocho">서초구</option>
                            <option value="Jung">중구</option>
                        </select>
                        <SearchBar
                            width="585px"
                            height="35px"
                            placeholder="병원명을 입력하세요."
                        />
                    </div>
                    <div className={cx("listContainer")}>
                        <div className={cx("hospital")}>
                            <p className={cx("reservationDetail")}>
                                일주일 이후 예약 가능
                            </p>
                            <h1 className={cx("hospitalName")}>일산복음병원</h1>
                            <p className={cx("hospitalLocation")}>
                                경기도 고양시 일산동구 고양대로 760(중산동)
                            </p>
                            <div className={cx("hospitlaBtn")}>
                                <Button
                                    label="상품보기"
                                    backgroundColor="#FFFCE5"
                                    borderColor="#BFC662"
                                    width="302px"
                                    height="54px"
                                />
                                <Button
                                    label="지도보기"
                                    backgroundColor="#FFFFFF"
                                    borderColor="#CCCCCC"
                                    width="302px"
                                    height="54px"
                                />
                                <Button
                                    label="예약하기"
                                    backgroundColor="#FFFCE5"
                                    borderColor="#BFC662"
                                    width="302px"
                                    height="54px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default hospitalList;
