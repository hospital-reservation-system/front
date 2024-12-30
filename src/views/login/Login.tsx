'use client';
import styles from './Login.module.scss';
import cn from 'classnames/bind';
import { useForm } from "react-hook-form";
import TextInput from "@/components/TextField/CommonInput/TextInput";
import Button from "@/components/Button/Button";
import Link from 'next/link';

const cx = cn.bind(styles);

type LoginFormType = {
    id: string;
    password: string;
}

const LoginView = () => {
    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormType>({
        defaultValues: {
            id: '',
            password: ''
        }
    });

    const onSubmit = (data: LoginFormType) => {
        console.log(data);
        // TODO: 로그인 API 호출 로직 구현
    };

    return (
        <div className={cx("login_wrap")}>
            <h1 className={cx("tit")}>로그인</h1>
            <form className={cx("login_form")} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx("input_group")}>
                    <TextInput
                        label="아이디"
                        {...register("id", {
                            required: "아이디를 입력해주세요",
                            minLength: {
                                value: 4,
                                message: "아이디는 4자 이상이어야 합니다"
                            }
                        })}
                    />
                </div>

                <div className={cx("input_group")}>
                    <TextInput
                        label="비밀번호"
                        type="password"
                        {...register("password", {
                            required: "비밀번호를 입력해주세요",
                            minLength: {
                                value: 6,
                                message: "비밀번호는 6자 이상이어야 합니다"
                            }
                        })}
                    />
                    <div className={cx("password_help")}>
                        <Link href="/forgot-password" className={cx("forgot_password")}>
                            비밀번호를 잊으셨나요?
                        </Link>
                    </div>
                </div>

                <div className={cx("button_group")}>
                    <Button
                        type="submit"
                        label="로그인"
                        backgroundColor="#FFEA3C"
                        borderColor="#BFC662"
                        className={cx("login_button")}
                    />
                    <Link href="#">
                        <Button
                            label="회원가입"
                            backgroundColor="#FFFFFF"
                            borderColor="#CCCCCC"
                            className={cx("signup_button")}
                        />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginView;