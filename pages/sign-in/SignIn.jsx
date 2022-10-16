import Image from "next/image";
import React from "react";
import styles from "./SignIn.module.scss";
import { useRouter } from "next/router";
import EyeShow from "../../public/images/icons/show_pass.svg";
import FaceBook from "../../public/images/icons/facebook.svg";
import Google from "../../public/images/icons/google.svg";
import Linkin from "../../public/images/icons/linkin.svg";

function SignIn() {
	const router = useRouter();
	return (
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
							className={styles.button_sign_up}
						>
							Đăng ký
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
							<span>Đăng nhập với email</span>

							<div className={styles.box_input}>
								<div className={styles.box_input_text}>
									<input
										type="text"
										placeholder="Email"
										className="form-control"
										aria-label="Email"
										aria-describedby="basic-addon1"
									/>
								</div>
							</div>
							<div className={styles.box_input}>
								<div
									className={
										styles.box_input_pass +
										" " +
										"d-flex justify-content-evenly"
									}
								>
									<input
										type="password"
										placeholder="Mật khẩu"
										aria-label="Password"
										aria-describedby="basic-addon1"
									/>
									<Image src={EyeShow} alt="eye_show" />
								</div>
							</div>

							<div
								className={styles.button_next + " " + "col-12"}
							>
								<button>Đăng nhập</button>
							</div>
							<div className={styles.link_fog_pass}>
								<span>Quên mật khẩu</span>
							</div>
							<div
								style={{ color: "#767676" }}
								className="d-flex justify-content-between"
							>
								<hr style={{ width: "35%" }} />
								<span
									style={{
										fontSize: "15px",
									}}
								>
									Đăng nhập với
								</span>
								<hr style={{ width: "35%" }} />
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

export default SignIn;
