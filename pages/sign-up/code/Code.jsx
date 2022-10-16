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
