"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./ProductRegister.module.scss";
import TextInput from "@/components/TextField/TextInput/TextInput";
import Button from "@/components/Button/Button";

const cx = cn.bind(styles);

const productRegister = () => {
    return (
        <div className={cx("productRegisterWrapper")}>
            <section className={cx("productRegisterSection")}>
                <h1 className={cx("productRegisterTitle")}>
                    건강 검진 상품 등록
                </h1>
                <div className={cx("productRegisterContainer")}>
                    <div className={cx("productRegisterInput")}>
                        <TextInput
                            label="상품 이름"
                            width="952px"
                            height="48px"
                        />
                    </div>
                    <div className={cx("productRegisterInput")}>
                        <TextInput
                            label="상품 설명"
                            width="952px"
                            height="48px"
                        />
                    </div>
                    <div className={cx("productRegisterInput")}>
                        <TextInput
                            label="상품 가격"
                            width="952px"
                            height="48px"
                        />
                    </div>

                    <div className={cx("productSelectContainer")}>
                        <p className={cx("productSelectTitle")}>선택 검사</p>
                        <div className={cx("productSelect")}>
                            <label>
                                <input type="checkbox" name="option" />
                                데이터
                            </label>
                            <label>
                                <input type="checkbox" name="option" />
                                데이터
                            </label>
                            <label>
                                <input type="checkbox" name="option" />
                                데이터
                            </label>
                            <label>
                                <input type="checkbox" name="option" />
                                데이터
                            </label>
                            <label>
                                <input type="checkbox" name="option" />
                                데이터
                            </label>
                            <label>
                                <input type="checkbox" name="option" />
                                데이터
                            </label>
                            <label>
                                <input type="checkbox" name="option" />
                                데이터
                            </label>
                            <label>
                                <input type="checkbox" name="option" />
                                데이터
                            </label>
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
