import Image from "next/image";
import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
	return (
		<div className={styles.intro_contact + " " + "container"}>
			<div className={styles.box_intro_contact}>
				<div className={styles.title_box + " " + "row"}>
					<div className="col-5 d-flex justify-content-evenly">
						<div className={styles.text_logo}>
							<Image
								src="/images/Test/T_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
							<Image
								src="/images/Test/A_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
							<Image
								src="/images/Test/P_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
						</div>
						<div className={styles.text_logo}>
							<Image
								src="/images/Test/C_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
							<Image
								src="/images/Test/H_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
							<Image
								src="/images/Test/I_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
						</div>
						<div className={styles.text_logo}>
							<Image
								src="/images/Test/I_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
							<Image
								src="/images/Test/P_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
							<Image
								src="/images/Test/O_w.svg"
								alt="logo"
								width={45}
								height={55}
							></Image>
						</div>
					</div>
					<div className={styles.box_border + " " + "col-7"}></div>
				</div>
				<div className={styles.content_box}>
					<div className={styles.center_box}>
						<div className={styles.box_bottom}>
							<div className={styles.bottom_left}>
								<h5>Liên hệ</h5>
								<h4>công ty cô phần fos media</h4>
								<span>( một thành viên của aura capital )</span>
								<div className="d-flex justify-content-center">
									<hr />
								</div>
								<h6 className="mt-2">
									Số 1-3 đường D4, Khu Him Lam Kênh Tẻ, Phường
									Tân Hưng, Quận 7, TPHCM
								</h6>
								<h6>Số điện thoại: 02 866 833 079</h6>
								<h6>Email: ketoan@fosgroup.vn</h6>
								<h6>
									Làm việc từ thứ 2 - thứ 7, 08h00 - 17h00
								</h6>
							</div>
							<div className="d-flex justify-content-center">
								<hr />
							</div>
							<div className={styles.box_right}>
								<div className={styles.contain}>
									<h4>đăng kí nhận thông tin</h4>
									<span>
										Đăng kí để không bỏ lỡ những thông tin
										mới nhất từ FOS Group
									</span>
									<div className="d-flex justify-content-center">
										<input
											type="text"
											placeholder="Your Email (required )"
										/>
									</div>
									<button>sign in</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
