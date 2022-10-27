import React from "react";
import { HeaderData } from "../../utils/DataDemo/Header";
import styles from "./footer.module.scss";
import { useRouter } from "next/router";

export default function FooterDark(props) {
	const router = useRouter();
	return (
		<footer className={styles.footer_black}>
			<div className={styles.box_footer + " " + "container py-5"}>
				<div
					className={
						styles.box_top_tablet +
						" " +
						"row justify-content-sm-between justify-content-center"
					}
				>
					{HeaderData.map((item, index) => {
						return (
							<div
								key={index}
								onClick={() => router.push(item.link)}
								className="col-sm-3 col-5 mb-3 mb-lg-0 "
							>
								<span className={styles.title}>
									{item.title}
								</span>
								<div>
									{item.listTag && item.listTag.map((subItem, subIndex) => {
										return (
											<div
												onClick={() =>
													router.push(subItem.link)
												}
												className={styles.tagList}
												key={subIndex}
											>
												{subItem.tag}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
				<div
					className={
						styles.box_top_desktop + " " + "justify-content-between"
					}
				>
					{HeaderData.map((item, index) => {
						return (
							<div
								key={index}
								onClick={() => router.push(item.link)}
							>
								<span className={styles.title}>
									{item.title}
								</span>
								<div>
									{item.listTag && item.listTag.map((subItem, subIndex) => {
										return (
											<div
												onClick={() =>
													router.push(subItem.link)
												}
												className={styles.tagList}
												key={subIndex}
											>
												{subItem.tag}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
				<div className={styles.box_bottom + " " + "row"}>
					<div
						className={
							styles.bottom_left +
							" " +
							"col-12 col-md-6 mb-3 mb-lg-0"
						}
					>
						<h5>Liên hệ</h5>
						<div
							className="mb-1"
							style={{
								borderBottom: "0.5px solid #000000",
								width: "5%",
							}}
						></div>
						<h4>công ty cô phần fos media</h4>
						<span>( một thành viên của aura capital )</span>
						<h6 className="mt-2">
							Số 1-3 đường D4, Khu Him Lam Kênh Tẻ, Phường Tân
							Hưng, Quận 7, TPHCM
						</h6>
						<h6>Số điện thoại: 02 866 833 079</h6>
						<h6>Email: ketoan@fosgroup.vn</h6>
						<h6>Làm việc từ thứ 2 - thứ 7, 08h00 - 17h00</h6>
					</div>
					<div
						className={
							styles.box_right +
							" " +
							"col-12 col-md-6 mt-3 mt-lg-0"
						}
					>
						<div className={styles.contain}>
							<h4>đăng kí nhận thông tin</h4>
							<div
								className="mb-3"
								style={{
									borderBottom: "0.5px solid #000000",
									width: "25%",
								}}
							></div>
							<span>
								Đăng kí để không bỏ lỡ những thông tin mới nhất
								từ FOS Group
							</span>
							<div>
								<input
									type="text"
									placeholder="Your Email (required )"
								/>
							</div>
							<button>sign up</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
