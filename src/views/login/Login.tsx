"use client";
import TextInput from "@/components/TextField/TextInput/TextInput";
import Button from "@/components/Button/Button";
import { fetchUserInfo } from "@/utils/fetchUser";
import styles from "./Login.module.scss";
import cn from "classnames/bind";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const cx = cn.bind(styles);

type LoginFormType = {
  email: string;
  password: string;
};

const LoginView = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .min(4, "아이디는 최소 4자 이상이어야 합니다")
      .max(20, "아이디는 20자를 초과할 수 없습니다")
      .required("아이디를 입력해주세요"),
    password: yup
      .string()
      .min(4, "비밀번호는 최소 4자리 이상입니다.")
      .required("비밀번호를 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
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

      if (response.status !== 200) {
        alert("로그인에 실패했습니다."); // modal 처리 변경 예정
        return;
      }
      console.log(response.data);

      const token = response.data.accessToken;

      localStorage.setItem("accessToken", token);

      // localStorage.setItem("refreshToken", refreshToken); 현재 refresh token 사용 안함

      router.push("/reservation");
    } catch {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className={cx("login_wrap")}>
      <h1 className={cx("tit")}>로그인</h1>
      <form className={cx("login_form")} onSubmit={handleSubmit(onSubmit)}>
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
            <span className={cx("errorMessage")}>{errors.email?.message}</span>
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
