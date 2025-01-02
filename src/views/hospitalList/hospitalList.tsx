"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./hospitalList.module.scss";

import Button from "@/components/Button/Button";

const cx = cn.bind(styles);

// 병원 데이터
const hospitals = [
    {
        id: 1,
        reservationDetail: "일주일 이후 예약 가능",
        name: "일산복음병원",
        location: "경기도 고양시 일산동구 고양대로 760(중산동)",
    },
    {
        id: 2,
        reservationDetail: "일주일 이후 예약 가능",
        name: "일산복음병원",
        location: "경기도 고양시 일산동구 고양대로 760(중산동)",
    },
    {
        id: 3,
        reservationDetail: "일주일 이후 예약 가능",
        name: "일산복음병원",
        location: "경기도 고양시 일산동구 고양대로 760(중산동)",
    },
];

const HospitalList = () => {
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
                        <div className={cx("searchBar")}>
                            <input
                                type="text"
                                placeholder="병원명을 입력하세요"
                            />
                            <button>검색</button>
                        </div>
                    </div>
                    <div className={cx("listContainer")}>
                        {hospitals.map((hospital) => (
                            <div key={hospital.id} className={cx("hospital")}>
                                <div className={cx("hospitalInfo")}>
                                    <p className={cx("reservationDetail")}>
                                        {hospital.reservationDetail}
                                    </p>
                                    <h1 className={cx("hospitalName")}>
                                        {hospital.name}
                                    </h1>
                                    <p className={cx("hospitalLocation")}>
                                        {hospital.location}
                                    </p>
                                </div>

                                <div className={cx("hospitalBtn")}>
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
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HospitalList;
