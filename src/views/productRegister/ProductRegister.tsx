"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./ProductRegister.module.scss";
import TextInput from "@/components/TextField/TextInput/TextInput";
import Button from "@/components/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";

const cx = cn.bind(styles);

type FormData = {
    productName: string;
    productDetail: string;
    productPrice: string;
    options: string[];
};

const ProductRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<FormData>();

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

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <form
            className={cx("productRegisterWrapper")}
            onSubmit={handleSubmit(onSubmit)}
        >
            <section className={cx("productRegisterSection")}>
                <h1 className={cx("productRegisterTitle")}>
                    건강 검진 상품 등록
                </h1>
                <div className={cx("productRegisterContainer")}>
                    <div className={cx("productRegisterInput")}>
                        <TextInput
                            label="상품 이름"
                            {...inputSize}
                            {...register("productName", {
                                required: "상품 이름을 입력해주세요",
                            })}
                        />
                        {errors.productName && (
                            <span className={cx("errorMessage")}>
                                {errors.productName?.message}
                            </span>
                        )}
                    </div>
                    <div className={cx("productRegisterInput")}>
                        <TextInput
                            label="상품 설명"
                            {...inputSize}
                            {...register("productDetail", {
                                required: "상품 설명을 입력해주세요",
                            })}
                        />
                        {errors.productDetail && (
                            <span className={cx("errorMessage")}>
                                {errors.productDetail?.message}
                            </span>
                        )}
                    </div>
                    <div className={cx("productRegisterInput")}>
                        <TextInput
                            label="상품 가격"
                            {...inputSize}
                            {...register("productPrice", {
                                required: "상품 가격을 입력해주세요",
                            })}
                        />
                        {errors.productPrice && (
                            <span className={cx("errorMessage")}>
                                {errors.productPrice?.message}
                            </span>
                        )}
                    </div>
                    <div className={cx("productSelectContainer")}>
                        <p className={cx("productSelectTitle")}>선택 검사</p>
                        <div className={cx("productSelect")}>
                            {selectOptions.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        value={option}
                                        {...register("options", {
                                            required: "항목을 선택해주세요",
                                        })}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                        {errors.options && (
                            <span className={cx("errorMessage")}>
                                {errors.options?.message}
                            </span>
                        )}
                    </div>
                    <div className={cx("registerBtn")}>
                        <Button
                            label="등록하기"
                            backgroundColor="#FFEA3C"
                            borderColor="#BFC662"
                            disabled={isSubmitting}
                            type="submit"
                        />
                    </div>
                </div>
            </section>
        </form>
    );
};

export default ProductRegister;
