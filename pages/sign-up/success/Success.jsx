import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import styles from "./Success.module.scss";
import SuccessIcon from "../../../public/images/icons/success.svg";

function Success() {
	const router = useRouter();
	return (
		<div className={styles.sign_up_success + " " + "container"}>
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
							<div className="d-flex justify-content-center my-3">
								<Image src={SuccessIcon} alt="success" />
							</div>
							<span>ĐĂNG KÍ THÀNH CÔNG</span>
							<div
								className={styles.button_next + " " + "col-12"}
							>
								<button onClick={() => router.push("/sign-in")}>
									Quay lại để đăng nhập
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Success;