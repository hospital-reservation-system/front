"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./ProductRegister.module.scss";
import TextInput from "@/components/TextField/TextInput/TextInput";
import Button from "@/components/Button/Button";

const cx = cn.bind(styles);

const productRegister = () => {
    /** 선택 검사 병원 목록 */
    const selectOptions = [
        "강남 세브란스병원 헬스체크업센터",
        "하나로의료재단 종합센터",
        "하나로의료재단 강남센터",
        "광동병원 통합웰니스센터",
        "군포 지샘병원 건강검진센터",
        "창원 서울패밀리병원 AI건강증진센터",
    ];

    /** TextInput창 크기 */
    const inputSize = { width: "100%", height: "48px" };

    return (
        <div className={cx("productRegisterWrapper")}>
            <section className={cx("productRegisterSection")}>
                <h1 className={cx("productRegisterTitle")}>
                    건강 검진 상품 등록
                </h1>
                <div className={cx("productRegisterContainer")}>
                    <div className={cx("productRegisterInput")}>
                        <TextInput label="상품 이름" {...inputSize} />
                    </div>
                    <div className={cx("productRegisterInput")}>
                        <TextInput label="상품 설명" {...inputSize} />
                    </div>
                    <div className={cx("productRegisterInput")}>
                        <TextInput label="상품 가격" {...inputSize} />
                    </div>

                    <div className={cx("productSelectContainer")}>
                        <p className={cx("productSelectTitle")}>선택 검사</p>
                        <div className={cx("productSelect")}>
                            {selectOptions.map((option, index) => (
                                <label key={index}>
                                    <input type="checkbox" name="option" />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className={cx("registerBtn")}>
                        <Button
                            label="등록하기"
                            backgroundColor="#FFEA3C"
                            borderColor="#BFC662"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default productRegister;
