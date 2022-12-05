import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import styles from "./Code.module.scss";

function Code() {
	const router = useRouter();
	return (
		<div className={styles.sign_up_code + " " + "container"}>
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
							className={(styles.button_sign_up, styles.active)}
						>
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
							<span>Mã xác thực</span>
							<div className={styles.box_input}>
								<h6>Code</h6>
								<div className={styles.box_input_text}>
									<input
										type="text"
										className="form-control"
										aria-label="code"
										aria-describedby="basic-addon1"
									/>
								</div>
							</div>
							<div
								className={styles.button_next + " " + "col-12"}
							>
								<button
									onClick={() =>
										router.push("/sign-up/success")
									}
								>
									Xác thực
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Code;
