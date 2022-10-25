import Image from "next/image";
import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
	return (
		<div className={styles.intro_contact + " " + "container"}>
			<div className={styles.box_intro_contact}>
				<div className={styles.title_box + " " + "row"}>
					<div className="col-4 d-flex justify-content-start">
						<Image
							src="/images/logo_white.png"
							alt="logo"
							width={400}
							height={80}
						/>
					</div>
					<div
						className={styles.box_border + " " + "col-8 mb-2"}
					></div>
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
									<div className="d-flex justify-content-center gap-3 mb-3">
										<div className={styles.btn_social}>
											<Image
												src="/images/icons/icon_facebook.png"
												alt="icon"
												width={27}
												height={27}
											/>
										</div>
										<div className={styles.btn_social}>
											<Image
												src="/images/icons/icon_linkin.png"
												alt="icon"
												width={27}
												height={27}
											/>
										</div>
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
