"use client";

import React from "react";
import styles from "./Signup.module.scss";
import cn from "classnames/bind";
import { useForm } from "react-hook-form";
import TextInput from "@/components/TextField/TextInput/TextInput";
import Button from "@/components/Button/Button";

const cx = cn.bind(styles);

type SignupFormType = {
    id: string;
    password: string;
    passwordCheck: string;
    name: string;
    email: string;
    address: {
        zipcode: string;
        basic: string;
        detail: string;
    };
    agreement: string;
    phone: number;
};

const SignupView = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormType>();

    const onSubmit = async (data: SignupFormType) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={cx("signup_wrap")}>
            <h1 className={cx("tit")}>회원가입</h1>
            <form
                className={cx("signup_form")}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={cx("form_row")}>
                    <TextInput
                        label="아이디"
                        width="100%"
                        height={40}
                        {...register("id", {
                            required: "아이디를 입력해주세요",
                            minLength: {
                                value: 4,
                                message: "아이디는 4자 이상이어야 합니다",
                            },
                        })}
                    />
                    {errors.id && (
                        <span className={cx("errorMessage")}>
                            {errors.id?.message}
                        </span>
                    )}
                </div>
                <div className={cx("form_row")}>
                    <TextInput
                        label="비밀번호"
                        type="password"
                        width="100%"
                        height={40}
                        {...register("password", {
                            required: "비밀번호를 입력해주세요",
                            minLength: {
                                value: 6,
                                message: "비밀번호는 6자 이상이어야 합니다",
                            },
                        })}
                    />
                    {errors.password && (
                        <span className={cx("errorMessage")}>
                            {errors.password?.message}
                        </span>
                    )}
                </div>
                <div className={cx("form_row")}>
                    <TextInput
                        label="비밀번호 확인"
                        type="password"
                        width="100%"
                        height={40}
                        {...register("passwordCheck", {
                            required: "비밀번호를 입력해주세요",
                            minLength: {
                                value: 6,
                                message: "비밀번호는 6자 이상이어야 합니다",
                            },
                        })}
                    />
                    {errors.passwordCheck && (
                        <span className={cx("errorMessage")}>
                            {errors.passwordCheck?.message}
                        </span>
                    )}
                </div>
                <div className={cx("form_row")}>
                    <TextInput
                        label="이름"
                        width="100%"
                        height={40}
                        {...register("name", {
                            required: "이름을 입력해주세요",
                        })}
                    />
                    {errors.name && (
                        <span className={cx("errorMessage")}>
                            {errors.name?.message}
                        </span>
                    )}
                </div>
                <div className={cx("form_row")}>
                    <TextInput
                        label="이메일"
                        width="100%"
                        height={40}
                        {...register("email", {
                            required: "이메일을 입력해주세요",
                        })}
                    />
                    {errors.email && (
                        <span className={cx("errorMessage")}>
                            {errors.email?.message}
                        </span>
                    )}
                </div>
                <div className={cx("address_section")}>
                    {/* <div className={cx("address_label")}>
                        <span>주소</span>
                    </div> */}
                    <div className={cx("zipcode_group")}>
                        <TextInput
                            label="주소"
                            placeholder="우편번호"
                            {...register("address.zipcode", {
                                required: "우편번호를 입력해주세요",
                            })}
                            width="100%"
                        />
                        <Button
                            label="주소검색"
                            backgroundColor="#FFEA3C"
                            borderColor="#BFC662"
                            className={cx("search_btn")}
                        />
                    </div>
                    <TextInput
                        placeholder="기본주소"
                        {...register("address.basic", {
                            required: "기본주소를 입력해주세요",
                        })}
                        width="100%"
                    />
                    <TextInput
                        placeholder="상세주소"
                        {...register("address.detail", {
                            required: "상세주소를 입력해주세요",
                        })}
                        width="100%"
                    />
                    {(errors.address?.zipcode ||
                        errors.address?.basic ||
                        errors.address?.detail) && (
                        <span className={cx("errorMessage")}>
                            주소를 입력해주세요.
                        </span>
                    )}
                </div>
                <div className={cx("phone")}>
                    <TextInput
                        label="휴대전화"
                        width="100%"
                        height={40}
                        {...register("phone", {
                            required: "전화번호를 입력해주세요",
                        })}
                    />
                    {errors.phone && (
                        <span className={cx("errorMessage")}>
                            {errors.phone?.message}
                        </span>
                    )}
                </div>
                <div className={cx("submit_btn_wrap")}>
                    <Button
                        type="submit"
                        label="가입하기"
                        backgroundColor="#FFEA3C"
                        borderColor="#BFC662"
                        className={cx("submit_btn")}
                    />
                </div>
            </form>
        </div>
    );
};

export default SignupView;
