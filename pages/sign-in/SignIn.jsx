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
import { getTokenUserAction } from "../../store/redux/AccountReducer/account.action";
import styles from "./SignIn.module.scss";

function SignIn() {
	const { data: session } = useSession();
	const dispatch = useDispatch();
	const [isShowPassword, setIsShowPassword] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		try {
			const dataSignIn = await dispatch(getTokenUserAction(data));
			// console.log(dataSignIn);
			if (dataSignIn.token) {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Đăng nhập thành công",
					showConfirmButton: false,
					timer: 1500,
				});

				setTimeout(() => {
					router.push("/");
				}, 1500);
			} else {
				Swal.fire({
					position: "center",
					icon: "error",
					title: "Đăng nhập thất bại",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
	return !session ? (
		<div className={styles.sign_in + " " + "container"}>
			<div className={styles.center_box}>
				<div className={styles.w_box}>
					<div
						className={
							styles.group_button +
							" " +
							"d-flex justify-content-center"
						}
					>
						<div
							onClick={() => router.push("/sign-up")}
							className={(styles.button_sign_in, styles.active_n)}
						>
							Đăng kí
							<div className={styles.border_bottom_n}></div>
						</div>
						<div className={styles.border_left}></div>
						<div className={(styles.button_sign_in, styles.active)}>
							Đăng nhập
							<div className={styles.border_bottom}></div>
						</div>
					</div>
					<div
						className={
							styles.title + " " + "d-flex justify-content-center"
						}
					>
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
							<span>Đăng nhập với Email/Số điện thoại</span>
							<form
								style={{ marginTop: "28px" }}
								onSubmit={handleSubmit(onSubmit)}
							>
								<div className={styles.box_input}>
									<div className={styles.box_input_text}>
										<input
											type="text"
											placeholder="Email"
											className="form-control"
											aria-label="Email"
											aria-describedby="basic-addon1"
											{...register("username", {
												required: true,
											})}
										/>
										{errors.username &&
											errors.username.type ===
												"required" && (
												<span
													className="d-flex justify-content-start"
													style={{
														fontSize: "13px",
														color: "red",
													}}
												>
													Tên đăng nhập không được để
													trống
												</span>
											)}
									</div>
								</div>
								<div
									className={styles.box_input}
									style={{ marginTop: "28px" }}
								>
									<div
										className={
											styles.box_input_pass +
											" " +
											"d-flex justify-content-evenly"
										}
									>
										<input
											id="password"
											type={
												isShowPassword
													? "text"
													: "password"
											}
											placeholder="Mật khẩu"
											aria-label="Password"
											aria-describedby="basic-addon1"
											{...register("password", {
												required: true,
											})}
										/>
										<div className="d-flex align-self-center">
											<Image
												style={{ cursor: "pointer" }}
												onClick={() => {
													setIsShowPassword(
														!isShowPassword
													);
												}}
												src={
													isShowPassword
														? EyeShow
														: EyeHidden
												}
												alt="eye_show"
												width={26}
												height={16}
											/>
										</div>
									</div>
									{errors.password &&
										errors.password.type === "required" && (
											<span
												className="d-flex justify-content-start"
												style={{
													fontSize: "13px",
													color: "red",
												}}
											>
												Mật khẩu không được để trống
											</span>
										)}
								</div>
								<div
									className={
										styles.button_next + " " + "col-12"
									}
								>
									<button
										type="submit"
										onClick={() => {
											onSubmit;
										}}
									>
										Đăng nhập
									</button>
								</div>
							</form>
							<div className={styles.link_fog_pass}>
								<span>Quên mật khẩu</span>
							</div>
							<div className="d-flex justify-content-between">
								<hr style={{ width: "35%" }} />
								<span
									style={{
										fontSize: "16px",
										color: "#767676",
									}}
								>
									Đăng nhập với
								</span>
								<hr
									style={{
										width: "35%",
										background: "#767676",
									}}
								/>
							</div>
							<div
								className={
									styles.button_facebook + " " + "col-12"
								}
							>
								<button onClick={() => signIn("facebook")}>
									<div className="me-2 d-flex align-items-center">
										<Image
											style={{ marginRight: "10px" }}
											src={FaceBook}
											alt="facebook"
										/>
									</div>
									Đăng nhập với Facebook
								</button>
							</div>
							<div
								className={
									styles.button_google + " " + "col-12"
								}
							>
								<button onClick={() => signIn("google")}>
									<div className="me-2 d-flex align-items-center">
										<Image
											style={{ marginRight: "10px" }}
											src={Google}
											alt="google"
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
                      alt="linkin"
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
	) : null;
}

export default SignIn;
