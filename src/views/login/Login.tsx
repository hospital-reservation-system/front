"use client";
import styles from "./Login.module.scss";
import cn from "classnames/bind";
import { useForm } from "react-hook-form";
import TextInput from "@/components/TextField/TextInput/TextInput";
import Button from "@/components/Button/Button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

type loginResponse = {
    data: string;
};

type LoginFormType = {
    email: string;
    password: string;
};

const LoginView = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormType>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const router = useRouter();

    const onSubmit = async (data: LoginFormType) => {
        try {
            const response = await axios.post<loginResponse>(
                "http://localhost:4000/api/auth/login",
                data,
                {
                    withCredentials: true,
                }
            );

            const { data: token } = response.data;

            if (token) {
                localStorage.setItem("accessToken", token);
                localStorage.setItem("refreshToken", token);
                router.push("/reservation");
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error("서버 오류:", error.response.data);
                alert(
                    error.response.data.message ||
                        "아이디 또는 비밀번호가 일치하지 않습니다."
                );
            } else {
                console.error("로그인 오류:", error);
                alert("로그인 처리 중 오류가 발생했습니다.");
            }
        }
    };

    return (
        <div className={cx("login_wrap")}>
            <h1 className={cx("tit")}>로그인</h1>
            <form
                className={cx("login_form")}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={cx("input_group")}>
                    <TextInput
                        label="아이디"
                        {...register("email", {
                            required: "아이디를 입력해주세요",
                            minLength: {
                                value: 4,
                                message: "아이디는 4자 이상이어야 합니다",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className={cx("errorMessage")}>
                            {errors.email?.message}
                        </span>
                    )}
                </div>

                <div className={cx("input_group")}>
                    <TextInput
                        label="비밀번호"
                        type="password"
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
                    <div className={cx("password_help")}>
                        <Link
                            href="/forgot-password"
                            className={cx("forgot_password")}
                        >
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
                    <Link href="signup">
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
