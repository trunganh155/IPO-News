import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import styles from "./SignUp.module.scss";
import EyeShow from "../../public/images/icons/show_pass.svg";
import FaceBook from "../../public/images/icons/facebook.svg";
import Google from "../../public/images/icons/google.svg";
import Linkin from "../../public/images/icons/linkin.svg";

function SignUp() {
	const router = useRouter();
	return (
		<div className={styles.sign_up + " " + "container"}>
			<div className={styles.center_box}>
				<div className={styles.w_box}>
					<div
						className={
							styles.group_button +
							" " +
							"d-flex justify-content-center"
						}
					>
						<div className={(styles.button_sign_up, styles.active)}>
							Đăng ký
							<div className={styles.border_bottom}></div>
						</div>
						<div className={styles.border_left}></div>
						<div
							onClick={() => router.push("/sign-in")}
							className={styles.button_sign_in}
						>
							Đăng nhập
						</div>
					</div>
					<div
						className={
							styles.title + " " + "d-flex justify-content-center"
						}
					>
						TẠP CHÍ PIO
					</div>
					<hr />
					<div
						className={
							styles.box_content +
							" " +
							"d-flex justify-content-center align-items-center"
						}
					>
						<div className={styles.w_box_content}>
							<span>Đăng ký tài khoản</span>
							<div className={styles.box_input}>
								<h6>Họ và Tên</h6>
								<div className={styles.box_input_text}>
									<input
										type="text"
										className="form-control"
										aria-label="Username"
										aria-describedby="basic-addon1"
									/>
								</div>
							</div>
							<div className={styles.box_input}>
								<h6>Email</h6>
								<div className={styles.box_input_text}>
									<input
										type="text"
										className="form-control"
										aria-label="Email"
										aria-describedby="basic-addon1"
									/>
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
										type="password"
										aria-label="Password"
										aria-describedby="basic-addon1"
									/>
									<Image src={EyeShow} alt="eye_show" />
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
										type="password"
										aria-label="RePassword"
										aria-describedby="basic-addon1"
									/>
									<Image src={EyeShow} alt="eye_show" />
								</div>
							</div>
							<div
								className={styles.button_next + " " + "col-12"}
							>
								<button
									onClick={() => router.push("/sign-up/code")}
								>
									Tiếp tục
								</button>
							</div>
							<div
								style={{ color: "#767676" }}
								className="d-flex justify-content-between"
							>
								<hr style={{ width: "45%" }} />
								<span
									style={{
										fontSize: "15px",
									}}
								>
									hoặc
								</span>
								<hr style={{ width: "45%" }} />
							</div>
							<div
								className={
									styles.button_facebook + " " + "col-12"
								}
							>
								<button>
									<Image
										style={{ marginRight: "10px" }}
										src={FaceBook}
										alt="eye_show"
									/>
									Đăng nhập với FaceBook
								</button>
							</div>
							<div
								className={
									styles.button_google + " " + "col-12"
								}
							>
								<button>
									<Image
										style={{ marginRight: "10px" }}
										src={Google}
										alt="eye_show"
									/>
									Đăng nhập với Google
								</button>
							</div>
							<div
								className={
									styles.button_linkin + " " + "col-12"
								}
							>
								<button>
									<Image
										style={{ marginRight: "10px" }}
										src={Linkin}
										alt="eye_show"
									/>
									Đăng nhập với Linkin
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
