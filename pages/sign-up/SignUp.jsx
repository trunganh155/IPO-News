import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import EyeHidden from "../../public/images/icons/eyeHidden.png";
import EyeShow from "../../public/images/icons/eyeShow.png";
import FaceBook from "../../public/images/icons/facebook.svg";
import Google from "../../public/images/icons/google.svg";
import Linkin from "../../public/images/icons/linkin.svg";
import { registerUserAction } from "../../store/redux/AccountReducer/account.action";
import styles from "./SignUp.module.scss";

function SignUp() {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowRePassword, setIsShowRePassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      rePassword: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      const dataSignUp = await dispatch(registerUserAction(data));
      // console.log(dataSignUp);
      if (dataSignUp.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: dataSignUp.data,
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/sign-in");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: dataSignUp,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.sign_up + " " + "container"}>
      <div className={styles.center_box}>
        <div className={styles.w_box}>
          <div
            className={
              styles.group_button + " " + "d-flex justify-content-center"
            }
          >
            <div className={(styles.button_sign_up, styles.active)}>
              Đăng kí
              <div className={styles.border_bottom}></div>
            </div>
            <div className={styles.border_left}></div>
            <div
              onClick={() => router.push("/sign-in")}
              className={(styles.button_sign_in, styles.active_n)}
            >
              Đăng nhập
              <div className={styles.border_bottom_n}></div>
            </div>
          </div>
          <div className={styles.title + " " + "d-flex justify-content-center"}>
            <Image
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
              src="/images/logo_black.png"
              alt="logo"
              width={318}
              height={63}
            />
          </div>
          <hr style={{ margin: "20px 0 26px 0" }} />
          <div
            className={
              styles.box_content +
              " " +
              "d-flex justify-content-center align-items-center"
            }
          >
            <div className={styles.w_box_content}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <span>Đăng kí tài khoản</span>
                <div className={styles.box_input}>
                  <h6>Họ và Tên</h6>
                  <div className={styles.box_input_text}>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name && errors.name.type === "required" && (
                      <span>Tên không được để trống</span>
                    )}
                  </div>
                </div>
                <div className={styles.box_input}>
                  <h6>Email/Số điện thoại</h6>
                  <div className={styles.box_input_text}>
                    <input
                      type="email"
                      className="form-control"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.email && errors.email.type === "required" && (
                      <span>Email không được để trống</span>
                    )}
                  </div>
                </div>
                <div className={styles.box_input}>
                  <h6>Mật khẩu</h6>
                  <div
                    className={
                      styles.box_input_pass +
                      " " +
                      "d-flex justify-content-evenly"
                    }
                  >
                    <input
                      id="password"
                      type={isShowPassword ? "text" : "password"}
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      {...register("password", {
                        required: true,
                      })}
                    />
                    <div className="d-flex align-self-center">
                      <Image
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        src={isShowPassword ? EyeShow : EyeHidden}
                        alt="eye_show"
                        width={26}
                        height={16}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.box_input}>
                  <h6>Xác nhận mật khẩu</h6>
                  <div
                    className={
                      styles.box_input_pass +
                      " " +
                      "d-flex justify-content-evenly"
                    }
                  >
                    <input
                      id="repassword"
                      type={isShowRePassword ? "text" : "password"}
                      aria-label="RePassword"
                      aria-describedby="basic-addon1"
                      {...register("rePassword", {
                        required: true,
                        validate: (val) => {
                          if (watch("password") != val) {
                            return "Mật khẩu không khớp";
                          }
                        },
                      })}
                    />
                    <div className="d-flex align-self-center">
                      <Image
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setIsShowRePassword(!isShowRePassword);
                        }}
                        src={isShowRePassword ? EyeShow : EyeHidden}
                        alt="eye_show"
                        width={26}
                        height={16}
                      />
                    </div>
                  </div>
                  {errors.rePassword && (
                    <span
                      className="d-flex justify-content-start"
                      style={{
                        fontSize: "13px",
                        color: "red",
                      }}
                    >
                      {errors.rePassword.message}
                    </span>
                  )}
                </div>
                <div className={styles.button_next + " " + "col-12"}>
                  <button
                    type="submit"
                    onClick={() => {
                      onSubmit;
                    }}
                  >
                    Tiếp tục
                  </button>
                </div>
              </form>
              <div className="d-flex justify-content-between">
                <hr style={{ width: "45%" }} />
                <span
                  style={{
                    fontSize: "16px",
                    color: "#767676",
                  }}
                >
                  hoặc
                </span>
                <hr
                  style={{
                    width: "45%",
                    background: "#767676",
                  }}
                />
              </div>
              <div className={styles.button_facebook + " " + "col-12"}>
                <button onClick={() => signIn("facebook")}>
                  <div className="me-2 d-flex align-items-center">
                    <Image
                      style={{ marginRight: "10px" }}
                      src={FaceBook}
                      alt="eye_show"
                    />
                  </div>
                  Đăng nhập với Facebook
                </button>
              </div>
              <div className={styles.button_google + " " + "col-12"}>
                <button onClick={() => signIn("google")}>
                  <div className="me-2 d-flex align-items-center">
                    <Image
                      style={{ marginRight: "10px" }}
                      src={Google}
                      alt="eye_show"
                    />
                  </div>
                  Đăng nhập với Google
                </button>
              </div>
              <div className={styles.button_linkin + " " + "col-12"}>
                <button>
                  <div className="me-2 d-flex align-items-center">
                    <Image
                      style={{ marginRight: "10px" }}
                      src={Linkin}
                      alt="eye_show"
                    />
                  </div>
                  Đăng nhập với Linkedin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
