'use client';

import React from 'react';
import styles from './Signup.module.scss';
import cn from 'classnames/bind';
import { useForm } from 'react-hook-form';
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
};

const SignupView = () => {
    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<SignupFormType>();

    const onSubmit = async (data: SignupFormType) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={cx('signup_wrap')}>
            <h1 className={cx("tit")}>회원가입</h1>
            <form className={cx('signup_form')} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('form_row')}>
                    <TextInput
                        label="아이디"
                        width="100%"
                        height={40}
                        {...register('id')}
                    />
                </div>

                <div className={cx('form_row')}>
                    <TextInput
                        label="비밀번호"
                        type="password"
                        width="100%"
                        height={40}
                        {...register('password')}
                    />
                </div>

                <div className={cx('form_row')}>
                    <TextInput
                        label="비밀번호 확인"
                        type="password"
                        width="100%"
                        height={40}
                        {...register('passwordCheck')}
                    />
                </div>

                <div className={cx('form_row')}>
                    <TextInput
                        label="이름"
                        width="100%"
                        height={40}
                        {...register('name')}
                    />
                </div>

                <div className={cx('form_row')}>
                    <TextInput
                        label="이메일"
                        width="100%"
                        height={40}
                        {...register('email')}
                    />
                </div>

                <div className={cx('address_section')}>
                    <div className={cx('address_label')}>
                        <span>주소</span>
                    </div>
                    
                    <div className={cx('zipcode_group')}>
                        <TextInput
                            placeholder="우편번호"
                            {...register('address.zipcode')}
                            width="100%"
                        />
                        <Button
                            label="주소검색"
                            backgroundColor="#FFEA3C"
                            borderColor="#BFC662"
                            className={cx('search_btn')}
                        />
                    </div>

                    <TextInput
                        placeholder="기본주소"
                        {...register('address.basic')}
                        width="100%"
                    />

                    <TextInput
                        placeholder="상세주소"
                        {...register('address.detail')}
                        width="100%"
                    />
                </div>

                <div className={cx('submit_btn_wrap')}>
                    <Button
                        type="submit"
                        label="가입하기"
                        backgroundColor="#FFEA3C"
                        borderColor="#BFC662"
                        className={cx('submit_btn')}
                    />
                </div>
            </form>
        </div>
    );
};

export default SignupView;