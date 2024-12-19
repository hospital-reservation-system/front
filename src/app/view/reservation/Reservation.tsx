"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./Reservation.module.scss";
import Header from "@/app/components/Header/Header";
import Calander from "@/app/components/Calander/Calander";
import Button from "@/app/components/Button/Button";
import TextInput from "@/app/components/TextField/TextInput/TextInput";
import BirthInput from "@/app/components/TextField/BirthInput/Birth";
import PhoneInput from "@/app/components/TextField/PhoneInput/Phone";
import Radio from "@/app/components/Radio/Radio";
import ReservationCard from "@/app/components/ReservationCard/ReservationCard";
import Bottom from "@/app/components/Bottom/Bottom";

const cx = cn.bind(styles);

const Reservation = () => {
    return (
        <div className={cx("reservationWrapper")}>
            <Header />
            <div className={cx("reservationSection")}>
                <h1 className={cx("reservationTitle")}>건강 검진 예약</h1>
                <section className={cx("reservationContainer")}>
                    <div className={cx("calander")}>
                        <Calander />
                    </div>
                    <div className={cx("reservationInfo")}>
                        <h2 className={cx("reservationUser")}>예약자 정보</h2>
                        <p className={cx("reservationDetail")}>
                            검진 예약을 위한 최소한의 입력사항입니다. <br></br>
                            예약하시는 분의 정보를 입력해주세요.
                        </p>
                        <div className={cx("reservatioBtn")}>
                            <Button
                                label="본인 예약"
                                backgroundColor="#FFEA3C"
                                borderColor="#BFC662"
                            />
                            <Button
                                label="대리 예약"
                                backgroundColor="#FFFFFF"
                                borderColor="#CCCCCC"
                            />
                        </div>
                        <div className={cx("reservatioInput")}>
                            <TextInput label="예약자명" />
                            <BirthInput />
                            <PhoneInput />
                        </div>
                        <div className={cx("checkupContainer")}>
                            <h2 className={cx("checkupContent")}>검진 내용</h2>
                            <div className={cx("radioContainer")}>
                                <p>
                                    예약 구분
                                    <span className={cx("requiredSymbol")}>
                                        *
                                    </span>
                                </p>
                                <Radio
                                    label="건강검진"
                                    name="type"
                                    value="health-care"
                                />
                            </div>
                            <div className={cx("reservationCard")}>
                                <ReservationCard
                                    label="종합검진"
                                    imageSrc="/images/checkup.png"
                                    imageAlt="종합검진"
                                />
                                <ReservationCard
                                    label="공단검진"
                                    imageSrc="/images/public_checkup.png"
                                    imageAlt="공단검진"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("reservationBtn")}>
                        <Button
                            label="예약하기"
                            backgroundColor="#FFEA3C"
                            borderColor="#BFC662"
                        />
                    </div>
                </section>
            </div>
            <Bottom />
        </div>
    );
};

export default Reservation;
